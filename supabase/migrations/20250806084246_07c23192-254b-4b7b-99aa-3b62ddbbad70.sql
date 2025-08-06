-- Enable pg_cron and pg_net extensions for scheduled functions
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a weekly cron job to run the AI research agent
SELECT cron.schedule(
  'weekly-ai-tools-research',
  '0 2 * * 1', -- Every Monday at 2 AM UTC
  $$
  SELECT
    net.http_post(
        url:='https://mccpdsucnpvelrwoduhg.supabase.co/functions/v1/ai-research-agent',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jY3Bkc3VjbnB2ZWxyd29kdWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMjUyMjYsImV4cCI6MjA2OTkwMTIyNn0.XhvNEku2wpTAAI0UN4wC61LKdmUD7WCBkotKp9_DbQY"}'::jsonb,
        body:='{"provider": "openai", "limit": 20}'::jsonb
    ) as request_id;
  $$
);

-- Create another job for Claude research (alternating weeks)
SELECT cron.schedule(
  'weekly-ai-tools-research-claude',
  '0 2 * * 1', -- Every Monday at 2 AM UTC (will run Claude on even weeks)
  $$
  SELECT
    net.http_post(
        url:='https://mccpdsucnpvelrwoduhg.supabase.co/functions/v1/ai-research-agent',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jY3Bkc3VjbnB2ZWxyd29kdWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMjUyMjYsImV4cCI6MjA2OTkwMTIyNn0.XhvNEku2wpTAAI0UN4wC61LKdmUD7WCBkotKp9_DbQY"}'::jsonb,
        body:='{"provider": "claude", "limit": 15}'::jsonb
    ) as request_id;
  $$
);

-- View scheduled jobs (for monitoring)
-- SELECT * FROM cron.job;