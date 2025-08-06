import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.53.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AITool {
  name: string;
  description: string;
  category: string;
  pricing: string;
  rating?: number;
  website_url: string;
  logo_url?: string;
  tags: string[];
  features: string[];
  is_featured: boolean;
  source_url: string;
}

interface ResearchRequest {
  provider: 'openai' | 'claude';
  query?: string;
  sources?: string[];
  limit?: number;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { provider = 'openai', query = 'AI tools directory', sources = [], limit = 20 }: ResearchRequest = await req.json();

    console.log(`Starting research with ${provider} for: ${query}`);

    // Step 1: Crawl sources using Firecrawl
    const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!firecrawlApiKey) {
      throw new Error('FIRECRAWL_API_KEY not found');
    }

    // Default AI tool directory sources
    const defaultSources = [
      'https://theresanaiforthat.com',
      'https://www.futurepedia.io',
      'https://aitoolskit.ai',
      'https://www.producthunt.com/topics/artificial-intelligence'
    ];

    const sourcesToCrawl = sources.length > 0 ? sources : defaultSources;
    const crawledData: any[] = [];

    console.log('Crawling sources:', sourcesToCrawl);

    for (const source of sourcesToCrawl.slice(0, 2)) { // Limit to 2 sources for demo
      try {
        const crawlResponse = await fetch('https://api.firecrawl.dev/v0/scrape', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${firecrawlApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: source,
            formats: ['markdown'],
            onlyMainContent: true
          }),
        });

        if (crawlResponse.ok) {
          const crawlData = await crawlResponse.json();
          crawledData.push({
            source,
            content: crawlData.data?.markdown || '',
            metadata: crawlData.data?.metadata || {}
          });
          console.log(`Successfully crawled: ${source}`);
        } else {
          console.warn(`Failed to crawl: ${source}`);
        }
      } catch (error) {
        console.warn(`Error crawling ${source}:`, error);
      }
    }

    if (crawledData.length === 0) {
      throw new Error('No sources could be crawled');
    }

    // Step 2: Analyze content with AI
    let aiTools: AITool[] = [];

    if (provider === 'openai') {
      const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
      if (!openaiApiKey) {
        throw new Error('OPENAI_API_KEY not found');
      }

      const analysisPrompt = `
Analyze the following crawled content from AI tool directories and extract AI tools information. 
Return a JSON array of AI tools with the following structure:

{
  "name": "Tool Name",
  "description": "Brief description of the tool",
  "category": "Content|Development|Design|Analytics|Productivity|AI Models",
  "pricing": "Free|Freemium|Paid|Enterprise",
  "rating": 4.5,
  "website_url": "https://example.com",
  "tags": ["tag1", "tag2"],
  "features": ["feature1", "feature2"],
  "is_featured": false
}

Focus on popular, legitimate AI tools. Limit to ${limit} tools maximum.

Crawled Content:
${crawledData.map(d => `Source: ${d.source}\n${d.content.slice(0, 5000)}`).join('\n\n')}
`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { 
              role: 'system', 
              content: 'You are an AI tool researcher. Extract and categorize AI tools from directory content. Return only valid JSON array.' 
            },
            { role: 'user', content: analysisPrompt }
          ],
          temperature: 0.3,
          max_tokens: 4000,
        }),
      });

      const aiResponse = await response.json();
      const content = aiResponse.choices[0].message.content;

      try {
        // Extract JSON from the response
        const jsonMatch = content.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          aiTools = JSON.parse(jsonMatch[0]);
        }
      } catch (parseError) {
        console.error('Failed to parse OpenAI response:', parseError);
      }
    } else if (provider === 'claude') {
      const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');
      if (!anthropicApiKey) {
        throw new Error('ANTHROPIC_API_KEY not found');
      }

      const analysisPrompt = `
Analyze the following crawled content from AI tool directories and extract AI tools information. 
Return a JSON array of AI tools with the following structure:

{
  "name": "Tool Name",
  "description": "Brief description of the tool",
  "category": "Content|Development|Design|Analytics|Productivity|AI Models",
  "pricing": "Free|Freemium|Paid|Enterprise",
  "rating": 4.5,
  "website_url": "https://example.com",
  "tags": ["tag1", "tag2"],
  "features": ["feature1", "feature2"],
  "is_featured": false
}

Focus on popular, legitimate AI tools. Limit to ${limit} tools maximum.

Crawled Content:
${crawledData.map(d => `Source: ${d.source}\n${d.content.slice(0, 5000)}`).join('\n\n')}
`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${anthropicApiKey}`,
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-5-haiku-20241022',
          max_tokens: 4000,
          messages: [
            { 
              role: 'user', 
              content: `You are an AI tool researcher. Extract and categorize AI tools from directory content. Return only valid JSON array.\n\n${analysisPrompt}` 
            }
          ],
          temperature: 0.3,
        }),
      });

      const aiResponse = await response.json();
      const content = aiResponse.content[0].text;

      try {
        // Extract JSON from the response
        const jsonMatch = content.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          aiTools = JSON.parse(jsonMatch[0]);
        }
      } catch (parseError) {
        console.error('Failed to parse Claude response:', parseError);
      }
    }

    console.log(`Extracted ${aiTools.length} AI tools`);

    // Step 3: Store in database
    const savedTools = [];
    for (const tool of aiTools) {
      try {
        const { data, error } = await supabase
          .from('ai_tools')
          .upsert({
            name: tool.name,
            description: tool.description,
            category: tool.category,
            pricing: tool.pricing,
            rating: tool.rating,
            website_url: tool.website_url,
            logo_url: tool.logo_url,
            tags: tool.tags || [],
            features: tool.features || [],
            is_featured: tool.is_featured || false,
            source_url: crawledData[0]?.source,
            crawled_at: new Date().toISOString(),
            status: 'active'
          }, {
            onConflict: 'name',
            ignoreDuplicates: false
          })
          .select();

        if (!error && data) {
          savedTools.push(data[0]);
        } else {
          console.warn(`Failed to save tool ${tool.name}:`, error);
        }
      } catch (saveError) {
        console.warn(`Error saving tool ${tool.name}:`, saveError);
      }
    }

    console.log(`Successfully saved ${savedTools.length} tools to database`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Research completed using ${provider}`,
        results: {
          crawledSources: crawledData.length,
          extractedTools: aiTools.length,
          savedTools: savedTools.length,
          tools: savedTools
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in ai-research-agent:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});