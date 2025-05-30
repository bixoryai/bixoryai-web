
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, Book, Link as LinkIcon, File } from "lucide-react";

const KnowledgeBase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Knowledge Base
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive resources, guides, and insights into the world of artificial intelligence
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search for AI topics, tutorials, tools..." 
                className="pl-10 py-3 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Content Tabs */}
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
              <TabsTrigger value="tools">AI Tools</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="resources">External Resources</TabsTrigger>
            </TabsList>

            {/* Articles & Guides */}
            <TabsContent value="articles" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Articles & Guides</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  
                  {/* Featured Article Placeholder */}
                  <Card className="md:col-span-2 lg:col-span-3 border-secondary/20">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-secondary text-sm font-medium">
                        <Book className="h-4 w-4" />
                        FEATURED ARTICLE
                      </div>
                      <CardTitle className="text-2xl">
                        [Placeholder] Complete Guide to AI Implementation in Business
                      </CardTitle>
                      <CardDescription>
                        A comprehensive guide covering everything from AI strategy to implementation. 
                        This featured article will provide detailed insights into practical AI adoption.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Coming Soon</span>
                        <Button variant="outline">Read More</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Article Placeholders */}
                  {[
                    {
                      title: "Understanding Machine Learning Fundamentals",
                      description: "Basic concepts and principles of machine learning for beginners.",
                      category: "Beginner"
                    },
                    {
                      title: "Natural Language Processing in Practice",
                      description: "Real-world applications and implementation strategies for NLP.",
                      category: "Intermediate"
                    },
                    {
                      title: "Computer Vision: From Theory to Application",
                      description: "Exploring computer vision technologies and their practical uses.",
                      category: "Advanced"
                    },
                    {
                      title: "AI Ethics and Responsible Development",
                      description: "Guidelines and best practices for ethical AI development.",
                      category: "Essential"
                    },
                    {
                      title: "Building AI-Powered Applications",
                      description: "Step-by-step guide to creating applications with AI capabilities.",
                      category: "Development"
                    },
                    {
                      title: "AI in Healthcare: Opportunities and Challenges",
                      description: "Exploring AI applications in the healthcare industry.",
                      category: "Industry"
                    }
                  ].map((article, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <Book className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg">[Placeholder] {article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">
                          Coming Soon
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* AI Tools */}
            <TabsContent value="tools" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">AI Tools Directory</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "ChatGPT",
                      description: "Advanced conversational AI for various tasks and applications.",
                      category: "Language Models",
                      url: "https://openai.com/chatgpt"
                    },
                    {
                      name: "Midjourney",
                      description: "AI-powered image generation and creative design tool.",
                      category: "Image Generation",
                      url: "https://midjourney.com"
                    },
                    {
                      name: "GitHub Copilot",
                      description: "AI pair programmer that helps write code faster.",
                      category: "Development",
                      url: "https://github.com/features/copilot"
                    },
                    {
                      name: "Notion AI",
                      description: "AI-powered writing and productivity assistant.",
                      category: "Productivity",
                      url: "https://notion.so"
                    },
                    {
                      name: "Runway ML",
                      description: "Creative AI tools for video, image, and audio generation.",
                      category: "Creative",
                      url: "https://runwayml.com"
                    },
                    {
                      name: "Custom AI Tool",
                      description: "Placeholder for Bixory AI's proprietary tools and solutions.",
                      category: "Bixory Tools",
                      url: "#"
                    }
                  ].map((tool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                            {tool.category}
                          </span>
                          <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
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

            {/* Tutorials */}
            <TabsContent value="tutorials" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Step-by-Step Tutorials</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Getting Started with AI: A Beginner's Journey",
                      description: "Complete tutorial series for those new to artificial intelligence.",
                      duration: "2 hours",
                      level: "Beginner"
                    },
                    {
                      title: "Building Your First Chatbot",
                      description: "Learn to create and deploy a functional AI chatbot from scratch.",
                      duration: "3 hours",
                      level: "Intermediate"
                    },
                    {
                      title: "Implementing Computer Vision in Web Apps",
                      description: "Hands-on tutorial for adding computer vision to your applications.",
                      duration: "4 hours",
                      level: "Advanced"
                    },
                    {
                      title: "AI Model Training and Fine-tuning",
                      description: "Learn the process of training and optimizing AI models for specific tasks.",
                      duration: "5 hours",
                      level: "Advanced"
                    }
                  ].map((tutorial, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {tutorial.level}
                          </span>
                          <File className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg">[Placeholder] {tutorial.title}</CardTitle>
                        <CardDescription>{tutorial.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-muted-foreground">Duration: {tutorial.duration}</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Coming Soon
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* External Resources */}
            <TabsContent value="resources" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">External Resources</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "OpenAI Documentation",
                      description: "Official documentation for OpenAI's API and models.",
                      url: "https://platform.openai.com/docs",
                      type: "Documentation"
                    },
                    {
                      title: "Hugging Face Hub",
                      description: "Repository of pre-trained AI models and datasets.",
                      url: "https://huggingface.co",
                      type: "Platform"
                    },
                    {
                      title: "Papers With Code",
                      description: "Latest AI research papers with accompanying code implementations.",
                      url: "https://paperswithcode.com",
                      type: "Research"
                    },
                    {
                      title: "AI Ethics Guidelines",
                      description: "Comprehensive guidelines for responsible AI development.",
                      url: "https://ai.google/responsibilities/responsible-ai-practices/",
                      type: "Ethics"
                    },
                    {
                      title: "MIT AI Course",
                      description: "Free online course covering AI fundamentals and applications.",
                      url: "https://ocw.mit.edu",
                      type: "Education"
                    },
                    {
                      title: "AI News & Updates",
                      description: "Stay updated with the latest developments in AI technology.",
                      url: "https://venturebeat.com/ai/",
                      type: "News"
                    }
                  ].map((resource, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            {resource.type}
                          </span>
                          <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            Visit Resource
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
          <section className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-200 mb-6">
              Our knowledge base is constantly growing. Suggest new topics or request specific content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-primary hover:bg-gray-100">
                <Link to="/about">Contact Us</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Suggest Content
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KnowledgeBase;
