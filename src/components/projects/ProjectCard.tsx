import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star, GitFork, Users } from "lucide-react";

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

interface ProjectCardProps {
  project: Project;
  getTechColor: (tech: string) => string;
  getStatusColor: (status: string) => string;
}

const ProjectCard = ({ project, getTechColor, getStatusColor }: ProjectCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-2xl hover:shadow-[#FF4D00]/20 transition-all duration-500 hover:-translate-y-3 group cursor-pointer bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700/50 backdrop-blur-sm hover:border-[#FF4D00]/50"
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={`${project.title} project screenshot`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent group-hover:from-gray-900/60 transition-all duration-500" />
        <div className="absolute top-3 right-3 flex flex-col sm:flex-row gap-2">
          <Badge 
            className={`${getStatusColor(project.status)} transition-all duration-300 hover:scale-105 backdrop-blur-sm font-medium text-xs`}
          >
            {project.status}
          </Badge>
          {project.isOpenSource && (
            <Badge className="bg-gradient-to-r from-gray-900/90 to-black/90 text-white hover:bg-gradient-to-r hover:from-gray-800/90 hover:to-gray-900/90 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-gray-600/50 text-xs">
              <Github className="h-3 w-3 mr-1" />
              Open Source
            </Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle 
          id={`project-title-${project.id}`}
          className="text-lg sm:text-xl mb-2 group-hover:text-[#00F0FF] transition-colors duration-300 text-white font-bold line-clamp-2"
        >
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed line-clamp-3 text-gray-400">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
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
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Badge className="text-xs font-medium bg-gradient-to-r from-[#FF4D00]/20 to-[#FF4D00]/10 text-[#FF4D00] border border-[#FF4D00]/30">
            {project.category}
          </Badge>
          {project.isOpenSource && (
            <div className="flex items-center gap-3 sm:gap-4 text-xs">
              <div className="flex items-center gap-1 hover:text-yellow-400 transition-colors text-gray-400" title={`${project.stars} stars`}>
                <Star className="h-3 w-3" />
                <span className="font-medium">{project.stars?.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-blue-400 transition-colors text-gray-400" title={`${project.forks} forks`}>
                <GitFork className="h-3 w-3" />
                <span className="font-medium">{project.forks}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-green-400 transition-colors text-gray-400" title={`${project.contributors} contributors`}>
                <Users className="h-3 w-3" />
                <span className="font-medium">{project.contributors}</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2 pt-2">
        {project.demoUrl && (
          <Button 
            size="sm" 
            className="flex-1 group/btn bg-gradient-to-r from-[#FF4D00] to-[#FF4D00]/80 hover:from-[#FF4D00]/80 hover:to-[#FF4D00] text-white border-none shadow-lg shadow-[#FF4D00]/25 hover:shadow-[#FF4D00]/40 transition-all duration-300 text-xs sm:text-sm"
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 transition-transform group-hover/btn:scale-110" />
            Visit
          </Button>
        )}
        {project.githubUrl && (
          <Button 
            size="sm" 
            className="flex-1 group/btn bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-600/50 hover:border-[#00F0FF]/50 backdrop-blur-sm transition-all duration-300 text-xs sm:text-sm"
            aria-label={`View source code for ${project.title}`}
          >
            <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 transition-transform group-hover/btn:scale-110" />
            Github Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
