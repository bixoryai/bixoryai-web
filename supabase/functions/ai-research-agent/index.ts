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
  category?: string;
  jobId?: string;
  autoConsolidate?: boolean;
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

    const { provider = 'openai', query = 'AI tools directory', sources = [], limit = 20, category, jobId, autoConsolidate = true }: ResearchRequest = await req.json();

    console.log(`Starting research with ${provider} for: ${query}${category ? ` (Category: ${category})` : ''}`);

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

      // Category-specific research prompts
      const categoryPrompts = {
        'Content': 'Focus on AI tools for content creation, writing, copywriting, social media, marketing content, blog posts, video creation, image generation, and content optimization.',
        'Development': 'Focus on AI tools for software development, coding assistants, code generation, debugging, testing, DevOps, API development, and programming productivity.',
        'Design': 'Focus on AI tools for graphic design, UI/UX design, image generation, logo creation, prototyping, color palettes, and creative visual content.',
        'Analytics': 'Focus on AI tools for data analysis, business intelligence, predictive analytics, data visualization, reporting, and insights generation.',
        'Productivity': 'Focus on AI tools for task management, automation, scheduling, note-taking, document processing, workflow optimization, and general productivity enhancement.',
        'AI Models': 'Focus on AI platforms, model APIs, foundation models, training platforms, AI infrastructure, and model deployment services.'
      };

      const categoryFocus = category && categoryPrompts[category as keyof typeof categoryPrompts] 
        ? `\n\nSPECIAL FOCUS: ${categoryPrompts[category as keyof typeof categoryPrompts]}`
        : '';

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

Focus on popular, legitimate AI tools. Prioritize tools that are actively maintained and have good user reviews.
${category ? `CATEGORY FILTER: Only extract tools that belong to the "${category}" category.` : 'Include tools from all categories: Content, Development, Design, Analytics, Productivity, AI Models.'}
${categoryFocus}
Limit to ${limit} tools maximum.

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
          model: 'gpt-4.1-2025-04-14',
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

      // Category-specific research prompts
      const categoryPrompts = {
        'Content': 'Focus on AI tools for content creation, writing, copywriting, social media, marketing content, blog posts, video creation, image generation, and content optimization.',
        'Development': 'Focus on AI tools for software development, coding assistants, code generation, debugging, testing, DevOps, API development, and programming productivity.',
        'Design': 'Focus on AI tools for graphic design, UI/UX design, image generation, logo creation, prototyping, color palettes, and creative visual content.',
        'Analytics': 'Focus on AI tools for data analysis, business intelligence, predictive analytics, data visualization, reporting, and insights generation.',
        'Productivity': 'Focus on AI tools for task management, automation, scheduling, note-taking, document processing, workflow optimization, and general productivity enhancement.',
        'AI Models': 'Focus on AI platforms, model APIs, foundation models, training platforms, AI infrastructure, and model deployment services.'
      };

      const categoryFocus = category && categoryPrompts[category as keyof typeof categoryPrompts] 
        ? `\n\nSPECIAL FOCUS: ${categoryPrompts[category as keyof typeof categoryPrompts]}`
        : '';

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

CATEGORY DEFINITIONS - Use these exact definitions to classify tools correctly:

• Content: Writing, copywriting, content generation, blog posts, social media content, video scripts, SEO content, translations, summarization
• Development: Code generation, programming assistants, API tools, developer frameworks, debugging tools, code review, software development platforms
• Design: UI/UX design, graphic design, logo creation, image generation, prototyping, design assets, creative tools
• Analytics: Data analysis, business intelligence, reporting, metrics tracking, A/B testing, market research, performance monitoring
• Productivity: Task management, scheduling, automation, workflow optimization, note-taking, project management, collaboration tools
• AI Models: Large Language Models (LLMs), chatbots, AI assistants, foundational AI models, conversational AI, AI APIs (like GPT, Claude, Gemini, etc.)

IMPORTANT: Google Gemini, GPT models, Claude, Grok, and similar conversational AI systems belong in "AI Models" category.

