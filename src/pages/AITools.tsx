import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Search, Zap, Code, Palette, BarChart3, Cog, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aiToolsHeroImage from "@/assets/solutions-hero.jpg";

interface AITool {
  name: string;
  description: string;
  category: string;
  pricing: string;
  rating: number;
  website: string;
  tags: string[];
  featured?: boolean;
}

const aiTools: AITool[] = [
  // Content Creation Tools
  {
    name: "ChatGPT",
    description: "Advanced conversational AI for writing, coding, and creative tasks",
    category: "Content",
    pricing: "Free / $20/month",
    rating: 4.8,
    website: "https://chat.openai.com",
    tags: ["Writing", "Conversational AI", "OpenAI"],
    featured: true
  },
  {
    name: "Claude",
    description: "Anthropic's AI assistant for analysis, writing, and coding",
    category: "Content",
    pricing: "Free / $20/month",
    rating: 4.7,
    website: "https://claude.ai",
    tags: ["Writing", "Analysis", "Anthropic"]
  },
  {
    name: "Jasper AI",
    description: "AI writing assistant for marketing and business content",
    category: "Content",
    pricing: "$49/month",
    rating: 4.5,
    website: "https://jasper.ai",
    tags: ["Marketing", "Content Creation", "Business"]
  },
  {
    name: "Copy.ai",
    description: "AI-powered copywriting for marketing campaigns",
    category: "Content",
    pricing: "Free / $36/month",
    rating: 4.3,
    website: "https://copy.ai",
    tags: ["Copywriting", "Marketing", "Sales"]
  },

  // Development Tools
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster",
    category: "Development",
    pricing: "$10/month",
    rating: 4.6,
    website: "https://github.com/features/copilot",
    tags: ["Coding", "IDE", "GitHub"],
    featured: true
  },
  {
    name: "Cursor",
    description: "AI-first code editor built for productivity",
    category: "Development",
    pricing: "Free / $20/month",
    rating: 4.7,
    website: "https://cursor.sh",
    tags: ["Code Editor", "AI Assistant", "Productivity"]
  },
  {
    name: "Replit AI",
    description: "AI-powered collaborative coding environment",
    category: "Development",
    pricing: "Free / $7/month",
    rating: 4.4,
    website: "https://replit.com",
    tags: ["Collaboration", "Cloud IDE", "Learning"]
  },
  {
    name: "Tabnine",
    description: "AI assistant for software developers",
    category: "Development",
    pricing: "Free / $12/month",
    rating: 4.2,
    website: "https://tabnine.com",
    tags: ["Code Completion", "IDE Plugin", "Team"]
  },

  // Design Tools
  {
    name: "Midjourney",
    description: "AI image generation for creative and artistic purposes",
    category: "Design",
    pricing: "$10/month",
    rating: 4.9,
    website: "https://midjourney.com",
    tags: ["Image Generation", "Art", "Creative"],
    featured: true
  },
  {
    name: "DALL-E 3",
    description: "OpenAI's advanced image generation model",
    category: "Design",
    pricing: "Pay per use",
    rating: 4.6,
    website: "https://openai.com/dall-e-3",
    tags: ["Image Generation", "OpenAI", "Creative"]
  },
  {
    name: "Canva AI",
    description: "AI-powered design tools for everyone",
    category: "Design",
    pricing: "Free / $15/month",
    rating: 4.4,
    website: "https://canva.com",
    tags: ["Design", "Templates", "Social Media"]
  },
  {
    name: "Figma AI",
    description: "AI features integrated into Figma design platform",
    category: "Design",
    pricing: "Free / $12/month",
    rating: 4.5,
    website: "https://figma.com",
    tags: ["UI/UX", "Collaboration", "Prototyping"]
  },

  // Analytics Tools
  {
    name: "Tableau AI",
    description: "AI-powered data visualization and analytics",
    category: "Analytics",
    pricing: "$75/month",
    rating: 4.3,
    website: "https://tableau.com",
    tags: ["Data Visualization", "Business Intelligence", "Enterprise"]
  },
  {
    name: "Power BI AI",
    description: "Microsoft's AI-enhanced business analytics platform",
    category: "Analytics",
    pricing: "$10/month",
    rating: 4.2,
    website: "https://powerbi.microsoft.com",
    tags: ["Microsoft", "Business Intelligence", "Data Analysis"]
  },
  {
    name: "Google Analytics Intelligence",
    description: "AI-powered insights for web analytics",
    category: "Analytics",
    pricing: "Free",
    rating: 4.1,
    website: "https://analytics.google.com",
    tags: ["Web Analytics", "Google", "Insights"]
  },

  // Productivity Tools
  {
    name: "Notion AI",
    description: "AI writing assistant integrated into Notion workspace",
    category: "Productivity",
    pricing: "$8/month",
    rating: 4.4,
    website: "https://notion.so",
    tags: ["Workspace", "Writing", "Organization"]
  },
  {
    name: "Grammarly",
    description: "AI-powered writing assistant and grammar checker",
    category: "Productivity",
    pricing: "Free / $12/month",
    rating: 4.5,
    website: "https://grammarly.com",
    tags: ["Writing", "Grammar", "Editing"]
  },
  {
    name: "Otter.ai",
    description: "AI meeting assistant that records and transcribes",
    category: "Productivity",
    pricing: "Free / $17/month",
    rating: 4.3,
    website: "https://otter.ai",
    tags: ["Transcription", "Meetings", "Note-taking"]
  },

  // AI Models & Platforms
  {
    name: "OpenAI API",
    description: "Access to GPT models and other AI capabilities",
    category: "AI Models",
    pricing: "Pay per use",
    rating: 4.7,
    website: "https://openai.com/api",
    tags: ["API", "GPT", "Integration"],
    featured: true
  },
  {
    name: "Anthropic API",
    description: "Claude AI models for developers",
    category: "AI Models",
    pricing: "Pay per use",
    rating: 4.6,
    website: "https://anthropic.com",
    tags: ["API", "Claude", "Safe AI"]
  },
  {
    name: "Google Gemini",
    description: "Google's multimodal AI model",
    category: "AI Models",
    pricing: "Free / Pay per use",
    rating: 4.4,
    website: "https://gemini.google.com",
    tags: ["Multimodal", "Google", "API"]
  },
  {
    name: "Hugging Face",
    description: "Open-source AI model hub and platform",
    category: "AI Models",
    pricing: "Free / $9/month",
    rating: 4.5,
    website: "https://huggingface.co",
    tags: ["Open Source", "Models", "Community"]
  }
];

