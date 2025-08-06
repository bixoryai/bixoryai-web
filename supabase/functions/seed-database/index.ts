import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.53.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Static tools data to seed the database
const staticTools = [
  // Content Creation Tools
  {
    name: "ChatGPT",
    description: "Advanced conversational AI for writing, coding, and creative tasks",
    category: "Content",
    pricing: "Free / $20/month",
    rating: 4.8,
    website_url: "https://chat.openai.com",
    tags: ["Writing", "Conversational AI", "OpenAI"],
    features: ["Text generation", "Code assistance", "Creative writing", "Analysis"],
    is_featured: true
  },
  {
    name: "Claude",
    description: "Anthropic's AI assistant for analysis, writing, and coding",
    category: "Content",
    pricing: "Free / $20/month",
    rating: 4.7,
    website_url: "https://claude.ai",
    tags: ["Writing", "Analysis", "Anthropic"],
    features: ["Long-form analysis", "Code review", "Creative writing", "Research"]
  },
  {
    name: "Jasper AI",
    description: "AI writing assistant for marketing and business content",
    category: "Content",
    pricing: "$49/month",
    rating: 4.5,
    website_url: "https://jasper.ai",
    tags: ["Marketing", "Content Creation", "Business"],
    features: ["Marketing copy", "Blog posts", "Email campaigns", "Social media"]
  },
  {
    name: "Copy.ai",
    description: "AI-powered copywriting for marketing campaigns",
    category: "Content",
    pricing: "Free / $36/month",
    rating: 4.3,
    website_url: "https://copy.ai",
    tags: ["Copywriting", "Marketing", "Sales"],
    features: ["Sales copy", "Ad copy", "Product descriptions", "Email sequences"]
  },

  // Development Tools
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster",
    category: "Development",
    pricing: "$10/month",
    rating: 4.6,
    website_url: "https://github.com/features/copilot",
    tags: ["Coding", "IDE", "GitHub"],
    features: ["Code completion", "Function generation", "Test writing", "Code explanation"],
    is_featured: true
  },
  {
    name: "Cursor",
    description: "AI-first code editor built for productivity",
    category: "Development",
    pricing: "Free / $20/month",
    rating: 4.7,
    website_url: "https://cursor.sh",
    tags: ["Code Editor", "AI Assistant", "Productivity"],
    features: ["AI-powered editing", "Code generation", "Refactoring", "Debugging"]
  },
  {
    name: "Replit AI",
    description: "AI-powered collaborative coding environment",
    category: "Development",
    pricing: "Free / $7/month",
    rating: 4.4,
    website_url: "https://replit.com",
    tags: ["Collaboration", "Cloud IDE", "Learning"],
    features: ["Cloud development", "AI assistance", "Collaboration", "Deployment"]
  },
  {
    name: "Tabnine",
    description: "AI assistant for software developers",
    category: "Development",
    pricing: "Free / $12/month",
    rating: 4.2,
    website_url: "https://tabnine.com",
    tags: ["Code Completion", "IDE Plugin", "Team"],
    features: ["Code suggestions", "Team models", "Privacy focus", "Multi-language"]
  },

  // Design Tools
  {
    name: "Midjourney",
    description: "AI image generation for creative and artistic purposes",
    category: "Design",
    pricing: "$10/month",
    rating: 4.9,
    website_url: "https://midjourney.com",
    tags: ["Image Generation", "Art", "Creative"],
    features: ["High-quality images", "Artistic styles", "Discord integration", "Community"],
    is_featured: true
  },
  {
    name: "DALL-E 3",
    description: "OpenAI's advanced image generation model",
    category: "Design",
    pricing: "Pay per use",
    rating: 4.6,
    website_url: "https://openai.com/dall-e-3",
    tags: ["Image Generation", "OpenAI", "Creative"],
    features: ["Text-to-image", "High resolution", "Safety features", "API access"]
  },
  {
    name: "Canva AI",
    description: "AI-powered design tools for everyone",
    category: "Design",
    pricing: "Free / $15/month",
    rating: 4.4,
    website_url: "https://canva.com",
    tags: ["Design", "Templates", "Social Media"],
    features: ["Templates", "Magic resize", "Background removal", "Text effects"]
  },
  {
    name: "Figma AI",
    description: "AI features integrated into Figma design platform",
    category: "Design",
    pricing: "Free / $12/month",
    rating: 4.5,
    website_url: "https://figma.com",
    tags: ["UI/UX", "Collaboration", "Prototyping"],
    features: ["Design systems", "Prototyping", "Collaboration", "Plugins"]
  },

  // Analytics Tools
  {
    name: "Tableau AI",
    description: "AI-powered data visualization and analytics",
    category: "Analytics",
    pricing: "$75/month",
    rating: 4.3,
    website_url: "https://tableau.com",
    tags: ["Data Visualization", "Business Intelligence", "Enterprise"],
    features: ["Data visualization", "Dashboard creation", "Analytics", "Enterprise features"]
  },
  {
    name: "Power BI AI",
    description: "Microsoft's AI-enhanced business analytics platform",
    category: "Analytics",
    pricing: "$10/month",
    rating: 4.2,
    website_url: "https://powerbi.microsoft.com",
    tags: ["Microsoft", "Business Intelligence", "Data Analysis"],
    features: ["Data modeling", "Report creation", "AI insights", "Microsoft integration"]
  },
  {
    name: "Google Analytics Intelligence",
    description: "AI-powered insights for web analytics",
    category: "Analytics",
    pricing: "Free",
    rating: 4.1,
    website_url: "https://analytics.google.com",
    tags: ["Web Analytics", "Google", "Insights"],
    features: ["Web tracking", "AI insights", "Custom reports", "Integration"]
  },

  // Productivity Tools
  {
    name: "Notion AI",
    description: "AI writing assistant integrated into Notion workspace",
    category: "Productivity",
    pricing: "$8/month",
    rating: 4.4,
    website_url: "https://notion.so",
    tags: ["Workspace", "Writing", "Organization"],
    features: ["Note-taking", "Database", "AI writing", "Collaboration"]
  },
  {
    name: "Grammarly",
    description: "AI-powered writing assistant and grammar checker",
    category: "Productivity",
    pricing: "Free / $12/month",
    rating: 4.5,
    website_url: "https://grammarly.com",
    tags: ["Writing", "Grammar", "Editing"],
    features: ["Grammar check", "Style suggestions", "Plagiarism detection", "Tone detection"]
  },
  {
    name: "Otter.ai",
    description: "AI meeting assistant that records and transcribes",
    category: "Productivity",
    pricing: "Free / $17/month",
    rating: 4.3,
    website_url: "https://otter.ai",
    tags: ["Transcription", "Meetings", "Note-taking"],
    features: ["Meeting transcription", "Speaker identification", "Search", "Integration"]
  },

  // AI Models & Platforms
  {
    name: "OpenAI API",
    description: "Access to GPT models and other AI capabilities",
    category: "AI Models",
    pricing: "Pay per use",
    rating: 4.7,
    website_url: "https://openai.com/api",
    tags: ["API", "GPT", "Integration"],
    features: ["GPT models", "DALL-E", "Whisper", "Embeddings"],
    is_featured: true
  },
  {
    name: "Anthropic API",
    description: "Claude AI models for developers",
    category: "AI Models",
    pricing: "Pay per use",
    rating: 4.6,
    website_url: "https://anthropic.com",
    tags: ["API", "Claude", "Safe AI"],
    features: ["Claude models", "Constitutional AI", "Long context", "Safety focus"]
  },
  {
    name: "Google Gemini",
    description: "Google's multimodal AI model",
    category: "AI Models",
    pricing: "Free / Pay per use",
    rating: 4.4,
    website_url: "https://gemini.google.com",
    tags: ["Multimodal", "Google", "API"],
    features: ["Multimodal capabilities", "Large context", "Google integration", "Free tier"]
  },
  {
    name: "Hugging Face",
    description: "Open-source AI model hub and platform",
    category: "AI Models",
    pricing: "Free / $9/month",
    rating: 4.5,
    website_url: "https://huggingface.co",
    tags: ["Open Source", "Models", "Community"],
    features: ["Model hub", "Datasets", "Spaces", "Inference API"]
  }
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('Starting database seeding with static tools...');

    const seedResults = [];
    let successCount = 0;
    let errorCount = 0;

    for (const tool of staticTools) {
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
            tags: tool.tags || [],
            features: tool.features || [],
            is_featured: tool.is_featured || false,
            source_url: 'static_seed',
            crawled_at: new Date().toISOString(),
            status: 'active'
          }, {
            onConflict: 'name',
            ignoreDuplicates: false
          })
          .select();

        if (!error && data) {
          seedResults.push({
            name: tool.name,
            status: 'success',
            id: data[0].id
          });
          successCount++;
          console.log(`✅ Seeded: ${tool.name}`);
        } else {
          seedResults.push({
            name: tool.name,
            status: 'error',
            error: error?.message
          });
          errorCount++;
          console.warn(`❌ Failed to seed: ${tool.name}`, error);
        }
      } catch (seedError) {
        seedResults.push({
          name: tool.name,
          status: 'error',
          error: seedError.message
        });
        errorCount++;
        console.warn(`❌ Error seeding: ${tool.name}`, seedError);
      }
    }

    console.log(`Seeding complete: ${successCount} success, ${errorCount} errors`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Database seeded successfully`,
        results: {
          totalTools: staticTools.length,
          successfulSeeds: successCount,
          errors: errorCount,
          details: seedResults
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in seed-database function:', error);
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