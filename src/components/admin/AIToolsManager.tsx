import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Search, Merge, CheckCircle, ExternalLink, Bot, PlayCircle, Clock, Zap } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DuplicateGroup {
  primaryTool: any;
  duplicates: any[];
  similarity: number;
  reason: string;
}

export const AIToolsManager = () => {
  const { toast } = useToast();
  const [isResearching, setIsResearching] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isConsolidating, setIsConsolidating] = useState(false);
  const [duplicateGroups, setDuplicateGroups] = useState<DuplicateGroup[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<Set<number>>(new Set());
  const [selectedProvider, setSelectedProvider] = useState<'openai' | 'claude'>('openai');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [syncStatus, setSyncStatus] = useState<string>('');
  const [lastSyncTime, setLastSyncTime] = useState<string>('');

  const categories = [
    'All Categories',
    'Content',
    'Development', 
    'Design',
    'Analytics',
    'Productivity',
    'AI Models'
  ];

  const syncAITools = async () => {
    setIsResearching(true);
    setSyncStatus('🚀 Starting sync...\n⏳ Initializing AI research agent...');
    
    try {
      // Start with progress updates
      setSyncStatus(prev => prev + '\n🔍 Crawling external AI tool directories...');
      
      const { data, error } = await supabase.functions.invoke('ai-research-agent', {
        body: {
          provider: selectedProvider,
          category: selectedCategory === 'All Categories' ? undefined : selectedCategory,
          limit: 20,
          autoConsolidate: true
        }
      });

      if (error) throw error;

      setSyncStatus(prev => prev + '\n✅ Crawling completed, processing results...');

      // The function returns: { crawledSources: number, extractedTools: number, savedTools: number, skippedDuplicates: number, consolidationResults: {...} }
      const results = data;
      const consolidation = results.consolidationResults;
      const timestamp = new Date().toLocaleString();
      
      setSyncStatus(prev => prev + `\n📊 Extracting data from ${results.crawledSources || 'multiple'} sources...`);
      setSyncStatus(prev => prev + `\n🔍 Found ${results.extractedTools || 0} tools to process...`);
      setSyncStatus(prev => prev + `\n💾 Saved ${results.savedTools || 0} new tools to database...`);
      setSyncStatus(prev => prev + `\n⏭️ Skipped ${results.skippedDuplicates || 0} duplicate tools...`);
      
      if (consolidation && consolidation.totalConsolidated > 0) {
        setSyncStatus(prev => prev + `\n🔄 Auto-consolidated ${consolidation.totalConsolidated} duplicate tools...`);
      }
      
      setSyncStatus(prev => prev + `\n\n✅ Sync completed successfully at ${timestamp}!`);
      setLastSyncTime(timestamp);

      toast({
        title: "Sync Complete",
        description: `Found ${results.extractedTools || 0} tools, saved ${results.savedTools || 0} new tools, skipped ${results.skippedDuplicates || 0} duplicates${consolidation ? `, auto-consolidated ${consolidation.totalConsolidated || 0} duplicates` : ''}`,
      });

      // Refresh duplicate scan after sync
      setSyncStatus(prev => prev + '\n🔍 Scanning for remaining duplicates...');
      await scanForDuplicates();
      setSyncStatus(prev => prev + '\n✅ Duplicate scan completed!');
      
    } catch (error: any) {
      console.error('Error syncing AI tools:', error);
      const errorMessage = `❌ Sync failed at ${new Date().toLocaleString()}\n🚨 Error: ${error.message || "Failed to sync AI tools"}`;
      setSyncStatus(errorMessage);
      toast({
        title: "Error",
        description: error.message || "Failed to sync AI tools",
        variant: "destructive",
      });
    } finally {
      setIsResearching(false);
    }
  };

  const scanForDuplicates = async () => {
    setIsScanning(true);
    try {
      const { data, error } = await supabase.functions.invoke('consolidate-duplicates', {
        body: { action: 'scan' }
      });

      if (error) throw error;

      setDuplicateGroups(data.duplicateGroups || []);
      
      if (data.duplicateGroups?.length > 0) {
        toast({
          title: "Duplicates Found",
          description: `Found ${data.duplicateGroups.length} duplicate groups with ${data.totalDuplicates} total duplicates`,
        });
      } else {
        toast({
          title: "No Duplicates",
          description: "No duplicate AI tools found in the database",
        });
      }
    } catch (error: any) {
      console.error('Error scanning duplicates:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to scan for duplicates",
        variant: "destructive",
      });
    } finally {
      setIsScanning(false);
    }
  };

  const consolidateGroup = async (groupIndex: number) => {
    const group = duplicateGroups[groupIndex];
    setIsConsolidating(true);

    try {
      const { data, error } = await supabase.functions.invoke('consolidate-duplicates', {
        body: {
          action: 'consolidate',
          primaryToolId: group.primaryTool.id,
          duplicateIds: group.duplicates.map(d => d.id)
        }
      });

      if (error) throw error;

      // Remove the consolidated group from the list
      setDuplicateGroups(prev => prev.filter((_, index) => index !== groupIndex));
      setSelectedGroups(prev => {
        const newSet = new Set(prev);
        newSet.delete(groupIndex);
        return newSet;
      });

      toast({
        title: "Consolidation Complete",
        description: `Successfully consolidated ${data.consolidatedCount} duplicates`,
      });
    } catch (error: any) {
      console.error('Error consolidating duplicates:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to consolidate duplicates",
        variant: "destructive",
      });
    } finally {
      setIsConsolidating(false);
    }
  };

  const consolidateSelected = async () => {
    if (selectedGroups.size === 0) {
      toast({
        title: "No Selection",
        description: "Please select duplicate groups to consolidate",
        variant: "destructive",
      });
      return;
    }

    setIsConsolidating(true);
    let consolidatedCount = 0;

    try {
      const selectedGroupsArray = Array.from(selectedGroups).sort((a, b) => b - a);
      
      for (const groupIndex of selectedGroupsArray) {
        const group = duplicateGroups[groupIndex];
        
        const { data, error } = await supabase.functions.invoke('consolidate-duplicates', {
          body: {
            action: 'consolidate',
            primaryToolId: group.primaryTool.id,
            duplicateIds: group.duplicates.map(d => d.id)
          }
        });

        if (error) throw error;
        consolidatedCount += data.consolidatedCount;
      }

      setDuplicateGroups(prev => prev.filter((_, index) => !selectedGroups.has(index)));
      setSelectedGroups(new Set());

      toast({
        title: "Bulk Consolidation Complete",
        description: `Successfully consolidated ${consolidatedCount} duplicates from ${selectedGroupsArray.length} groups`,
      });
    } catch (error: any) {
      console.error('Error consolidating selected duplicates:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to consolidate selected duplicates",
        variant: "destructive",
      });
    } finally {
      setIsConsolidating(false);
    }
  };

  const toggleGroupSelection = (groupIndex: number) => {
    setSelectedGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(groupIndex)) {
        newSet.delete(groupIndex);
      } else {
        newSet.add(groupIndex);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Bot className="w-5 h-5 text-secondary" />
            AI Tools Manager
          </CardTitle>
          <CardDescription className="text-white">
            Sync, manage, and consolidate AI tools in the database
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sync" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sync" className="flex items-center gap-2 text-white data-[state=active]:bg-secondary data-[state=active]:text-white">
                <Zap className="w-4 h-4" />
                Sync Tools
              </TabsTrigger>
              <TabsTrigger value="duplicates" className="flex items-center gap-2 text-white data-[state=active]:bg-secondary data-[state=active]:text-white">
                <AlertTriangle className="w-4 h-4" />
                Duplicates ({duplicateGroups.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sync" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">AI Provider</label>
                  <Select value={selectedProvider} onValueChange={(value: 'openai' | 'claude') => setSelectedProvider(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-primary border-gray-700 z-50">
                      <SelectItem value="openai" className="text-white hover:bg-secondary/20 focus:bg-secondary/20">OpenAI GPT-4</SelectItem>
                      <SelectItem value="claude" className="text-white hover:bg-secondary/20 focus:bg-secondary/20">Claude Sonnet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Category Filter</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary border-gray-700 z-50">
                      {categories.map(category => (
                        <SelectItem key={category} value={category} className="text-white hover:bg-secondary/20 focus:bg-secondary/20">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Alert>
                <Clock className="h-4 w-4" />
                <AlertDescription className="text-gray-800">
                  This will crawl AI tool directories, extract new tools, and automatically consolidate any duplicates found.
                  The process may take 2-3 minutes to complete.
                </AlertDescription>
              </Alert>

              <Button
                onClick={syncAITools}
                disabled={isResearching}
                className="w-full flex items-center gap-2"
                size="lg"
              >
                <PlayCircle className="w-5 h-5" />
                {isResearching ? "Syncing AI Tools..." : "Sync AI Tools"}
              </Button>

              {syncStatus && (
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-sm text-white">Sync Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">{syncStatus}</pre>
                    {lastSyncTime && (
                      <p className="text-xs text-gray-400 mt-2">
                        📝 The AI research agent crawls external AI tool directories and uses them as the source of truth. 
                        New tools are added to our database, while existing tools are skipped to prevent duplicates.
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="duplicates" className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={scanForDuplicates}
                  disabled={isScanning}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  {isScanning ? "Scanning..." : "Scan for Duplicates"}
                </Button>
                
                {duplicateGroups.length > 0 && (
                  <Button
                    onClick={consolidateSelected}
                    disabled={isConsolidating || selectedGroups.size === 0}
                    variant="secondary"
                    className="flex items-center gap-2"
                  >
                    <Merge className="w-4 h-4" />
                    Consolidate Selected ({selectedGroups.size})
                  </Button>
                )}
              </div>

              {duplicateGroups.length > 0 && (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-white">
                    Found {duplicateGroups.length} duplicate groups. The primary tool will be kept and enhanced with data from duplicates.
                  </AlertDescription>
                </Alert>
              )}

              {duplicateGroups.length > 0 ? (
                <div className="space-y-4">
                  {duplicateGroups.map((group, groupIndex) => (
                    <Card key={groupIndex} className="border-l-4 border-l-secondary">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-lg text-white">
                              Duplicate Group {groupIndex + 1}
                            </CardTitle>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{group.reason}</Badge>
                              <Badge variant="secondary">
                                {Math.round(group.similarity * 100)}% similarity
                              </Badge>
                              <Badge>
                                {group.duplicates.length + 1} tools
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleGroupSelection(groupIndex)}
                              className={selectedGroups.has(groupIndex) ? "bg-secondary/20" : ""}
                            >
                              {selectedGroups.has(groupIndex) ? <CheckCircle className="w-4 h-4" /> : "Select"}
                            </Button>
                            <Button
                              onClick={() => consolidateGroup(groupIndex)}
                              disabled={isConsolidating}
                              size="sm"
                              className="flex items-center gap-2"
                            >
                              <Merge className="w-4 h-4" />
                              Consolidate
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Primary Tool */}
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-green-400">Primary Tool (Will be kept)</h4>
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Primary</Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-white">{group.primaryTool.name}</span>
                              {group.primaryTool.website_url && (
                                <a
                                  href={group.primaryTool.website_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-accent hover:underline"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                            <p className="text-sm text-gray-300">{group.primaryTool.description}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <Badge variant="outline">{group.primaryTool.category}</Badge>
                              <span>•</span>
                              <span>{group.primaryTool.pricing}</span>
                              {group.primaryTool.rating && (
                                <>
                                  <span>•</span>
                                  <span>★ {group.primaryTool.rating}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Duplicate Tools */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-red-400">Duplicates (Will be consolidated)</h4>
                          {group.duplicates.map((duplicate) => (
                            <div key={duplicate.id} className="bg-red-500/5 p-3 rounded-lg border border-red-500/20">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-white">{duplicate.name}</span>
                                  {duplicate.website_url && (
                                    <a
                                      href={duplicate.website_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-accent hover:underline"
                                    >
                                      <ExternalLink className="w-4 h-4" />
                                    </a>
                                  )}
                                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Duplicate</Badge>
                                </div>
                                <p className="text-sm text-gray-300">{duplicate.description}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                  <Badge variant="outline">{duplicate.category}</Badge>
                                  <span>•</span>
                                  <span>{duplicate.pricing}</span>
                                  {duplicate.rating && (
                                    <>
                                      <span>•</span>
                                      <span>★ {duplicate.rating}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">No Duplicates Found</h3>
                    <p className="text-gray-400">
                      Click "Scan for Duplicates" to check for duplicate AI tools in the database.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};