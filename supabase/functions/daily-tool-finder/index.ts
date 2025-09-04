import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.53.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting daily Tool Finder autonomous run...');
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Create job record for tracking
    const { data: job, error: jobError } = await supabase
      .from('admin_jobs')
      .insert([{
        job_type: 'daily_tool_finder',
        status: 'running',
        started_at: new Date().toISOString(),
        scheduled_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (jobError) {
      console.error('Failed to create job record:', jobError);
      throw jobError;
    }

    console.log(`Created job record: ${job.id}`);

    // Rotate through different categories to ensure comprehensive coverage
    const categories = ['Content', 'Development', 'Design', 'Analytics', 'Productivity', 'AI Models'];
    const today = new Date();
    const categoryIndex = today.getDate() % categories.length;
    const selectedCategory = categories[categoryIndex];
    
    console.log(`Daily focus category: ${selectedCategory} (day ${today.getDate()})`);

    // Call the main ai-research-agent function with rotating parameters
    const { data, error } = await supabase.functions.invoke('ai-research-agent', {
      body: {
        provider: 'openai', // Primary provider for daily runs
        category: selectedCategory,
        limit: 15, // Moderate limit for daily runs
        jobId: job.id,
        autoConsolidate: true
      }
    });

    if (error) {
      console.error('Tool Finder execution error:', error);
      
      // Update job as failed
      await supabase
        .from('admin_jobs')
        .update({
          status: 'failed',
          completed_at: new Date().toISOString(),
          error_message: error.message
        })
        .eq('id', job.id);
        
      throw error;
    }

    // Update job as completed
    await supabase
      .from('admin_jobs')
      .update({
        status: 'completed',
        completed_at: new Date().toISOString(),
        result: data
      })
      .eq('id', job.id);

    console.log(`Daily Tool Finder completed successfully. Found ${data?.results?.savedTools || 0} new tools.`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Daily Tool Finder completed for category: ${selectedCategory}`,
        category: selectedCategory,
        newTools: data?.results?.savedTools || 0,
        totalExtracted: data?.results?.extractedTools || 0,
        jobId: job.id
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error: any) {
    console.error('Daily Tool Finder error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});