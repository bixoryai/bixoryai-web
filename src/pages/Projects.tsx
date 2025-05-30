
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Search, ExternalLink, Github, Play } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  status: "Completed" | "In Progress" | "Coming Soon";
  demoUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Placeholder projects data
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
      title: "Voice-to-Text Transcription",
      description: "High-accuracy speech recognition system with real-time processing capabilities.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=240&fit=crop",
      technologies: ["Whisper", "WebRTC", "React", "WebSockets"],
      category: "NLP",
      status: "In Progress"
    },
    {
      id: 5,
      title: "Automated Document Processing",
      description: "AI-powered system for extracting and categorizing information from documents.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=240&fit=crop",
      technologies: ["OCR", "spaCy", "MongoDB", "Express"],
      category: "Document AI",
      status: "Coming Soon"
    },
    {
      id: 6,
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

  const categories = ["All", "Machine Learning", "NLP", "Computer Vision", "Document AI"];
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero-pattern">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our AI Projects
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
                {projects.filter(p => p.status === "In Progress").length} In Progress
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {/* Status Filter */}
              <div className="flex flex-wrap gap-2">
                {statuses.map(status => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? "secondary" : "outline"}
                    size="sm"
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
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
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge 
                        className={`absolute top-3 right-3 ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map(tech => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </CardContent>
                    
                    <CardFooter className="flex gap-2">
                      {project.demoUrl && (
                        <Button size="sm" className="flex-1">
                          <Play className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
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
            <Button size="lg" className="px-8">
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
