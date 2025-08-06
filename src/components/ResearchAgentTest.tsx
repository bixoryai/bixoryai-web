import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Brain, RefreshCw, CheckCircle, AlertCircle } from "lucide-react";

interface ResearchResult {
  success: boolean;
  message?: string;
  error?: string;
  results?: {
    crawledSources: number;
    extractedTools: number;
    savedTools: number;
    tools: any[];
  };
}

export const ResearchAgentTest = () => {
  const [loading, setLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<'openai' | 'claude'>('openai');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [result, setResult] = useState<ResearchResult | null>(null);
  const { toast } = useToast();

  const categories = [
    'Content', 'Development', 'Design', 'Analytics', 'Productivity', 'AI Models'
  ];

  const runResearch = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-research-agent', {
        body: {
          provider: selectedProvider,
          category: selectedCategory || undefined,
          limit: 8
        }
      });

      if (error) throw error;

      setResult(data);
      
      toast({
        title: "Research Complete!",
        description: `Found ${data.results?.savedTools || 0} new AI tools using ${selectedProvider}`,
      });

    } catch (error) {
      console.error('Research error:', error);
      setResult({
        success: false,
        error: error.message || 'Failed to complete research'
      });
      
      toast({
        title: "Research Failed",
        description: "Could not complete AI tools research",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="bg-primary/80 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Brain className="w-6 h-6 text-accent" />
            AI Research Agent Test
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">AI Provider</label>
              <Select value={selectedProvider} onValueChange={(value: 'openai' | 'claude') => setSelectedProvider(value)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="openai">OpenAI (GPT-4.1)</SelectItem>
                  <SelectItem value="claude">Claude (Sonnet 4)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Category Focus (Optional)</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={runResearch}
            disabled={loading}
            className="w-full bg-secondary hover:bg-secondary/90 text-white"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Researching AI Tools...
              </>
            ) : (
              <>
                <Brain className="w-4 h-4 mr-2" />
                Start Research Agent
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="bg-primary/80 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              {result.success ? (
                <CheckCircle className="w-6 h-6 text-green-400" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-400" />
              )}
              Research Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {result.success ? (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{result.results?.crawledSources || 0}</div>
                    <div className="text-sm text-gray-400">Sources Crawled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{result.results?.extractedTools || 0}</div>
                    <div className="text-sm text-gray-400">Tools Extracted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{result.results?.savedTools || 0}</div>
                    <div className="text-sm text-gray-400">Tools Saved</div>
                  </div>
                </div>
                
                {result.results?.tools && result.results.tools.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Found Tools:</h4>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {result.results.tools.map((tool: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                          <div>
                            <div className="text-white font-medium">{tool.name}</div>
                            <div className="text-gray-400 text-sm">{tool.category}</div>
                          </div>
                          <Badge variant="outline" className="text-gray-400 border-gray-600">
                            {tool.pricing}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-red-400">
                <strong>Error:</strong> {result.error}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};