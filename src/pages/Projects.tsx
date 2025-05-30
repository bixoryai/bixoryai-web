import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Search, ExternalLink, Github, Play, Star, GitFork, Users, Filter, ChevronDown } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  status: "Completed" | "In Progress" | "Coming Soon";
  isOpenSource?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  stars?: number;
  forks?: number;
  contributors?: number;
}

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Projects data including open-source projects
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Customer Support Bot",
      description: "Intelligent chatbot using NLP to handle customer inquiries with 95% accuracy rate.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=240&fit=crop",
      technologies: ["GPT-4", "Python", "TensorFlow", "React"],
      category: "NLP",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Computer Vision Quality Control",
      description: "Real-time defect detection system for manufacturing using advanced computer vision.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop",
      technologies: ["OpenCV", "PyTorch", "YOLO", "FastAPI"],
      category: "Computer Vision",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      description: "Machine learning platform for business forecasting and trend analysis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      technologies: ["Scikit-learn", "Pandas", "D3.js", "Node.js"],
      category: "Machine Learning",
      status: "Completed",
      demoUrl: "#"
    },
    {
      id: 4,
      title: "AI Music Creation Platform",
      description: "Open-source platform for generating AI-powered music compositions with customizable styles and instruments.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=240&fit=crop",
      technologies: ["PyTorch", "Magenta", "React", "Web Audio API"],
      category: "Creative AI",
      status: "Completed",
      isOpenSource: true,
      demoUrl: "#",
      githubUrl: "#",
      stars: 2847,
      forks: 543,
      contributors: 89
    },
    {
      id: 5,
      title: "AI Movie Creation Suite",
      description: "Comprehensive open-source toolkit for AI-assisted video generation, editing, and post-production workflows.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=240&fit=crop",
      technologies: ["Stable Diffusion", "FFmpeg", "Python", "TypeScript"],
      category: "Creative AI",
      status: "In Progress",
      isOpenSource: true,
      githubUrl: "#",
      stars: 1924,
      forks: 312,
      contributors: 64
    },
    {
      id: 6,
      title: "AI Agent Builder Framework",
      description: "Modular framework for building and deploying intelligent AI agents with custom capabilities and integrations.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop",
      technologies: ["LangChain", "OpenAI", "Docker", "Kubernetes"],
      category: "AI Agents",
      status: "Completed",
      isOpenSource: true,
      demoUrl: "#",
      githubUrl: "#",
      stars: 3621,
      forks: 782,
      contributors: 127
    },
    {
      id: 7,
      title: "Voice-to-Text Transcription",
      description: "High-accuracy speech recognition system with real-time processing capabilities.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=240&fit=crop",
      technologies: ["Whisper", "WebRTC", "React", "WebSockets"],
      category: "NLP",
      status: "In Progress"
    },
    {
      id: 8,
      title: "AI Crypto Trading Platform",
      description: "Open-source algorithmic trading platform with ML-powered market analysis and automated trading strategies.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=240&fit=crop",
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      category: "FinTech",
      status: "In Progress",
      isOpenSource: true,
      githubUrl: "#",
      stars: 1456,
      forks: 298,
      contributors: 43
    },
    {
      id: 9,
      title: "AI-Powered ECom Platform",
      description: "Complete e-commerce solution with AI-driven product recommendations, inventory management, and customer insights.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop",
      technologies: ["Next.js", "TensorFlow", "Stripe", "MongoDB"],
      category: "E-Commerce",
      status: "Completed",
      isOpenSource: true,
      demoUrl: "#",
      githubUrl: "#",
      stars: 892,
      forks: 156,
      contributors: 31
    },
    {
      id: 10,
      title: "Automated Document Processing",
      description: "AI-powered system for extracting and categorizing information from documents.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=240&fit=crop",
      technologies: ["OCR", "spaCy", "MongoDB", "Express"],
      category: "Document AI",
      status: "Coming Soon"
    },
    {
      id: 11,
      title: "Recommendation Engine",
      description: "Personalized recommendation system using collaborative and content-based filtering.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
      technologies: ["TensorFlow", "Apache Spark", "Redis", "PostgreSQL"],
      category: "Machine Learning",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Machine Learning", "NLP", "Computer Vision", "Document AI", "Creative AI", "AI Agents", "FinTech", "E-Commerce"];
  const statuses = ["All", "Completed", "In Progress", "Coming Soon"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800 hover:bg-green-200";
      case "In Progress": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "Coming Soon": return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTechColor = (tech: string) => {
    // Color code technologies by type
    const aiModels = ["GPT-4", "PyTorch", "TensorFlow", "Whisper", "OpenAI", "Stable Diffusion"];
    const frameworks = ["React", "Next.js", "FastAPI", "Express", "Docker", "Kubernetes"];
    const languages = ["Python", "TypeScript", "JavaScript"];
    const databases = ["MongoDB", "PostgreSQL", "Redis"];
    
    if (aiModels.some(model => tech.includes(model))) return "bg-purple-100 text-purple-800";
    if (frameworks.some(fw => tech.includes(fw))) return "bg-blue-100 text-blue-800";
    if (languages.some(lang => tech.includes(lang))) return "bg-green-100 text-green-800";
    if (databases.some(db => tech.includes(db))) return "bg-orange-100 text-orange-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#0D1B2A] to-[#0A192F]">
      <Navbar />
      
      {/* Enhanced Hero Section with Dark Theme */}
      <section 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('/lovable-uploads/4c8804a9-47d9-49dc-8702-904300926b2c.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Enhanced dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/80 via-[#0D1B2A]/70 to-[#0A192F]/90 z-0"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF4D00]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Our AI Projects
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Explore our innovative AI solutions that are transforming industries. 
              From machine learning models to computer vision systems, discover how we're building the future.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Badge className="bg-gradient-to-r from-[#FF4D00]/20 to-[#FF4D00]/10 border-[#FF4D00]/30 text-white px-6 py-3 text-base font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300">
                ⚡ {projects.length} Total Projects
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500/20 to-green-400/10 border-green-400/30 text-white px-6 py-3 text-base font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300">
                ✅ {projects.filter(p => p.status === "Completed").length} Completed
              </Badge>
              <Badge className="bg-gradient-to-r from-[#00F0FF]/20 to-[#00F0FF]/10 border-[#00F0FF]/30 text-white px-6 py-3 text-base font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300">
                🔓 {projects.filter(p => p.isOpenSource).length} Open Source
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Dark Filters Section */}
      <section className="py-10 border-b border-gray-800/50 bg-gradient-to-r from-[#0A192F]/90 to-[#0D1B2A]/90 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00]/10 to-[#00F0FF]/10 rounded-xl blur-sm"></div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search projects by name, description, or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-base bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 backdrop-blur-sm focus:border-[#00F0FF]/50 focus:ring-[#00F0FF]/20 transition-all duration-300"
                />
              </div>
            </div>
            
            {/* Enhanced Collapsible Filters */}
            <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <div className="flex items-center justify-between mb-6">
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-3 bg-gray-900/50 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-[#FF4D00]/50 transition-all duration-300 px-6 py-3 backdrop-blur-sm"
                  >
                    <Filter className="h-4 w-4" />
                    Advanced Filters
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <div className="text-sm text-gray-400 bg-gray-900/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-[#00F0FF] font-medium">{filteredProjects.length}</span> of <span className="text-white">{projects.length}</span> projects
                </div>
              </div>
              
              <CollapsibleContent className="space-y-6">
                {/* Enhanced Category Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300 block">Categories</label>
                  <div className="flex flex-wrap gap-3">
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={`transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                          selectedCategory === category 
                            ? "bg-gradient-to-r from-[#FF4D00] to-[#FF4D00]/80 border-[#FF4D00] text-white shadow-lg shadow-[#FF4D00]/25" 
                            : "bg-gray-900/50 border-gray-700/50 text-gray-300 hover:bg-gray-800/50 hover:border-[#FF4D00]/50 hover:text-white"
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced Status Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300 block">Project Status</label>
                  <div className="flex flex-wrap gap-3">
                    {statuses.map(status => (
                      <Button
                        key={status}
                        variant={selectedStatus === status ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => setSelectedStatus(status)}
                        className={`transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                          selectedStatus === status 
                            ? "bg-gradient-to-r from-[#00F0FF] to-[#00F0FF]/80 border-[#00F0FF] text-[#0A192F] font-medium shadow-lg shadow-[#00F0FF]/25" 
                            : "bg-gray-900/50 border-gray-700/50 text-gray-300 hover:bg-gray-800/50 hover:border-[#00F0FF]/50 hover:text-white"
                        }`}
                      >
                        {status}
                      </Button>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>

      {/* Enhanced Dark Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-[#0A192F] via-[#0D1B2A] to-[#0A192F]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#FF4D00]/20 to-[#00F0FF]/20 rounded-full flex items-center justify-center">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">No projects found</h3>
                <p className="text-gray-400 text-lg">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                  <Card 
                    key={project.id} 
                    className="overflow-hidden hover:shadow-2xl hover:shadow-[#FF4D00]/20 transition-all duration-500 hover:-translate-y-3 group cursor-pointer bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700/50 backdrop-blur-sm hover:border-[#FF4D00]/50"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent group-hover:from-gray-900/60 transition-all duration-500" />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Badge 
                          className={`${getStatusColor(project.status)} transition-all duration-300 hover:scale-105 backdrop-blur-sm font-medium`}
                        >
                          {project.status}
                        </Badge>
                        {project.isOpenSource && (
                          <Badge className="bg-gradient-to-r from-gray-900/90 to-black/90 text-white hover:bg-gradient-to-r hover:from-gray-800/90 hover:to-gray-900/90 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-gray-600/50">
                            <Github className="h-3 w-3 mr-1" />
                            Open Source
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl mb-2 group-hover:text-[#00F0FF] transition-colors duration-300 text-white font-bold">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed line-clamp-3 text-gray-400">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pb-3">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map(tech => (
                          <Badge 
                            key={tech} 
                            className={`text-xs transition-all duration-300 hover:scale-105 backdrop-blur-sm ${getTechColor(tech)} border border-gray-600/30`}
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge className="text-xs bg-gray-800/50 text-gray-300 border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge className="text-xs font-medium bg-gradient-to-r from-[#FF4D00]/20 to-[#FF4D00]/10 text-[#FF4D00] border border-[#FF4D00]/30">
                          {project.category}
                        </Badge>
                        {project.isOpenSource && (
                          <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-1 hover:text-yellow-400 transition-colors text-gray-400">
                              <Star className="h-3 w-3" />
                              <span className="font-medium">{project.stars?.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1 hover:text-blue-400 transition-colors text-gray-400">
                              <GitFork className="h-3 w-3" />
                              <span className="font-medium">{project.forks}</span>
                            </div>
                            <div className="flex items-center gap-1 hover:text-green-400 transition-colors text-gray-400">
                              <Users className="h-3 w-3" />
                              <span className="font-medium">{project.contributors}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex gap-2 pt-2">
                      {project.demoUrl && (
                        <Button size="sm" className="flex-1 group/btn bg-gradient-to-r from-[#FF4D00] to-[#FF4D00]/80 hover:from-[#FF4D00]/80 hover:to-[#FF4D00] text-white border-none shadow-lg shadow-[#FF4D00]/25 hover:shadow-[#FF4D00]/40 transition-all duration-300">
                          <Play className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                          Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" className="flex-1 group/btn bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-600/50 hover:border-[#00F0FF]/50 backdrop-blur-sm transition-all duration-300">
                          <Github className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                          Code
                        </Button>
                      )}
                      <Button size="sm" className="group/btn bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-[#00F0FF] border border-gray-600/50 hover:border-[#00F0FF]/50 backdrop-blur-sm transition-all duration-300">
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Contrasting Background */}
      <section className="py-20 relative overflow-hidden border-t border-gray-800/30">
        {/* Contrasting gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B42] via-[#243447] to-[#0F1B2E]"></div>
        
        {/* Enhanced accent color overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FF4D00]/15 via-transparent to-[#00F0FF]/15"></div>
          <div className="absolute top-10 left-20 w-96 h-96 bg-[#FF4D00]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#00F0FF]/25 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 border-t border-b border-[#FF4D00]/20 shadow-[0_0_50px_rgba(255,77,0,0.1)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00]/8 via-[#00F0FF]/8 to-[#FF4D00]/8 rounded-3xl blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00F0FF] to-white bg-clip-text text-transparent drop-shadow-2xl">
                Ready to Start Your AI Project?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Let's discuss how we can build custom AI solutions for your business needs.
              </p>
              <Button size="lg" className="px-10 py-4 text-lg bg-gradient-to-r from-[#FF4D00] to-[#FF4D00]/80 hover:from-[#FF4D00]/90 hover:to-[#FF4D00] text-white font-bold border-none shadow-2xl shadow-[#FF4D00]/30 hover:shadow-[#FF4D00]/50 hover:scale-105 transition-all duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00] to-[#FF4D00]/80 rounded-lg blur-lg opacity-50"></div>
                <span className="relative z-10">Get In Touch</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
