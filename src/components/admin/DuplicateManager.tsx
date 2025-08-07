import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Search, Merge, CheckCircle, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DuplicateGroup {
  primaryTool: any;
  duplicates: any[];
  similarity: number;
  reason: string;
}

export const DuplicateManager = () => {
  const { toast } = useToast();
  const [isScanning, setIsScanning] = useState(false);
  const [isConsolidating, setIsConsolidating] = useState(false);
  const [duplicateGroups, setDuplicateGroups] = useState<DuplicateGroup[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<Set<number>>(new Set());

  const scanForDuplicates = async () => {
    setIsScanning(true);
    try {
      const { data, error } = await supabase.functions.invoke('consolidate-duplicates', {
        body: { action: 'scan' }
      });

      if (error) throw error;

      setDuplicateGroups(data.duplicateGroups || []);
      
      toast({
        title: "Scan Complete",
        description: `Found ${data.duplicateGroups?.length || 0} duplicate groups with ${data.totalDuplicates || 0} total duplicates`,
      });
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
      const selectedGroupsArray = Array.from(selectedGroups).sort((a, b) => b - a); // Sort descending to avoid index issues
      
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

      // Remove consolidated groups
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
            <AlertTriangle className="w-5 h-5 text-secondary" />
            Duplicate Tool Manager
          </CardTitle>
          <CardDescription className="text-white">
            Scan for and consolidate duplicate AI tools in the database
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={scanForDuplicates}
              disabled={isScanning}
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
              <AlertDescription>
                Found {duplicateGroups.length} duplicate groups. Review each group and consolidate as needed.
                The primary tool will be kept and enhanced with data from duplicates.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {duplicateGroups.length > 0 && (
        <div className="space-y-4">
          {duplicateGroups.map((group, groupIndex) => (
            <Card key={groupIndex} className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg">
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
                      <span className="font-medium">{group.primaryTool.name}</span>
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
                  {group.duplicates.map((duplicate, dupIndex) => (
                    <div key={duplicate.id} className="bg-red-500/5 p-3 rounded-lg border border-red-500/20">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{duplicate.name}</span>
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
      )}

      {duplicateGroups.length === 0 && !isScanning && (
        <Card>
          <CardContent className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Duplicates Found</h3>
            <p className="text-gray-400">
              Click "Scan for Duplicates" to check for duplicate AI tools in the database.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};