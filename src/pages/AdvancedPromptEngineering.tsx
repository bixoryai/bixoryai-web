import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuideNavigation from "@/components/navigation/GuideNavigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Brain, Target, Zap, Users, MessageSquare, BookOpen } from "lucide-react";

const AdvancedPromptEngineering = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const promptTechniques = [
    {
      title: "Chain-of-Thought Prompting",
      description: "Guide the AI through step-by-step reasoning",
      icon: Brain,
      example: `Let's solve this step by step:
1. First, identify the key variables
2. Apply the relevant formula
3. Calculate the result
4. Verify our answer`
    },
    {
      title: "Few-Shot Learning",
      description: "Provide examples to establish patterns",
      icon: Target,
      example: `Example 1: Input: "Happy" → Sentiment: Positive
Example 2: Input: "Frustrated" → Sentiment: Negative
Example 3: Input: "Excited" → Sentiment: Positive
Now classify: "Overwhelmed" → Sentiment: ?`
    },
    {
      title: "Role-Based Prompting",
      description: "Define specific personas for context",
      icon: Users,
      example: `You are a senior software architect with 15 years of experience in distributed systems. Analyze this system design and provide architectural recommendations...`
    },
    {
      title: "Temperature Control",
      description: "Adjust creativity vs. consistency",
      icon: Zap,
      example: `High Temperature (0.8-1.0): Creative writing, brainstorming
Low Temperature (0.1-0.3): Code generation, factual responses
Balanced (0.5-0.7): General conversation, analysis`
    }
  ];

  const advancedStrategies = [
    {
      title: "Prompt Chaining",
      description: "Break complex tasks into sequential prompts",
      steps: [
        "Initial context setting",
        "Problem decomposition", 
        "Solution generation",
        "Result validation"
      ]
    },
    {
      title: "Negative Prompting",
      description: "Specify what you don't want in responses",
      steps: [
        "Identify common unwanted outputs",
        "Add explicit exclusions",
        "Test edge cases",
        "Refine constraints"
      ]
    },
    {
      title: "Multi-Modal Prompting",
      description: "Combine text, images, and other inputs",
      steps: [
        "Prepare visual context",
        "Write descriptive text prompts",
        "Align modalities",
        "Validate understanding"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <GuideNavigation />
      
      <div className="min-h-screen bg-primary">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div 
            ref={heroRef}
            className={`container mx-auto px-6 transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
                Advanced Guide
              </Badge>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Advanced Prompt 
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                  {" "}Engineering
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Master sophisticated prompting techniques to unlock the full potential of large language models. 
                Learn advanced strategies used by AI professionals to achieve precise, consistent, and powerful results.
              </p>

              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <BookOpen size={16} />
                  20 min read
                </span>
                <span>•</span>
                <span>Advanced Level</span>
                <span>•</span>
                <span>Updated Dec 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div 
            ref={contentRef}
            className={`container mx-auto px-6 transition-all duration-1000 delay-300 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <Card className="bg-primary/80 border-gray-700 mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Why Advanced Prompting Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    While basic prompting can get simple tasks done, advanced techniques are essential for:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Achieving consistent, reliable outputs for production systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Handling complex, multi-step reasoning tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Optimizing performance and reducing computational costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Building sophisticated AI-powered applications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Core Techniques */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">Core Advanced Techniques</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {promptTechniques.map((technique, index) => (
                    <Card key={index} className="bg-primary/80 border-gray-700 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <technique.icon className="w-6 h-6 text-accent" />
                          <CardTitle className="text-xl text-white">{technique.title}</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">
                          {technique.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-900/50 p-4 rounded-lg">
                          <h4 className="text-sm font-semibold text-accent mb-2">Example:</h4>
                          <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                            {technique.example}
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator className="my-12 bg-gray-700" />

              {/* Advanced Strategies */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">Advanced Strategies</h2>
                <div className="space-y-6">
                  {advancedStrategies.map((strategy, index) => (
                    <Card key={index} className="bg-primary/80 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{strategy.title}</CardTitle>
                        <CardDescription className="text-gray-300">
                          {strategy.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {strategy.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-accent/20 text-accent rounded-full flex items-center justify-center text-sm font-semibold">
                                {stepIndex + 1}
                              </div>
                              <span className="text-sm text-gray-300">{step}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Best Practices */}
              <Card className="bg-gradient-to-br from-primary via-primary to-blue-900 border-gray-700 mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-accent" />
                    Best Practices for Production
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Testing & Validation</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Create comprehensive test datasets</li>
                        <li>• A/B test different prompt versions</li>
                        <li>• Monitor output quality metrics</li>
                        <li>• Implement feedback loops</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Optimization</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Balance prompt length vs. clarity</li>
                        <li>• Use prompt templates for consistency</li>
                        <li>• Cache common prompt patterns</li>
                        <li>• Version control your prompts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tools & Resources */}
              <Card className="bg-primary/80 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Tools & Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Prompt Libraries</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• PromptBase</li>
                        <li>• Awesome ChatGPT Prompts</li>
                        <li>• LangChain Hub</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Testing Tools</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• PromptFoo</li>
                        <li>• LangSmith</li>
                        <li>• Weights & Biases</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Development</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• LangChain</li>
                        <li>• LlamaIndex</li>
                        <li>• OpenAI API</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AdvancedPromptEngineering;