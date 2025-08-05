import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, FileDown, CheckCircle, Circle, ChevronRight, ChevronDown } from "lucide-react";

interface GuideSection {
  id: string;
  title: string;
  content: string;
  completed?: boolean;
}

interface GuideTemplateProps {
  title: string;
  description: string;
  estimatedTime?: number;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  prerequisites?: string[];
  sections: GuideSection[];
  downloadableResources?: { title: string; url: string; type: string }[];
  tags?: string[];
}

export const GuideTemplate = ({
  title,
  description,
  estimatedTime = 30,
  difficulty = "Beginner",
  prerequisites = [],
  sections,
  downloadableResources = [],
  tags = []
}: GuideTemplateProps) => {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set([sections[0]?.id]));

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const toggleCompletion = (sectionId: string) => {
    setCompletedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const completionPercentage = (completedSections.size / sections.length) * 100;

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner": return "text-green-400 border-green-400";
      case "Intermediate": return "text-yellow-400 border-yellow-400";
      case "Advanced": return "text-red-400 border-red-400";
      default: return "text-gray-400 border-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm sticky top-8 shadow-xl">
              <CardHeader>
                <h3 className="text-lg font-semibold text-white">Contents</h3>
                <Progress value={completionPercentage} className="w-full" />
                <span className="text-sm text-gray-400">
                  {completedSections.size} of {sections.length} completed
                </span>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant="ghost"
                      className="w-full justify-start h-auto p-2 text-left"
                      onClick={() => {
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className="flex items-center gap-2 w-full">
                        {completedSections.has(section.id) ? (
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        ) : (
                          <Circle className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        )}
                        <span className="text-sm text-white truncate">{section.title}</span>
                      </div>
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Header - Only show if title is provided */}
            {title && (
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h1>
                
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{estimatedTime} minutes</span>
                  </div>
                  <Badge variant="outline" className={getDifficultyColor(difficulty)}>
                    {difficulty}
                  </Badge>
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[#00F0FF] border-[#00F0FF]/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {description && <p className="text-lg text-gray-300 leading-relaxed mb-6">{description}</p>}
              </div>
            )}

            {/* Prerequisites */}
            {prerequisites.length > 0 && (
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-8 shadow-lg">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-white">Prerequisites</h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-[#00F0FF] flex-shrink-0" />
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Downloadable Resources */}
            {downloadableResources.length > 0 && (
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-8 shadow-lg">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-white">Resources</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {downloadableResources.map((resource, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="justify-start bg-white/5 border border-[#FF4D00]/30 text-white hover:bg-[#FF4D00]/20 hover:border-[#FF4D00]/50 transition-all duration-300"
                        onClick={() => window.open(resource.url, '_blank')}
                      >
                        <FileDown className="h-4 w-4 mr-2 text-[#FF4D00]" />
                        <span className="flex-1 text-left">{resource.title}</span>
                        <Badge variant="outline" className="ml-auto text-xs text-[#00F0FF] border-[#00F0FF]/50 bg-transparent">
                          {resource.type}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Guide Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <Card key={section.id} id={section.id} className="bg-white/5 border-white/10 backdrop-blur-sm shadow-lg hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={completedSections.has(section.id)}
                          onCheckedChange={() => toggleCompletion(section.id)}
                          className="border-[#00F0FF]/50 data-[state=checked]:bg-[#00F0FF] data-[state=checked]:border-[#00F0FF]"
                        />
                        <h3 className="text-xl font-semibold text-white">
                          {index + 1}. {section.title}
                        </h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSection(section.id)}
                      >
                        {expandedSections.has(section.id) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  {expandedSections.has(section.id) && (
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};