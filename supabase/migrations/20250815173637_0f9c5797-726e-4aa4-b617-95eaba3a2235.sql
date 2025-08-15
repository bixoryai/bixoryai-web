-- Fix critical rate limiting table access issue
-- The current policy blocks all access with 'false', breaking rate limiting functionality

-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "System can manage rate limits" ON public.rate_limits;

-- Create a new policy that allows edge functions to manage rate limits
-- Edge functions run with service role, so we allow service role access
CREATE POLICY "Edge functions can manage rate limits" 
ON public.rate_limits 
FOR ALL 
USING (
  -- Allow service role (used by edge functions) to access rate limits
  auth.role() = 'service_role'
  OR
  -- Allow authenticated users to view their own rate limit records (if needed)
  (auth.role() = 'authenticated' AND false) -- Currently disabled for security
);

-- Add indexes for better performance on rate limiting queries
CREATE INDEX IF NOT EXISTS idx_rate_limits_ip_action ON public.rate_limits(ip_address, action_type);
CREATE INDEX IF NOT EXISTS idx_rate_limits_window_start ON public.rate_limits(window_start);

-- Create a function to safely manage rate limits from edge functions
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_ip_address inet,
  p_action_type text,
  p_max_attempts integer DEFAULT 3,
  p_window_minutes integer DEFAULT 60
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
DECLARE
  current_attempts integer;
  window_start_time timestamp with time zone;
BEGIN
  -- Calculate window start time
  window_start_time := now() - (p_window_minutes || ' minutes')::interval;
  
  -- Clean up old rate limit records
  DELETE FROM public.rate_limits 
  WHERE window_start < window_start_time;
  
  -- Get current attempts for this IP and action in the current window
  SELECT COALESCE(SUM(attempt_count), 0) 
  INTO current_attempts
  FROM public.rate_limits 
  WHERE ip_address = p_ip_address 
    AND action_type = p_action_type 
    AND window_start >= window_start_time;
  
  -- If under the limit, increment and allow
  IF current_attempts < p_max_attempts THEN
    INSERT INTO public.rate_limits (ip_address, action_type, attempt_count, window_start)
    VALUES (p_ip_address, p_action_type, 1, now())
    ON CONFLICT (ip_address, action_type, window_start) 
    DO UPDATE SET 
      attempt_count = rate_limits.attempt_count + 1,
      created_at = now();
    
    RETURN true;
  END IF;
  
  -- Over the limit, deny
  RETURN false;
END;
$$;

-- Grant execute permissions to service role for the rate limiting function
GRANT EXECUTE ON FUNCTION public.check_rate_limit TO service_role;