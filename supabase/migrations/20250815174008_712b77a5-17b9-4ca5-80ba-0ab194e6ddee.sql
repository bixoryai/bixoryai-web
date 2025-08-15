-- Secure the send-newsletter function by requiring admin authentication
-- Update the config to require JWT verification for send-newsletter

-- Create a policy to ensure only admins can send newsletters
-- This will be enforced at the application level since edge functions handle auth differently

-- Add a unique constraint to rate_limits table to prevent conflicts
ALTER TABLE public.rate_limits 
ADD CONSTRAINT unique_rate_limit_entry 
UNIQUE (ip_address, action_type, window_start);

-- Create a function to validate admin access for newsletter sending
CREATE OR REPLACE FUNCTION public.validate_admin_newsletter_access()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
BEGIN
  -- Check if the current user has admin role
  RETURN has_role(auth.uid(), 'admin'::app_role);
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.validate_admin_newsletter_access TO authenticated;