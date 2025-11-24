import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, BookOpen, Terminal, Cpu, Server, Bot, Database, 
  Network, GitBranch, Settings, FileCode, Workflow, Package,
  CheckCircle, ExternalLink, Download, Copy
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import aiDevelopmentHeroImage from "@/assets/ai-development-hero.jpg";

const technicalCategories = [
  {
    id: "agents",
    title: "AI Agent Frameworks",
    icon: <Bot className="w-5 h-5" />,
    sections: [
      {
        name: "LangChain & LangGraph",
        description: "Comprehensive framework for building LLM-powered applications with graph-based workflows",
        links: [
          { label: "Official Documentation", url: "https://python.langchain.com/docs/get_started/introduction" },
          { label: "LangGraph Guide", url: "https://langchain-ai.github.io/langgraph/" },
          { label: "GitHub Repository", url: "https://github.com/langchain-ai/langchain" }
        ],
        features: ["Stateful agents", "Multi-agent orchestration", "Custom tool integration", "Memory management"]
      },
      {
        name: "CrewAI",
        description: "Multi-agent orchestration framework for role-based AI agent collaboration",
        links: [
          { label: "Official Documentation", url: "https://docs.crewai.com/" },
          { label: "GitHub Repository", url: "https://github.com/joaomdmoura/crewAI" }
        ],
        features: ["Role-based agents", "Task delegation", "Sequential workflows", "Collaborative problem solving"]
      },
      {
        name: "AutoGen",
        description: "Microsoft's framework for building multi-agent conversational systems",
        links: [
          { label: "Official Documentation", url: "https://microsoft.github.io/autogen/" },
          { label: "GitHub Repository", url: "https://github.com/microsoft/autogen" }
        ],
        features: ["Conversational agents", "Code execution", "Human-in-the-loop", "Group chat support"]
      },
      {
        name: "LlamaIndex",
        description: "Data framework for connecting LLMs with external data sources",
        links: [
          { label: "Official Documentation", url: "https://docs.llamaindex.ai/" },
          { label: "GitHub Repository", url: "https://github.com/run-llama/llama_index" }
        ],
        features: ["RAG pipelines", "Document indexing", "Query engines", "Vector store integrations"]
      }
    ]
  },
  {
    id: "local-deployment",
    title: "Local Deployment",
    icon: <Server className="w-5 h-5" />,
    sections: [
      {
        name: "Ollama",
        description: "Run large language models locally with ease",
        links: [
          { label: "Official Website", url: "https://ollama.ai/" },
          { label: "Model Library", url: "https://ollama.ai/library" },
          { label: "GitHub Repository", url: "https://github.com/ollama/ollama" }
        ],
        features: ["Simple CLI interface", "Model management", "REST API", "GPU acceleration"]
      },
      {
        name: "LM Studio",
        description: "Desktop application for running local LLMs with a user-friendly interface",
        links: [
          { label: "Official Website", url: "https://lmstudio.ai/" },
          { label: "Documentation", url: "https://lmstudio.ai/docs" }
        ],
        features: ["GUI interface", "Model discovery", "Chat interface", "API server"]
      },
      {
        name: "vLLM",
        description: "High-throughput and memory-efficient inference engine for LLMs",
        links: [
          { label: "Official Documentation", url: "https://docs.vllm.ai/" },
          { label: "GitHub Repository", url: "https://github.com/vllm-project/vllm" }
        ],
        features: ["PagedAttention", "Continuous batching", "OpenAI-compatible API", "Tensor parallelism"]
      },
      {
        name: "llama.cpp",
        description: "C++ implementation for efficient LLaMA model inference",
        links: [
          { label: "GitHub Repository", url: "https://github.com/ggerganov/llama.cpp" }
        ],
        features: ["CPU/GPU support", "Quantization", "Low memory usage", "Fast inference"]
      }
    ]
  },
  {
    id: "ml-frameworks",
    title: "ML Frameworks",
    icon: <Cpu className="w-5 h-5" />,
    sections: [
      {
        name: "TensorFlow",
        description: "End-to-end open-source platform for machine learning",
        links: [
          { label: "Official Documentation", url: "https://www.tensorflow.org/learn" },
          { label: "API Reference", url: "https://www.tensorflow.org/api_docs" },
          { label: "GitHub Repository", url: "https://github.com/tensorflow/tensorflow" }
        ],
        features: ["Production deployment", "Mobile & edge", "TensorBoard visualization", "Keras integration"]
      },
      {
        name: "PyTorch",
        description: "Deep learning framework with dynamic computational graphs",
        links: [
          { label: "Official Documentation", url: "https://pytorch.org/docs/stable/index.html" },
          { label: "Tutorials", url: "https://pytorch.org/tutorials/" },
          { label: "GitHub Repository", url: "https://github.com/pytorch/pytorch" }
        ],
        features: ["Dynamic graphs", "GPU acceleration", "Research-friendly", "TorchScript deployment"]
      },
      {
        name: "Scikit-learn",
        description: "Simple and efficient tools for predictive data analysis",
        links: [
          { label: "Official Documentation", url: "https://scikit-learn.org/stable/documentation.html" },
          { label: "User Guide", url: "https://scikit-learn.org/stable/user_guide.html" },
          { label: "GitHub Repository", url: "https://github.com/scikit-learn/scikit-learn" }
        ],
        features: ["Classical ML algorithms", "Model selection", "Preprocessing utilities", "Evaluation metrics"]
      }
    ]
  },
  {
    id: "mlops",
    title: "MLOps & Deployment",
    icon: <Network className="w-5 h-5" />,
    sections: [
      {
        name: "Docker",
        description: "Containerization platform for consistent deployments",
        links: [
          { label: "Official Documentation", url: "https://docs.docker.com/" },
          { label: "Docker Hub", url: "https://hub.docker.com/" }
        ],
        features: ["Container orchestration", "Image management", "Multi-stage builds", "Docker Compose"]
      },
      {
        name: "Kubernetes",
        description: "Container orchestration for automated deployment and scaling",
        links: [
          { label: "Official Documentation", url: "https://kubernetes.io/docs/" },
          { label: "Tutorials", url: "https://kubernetes.io/docs/tutorials/" }
        ],
        features: ["Auto-scaling", "Self-healing", "Load balancing", "Rolling updates"]
      },
      {
        name: "MLflow",
        description: "Platform for managing the ML lifecycle",
        links: [
          { label: "Official Documentation", url: "https://mlflow.org/docs/latest/index.html" },
          { label: "GitHub Repository", url: "https://github.com/mlflow/mlflow" }
        ],
        features: ["Experiment tracking", "Model registry", "Model deployment", "Project packaging"]
      }
    ]
  }
];

