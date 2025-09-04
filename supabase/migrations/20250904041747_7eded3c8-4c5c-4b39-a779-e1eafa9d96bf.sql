-- Enable required extensions for cron jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Set up daily Tool Finder cron job (runs every day at 2 AM UTC)
SELECT cron.schedule(
  'daily-tool-finder',
  '0 2 * * *', -- Every day at 2 AM UTC
  $$
  SELECT
    net.http_post(
        url:='https://mccpdsucnpvelrwoduhg.supabase.co/functions/v1/daily-tool-finder',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jY3Bkc3VjbnB2ZWxyd29kdWhnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDMyNTIyNiwiZXhwIjoyMDY5OTAxMjI2fQ.TnuwpWdx2DKLaa73_uCaXaOc5aqKhLqrX7OLFH70P2k"}'::jsonb,
        body:=concat('{"scheduled_run": true, "timestamp": "', now(), '"}')::jsonb
    ) as request_id;
  $$
);

-- Update admin_jobs table to track daily runs better
ALTER TABLE public.admin_jobs 
ADD COLUMN IF NOT EXISTS scheduled_by TEXT DEFAULT NULL;

-- Add index for better job queries
CREATE INDEX IF NOT EXISTS idx_admin_jobs_type_status 
ON public.admin_jobs(job_type, status);

CREATE INDEX IF NOT EXISTS idx_admin_jobs_scheduled_at 
ON public.admin_jobs(scheduled_at DESC);