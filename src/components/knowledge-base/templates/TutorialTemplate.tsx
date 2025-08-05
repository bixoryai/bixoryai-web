import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Star, Code, Play, Copy, CheckCircle } from "lucide-react";

interface CodeBlock {
  language: string;
  code: string;
  filename?: string;
}

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  codeBlocks?: CodeBlock[];
  beforeAfter?: {
    before: string;
    after: string;
  };
  tryItYourself?: string;
}

interface TutorialTemplateProps {
  title: string;
  description: string;
  difficulty?: 1 | 2 | 3 | 4 | 5;
  estimatedTime?: number;
  technologies?: string[];
  prerequisites?: string[];
  steps: TutorialStep[];
  finalProject?: {
    description: string;
    demoUrl?: string;
    githubUrl?: string;
  };
  tags?: string[];
}

export const TutorialTemplate = ({
  title,
  description,
  difficulty = 3,
  estimatedTime = 45,
  technologies = [],
  prerequisites = [],
  steps,
  finalProject,
  tags = []
}: TutorialTemplateProps) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getDifficultyStars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < level ? 'text-[#FF4D00] fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] to-[#0D1B2A] py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{estimatedTime} minutes</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">Difficulty:</span>
              <div className="flex gap-1">
                {getDifficultyStars(difficulty)}
              </div>
            </div>
          </div>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-[#00F0FF] border-[#00F0FF]/50">
                  <Code className="h-3 w-3 mr-1" />
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <p className="text-lg text-gray-300 leading-relaxed mb-6">{description}</p>
        </div>

        {/* Prerequisites */}
        {prerequisites.length > 0 && (
          <Card className="bg-gray-900/50 border-gray-700/50 mb-8">
            <CardHeader>
              <h2 className="text-xl font-semibold text-white">What You'll Need</h2>
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

        {/* Tutorial Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card key={step.id} className="bg-gray-900/50 border-gray-700/50">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-white">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </CardHeader>
              <CardContent>
                {/* Code Blocks */}
                {step.codeBlocks && step.codeBlocks.length > 0 && (
                  <div className="space-y-4 mb-6">
                    {step.codeBlocks.map((codeBlock, blockIndex) => (
                      <div key={blockIndex} className="relative">
                        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
                          <div className="flex items-center gap-2">
                            <Code className="h-4 w-4 text-[#00F0FF]" />
                            <span className="text-sm text-gray-300">
                              {codeBlock.filename || codeBlock.language}
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(codeBlock.code, `${step.id}-${blockIndex}`)}
                            className="text-gray-400 hover:text-white"
                          >
                            {copiedCode === `${step.id}-${blockIndex}` ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <pre className="bg-gray-950 p-4 rounded-b-lg overflow-x-auto">
                          <code className="text-green-400 text-sm">
                            {codeBlock.code}
                          </code>
                        </pre>
                      </div>
                    ))}
                  </div>
                )}

                {/* Before/After Comparison */}
                {step.beforeAfter && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Before & After</h4>
                    <Tabs defaultValue="before" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 bg-gray-800">
                        <TabsTrigger value="before" className="data-[state=active]:bg-gray-700">
                          Before
                        </TabsTrigger>
                        <TabsTrigger value="after" className="data-[state=active]:bg-gray-700">
                          After
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="before">
                        <Card className="bg-gray-950 border-gray-700">
                          <CardContent className="p-4">
                            <pre className="text-gray-400 text-sm overflow-x-auto">
                              {step.beforeAfter.before}
                            </pre>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="after">
                        <Card className="bg-gray-950 border-gray-700">
                          <CardContent className="p-4">
                            <pre className="text-green-400 text-sm overflow-x-auto">
                              {step.beforeAfter.after}
                            </pre>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </div>
                )}

                {/* Try It Yourself */}
                {step.tryItYourself && (
                  <Card className="bg-[#FF4D00]/10 border-[#FF4D00]/30">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Play className="h-5 w-5 text-[#FF4D00]" />
                        <h4 className="text-lg font-semibold text-white">Try It Yourself</h4>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{step.tryItYourself}</p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final Project */}
        {finalProject && (
          <Card className="bg-gradient-to-r from-[#FF4D00]/10 to-[#00F0FF]/10 border-[#00F0FF]/30 mt-8">
            <CardHeader>
              <h2 className="text-2xl font-semibold text-white">🎉 Congratulations!</h2>
              <p className="text-gray-300">{finalProject.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {finalProject.demoUrl && (
                  <Button
                    variant="outline"
                    className="border-[#00F0FF]/50 text-[#00F0FF] hover:bg-[#00F0FF]/10"
                    onClick={() => window.open(finalProject.demoUrl, '_blank')}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                )}
                {finalProject.githubUrl && (
                  <Button
                    variant="outline"
                    className="border-[#FF4D00]/50 text-[#FF4D00] hover:bg-[#FF4D00]/10"
                    onClick={() => window.open(finalProject.githubUrl, '_blank')}
                  >
                    <Code className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};