const quickstartGuides = [
  {
    title: "Setting Up LangChain Agent",
    language: "Python",
    code: `from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI

# Define tools
tools = [
    Tool(
        name="Calculator",
        func=lambda x: eval(x),
        description="Useful for math calculations"
    )
]

# Initialize agent
llm = OpenAI(temperature=0)
agent = initialize_agent(
    tools, 
    llm, 
    agent="zero-shot-react-description",
    verbose=True
)

# Run agent
agent.run("What is 25 * 4 + 10?")`,
    icon: <Bot className="w-5 h-5 text-secondary" />
  },
  {
    title: "Running Ollama Locally",
    language: "Bash",
    code: `# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Pull a model
ollama pull llama2

# Run the model
ollama run llama2

# Use REST API
curl http://localhost:11434/api/generate -d '{
  "model": "llama2",
  "prompt": "Why is the sky blue?"
}'`,
    icon: <Server className="w-5 h-5 text-secondary" />
  },
  {
    title: "PyTorch Neural Network",
    language: "Python",
    code: `import torch
import torch.nn as nn

# Define model
class NeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(28*28, 512),
            nn.ReLU(),
            nn.Linear(512, 512),
            nn.ReLU(),
            nn.Linear(512, 10)
        )

    def forward(self, x):
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits

model = NeuralNetwork()`,
    icon: <Cpu className="w-5 h-5 text-secondary" />
  }
];

const TechnicalDocs = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation(0.3);
  const { elementRef: docsRef, isVisible: docsVisible } = useScrollAnimation(0.3);
  const { elementRef: guidesRef, isVisible: guidesVisible } = useScrollAnimation(0.3);

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        backgroundImage={aiDevelopmentHeroImage}
        title="Technical Documentation"
        subtitle="Comprehensive guides, API references, and implementation resources for building custom AI solutions with modern frameworks and deployment tools."
        primaryButtonText="View GitHub"
        secondaryButtonText="Download PDF"
        height="pt-24 pb-20"
        onPrimaryClick={() => window.open("https://github.com/bixoryai", "_blank")}
        onSecondaryClick={() => {}}
      />

      {/* Documentation Tabs */}
      <section ref={docsRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
            docsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Tabs defaultValue="agents" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-primary/80 border border-gray-700">
                {technicalCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-secondary/20 data-[state=active]:text-accent"
                  >
                    <span className="flex items-center gap-2">
                      {category.icon}
                      <span className="hidden sm:inline">{category.title}</span>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {technicalCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                    <p className="text-gray-300">Explore documentation, guides, and resources</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.sections.map((section, index) => (
                      <Card key={index} className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-xl text-white">{section.name}</CardTitle>
                            <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                              {section.features.length} features
                            </Badge>
                          </div>
                          <CardDescription className="text-gray-300 leading-relaxed">
                            {section.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-secondary mb-3">Key Features:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {section.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start gap-2 text-gray-300">
                                  <CheckCircle className="w-3 h-3 text-secondary mt-1 flex-shrink-0" />
                                  <span className="text-xs">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-secondary mb-2">Resources:</h4>
                            <div className="space-y-2">
                              {section.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-accent transition-colors group"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  <span className="group-hover:underline">{link.label}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section ref={guidesRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Start Guides
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Get started quickly with these code examples and implementation guides
              </p>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
              guidesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {quickstartGuides.map((guide, index) => (
                <Card key={index} className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {guide.icon}
                      <CardTitle className="text-lg text-white">{guide.title}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="bg-secondary/20 text-gray-300 w-fit">
                      {guide.language}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-xs text-gray-300 border border-gray-700">
                        <code>{guide.code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-gray-400 hover:text-accent"
                        onClick={() => navigator.clipboard.writeText(guide.code)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-secondary" />
                    <CardTitle className="text-lg text-white">API Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-4">
                    Comprehensive API documentation for all our services and endpoints.
                  </p>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full">
                    Browse API Docs
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Terminal className="w-6 h-6 text-secondary" />
                    <CardTitle className="text-lg text-white">CLI Tools</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-4">
                    Command-line tools for project scaffolding and deployment automation.
                  </p>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download CLI
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-6 h-6 text-secondary" />
                    <CardTitle className="text-lg text-white">Example Projects</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-4">
                    Open-source example projects showcasing best practices and patterns.
                  </p>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full">
                    View Examples
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileCode className="w-6 h-6 text-secondary" />
                    <CardTitle className="text-lg text-white">Tutorials</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-4">
                    Step-by-step tutorials for building AI applications from scratch.
                  </p>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalDocs;
