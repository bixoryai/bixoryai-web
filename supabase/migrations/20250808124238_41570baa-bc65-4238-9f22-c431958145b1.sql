-- Remove duplicate and incorrectly categorized tools

-- Remove Claude 4 (inactive duplicate)
DELETE FROM ai_tools WHERE name = 'Claude 4';

-- Remove ChatGPT from Content category (duplicate of OpenAI ChatGPT in AI Models)
DELETE FROM ai_tools WHERE name = 'ChatGPT' AND category = 'Content';

-- Remove Claude from Content category (duplicate of Anthropic Claude in AI Models)
DELETE FROM ai_tools WHERE name = 'Claude' AND category = 'Content';