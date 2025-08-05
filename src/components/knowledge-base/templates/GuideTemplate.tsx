import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

            {/* Guide Sections - Accordion Style */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-white">Guide Sections</h2>
                <p className="text-gray-400">Click on any section to expand its content</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {sections.map((section, index) => (
                    <AccordionItem 
                      key={section.id} 
                      value={section.id}
                      className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/10 rounded-t-lg">
                        <div className="flex items-center gap-3 text-white w-full">
                          <Checkbox
                            checked={completedSections.has(section.id)}
                            onCheckedChange={() => toggleCompletion(section.id)}
                            className="border-[#00F0FF]/50 data-[state=checked]:bg-[#00F0FF] data-[state=checked]:border-[#00F0FF]"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className="bg-gradient-to-r from-[#FF4D00] to-[#FF6B35] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-lg font-semibold flex-1 text-left">{section.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6" id={section.id}>
                        <div className="text-gray-300 leading-relaxed space-y-4">
                          <div 
                            className="prose prose-invert prose-lg max-w-none
                              prose-headings:text-white prose-headings:font-bold
                              prose-p:text-gray-300 prose-p:leading-relaxed
                              prose-strong:text-white prose-strong:font-semibold
                              prose-ul:text-gray-300 prose-li:text-gray-300
                              prose-code:bg-gray-800 prose-code:text-[#00F0FF] prose-code:px-2 prose-code:py-1 prose-code:rounded
                              prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg
                              prose-img:rounded-lg prose-img:shadow-lg prose-img:border prose-img:border-gray-700"
                            dangerouslySetInnerHTML={{ 
                              __html: section.content
                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                .replace(/• /g, '<li>')
                                .replace(/\n\n/g, '</p><p>')
                                .replace(/```python\n([\s\S]*?)\n```/g, '<pre><code class="language-python">$1</code></pre>')
                                .replace(/```yaml\n([\s\S]*?)\n```/g, '<pre><code class="language-yaml">$1</code></pre>')
                                .replace(/```dockerfile\n([\s\S]*?)\n```/g, '<pre><code class="language-dockerfile">$1</code></pre>')
                                .replace(/```\n([\s\S]*?)\n```/g, '<pre><code>$1</code></pre>')
                                .replace(/`([^`]+)`/g, '<code>$1</code>')
                            }}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Downloadable Resources - Moved to end */}
            {downloadableResources.length > 0 && (
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm mt-12 shadow-lg">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-white">Take These Resources With You</h2>
                  <p className="text-gray-400">Download these materials to support your AI development journey</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};