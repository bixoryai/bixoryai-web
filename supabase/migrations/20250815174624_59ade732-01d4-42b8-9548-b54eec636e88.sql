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