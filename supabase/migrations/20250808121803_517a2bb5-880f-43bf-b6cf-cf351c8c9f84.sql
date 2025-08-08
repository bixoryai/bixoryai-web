-- Update OpenAI API to OpenAI ChatGPT
UPDATE ai_tools 
SET name = 'OpenAI ChatGPT',
    updated_at = now()
WHERE id = 'a2af5467-53c0-4ef9-8ec3-fdcb5f17e440';

-- Update Anthropic API to Anthropic Claude and enhance description
UPDATE ai_tools 
SET name = 'Anthropic Claude',
    description = 'Advanced AI assistant and Claude models for developers',
    updated_at = now()
WHERE id = 'baf5df75-57fb-4a04-a185-762750f72892';

-- Mark Claude 4 as duplicate since we're consolidating with Anthropic API
UPDATE ai_tools 
SET status = 'duplicate',
    updated_at = now()
WHERE id = 'e0f8f01b-4173-4c7d-8447-49844caa2785';