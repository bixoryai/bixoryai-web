import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProjectFilters from "@/components/projects/ProjectFilters";
import TechnologyLegend from "@/components/projects/TechnologyLegend";
import ProjectCard from "@/components/projects/ProjectCard";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  createdAt?: string;
}

const Projects = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Projects data reordered with AI Music and Movie platforms first
  const projects: Project[] = [
    {
      id: 4,
      title: "Opentunes AI - Create and Showcase Your AI Musics",
      description: "Revolutionary platform where artists and music enthusiasts can create, discover, and showcase AI-generated music compositions with advanced tools and community features.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=240&fit=crop",
      technologies: ["PyTorch", "Magenta", "React", "Web Audio API"],
      category: "Creative AI",
      status: "Completed",
      isOpenSource: true,
      demoUrl: "https://opentunes.ai",
      githubUrl: "#",
      stars: 2847,
      forks: 543,
      contributors: 89,
      createdAt: "2024-03-05"
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
      demoUrl: "https://openmovies.ai",
      githubUrl: "#",
      stars: 1924,
      forks: 312,
      contributors: 64,
      createdAt: "2024-02-28"
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
      demoUrl: "https://bixory.com",
      githubUrl: "#",
      stars: 892,
      forks: 156,
      contributors: 31,
      createdAt: "2024-01-30"
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
      demoUrl: "https://aicryptopia.com",
      githubUrl: "#",
      stars: 1456,
      forks: 298,
      contributors: 43,
      createdAt: "2024-01-25"
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
      contributors: 127,
      createdAt: "2024-03-12"
    },
    {
      id: 1,
      title: "AI Customer Support Bot",
      description: "Intelligent chatbot using NLP to handle customer inquiries with 95% accuracy rate.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=240&fit=crop",
      technologies: ["GPT-4", "Python", "TensorFlow", "React"],
      category: "NLP",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Computer Vision Quality Control",
      description: "Real-time defect detection system for manufacturing using advanced computer vision.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop",
      technologies: ["OpenCV", "PyTorch", "YOLO", "FastAPI"],
      category: "Computer Vision",
      status: "In Progress",
      demoUrl: "#",
      githubUrl: "#",
      createdAt: "2024-02-20"
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      description: "Machine learning platform for business forecasting and trend analysis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      technologies: ["Scikit-learn", "Pandas", "D3.js", "Node.js"],
      category: "Machine Learning",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#",
      createdAt: "2024-01-10"
    },
    {
      id: 7,
      title: "Voice-to-Text Transcription",
      description: "High-accuracy speech recognition system with real-time processing capabilities.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=240&fit=crop",
      technologies: ["Whisper", "WebRTC", "React", "WebSockets"],
      category: "NLP",
      status: "In Progress",
      demoUrl: "#",
      githubUrl: "#",
      createdAt: "2024-02-15"
    },
    {
      id: 10,
      title: "Automated Document Processing",
      description: "AI-powered system for extracting and categorizing information from documents.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=240&fit=crop",
      technologies: ["OCR", "spaCy", "MongoDB", "Express"],
      category: "Document AI",
      status: "Coming Soon",
      demoUrl: "#",
      githubUrl: "#",
      createdAt: "2024-04-01"
    },
  ];

  const categories = ["All", "Machine Learning", "NLP", "Computer Vision", "Document AI", "Creative AI", "AI Agents", "FinTech", "E-Commerce"];
  const statuses = ["All", "Completed", "In Progress", "Coming Soon"];

  const filteredAndSortedProjects = projects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "stars":
          return (b.stars || 0) - (a.stars || 0);
        case "name":
          return a.title.localeCompare(b.title);
        case "status":
          const statusOrder = { "Completed": 0, "In Progress": 1, "Coming Soon": 2 };
          return statusOrder[a.status] - statusOrder[b.status];
        case "recent":
          return new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime();
        case "default":
        default:
          // Maintain original array order by using the index in the original projects array
          return projects.indexOf(a) - projects.indexOf(b);
      }
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
      
      {/* Hero Section using reusable Hero component */}
      <Hero
        backgroundImage="/lovable-uploads/4c8804a9-47d9-49dc-8702-904300926b2c.png"
        title="Our AI Projects"
        subtitle="Explore our innovative AI solutions that are transforming industries. From machine learning models to computer vision systems, discover how we're building the future."
        showButtons={false}
        height="pt-32 pb-20"
      >
        {/* Custom content for project stats */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 px-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.1s_forwards]">
          <Badge className="bg-gradient-to-r from-[#FF4D00]/20 to-[#FF4D00]/10 border-[#FF4D00]/30 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300">
            ⚡ {projects.length} Total Projects
          </Badge>
          <Badge className="bg-gradient-to-r from-green-500/20 to-green-400/10 border-green-400/30 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300">
            ✅ {projects.filter(p => p.status === "Completed").length} Completed
          </Badge>
          <Badge className="bg-gradient-to-r from-[#00F0FF]/20 to-[#00F0FF]/10 border-[#00F0FF]/30 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300">
            🔓 {projects.filter(p => p.isOpenSource).length} Open Source
          </Badge>
        </div>
      </Hero>

      {/* Enhanced Dark Filters Section */}
      <ProjectFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filteredCount={filteredAndSortedProjects.length}
        totalCount={projects.length}
        categories={categories}
        statuses={statuses}
      />

      {/* Enhanced Dark Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-[#0A192F] via-[#0D1B2A] to-[#0A192F]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Technology Legend */}
            <TechnologyLegend />
            
            {filteredAndSortedProjects.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#FF4D00]/20 to-[#00F0FF]/20 rounded-full flex items-center justify-center">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">No projects found</h3>
                <p className="text-gray-400 text-lg">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {filteredAndSortedProjects.map(project => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    getTechColor={getTechColor}
                    getStatusColor={getStatusColor}
                  />
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
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00]/8 via-[#00F0FF]/8 to-[#FF4D00]/8 rounded-3xl blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00F0FF] to-white bg-clip-text text-transparent drop-shadow-2xl">
                Ready to Start Your AI Project?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed px-4">
                Let's discuss how we can build custom AI solutions for your business needs.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-[#FF4D00] to-[#FF4D00]/80 hover:from-[#FF4D00]/90 hover:to-[#FF4D00] text-white font-bold border-none rounded-lg shadow-2xl shadow-[#FF4D00]/30 hover:shadow-[#FF4D00]/50 hover:scale-105 transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-[#FF4D00]/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00] to-[#FF4D00]/80 rounded-lg blur-lg opacity-50"></div>
                <span className="relative z-10">Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
