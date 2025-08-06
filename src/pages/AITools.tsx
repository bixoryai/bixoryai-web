import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Search, Zap, Code, Palette, BarChart3, Cog, Brain, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AITool {
  id: string;
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
  status: string;
}

const AITools = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tools, setTools] = useState<AITool[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchTools();
  }, []);

  const fetchTools = async () => {
    try {
      const { data, error } = await supabase
        .from('ai_tools')
        .select('*')
        .eq('status', 'active')
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTools(data || []);
    } catch (error) {
      console.error('Error fetching tools:', error);
      toast({
        title: "Error",
        description: "Failed to load AI tools",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getToolsByCategory = (category: string) => {
    if (category === "All") return filteredTools;
    return filteredTools.filter(tool => tool.category === category);
  };

  const renderToolCard = (tool: AITool) => (
    <Card 
      key={tool.id} 
      className={`bg-primary/80 border-gray-700 hover:shadow-lg transition-shadow duration-300 ${
        tool.is_featured ? 'border-2 border-accent' : ''
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">{tool.name}</CardTitle>
          {tool.is_featured && (
            <Badge className="bg-accent text-primary">Featured</Badge>
          )}
        </div>
        <CardDescription className="text-gray-300">
          {tool.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-gray-700 text-gray-300">
              {tool.category}
            </Badge>
            {tool.rating && (
              <div className="flex items-center text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 text-sm">{tool.rating}</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{tool.pricing}</span>
            <Button 
              size="sm" 
              className="bg-secondary hover:bg-secondary/90 text-white"
              asChild
            >
              <a href={tool.website_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                Visit
              </a>
            </Button>
          </div>
          {tool.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tool.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-400">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const renderLoadingCards = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="bg-primary/80 border-gray-700 animate-pulse">
          <CardHeader className="pb-3">
            <div className="h-6 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-6 bg-gray-700 rounded w-20"></div>
                <div className="h-4 bg-gray-700 rounded w-12"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="h-4 bg-gray-700 rounded w-16"></div>
                <div className="h-8 bg-gray-700 rounded w-20"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderEmptyState = () => (
    <div className="text-center py-12">
      <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl text-white mb-2">No AI Tools Found</h3>
      <p className="text-gray-400 mb-6">Try adjusting your search terms or check back later</p>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary">
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                  BIXORY AI
                </span>{" "}
                Tools Directory
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Discover and explore the most powerful AI tools across every category
              </p>
              
              {/* Search Controls */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search AI tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-accent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="grid grid-cols-7 bg-gray-900/50 border border-gray-700">
                <TabsTrigger value="All" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                  All ({getToolsByCategory("All").length})
                </TabsTrigger>
                <TabsTrigger value="Content" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                  <Zap className="w-4 h-4 mr-1" />
                  Content ({getToolsByCategory("Content").length})
                </TabsTrigger>
                <TabsTrigger value="Development" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                  <Code className="w-4 h-4 mr-1" />
                  Development ({getToolsByCategory("Development").length})
                </TabsTrigger>
                <TabsTrigger value="Design" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                  <Palette className="w-4 h-4 mr-1" />
                  Design ({getToolsByCategory("Design").length})
                </TabsTrigger>
                <TabsTrigger value="Analytics" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                  <BarChart3 className="w-4 h-4 mr-1" />
                  Analytics ({getToolsByCategory("Analytics").length})
                </TabsTrigger>
                <TabsTrigger value="Productivity" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                  <Cog className="w-4 h-4 mr-1" />
                  Productivity ({getToolsByCategory("Productivity").length})
                </TabsTrigger>
                <TabsTrigger value="AI Models" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                  <Brain className="w-4 h-4 mr-1" />
                  AI Models ({getToolsByCategory("AI Models").length})
                </TabsTrigger>
              </TabsList>

              {/* All Tools Tab */}
              <TabsContent value="All" className="space-y-6">
                {loading ? renderLoadingCards() : 
                 getToolsByCategory("All").length === 0 ? renderEmptyState() : (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {getToolsByCategory("All").map(renderToolCard)}
                  </div>
                )}
              </TabsContent>

              {/* Category-specific tabs */}
              {['Content', 'Development', 'Design', 'Analytics', 'Productivity', 'AI Models'].map((category) => (
                <TabsContent key={category} value={category} className="space-y-6">
                  {loading ? renderLoadingCards() : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {getToolsByCategory(category).map(renderToolCard)}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-blue-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Missing an AI Tool?
              </h2>
               <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Can't find the AI tool you're looking for? Let us know and we'll add it to our directory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full"
                  asChild
                >
                  <a href="/contact">
                    <Plus className="w-5 h-5 mr-2" />
                    Submit Tool
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-full"
                  asChild
                >
                  <a href="/contact">
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AITools;