const AITools = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const heroAnimation = useScrollAnimation();
  const toolsAnimation = useScrollAnimation();

  const filteredTools = aiTools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getToolsByCategory = (category: string) => {
    if (category === "All") return filteredTools;
    return filteredTools.filter(tool => tool.category === category);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Content": return <Zap className="w-4 h-4" />;
      case "Development": return <Code className="w-4 h-4" />;
      case "Design": return <Palette className="w-4 h-4" />;
      case "Analytics": return <BarChart3 className="w-4 h-4" />;
      case "Productivity": return <Cog className="w-4 h-4" />;
      case "AI Models": return <Brain className="w-4 h-4" />;
      default: return null;
    }
  };

  const renderToolCard = (tool: AITool, index: number) => (
    <Card 
      key={tool.name} 
      className={`bg-primary/80 border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 ${
        tool.featured ? 'border-2 border-accent' : ''
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">{tool.name}</CardTitle>
          {tool.featured && (
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
              {getCategoryIcon(tool.category)}
              <span className="ml-1">{tool.category}</span>
            </Badge>
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1 text-sm">{tool.rating}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{tool.pricing}</span>
            <Button 
              size="sm" 
              className="bg-secondary hover:bg-secondary/90 text-white"
              asChild
            >
              <a href={tool.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                Visit
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-1">
            {tool.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-400">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary">
        {/* Hero Section */}
        <section 
          ref={heroAnimation.elementRef}
          className="relative pt-24 pb-20 overflow-hidden"
          style={{
            background: `linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url(${aiToolsHeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="container mx-auto px-6">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Popular{" "}
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                  AI Tools
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Discover the most powerful AI tools across every category. From content creation to development, 
                find the perfect AI solution for your needs.
              </p>
              
              {/* Search Bar */}
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
        <section ref={toolsAnimation.elementRef} className="py-20">
          <div className="container mx-auto px-6">
            <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
              toolsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Tabs defaultValue="All" className="w-full">
                <TabsList className="grid grid-cols-7 bg-gray-900/50 border border-gray-700 mb-8 [&>*]:text-gray-300 [&>*:hover]:text-white">
                  <TabsTrigger value="All" className="data-[state=active]:bg-secondary data-[state=active]:text-white text-gray-300 hover:text-white">
                    All ({getToolsByCategory("All").length})
                  </TabsTrigger>
                  <TabsTrigger value="Content" className="data-[state=active]:bg-secondary data-[state=active]:text-white text-gray-300 hover:text-white">
                    <Zap className="w-4 h-4 mr-1" />
                    Content ({getToolsByCategory("Content").length})
                  </TabsTrigger>
                  <TabsTrigger value="Development" className="data-[state=active]:bg-secondary data-[state=active]:text-white text-gray-300 hover:text-white">
                    <Code className="w-4 h-4 mr-1" />
                    Development ({getToolsByCategory("Development").length})
                  </TabsTrigger>
                  <TabsTrigger value="Design" className="data-[state=active]:bg-secondary data-[state=active]:text-white text-gray-300 hover:text-white">
                    <Palette className="w-4 h-4 mr-1" />
                    Design ({getToolsByCategory("Design").length})
                  </TabsTrigger>
                  <TabsTrigger value="Analytics" className="data-[state=active]:bg-secondary data-[state=active]:text-white text-gray-300 hover:text-white">
                    <BarChart3 className="w-4 h-4 mr-1" />
                    Analytics ({getToolsByCategory("Analytics").length})
                  </TabsTrigger>
                  <TabsTrigger value="Productivity" className="data-[state=active]:bg-secondary data-[state=active]:text-white text-gray-300 hover:text-white">
                    <Cog className="w-4 h-4 mr-1" />
                    Productivity ({getToolsByCategory("Productivity").length})
                  </TabsTrigger>
                  <TabsTrigger value="AI Models" className="data-[state=active]:bg-secondary data-[state=active]:text-white text-gray-300 hover:text-white">
                    <Brain className="w-4 h-4 mr-1" />
                    AI Models ({getToolsByCategory("AI Models").length})
                  </TabsTrigger>
                </TabsList>

                {/* All Tools Tab */}
                <TabsContent value="All" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {getToolsByCategory("All").map(renderToolCard)}
                  </div>
                </TabsContent>

                {/* Category-specific tabs */}
                {['Content', 'Development', 'Design', 'Analytics', 'Productivity', 'AI Models'].map((category) => (
                  <TabsContent key={category} value={category} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {getToolsByCategory(category).map(renderToolCard)}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-blue-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Help Choosing the Right AI Tool?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Our AI experts can help you select and implement the perfect tools for your specific use case and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full"
                  asChild
                >
                  <a href="/contact">
                    Get Consultation
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-full"
                  asChild
                >
                  <a href="/solutions">
                    View Solutions
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