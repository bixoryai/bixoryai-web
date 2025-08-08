-- Fix Newsletter Data Protection: Replace overly permissive RLS policy with admin-only access
DROP POLICY IF EXISTS "Only authenticated users can view subscribers" ON public.newsletter_subscribers;

-- Create admin-only policy for viewing newsletter subscribers
CREATE POLICY "Only admins can view subscribers" 
ON public.newsletter_subscribers 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add rate limiting table for newsletter subscriptions
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET NOT NULL,
  action_type TEXT NOT NULL,
  attempt_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on rate_limits table
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Only allow the system to manage rate limits (no user access needed)
CREATE POLICY "System can manage rate limits" 
ON public.rate_limits 
FOR ALL 
USING (false);