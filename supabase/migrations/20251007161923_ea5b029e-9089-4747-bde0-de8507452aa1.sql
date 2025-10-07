-- Fix audit_logs INSERT policy to prevent fake audit log injection
-- Drop the existing insecure policy
DROP POLICY IF EXISTS "System can insert audit logs" ON public.audit_logs;

-- Create a secure policy that only allows service_role to insert
-- This allows edge functions and security definer functions (like log_admin_action)
-- to insert audit logs, but prevents regular users from creating fake entries
CREATE POLICY "Only service role can insert audit logs"
ON public.audit_logs
FOR INSERT
WITH CHECK (auth.role() = 'service_role');