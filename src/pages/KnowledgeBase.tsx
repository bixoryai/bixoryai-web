
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
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#0D1B2A] to-[#1A2B42]">
      <Navbar />
      
      {/* Enhanced Dark Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0D1B2A] to-[#1A2B42]"></div>
        
        {/* Floating accent elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF4D00]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#00F0FF] to-white bg-clip-text text-transparent drop-shadow-2xl">
              AI Knowledge Base
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive resources, guides, and insights into the world of artificial intelligence
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search for AI topics, tutorials, tools..." 
                className="pl-10 py-3 text-lg bg-gray-900/50 backdrop-blur-sm border-gray-700/50 text-white placeholder:text-gray-400 focus:border-[#00F0FF]/50 focus:ring-[#00F0FF]/25 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Enhanced Content Tabs */}
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50">
              <TabsTrigger value="articles" className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white">Articles & Guides</TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white">AI Tools</TabsTrigger>
              <TabsTrigger value="tutorials" className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white">Tutorials</TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white">External Resources</TabsTrigger>
            </TabsList>

            {/* Articles & Guides */}
            <TabsContent value="articles" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Articles & Guides</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  
                  {/* Enhanced Featured Article */}
                  <Card className="md:col-span-2 lg:col-span-3 bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-[#FF4D00]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF4D00]/20">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-[#FF4D00] text-sm font-medium">
                        <Book className="h-4 w-4" />
                        FEATURED ARTICLE
                      </div>
                      <CardTitle className="text-2xl text-white">
                        [Placeholder] Complete Guide to AI Implementation in Business
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        A comprehensive guide covering everything from AI strategy to implementation. 
                        This featured article will provide detailed insights into practical AI adoption.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Coming Soon</span>
                        <Button variant="outline" className="border-[#00F0FF]/50 text-[#00F0FF] hover:bg-[#00F0FF]/10">Read More</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Enhanced Article Cards */}
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
                    <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-gray-700/50 hover:border-[#00F0FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00F0FF]/10 hover:scale-105">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-[#FF4D00]/20 text-[#FF4D00] px-2 py-1 rounded border border-[#FF4D00]/30">
                            {article.category}
                          </span>
                          <Book className="h-4 w-4 text-gray-400" />
                        </div>
                        <CardTitle className="text-lg text-white">[Placeholder] {article.title}</CardTitle>
                        <CardDescription className="text-gray-300">{article.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
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
                <h2 className="text-3xl font-bold mb-6 text-white">AI Tools Directory</h2>
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
                    <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-gray-700/50 hover:border-[#00F0FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00F0FF]/10 hover:scale-105">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-[#00F0FF]/20 text-[#00F0FF] px-2 py-1 rounded border border-[#00F0FF]/30">
                            {tool.category}
                          </span>
                          <LinkIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <CardTitle className="text-lg text-white">{tool.name}</CardTitle>
                        <CardDescription className="text-gray-300">{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
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
                <h2 className="text-3xl font-bold mb-6 text-white">Step-by-Step Tutorials</h2>
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
                    <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-gray-700/50 hover:border-[#FF4D00]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF4D00]/10 hover:scale-105">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-[#FF4D00]/20 text-[#FF4D00] px-2 py-1 rounded border border-[#FF4D00]/30">
                            {tutorial.level}
                          </span>
                          <File className="h-4 w-4 text-gray-400" />
                        </div>
                        <CardTitle className="text-lg text-white">[Placeholder] {tutorial.title}</CardTitle>
                        <CardDescription className="text-gray-300">{tutorial.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-400">Duration: {tutorial.duration}</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
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
                <h2 className="text-3xl font-bold mb-6 text-white">External Resources</h2>
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
                    <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-gray-700/50 hover:border-[#00F0FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00F0FF]/10 hover:scale-105">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">
                            {resource.type}
                          </span>
                          <LinkIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <CardTitle className="text-lg text-white">{resource.title}</CardTitle>
                        <CardDescription className="text-gray-300">{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
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

          {/* Enhanced CTA Section with Contrasting Background */}
          <section className="mt-16 py-16 relative overflow-hidden rounded-lg border border-gray-700/30">
            {/* Contrasting gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B42] via-[#243447] to-[#0F1B2E]"></div>
            
            {/* Enhanced accent color overlays */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FF4D00]/15 via-transparent to-[#00F0FF]/15"></div>
              <div className="absolute top-5 left-10 w-60 h-60 bg-[#FF4D00]/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-5 right-10 w-48 h-48 bg-[#00F0FF]/25 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Subtle border glow */}
            <div className="absolute inset-0 border border-[#FF4D00]/20 rounded-lg shadow-[0_0_50px_rgba(255,77,0,0.1)]"></div>
            
            <div className="text-center relative z-10 px-8">
              <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-[#00F0FF] to-white bg-clip-text text-transparent drop-shadow-2xl">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Our knowledge base is constantly growing. Suggest new topics or request specific content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-[#FF4D00] to-[#FF4D00]/80 hover:from-[#FF4D00]/90 hover:to-[#FF4D00] text-white shadow-lg shadow-[#FF4D00]/25 hover:shadow-[#FF4D00]/40 hover:scale-105 transition-all duration-300">
                  <Link to="/about">Contact Us</Link>
                </Button>
                <Button variant="outline" className="border-[#00F0FF]/50 text-[#00F0FF] hover:bg-[#00F0FF]/10 hover:scale-105 transition-all duration-300">
                  Suggest Content
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KnowledgeBase;
