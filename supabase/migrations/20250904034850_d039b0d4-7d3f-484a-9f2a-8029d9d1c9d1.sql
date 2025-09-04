-- Strengthen RLS policies for newsletter_subscribers to prevent email harvesting
-- Drop existing policies to recreate them with more explicit restrictions
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Only admins can view subscribers" ON public.newsletter_subscribers;

-- Create more restrictive and explicit policies
-- Allow public INSERT for subscription (but validate input)
CREATE POLICY "Public can subscribe to newsletter"
ON public.newsletter_subscribers
FOR INSERT
TO public
WITH CHECK (
  -- Only allow inserting with valid email and default values
  status = 'active' AND 
  email IS NOT NULL AND 
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);

-- Restrict SELECT to admins only - no anonymous or regular user access
CREATE POLICY "Only authenticated admins can view subscribers"
ON public.newsletter_subscribers
FOR SELECT
TO authenticated
USING (
  -- Must be authenticated AND have admin role
  auth.uid() IS NOT NULL AND 
  has_role(auth.uid(), 'admin'::app_role)
);

-- Restrict UPDATE to admins only (for status changes, unsubscribing etc)
CREATE POLICY "Only admins can update subscribers"
ON public.newsletter_subscribers
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL AND 
  has_role(auth.uid(), 'admin'::app_role)
)
WITH CHECK (
  auth.uid() IS NOT NULL AND 
  has_role(auth.uid(), 'admin'::app_role)
);

-- Restrict DELETE to admins only
CREATE POLICY "Only admins can delete subscribers"
ON public.newsletter_subscribers
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL AND 
  has_role(auth.uid(), 'admin'::app_role)
);

-- Add a specific policy to deny all access to anonymous users for extra security
CREATE POLICY "Deny anonymous access to newsletter_subscribers"
ON public.newsletter_subscribers
AS RESTRICTIVE
FOR ALL
TO anon
USING (false);