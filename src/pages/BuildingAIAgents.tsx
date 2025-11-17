import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, GitBranch, Database, MessageSquare, Eye, ChevronRight, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SocialShare } from "@/components/social/SocialShare";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import heroImage from "@/assets/ai-agents-hero.jpg";
import workflowImage from "@/assets/agent-workflow-illustration.jpg";
import architectureImage from "@/assets/agent-architecture-illustration.jpg";

export default function BuildingAIAgents() {
  const keyTakeaways = [
    "AI agents are autonomous systems that perceive their environment, make decisions, and take actions to achieve specific goals",
    "Modern agents combine LLMs with tools, memory, and planning capabilities for complex task execution",
    "The ReAct framework (Reasoning + Acting) enables agents to alternate between thinking and action-taking",
    "Memory systems allow agents to maintain context across conversations and learn from past interactions",
    "Tool integration enables agents to interact with external APIs, databases, and other systems",
    "Multi-agent systems can collaborate to solve problems beyond the capability of individual agents",
    "Proper guardrails and monitoring are essential for safe and reliable agent deployment"
  ];

  const relatedLinks = [
    {
      title: "LangChain Agents Documentation",
      url: "https://python.langchain.com/docs/modules/agents/"
    },
    {
      title: "AutoGPT Framework",
      url: "https://github.com/Significant-Gravitas/AutoGPT"
    },
    {
      title: "OpenAI Function Calling Guide",
      url: "https://platform.openai.com/docs/guides/function-calling"
    },
    {
      title: "Microsoft AutoGen Framework",
      url: "https://microsoft.github.io/autogen/"
    }
  ];

  const content = `
<div class="space-y-8">
  <div class="text-center mb-12">
    <img src="${heroImage}" alt="AI Agents Network" class="w-full rounded-2xl shadow-2xl mb-8" />
    <p class="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
      AI agents represent a paradigm shift from simple chatbots to autonomous systems capable of complex reasoning, planning, and execution. Learn the fundamentals of building intelligent agents that can perceive, decide, and act in dynamic environments.
    </p>
  </div>

  <div class="grid gap-8 lg:gap-12">
    
    <!-- What Are AI Agents Section -->
    <div class="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-white">What Are AI Agents?</h2>
      </div>
      
      <div class="space-y-6">
        <p class="text-lg text-gray-300 leading-relaxed">
          An <strong>AI agent</strong> is an autonomous system that perceives its environment through sensors or inputs, processes information using intelligent algorithms, and takes actions to achieve specific goals. Unlike traditional software that follows rigid rules, agents can adapt their behavior based on observations and feedback.
        </p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h3 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Traditional Chatbots
            </h3>
            <ul class="space-y-2 text-gray-300">
              <li>• Fixed conversation flows</li>
              <li>• No external tool access</li>
              <li>• Limited memory</li>
              <li>• Single-turn interactions</li>
              <li>• Rule-based responses</li>
            </ul>
          </div>
          
          <div class="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-500/30">
            <h3 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              AI Agents
            </h3>
            <ul class="space-y-2 text-gray-300">
              <li>• Autonomous decision-making</li>
              <li>• Tool and API integration</li>
              <li>• Persistent memory systems</li>
              <li>• Multi-step reasoning</li>
              <li>• Adaptive behavior</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Components Section -->
    <div class="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-white">Core Components of AI Agents</h2>
      </div>
      
      <div class="text-center mb-8">
        <img src="${architectureImage}" alt="AI Agent Architecture" class="w-full max-w-3xl mx-auto rounded-xl shadow-xl" />
      </div>
      
      <div class="grid gap-6">
        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-white mb-2">Perception</h3>
              <p class="text-gray-300 leading-relaxed">
                The ability to process and understand inputs from the environment, whether text, images, audio, or sensor data. Modern agents leverage LLMs to comprehend natural language and multimodal inputs.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-white mb-2">Reasoning & Planning</h3>
              <p class="text-gray-300 leading-relaxed">
                The cognitive engine that breaks down complex tasks into manageable steps, evaluates options, and decides on optimal actions. Uses techniques like chain-of-thought prompting and the ReAct framework.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-white mb-2">Action & Execution</h3>
              <p class="text-gray-300 leading-relaxed">
                The capability to interact with external systems through tools, APIs, and function calls. This includes web search, database queries, file operations, and custom integrations.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-white mb-2">Memory</h3>
              <p class="text-gray-300 leading-relaxed">
                The system for storing and retrieving information across interactions. Includes short-term (conversation context), long-term (vector databases), and semantic memory for knowledge retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Agent Workflows Section -->
    <div class="bg-gradient-to-r from-cyan-900/20 to-teal-900/20 rounded-2xl p-8 border border-cyan-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-white">Agent Workflow Patterns</h2>
      </div>
      
      <div class="mb-8">
        <img src="${workflowImage}" alt="Agent Workflow" class="w-full max-w-3xl mx-auto rounded-xl shadow-xl" />
      </div>
      
      <div class="space-y-6">
        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <h3 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <span class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold">1</span>
            ReAct Pattern (Reasoning + Acting)
          </h3>
          <p class="text-gray-300 leading-relaxed mb-4">
            The agent alternates between reasoning about what to do next and taking actions. After each action, it observes the result and reasons about the next step. This creates a thought-action-observation loop.
          </p>
          <div class="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
            <div class="text-cyan-400">Thought:</div> I need to find the current weather in Tokyo
            <div class="text-green-400 mt-2">Action:</div> search_weather(location="Tokyo")
            <div class="text-purple-400 mt-2">Observation:</div> Temperature: 22°C, Partly cloudy
            <div class="text-cyan-400 mt-2">Thought:</div> I have the information needed
            <div class="text-green-400 mt-2">Action:</div> respond_to_user()
          </div>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <h3 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <span class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold">2</span>
            Plan-and-Execute Pattern
          </h3>
          <p class="text-gray-300 leading-relaxed">
            The agent first creates a complete plan of all steps needed, then executes them sequentially. This is useful for complex tasks that require careful upfront planning.
          </p>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <h3 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <span class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold">3</span>
            Multi-Agent Collaboration
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Multiple specialized agents work together, each with specific expertise. A coordinator agent delegates tasks to specialist agents and synthesizes their outputs.
          </p>
        </div>
      </div>
    </div>

    <!-- Building Your First Agent Section -->
    <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-white">Building Your First Agent</h2>
      </div>
      
      <div class="space-y-6">
        <p class="text-lg text-gray-300 leading-relaxed">
          Here's a practical example using LangChain to create a simple agent with tool-calling capabilities:
        </p>
        
        <div class="bg-gray-900 rounded-xl p-6 overflow-x-auto">
          <pre class="text-sm text-gray-300"><code class="language-python">from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI
from langchain.utilities import SerpAPIWrapper

# Initialize the LLM
llm = OpenAI(temperature=0)

# Define tools the agent can use
search = SerpAPIWrapper()
tools = [
    Tool(
        name="Search",
        func=search.run,
        description="useful for searching the internet"
    ),
    Tool(
        name="Calculator",
        func=lambda x: eval(x),
        description="useful for math calculations"
    )
]

# Create the agent
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent="zero-shot-react-description",
    verbose=True
)

# Run the agent
response = agent.run(
    "What is the capital of France and what is 25 * 4?"
)
print(response)</code></pre>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <div class="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/30">
            <h3 class="text-xl font-semibold text-white mb-4">Key Considerations</h3>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Choose appropriate tools for your use case</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Implement proper error handling</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Set token limits to control costs</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Monitor agent behavior in production</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl p-6 border border-orange-500/30">
            <h3 class="text-xl font-semibold text-white mb-4">Safety Guidelines</h3>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span>Implement guardrails for sensitive operations</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span>Validate and sanitize all inputs</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span>Log all agent actions for audit trails</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span>Test thoroughly before deployment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Conclusion Section -->
    <div class="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-2xl p-8 border border-indigo-500/20">
      <h2 class="text-3xl font-bold text-white mb-6">The Future of AI Agents</h2>
      <div class="space-y-4 text-lg text-gray-300 leading-relaxed">
        <p>
          AI agents represent the next evolution of artificial intelligence, moving beyond passive tools to active collaborators. As frameworks mature and models become more capable, we'll see agents handling increasingly complex tasks across industries.
        </p>
        <p>
          The key to successful agent development lies in careful design of the perception-reasoning-action loop, robust tool integration, and appropriate safety measures. Start simple, iterate based on real-world feedback, and gradually expand your agent's capabilities.
        </p>
        <p class="text-xl font-semibold text-white mt-6">
          Ready to build your first AI agent? Start experimenting with frameworks like LangChain, AutoGPT, or Microsoft's AutoGen today.
        </p>
      </div>
    </div>

  </div>
</div>
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-blue-900">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-blue-900/90 to-purple-900/95"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base" className="text-gray-300 hover:text-white transition-colors">
                    Knowledge Base
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage className="text-white">Fundamentals of Building AI Agents</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <Badge variant="secondary" className="text-base px-4 py-1">
                <Brain className="w-4 h-4 mr-2" />
                Article
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-1 border-cyan-500/50 text-cyan-300">
                <Zap className="w-4 h-4 mr-2" />
                AI Agents
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-1 border-purple-500/50 text-purple-300">
                <GitBranch className="w-4 h-4 mr-2" />
                Autonomous Systems
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Fundamentals of Building AI Agents
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              From simple chatbots to autonomous digital workers: Learn how to build intelligent agents that can perceive, reason, and act in dynamic environments.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                15 min read
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Updated: January 2025
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Article */}
            <div className="lg:col-span-2">
              <Card className="bg-primary/80 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div 
                    className="prose prose-invert prose-lg max-w-none
                      prose-headings:text-white prose-headings:font-bold
                      prose-p:text-gray-300 prose-p:leading-relaxed
                      prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-white prose-strong:font-semibold
                      prose-ul:text-gray-300 prose-ol:text-gray-300
                      prose-li:text-gray-300
                      prose-code:text-cyan-400 prose-code:bg-gray-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded
                      prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </CardContent>
              </Card>

              <div className="mt-8">
                <SocialShare 
                  title="Fundamentals of Building AI Agents"
                  url={window.location.href}
                  description="Learn how to build intelligent AI agents that can perceive, reason, and act autonomously"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Key Takeaways */}
              <Card className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-cyan-500/30 backdrop-blur-sm sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    Key Takeaways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Related Resources */}
              <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                    Related Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {relatedLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 text-gray-300 hover:text-accent transition-colors group"
                        >
                          <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-400 group-hover:text-accent transition-colors" />
                          <span className="text-sm leading-relaxed">{link.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
