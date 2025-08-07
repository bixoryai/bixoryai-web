import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.53.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface DuplicateGroup {
  primaryTool: any;
  duplicates: any[];
  similarity: number;
  reason: string;
}

interface ConsolidationRequest {
  action: 'scan' | 'consolidate';
  groupId?: string;
  primaryToolId?: string;
  duplicateIds?: string[];
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

    const { action, groupId, primaryToolId, duplicateIds }: ConsolidationRequest = await req.json();

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

    if (action === 'scan') {
      console.log('Scanning for duplicate AI tools...');

      // Get all active tools
      const { data: allTools, error: fetchError } = await supabase
        .from('ai_tools')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: true });

      if (fetchError) {
        throw new Error(`Failed to fetch tools: ${fetchError.message}`);
      }

      const duplicateGroups: DuplicateGroup[] = [];
      const processedTools = new Set<string>();

      for (let i = 0; i < allTools.length; i++) {
        const tool1 = allTools[i];
        
        if (processedTools.has(tool1.id)) continue;

        const duplicates = [];
        
        for (let j = i + 1; j < allTools.length; j++) {
          const tool2 = allTools[j];
          
          if (processedTools.has(tool2.id)) continue;

          let isDuplicate = false;
          let reason = '';
          let similarity = 0;

          // Check name similarity (85% threshold)
          const nameSimilarity = calculateSimilarity(tool1.name, tool2.name);
          if (nameSimilarity >= 0.85) {
            isDuplicate = true;
            reason = `Similar names (${Math.round(nameSimilarity * 100)}% match)`;
            similarity = nameSimilarity;
          }

          // Check URL similarity (exact domain match)
          if (!isDuplicate && tool1.website_url && tool2.website_url) {
            const domain1 = normalizeUrl(tool1.website_url);
            const domain2 = normalizeUrl(tool2.website_url);
            if (domain1 === domain2) {
              isDuplicate = true;
              reason = `Same domain (${domain1})`;
              similarity = 1.0;
            }
          }

          // Check for exact name match (case insensitive)
          if (!isDuplicate) {
            const exactNameMatch = tool1.name.toLowerCase().trim() === tool2.name.toLowerCase().trim();
            if (exactNameMatch) {
              isDuplicate = true;
              reason = 'Exact name match';
              similarity = 1.0;
            }
          }

          if (isDuplicate) {
            duplicates.push(tool2);
            processedTools.add(tool2.id);
          }
        }

        if (duplicates.length > 0) {
          duplicateGroups.push({
            primaryTool: tool1,
            duplicates,
            similarity: Math.max(...duplicates.map(d => {
              const nameSim = calculateSimilarity(tool1.name, d.name);
              return tool1.website_url && d.website_url && 
                     normalizeUrl(tool1.website_url) === normalizeUrl(d.website_url) ? 1.0 : nameSim;
            })),
            reason
          });
          processedTools.add(tool1.id);
        }
      }

      console.log(`Found ${duplicateGroups.length} duplicate groups`);

      return new Response(
        JSON.stringify({
          success: true,
          message: `Found ${duplicateGroups.length} duplicate groups`,
          duplicateGroups,
          totalDuplicates: duplicateGroups.reduce((sum, group) => sum + group.duplicates.length, 0)
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      );

    } else if (action === 'consolidate') {
      console.log('Consolidating duplicates...');

      if (!primaryToolId || !duplicateIds || duplicateIds.length === 0) {
        throw new Error('Primary tool ID and duplicate IDs are required for consolidation');
      }

      // Get the primary tool and duplicates
      const { data: primaryTool, error: primaryError } = await supabase
        .from('ai_tools')
        .select('*')
        .eq('id', primaryToolId)
        .single();

      if (primaryError) {
        throw new Error(`Failed to fetch primary tool: ${primaryError.message}`);
      }

      const { data: duplicateTools, error: duplicatesError } = await supabase
        .from('ai_tools')
        .select('*')
        .in('id', duplicateIds);

      if (duplicatesError) {
        throw new Error(`Failed to fetch duplicate tools: ${duplicatesError.message}`);
      }

      // Merge data from duplicates into primary tool
      const mergedTags = new Set([...(primaryTool.tags || [])]);
      const mergedFeatures = new Set([...(primaryTool.features || [])]);
      let bestDescription = primaryTool.description;
      let bestRating = primaryTool.rating;
      let bestLogoUrl = primaryTool.logo_url;

      for (const duplicate of duplicateTools) {
        // Merge tags
        if (duplicate.tags) {
          duplicate.tags.forEach((tag: string) => mergedTags.add(tag));
        }

        // Merge features
        if (duplicate.features) {
          duplicate.features.forEach((feature: string) => mergedFeatures.add(feature));
        }

        // Use better description (longer and more detailed)
        if (duplicate.description && duplicate.description.length > (bestDescription?.length || 0)) {
          bestDescription = duplicate.description;
        }

        // Use better rating
        if (duplicate.rating && (!bestRating || duplicate.rating > bestRating)) {
          bestRating = duplicate.rating;
        }

        // Use logo if primary doesn't have one
        if (duplicate.logo_url && !bestLogoUrl) {
          bestLogoUrl = duplicate.logo_url;
        }
      }

      // Update primary tool with merged data
      const { error: updateError } = await supabase
        .from('ai_tools')
        .update({
          description: bestDescription,
          rating: bestRating,
          logo_url: bestLogoUrl,
          tags: Array.from(mergedTags),
          features: Array.from(mergedFeatures),
          updated_at: new Date().toISOString()
        })
        .eq('id', primaryToolId);

      if (updateError) {
        throw new Error(`Failed to update primary tool: ${updateError.message}`);
      }

      // Mark duplicates as inactive instead of deleting them
      const { error: deactivateError } = await supabase
        .from('ai_tools')
        .update({
          status: 'duplicate',
          updated_at: new Date().toISOString()
        })
        .in('id', duplicateIds);

      if (deactivateError) {
        throw new Error(`Failed to deactivate duplicates: ${deactivateError.message}`);
      }

      console.log(`Consolidated ${duplicateIds.length} duplicates into primary tool ${primaryToolId}`);

      return new Response(
        JSON.stringify({
          success: true,
          message: `Successfully consolidated ${duplicateIds.length} duplicates`,
          primaryToolId,
          consolidatedCount: duplicateIds.length
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      );

    } else {
      throw new Error('Invalid action. Use "scan" or "consolidate"');
    }

  } catch (error) {
    console.error('Error in consolidate-duplicates:', error);
    
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