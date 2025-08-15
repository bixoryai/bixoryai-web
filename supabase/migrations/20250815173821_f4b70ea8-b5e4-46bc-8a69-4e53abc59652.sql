-- Add audit logging table for security monitoring
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id),
  action text NOT NULL,
  resource_type text NOT NULL,
  resource_id text,
  details jsonb,
  ip_address inet,
  user_agent text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on audit logs
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "Admins can view audit logs" 
ON public.audit_logs 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- System can insert audit logs
CREATE POLICY "System can insert audit logs" 
ON public.audit_logs 
FOR INSERT 
WITH CHECK (true);

-- Add indexes for audit log queries
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON public.audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_action ON public.audit_logs(action);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON public.audit_logs(created_at);

-- Create function to log admin actions
CREATE OR REPLACE FUNCTION public.log_admin_action(
  p_action text,
  p_resource_type text,
  p_resource_id text DEFAULT NULL,
  p_details jsonb DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
BEGIN
  INSERT INTO public.audit_logs (
    user_id, 
    action, 
    resource_type, 
    resource_id, 
    details,
    ip_address,
    created_at
  ) VALUES (
    auth.uid(),
    p_action,
    p_resource_type,
    p_resource_id,
    p_details,
    inet(current_setting('request.headers', true)::json->>'x-forwarded-for'),
    now()
  );
END;
$$;

-- Create trigger to automatically log AI tools changes
CREATE OR REPLACE FUNCTION public.audit_ai_tools_changes()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    PERFORM public.log_admin_action('CREATE', 'ai_tool', NEW.id::text, to_jsonb(NEW));
    RETURN NEW;
  ELSIF TG_OP = 'UPDATE' THEN
    PERFORM public.log_admin_action('UPDATE', 'ai_tool', NEW.id::text, 
      jsonb_build_object('old', to_jsonb(OLD), 'new', to_jsonb(NEW)));
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    PERFORM public.log_admin_action('DELETE', 'ai_tool', OLD.id::text, to_jsonb(OLD));
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$;

-- Create triggers for audit logging
CREATE TRIGGER audit_ai_tools_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.ai_tools
  FOR EACH ROW EXECUTE FUNCTION public.audit_ai_tools_changes();

-- Grant permissions
GRANT EXECUTE ON FUNCTION public.log_admin_action TO service_role;
GRANT EXECUTE ON FUNCTION public.log_admin_action TO authenticated;