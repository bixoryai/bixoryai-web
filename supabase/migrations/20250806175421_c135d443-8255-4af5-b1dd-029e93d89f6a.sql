-- Reset the admin account by deleting and recreating
-- First, delete related records
DELETE FROM public.user_roles WHERE user_id = (SELECT id FROM auth.users WHERE email = 'develop@bixory.ai');
DELETE FROM public.profiles WHERE user_id = (SELECT id FROM auth.users WHERE email = 'develop@bixory.ai');

-- Note: We cannot delete from auth.users directly via SQL, user needs to do this manually