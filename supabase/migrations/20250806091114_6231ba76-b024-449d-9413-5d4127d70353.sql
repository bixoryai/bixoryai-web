-- Add unique constraint on name column for ai_tools table
ALTER TABLE ai_tools ADD CONSTRAINT ai_tools_name_unique UNIQUE (name);