Focus on popular, legitimate AI tools. Prioritize tools that are actively maintained and have good user reviews.
${category ? `CATEGORY FILTER: Only extract tools that belong to the "${category}" category. Use the definition above to ensure accurate classification.` : 'Include tools from all categories: Content, Development, Design, Analytics, Productivity, AI Models.'}
${categoryFocus}
Limit to ${limit} tools maximum.

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
          model: 'claude-sonnet-4-20250514',
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

    // Helper functions for duplicate detection
    const normalizeUrl = (url: string): string => {
      try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace(/^www\./, '').toLowerCase();
      } catch {
        return url.toLowerCase().replace(/^www\./, '');
      }
    };

    const calculateSimilarity = (str1: string, str2: string): number => {
      const s1 = str1.toLowerCase().trim();
      const s2 = str2.toLowerCase().trim();
      
      if (s1 === s2) return 1;
      
      const longer = s1.length > s2.length ? s1 : s2;
      const shorter = s1.length > s2.length ? s2 : s1;
      
      if (longer.length === 0) return 1;
      
      const distance = levenshteinDistance(longer, shorter);
      return (longer.length - distance) / longer.length;
    };

    const levenshteinDistance = (str1: string, str2: string): number => {
      const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
      
      for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
      for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
      
      for (let j = 1; j <= str2.length; j++) {
        for (let i = 1; i <= str1.length; i++) {
          const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
          matrix[j][i] = Math.min(
            matrix[j][i - 1] + 1,
            matrix[j - 1][i] + 1,
            matrix[j - 1][i - 1] + indicator
          );
        }
      }
      
      return matrix[str2.length][str1.length];
    };

    // Step 3: Get existing tools for duplicate detection
    const { data: existingTools, error: fetchError } = await supabase
      .from('ai_tools')
      .select('id, name, website_url')
      .eq('status', 'active');

    if (fetchError) {
      console.warn('Failed to fetch existing tools for duplicate detection:', fetchError);
    }

    // Step 4: Filter out duplicates and store new tools
    const savedTools = [];
    const skippedTools = [];
    
    for (const tool of aiTools) {
      try {
        let isDuplicate = false;
        let duplicateReason = '';

        if (existingTools) {
          // Check for duplicates using similarity
          for (const existing of existingTools) {
            // Name similarity check (85% threshold)
            const nameSimilarity = calculateSimilarity(tool.name, existing.name);
            if (nameSimilarity >= 0.85) {
              isDuplicate = true;
              duplicateReason = `Similar name to "${existing.name}" (${Math.round(nameSimilarity * 100)}% match)`;
              break;
            }

            // URL similarity check (exact domain match)
            if (tool.website_url && existing.website_url) {
              const toolDomain = normalizeUrl(tool.website_url);
              const existingDomain = normalizeUrl(existing.website_url);
              if (toolDomain === existingDomain) {
                isDuplicate = true;
                duplicateReason = `Same domain as "${existing.name}" (${existingDomain})`;
                break;
              }
            }
          }
        }

        if (isDuplicate) {
          console.log(`Skipping duplicate tool "${tool.name}": ${duplicateReason}`);
          skippedTools.push({ tool: tool.name, reason: duplicateReason });
          continue;
        }

        // Save new tool
        const { data, error } = await supabase
          .from('ai_tools')
          .insert({
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
          })
          .select();

        if (!error && data) {
          savedTools.push(data[0]);
          console.log(`Successfully saved new tool: ${tool.name}`);
        } else {
          console.warn(`Failed to save tool ${tool.name}:`, error);
        }
      } catch (saveError) {
        console.warn(`Error processing tool ${tool.name}:`, saveError);
      }
    }

    console.log(`Successfully saved ${savedTools.length} tools to database`);
    
    // Step 5: Auto-consolidate duplicates if enabled
    let consolidationResults = null;
    if (autoConsolidate && savedTools.length > 0) {
      console.log('Running automatic duplicate consolidation...');
      
      try {
        // Call consolidate function to scan and auto-consolidate
        const consolidateResponse = await supabase.functions.invoke('consolidate-duplicates', {
          body: { action: 'scan' }
        });

        if (consolidateResponse.data?.duplicateGroups?.length > 0) {
          console.log(`Found ${consolidateResponse.data.duplicateGroups.length} duplicate groups to auto-consolidate`);
          
          let totalConsolidated = 0;
          for (const group of consolidateResponse.data.duplicateGroups) {
            try {
              const consolidateGroupResponse = await supabase.functions.invoke('consolidate-duplicates', {
                body: {
                  action: 'consolidate',
                  primaryToolId: group.primaryTool.id,
                  duplicateIds: group.duplicates.map((d: any) => d.id)
                }
              });
              
              if (consolidateGroupResponse.data?.consolidatedCount) {
                totalConsolidated += consolidateGroupResponse.data.consolidatedCount;
              }
            } catch (consolidateError) {
              console.warn('Error consolidating group:', consolidateError);
            }
          }
          
          consolidationResults = {
            duplicateGroups: consolidateResponse.data.duplicateGroups.length,
            totalConsolidated
          };
          
          console.log(`Auto-consolidated ${totalConsolidated} duplicates from ${consolidateResponse.data.duplicateGroups.length} groups`);
        }
      } catch (consolidateError) {
        console.warn('Error during auto-consolidation:', consolidateError);
      }
    }

    // Update job status if jobId provided
    if (jobId) {
      try {
        await supabase
          .from('admin_jobs')
          .update({
            status: 'completed',
            completed_at: new Date().toISOString(),
            result: {
              crawledSources: crawledData.length,
              extractedTools: aiTools.length,
              savedTools: savedTools.length,
              skippedDuplicates: skippedTools.length,
              duplicateDetails: skippedTools,
              consolidationResults: consolidationResults,
              category: category,
              provider: provider
            }
          })
          .eq('id', jobId);
      } catch (jobError) {
        console.error('Error updating job status:', jobError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Research completed using ${provider}${consolidationResults ? ` with auto-consolidation` : ''}`,
        results: {
          crawledSources: crawledData.length,
          extractedTools: aiTools.length,
          savedTools: savedTools.length,
          skippedDuplicates: skippedTools.length,
          duplicateDetails: skippedTools,
          consolidationResults: consolidationResults,
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
    
    // Update job status to failed if jobId provided
    if (jobId) {
      try {
        await supabase
          .from('admin_jobs')
          .update({
            status: 'failed',
            completed_at: new Date().toISOString(),
            error_message: error.message
          })
          .eq('id', jobId);
      } catch (jobError) {
        console.error('Error updating job status:', jobError);
      }
    }
    
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