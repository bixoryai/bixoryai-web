import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { validateText, validateUrl, validateRating, validateStringArray } from "@/utils/inputValidation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { AIToolsManager } from "@/components/admin/AIToolsManager";
import { triggerAutoSync } from "@/utils/syncTools";
import { Pencil, Trash2, Plus, Search } from "lucide-react";

interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  website_url?: string;
  pricing?: string;
  rating?: number;
  tags?: string[];
  is_featured: boolean;
  is_verified: boolean;
  source_url?: string;
}

const CATEGORIES = [
  "Content",
  "Development", 
  "Design",
  "Analytics",
  "Productivity",
  "AI Models"
];

const AdminTools = () => {
  const [tools, setTools] = useState<AITool[]>([]);
  const [filteredTools, setFilteredTools] = useState<AITool[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [editingTool, setEditingTool] = useState<AITool | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    website_url: "",
    pricing: "",
    rating: "",
    tags: "",
    is_featured: false,
    is_verified: false
  });

  useEffect(() => {
    fetchTools();
  }, []);

  useEffect(() => {
    filterTools();
  }, [tools, searchTerm, selectedCategory]);

  const fetchTools = async () => {
    try {
      const { data, error } = await supabase
        .from('ai_tools')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTools(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch tools",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterTools = () => {
    let filtered = tools;

    if (searchTerm) {
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    setFilteredTools(filtered);
  };

  const checkForDuplicates = async (name: string, websiteUrl?: string, excludeId?: string) => {
    const { data, error } = await supabase
      .from('ai_tools')
      .select('id, name, website_url')
      .or(`name.ilike.${name},website_url.eq.${websiteUrl || ''}`);

    if (error) throw error;

    const duplicates = data?.filter(tool => 
      tool.id !== excludeId && 
      (tool.name.toLowerCase() === name.toLowerCase() || 
       (websiteUrl && tool.website_url === websiteUrl))
    );

    return duplicates && duplicates.length > 0;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      category: "",
      website_url: "",
      pricing: "",
      rating: "",
      tags: "",
      is_featured: false,
      is_verified: false
    });
    setEditingTool(null);
    setIsAddingNew(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate and sanitize input data
      const validatedData = {
        name: validateText(formData.name, 200),
        description: validateText(formData.description, 1000),
        category: validateText(formData.category, 100),
        website_url: formData.website_url ? validateUrl(formData.website_url) : null,
        pricing: formData.pricing ? validateText(formData.pricing, 100) : null,
        rating: formData.rating ? validateRating(parseFloat(formData.rating)) : null,
        tags: formData.tags ? validateStringArray(formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)) : null,
        is_featured: formData.is_featured,
        is_verified: formData.is_verified,
        source_url: 'manual_admin_entry'
      };

      // Check for duplicates
      const hasDuplicates = await checkForDuplicates(
        validatedData.name, 
        validatedData.website_url,
        editingTool?.id
      );

      if (hasDuplicates) {
        toast({
          title: "Duplicate Tool",
          description: "A tool with this name or website already exists",
          variant: "destructive",
        });
        return;
      }

      const toolData = validatedData;

      if (editingTool) {
        const { error } = await supabase
          .from('ai_tools')
          .update(toolData)
          .eq('id', editingTool.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Tool updated successfully",
        });
        
        // Trigger auto-sync after update
        resetForm();
        await triggerAutoSync("updated");
      } else {
        const { error } = await supabase
          .from('ai_tools')
          .insert([toolData]);

        if (error) throw error;

        toast({
          title: "Success", 
          description: "Tool added successfully",
        });
        
        // Trigger auto-sync after add
        resetForm();
        await triggerAutoSync("added");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save tool",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (tool: AITool) => {
    setEditingTool(tool);
    setFormData({
      name: tool.name,
      description: tool.description || "",
      category: tool.category,
      website_url: tool.website_url || "",
      pricing: tool.pricing || "",
      rating: tool.rating?.toString() || "",
      tags: tool.tags?.join(', ') || "",
      is_featured: tool.is_featured,
      is_verified: tool.is_verified
    });
    setIsAddingNew(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this tool?")) return;

    try {
      const { error } = await supabase
        .from('ai_tools')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Tool deleted successfully",
      });
      
      // Trigger auto-sync after delete
      await triggerAutoSync("deleted");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete tool",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary">
        <section className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Manage AI Tools
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Manage AI tools database - Add, edit, and categorize tools
                </p>
              </div>

              <Tabs defaultValue="manage" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3 bg-primary/80 border border-gray-700">
                  <TabsTrigger value="manage" className="text-white data-[state=active]:bg-secondary data-[state=active]:text-white">Update Tools</TabsTrigger>
                  <TabsTrigger value="add" className="text-white data-[state=active]:bg-secondary data-[state=active]:text-white">Add Tools</TabsTrigger>
                  <TabsTrigger value="sync" className="text-white data-[state=active]:bg-secondary data-[state=active]:text-white">Sync & Duplicates</TabsTrigger>
                </TabsList>

                <TabsContent value="manage" className="space-y-6">
                  {/* Search and Filter */}
                  <Card className="bg-primary/80 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Search & Filter</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-1 relative">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="Search tools..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white"
                          />
                        </div>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-primary border-gray-700">
                            <SelectItem value="all" className="text-white hover:bg-secondary/20">All Categories</SelectItem>
                            {CATEGORIES.map(cat => (
                              <SelectItem key={cat} value={cat} className="text-white hover:bg-secondary/20">{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="text-sm text-gray-300">
                        Showing {filteredTools.length} of {tools.length} tools
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tools List */}
                  <div className="grid gap-4">
                    {filteredTools.map((tool) => (
                      <Card key={tool.id} className="bg-primary/80 border-gray-700">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                                <Badge variant="secondary">{tool.category}</Badge>
                                {tool.is_featured && <Badge variant="default">Featured</Badge>}
                                {tool.is_verified && <Badge variant="outline">Verified</Badge>}
                              </div>
                              <p className="text-gray-300 mb-2">{tool.description}</p>
                              <div className="flex gap-4 text-sm text-gray-400">
                                {tool.website_url && (
                                  <span>Website: {tool.website_url}</span>
                                )}
                                {tool.pricing && (
                                  <span>Pricing: {tool.pricing}</span>
                                )}
                                {tool.rating && (
                                  <span>Rating: {tool.rating}/5</span>
                                )}
                              </div>
                              {tool.tags && tool.tags.length > 0 && (
                                <div className="flex gap-1 mt-2">
                                  {tool.tags.map((tag, index) => (
                                     <Badge key={index} variant="outline" className="text-xs border-gray-500 text-gray-300">
                                       {tag}
                                     </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEdit(tool)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDelete(tool.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="add" className="space-y-6">
                  <Card className="bg-primary/80 border-gray-700">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-white">
                          {editingTool ? "Edit Tool" : "Add New Tool"}
                        </CardTitle>
                        {(isAddingNew || editingTool) && (
                          <Button variant="outline" onClick={resetForm}>
                            Cancel
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-white font-medium">Name *</label>
                            <Input
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-white font-medium">Category *</label>
                            <Select
                              required
                              value={formData.category}
                              onValueChange={(value) => setFormData({...formData, category: value})}
                            >
                              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent className="bg-primary border-gray-700">
                                {CATEGORIES.map(cat => (
                                  <SelectItem key={cat} value={cat} className="text-white hover:bg-secondary/20">{cat}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-white font-medium">Description *</label>
                          <Textarea
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            className="bg-white/10 border-white/20 text-white"
                            rows={3}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-white font-medium">Website URL</label>
                            <Input
                              type="url"
                              value={formData.website_url}
                              onChange={(e) => setFormData({...formData, website_url: e.target.value})}
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-white font-medium">Pricing</label>
                            <Input
                              value={formData.pricing}
                              onChange={(e) => setFormData({...formData, pricing: e.target.value})}
                              placeholder="e.g., Free, $10/month"
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-white font-medium">Rating (1-5)</label>
                            <Input
                              type="number"
                              min="1"
                              max="5"
                              step="0.1"
                              value={formData.rating}
                              onChange={(e) => setFormData({...formData, rating: e.target.value})}
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-white font-medium">Tags (comma-separated)</label>
                            <Input
                              value={formData.tags}
                              onChange={(e) => setFormData({...formData, tags: e.target.value})}
                              placeholder="ai, productivity, automation"
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                        </div>

                        <div className="flex gap-6">
                          <label className="flex items-center space-x-2 text-white">
                            <input
                              type="checkbox"
                              checked={formData.is_featured}
                              onChange={(e) => setFormData({...formData, is_featured: e.target.checked})}
                              className="rounded"
                            />
                            <span>Featured Tool</span>
                          </label>
                          
                          <label className="flex items-center space-x-2 text-white">
                            <input
                              type="checkbox"
                              checked={formData.is_verified}
                              onChange={(e) => setFormData({...formData, is_verified: e.target.checked})}
                              className="rounded"
                            />
                            <span>Verified Tool</span>
                          </label>
                        </div>

                        <div className="flex gap-4">
                          <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                            <Plus className="h-4 w-4 mr-2" />
                            {editingTool ? "Update Tool" : "Add Tool"}
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sync" className="space-y-6">
                  <AIToolsManager />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AdminTools;