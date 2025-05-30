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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative"
        style={{
          backgroundImage: "url('/lovable-uploads/4c8804a9-47d9-49dc-8702-904300926b2c.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our AI Projects
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Explore our innovative AI solutions that are transforming industries. 
              From machine learning models to computer vision systems, discover how we're building the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2">
                {projects.length} Total Projects
              </Badge>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2">
                {projects.filter(p => p.status === "Completed").length} Completed
              </Badge>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2">
                {projects.filter(p => p.isOpenSource).length} Open Source
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters Section */}
      <section className="py-8 border-b bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search projects by name, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            
            {/* Collapsible Filters */}
            <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <div className="flex items-center justify-between mb-4">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                    <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <div className="text-sm text-muted-foreground">
                  {filteredProjects.length} of {projects.length} projects
                </div>
              </div>
              
              <CollapsibleContent className="space-y-4">
                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="transition-all duration-200 hover:scale-105"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Status Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
                  <div className="flex flex-wrap gap-2">
                    {statuses.map(status => (
                      <Button
                        key={status}
                        variant={selectedStatus === status ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => setSelectedStatus(status)}
                        className="transition-all duration-200 hover:scale-105"
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

      {/* Enhanced Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                  <Card 
                    key={project.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Badge 
                          className={`${getStatusColor(project.status)} transition-all duration-200`}
                        >
                          {project.status}
                        </Badge>
                        {project.isOpenSource && (
                          <Badge className="bg-black text-white hover:bg-gray-800 transition-colors duration-200">
                            <Github className="h-3 w-3 mr-1" />
                            Open Source
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pb-3">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map(tech => (
                          <Badge 
                            key={tech} 
                            className={`text-xs transition-all duration-200 hover:scale-105 ${getTechColor(tech)}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs font-medium">
                          {project.category}
                        </Badge>
                        {project.isOpenSource && (
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1 hover:text-yellow-600 transition-colors">
                              <Star className="h-3 w-3" />
                              <span className="font-medium">{project.stars?.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                              <GitFork className="h-3 w-3" />
                              <span className="font-medium">{project.forks}</span>
                            </div>
                            <div className="flex items-center gap-1 hover:text-green-600 transition-colors">
                              <Users className="h-3 w-3" />
                              <span className="font-medium">{project.contributors}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex gap-2 pt-2">
                      {project.demoUrl && (
                        <Button size="sm" className="flex-1 group/btn">
                          <Play className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                          View Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="flex-1 group/btn">
                          <Github className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                          {project.isOpenSource ? "Contribute" : "View Code"}
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="group/btn">
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

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can build custom AI solutions for your business needs.
            </p>
            <Button size="lg" className="px-8 hover:scale-105 transition-transform duration-200">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
