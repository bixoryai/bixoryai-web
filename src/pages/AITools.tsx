import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, Bot, Palette, Code, BarChart3, FileText, Video, Headphones, Star, ExternalLink } from "lucide-react";

const AITools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-secondary/90 to-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Popular AI Tools
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover and explore the most powerful AI tools across every category
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search AI tools by name, category, or feature..." 
                className="pl-10 py-3 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Content Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-8">
              <TabsTrigger value="all">All Tools</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="productivity">Productivity</TabsTrigger>
              <TabsTrigger value="ai-models">AI Models</TabsTrigger>
            </TabsList>

            {/* All Tools */}
            <TabsContent value="all" className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold">Featured AI Tools</h2>
                  <div className="text-sm text-muted-foreground">
                    {/* Placeholder for tool count */}
                    120+ tools available
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "ChatGPT",
                      description: "Advanced conversational AI for various tasks and applications.",
                      category: "Content Generation",
                      pricing: "Freemium",
                      rating: 4.8,
                      featured: true,
                      url: "https://openai.com/chatgpt"
                    },
                    {
                      name: "Midjourney",
                      description: "AI-powered image generation and creative design tool.",
                      category: "Design & Art",
                      pricing: "Paid",
                      rating: 4.7,
                      featured: true,
                      url: "https://midjourney.com"
                    },
                    {
                      name: "GitHub Copilot",
                      description: "AI pair programmer that helps write code faster.",
                      category: "Development",
                      pricing: "Paid",
                      rating: 4.6,
                      featured: true,
                      url: "https://github.com/features/copilot"
                    },
                    {
                      name: "Notion AI",
                      description: "AI-powered writing and productivity assistant.",
                      category: "Productivity",
                      pricing: "Freemium",
                      rating: 4.5,
                      featured: false,
                      url: "https://notion.so"
                    },
                    {
                      name: "Runway ML",
                      description: "Creative AI tools for video, image, and audio generation.",
                      category: "Creative",
                      pricing: "Freemium",
                      rating: 4.4,
                      featured: false,
                      url: "https://runwayml.com"
                    },
                    {
                      name: "Jasper AI",
                      description: "AI content creation platform for marketing and copywriting.",
                      category: "Content Generation",
                      pricing: "Paid",
                      rating: 4.3,
                      featured: false,
                      url: "#"
                    },
                    {
                      name: "Stable Diffusion",
                      description: "Open-source AI image generation model and tools.",
                      category: "Design & Art",
                      pricing: "Free",
                      rating: 4.5,
                      featured: false,
                      url: "#"
                    },
                    {
                      name: "Claude AI",
                      description: "Helpful, harmless, and honest AI assistant by Anthropic.",
                      category: "Content Generation",
                      pricing: "Freemium",
                      rating: 4.6,
                      featured: false,
                      url: "#"
                    },
                    {
                      name: "Bixory AI Tools",
                      description: "Coming soon - Proprietary AI tools and solutions by Bixory.",
                      category: "Custom Solutions",
                      pricing: "TBA",
                      rating: 0,
                      featured: true,
                      url: "#"
                    }
                  ].map((tool, index) => (
                    <Card key={index} className={`hover:shadow-lg transition-shadow ${tool.featured ? 'ring-2 ring-primary/20' : ''}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={tool.pricing === 'Free' ? 'default' : tool.pricing === 'Freemium' ? 'secondary' : 'outline'}>
                              {tool.pricing}
                            </Badge>
                            {tool.featured && <Badge variant="destructive">Featured</Badge>}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-muted-foreground">
                              {tool.rating > 0 ? tool.rating : 'New'}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {tool.name}
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                        <div className="text-xs text-muted-foreground">{tool.category}</div>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href={tool.url} target="_blank" rel="noopener noreferrer">
                            {tool.url === "#" ? "Coming Soon" : "Visit Tool"}
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Content Generation Tools */}
            <TabsContent value="content" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="h-8 w-8" />
                  Content Generation Tools
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "ChatGPT - Conversational AI",
                    "Jasper AI - Marketing Copy",
                    "Copy.ai - Sales Content",
                    "Writesonic - Blog Writing",
                    "Claude AI - Long-form Content",
                    "Grammarly AI - Writing Enhancement"
                  ].map((tool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">[Placeholder] {tool}</CardTitle>
                        <CardDescription>Detailed information about this content generation tool will be populated through web crawling.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">Coming Soon</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Development Tools */}
            <TabsContent value="development" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Code className="h-8 w-8" />
                  Development Tools
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "GitHub Copilot - Code Completion",
                    "Tabnine - AI Code Assistant",
                    "Replit AI - Collaborative Coding",
                    "CodeT5 - Code Generation",
                    "Cursor - AI Code Editor",
                    "Amazon CodeWhisperer - AWS Integration"
                  ].map((tool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">[Placeholder] {tool}</CardTitle>
                        <CardDescription>Detailed information about this development tool will be populated through web crawling.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">Coming Soon</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Design Tools */}
            <TabsContent value="design" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Palette className="h-8 w-8" />
                  Design & Creative Tools
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Midjourney - Image Generation",
                    "DALL-E 3 - OpenAI Images",
                    "Stable Diffusion - Open Source",
                    "Figma AI - Design Assistant",
                    "Canva AI - Graphic Design",
                    "Adobe Firefly - Creative Suite"
                  ].map((tool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">[Placeholder] {tool}</CardTitle>
                        <CardDescription>Detailed information about this design tool will be populated through web crawling.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">Coming Soon</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Analytics Tools */}
            <TabsContent value="analytics" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="h-8 w-8" />
                  Analytics & Data Tools
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "MonkeyLearn - Text Analytics",
                    "DataRobot - AutoML Platform",
                    "H2O.ai - Machine Learning",
                    "Tableau AI - Data Visualization",
                    "Power BI AI - Business Intelligence",
                    "Google Analytics Intelligence"
                  ].map((tool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">[Placeholder] {tool}</CardTitle>
                        <CardDescription>Detailed information about this analytics tool will be populated through web crawling.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">Coming Soon</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Productivity Tools */}
            <TabsContent value="productivity" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Bot className="h-8 w-8" />
                  Productivity Tools
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Notion AI - Workspace Assistant",
                    "Zapier AI - Automation",
                    "Calendly AI - Scheduling",
                    "Otter.ai - Meeting Transcription",
                    "Grammarly - Writing Assistant",
                    "Motion AI - Task Management"
                  ].map((tool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">[Placeholder] {tool}</CardTitle>
                        <CardDescription>Detailed information about this productivity tool will be populated through web crawling.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">Coming Soon</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* AI Models for Chatbot */}
            <TabsContent value="ai-models" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Bot className="h-8 w-8" />
                  Popular AI Models for Chatbot
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "GPT-4",
                      description: "OpenAI's most advanced language model for conversational AI and complex reasoning.",
                      category: "Language Model",
                      pricing: "Paid",
                      rating: 4.8,
                      featured: true,
                      url: "https://openai.com/gpt-4"
                    },
                    {
                      name: "Claude 3",
                      description: "Anthropic's powerful AI assistant with enhanced safety and reasoning capabilities.",
                      category: "Language Model",
                      pricing: "Freemium",
                      rating: 4.7,
                      featured: true,
                      url: "https://claude.ai"
                    },
                    {
                      name: "Gemini Pro",
                      description: "Google's multimodal AI model with advanced language understanding.",
                      category: "Language Model",
                      pricing: "Freemium",
                      rating: 4.6,
                      featured: true,
                      url: "https://gemini.google.com"
                    },
                    {
                      name: "Llama 2",
                      description: "Meta's open-source large language model for chatbot development.",
                      category: "Open Source",
                      pricing: "Free",
                      rating: 4.5,
                      featured: false,
                      url: "https://llama.meta.com"
                    },
                    {
                      name: "Mistral 7B",
                      description: "High-performance open-source model optimized for efficiency and quality.",
                      category: "Open Source",
                      pricing: "Free",
                      rating: 4.4,
                      featured: false,
                      url: "https://mistral.ai"
                    },
                    {
                      name: "PaLM 2",
                      description: "Google's large language model powering Bard and other applications.",
                      category: "Language Model",
                      pricing: "Paid",
                      rating: 4.3,
                      featured: false,
                      url: "#"
                    },
                    {
                      name: "Cohere Command",
                      description: "Enterprise-focused language model for business applications.",
                      category: "Enterprise",
                      pricing: "Paid",
                      rating: 4.2,
                      featured: false,
                      url: "https://cohere.com"
                    },
                    {
                      name: "Falcon 40B",
                      description: "Open-source large language model trained on diverse, high-quality data.",
                      category: "Open Source",
                      pricing: "Free",
                      rating: 4.1,
                      featured: false,
                      url: "#"
                    },
                    {
                      name: "ChatGLM3",
                      description: "Bilingual conversational language model optimized for Chinese and English.",
                      category: "Multilingual",
                      pricing: "Free",
                      rating: 4.0,
                      featured: false,
                      url: "#"
                    }
                  ].map((model, index) => (
                    <Card key={index} className={`hover:shadow-lg transition-shadow ${model.featured ? 'ring-2 ring-primary/20' : ''}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={model.pricing === 'Free' ? 'default' : model.pricing === 'Freemium' ? 'secondary' : 'outline'}>
                              {model.pricing}
                            </Badge>
                            {model.featured && <Badge variant="destructive">Featured</Badge>}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-muted-foreground">
                              {model.rating}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {model.name}
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </CardTitle>
                        <CardDescription>{model.description}</CardDescription>
                        <div className="text-xs text-muted-foreground">{model.category}</div>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href={model.url} target="_blank" rel="noopener noreferrer">
                            {model.url === "#" ? "Coming Soon" : "Learn More"}
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <section className="mt-16 bg-gradient-to-r from-secondary to-accent rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Submit Your AI Tool
            </h2>
            <p className="text-xl text-gray-200 mb-6">
              Know an amazing AI tool that's not listed? Help us expand our directory!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-secondary hover:bg-gray-100">
                <Link to="/about">Contact Us</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Submit Tool
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AITools;
