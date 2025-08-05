import { GuideTemplate } from "@/components/knowledge-base/templates/GuideTemplate";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuideNavigation from "@/components/navigation/GuideNavigation";
import { Clock } from "lucide-react";
import aiFrameworksComparison from "@/assets/ai-frameworks-comparison.jpg";

const AdvancedPromptEngineering = () => {
  const sections = [
    {
      id: "fundamentals",
      title: "Advanced Prompting Fundamentals",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Advanced prompt engineering goes beyond basic instructions to create sophisticated interactions with AI models. In 2025, mastering these techniques is essential for building reliable AI applications.</p>
        
        <div class="grid md:grid-cols-3 gap-4 my-6">
          <div class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
            <h4 class="text-blue-300 font-semibold mb-2">🧠 Chain-of-Thought</h4>
            <p class="text-sm text-gray-300">Guide the AI through step-by-step reasoning for complex problems</p>
          </div>
          <div class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
            <h4 class="text-purple-300 font-semibold mb-2">🎭 Role-Based Prompting</h4>
            <p class="text-sm text-gray-300">Define specific personas and contexts for specialized responses</p>
          </div>
          <div class="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
            <h4 class="text-green-300 font-semibold mb-2">🔗 Prompt Chaining</h4>
            <p class="text-sm text-gray-300">Break complex tasks into sequential, manageable steps</p>
          </div>
        </div>

        <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
          <h4 class="text-yellow-300 font-semibold mb-2">💡 Key Insight for 2025</h4>
          <p class="text-gray-300">The most effective prompts combine multiple techniques strategically rather than relying on a single approach.</p>
        </div>
      </div>`
    },
    {
      id: "chain-of-thought",
      title: "Chain-of-Thought Prompting",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Chain-of-Thought (CoT) prompting dramatically improves reasoning capabilities by showing the AI how to think through problems step by step.</p>
        
        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg p-6">
          <h4 class="text-blue-300 font-semibold mb-4 text-lg">🔍 Basic CoT Structure</h4>
          <pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
<code>Let's solve this step by step:

Problem: [State the problem clearly]

Step 1: [Break down the first component]
- Analyze what we know
- Identify key variables

Step 2: [Apply relevant methods/formulas]
- Show the calculation/reasoning
- Explain the logic

Step 3: [Verify and conclude]
- Check if the result makes sense
- State the final answer

Therefore: [Clear conclusion]</code>
          </pre>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
            <h4 class="text-green-300 font-semibold mb-3">✅ Effective CoT Examples</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>• Mathematical problem solving</li>
              <li>• Code debugging and optimization</li>
              <li>• Business decision analysis</li>
              <li>• Complex data interpretation</li>
            </ul>
          </div>
          
          <div class="bg-orange-500/10 border border-orange-400/30 rounded-lg p-4">
            <h4 class="text-orange-300 font-semibold mb-3">⚠️ When to Use CoT</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>• Multi-step reasoning required</li>
              <li>• Accuracy is critical</li>
              <li>• Need to show working</li>
              <li>• Training on reasoning patterns</li>
            </ul>
          </div>
        </div>

        <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
          <h4 class="text-yellow-300 font-semibold mb-2">💡 Pro Tip</h4>
          <p class="text-gray-300">Add "Let me think through this step by step:" at the beginning of complex prompts to activate CoT reasoning automatically.</p>
        </div>
      </div>`
    },
    {
      id: "few-shot-learning",
      title: "Few-Shot Learning Techniques",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Few-shot prompting provides examples to establish patterns and guide the AI's responses. This technique is crucial for consistent, high-quality outputs.</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg p-6">
            <h4 class="text-purple-300 font-semibold mb-4 text-lg">📚 Pattern-Based Examples</h4>
            <pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
<code>Classify the sentiment of these texts:

Example 1:
Input: "I love this new feature!"
Output: Positive (confidence: 0.95)

Example 2:
Input: "This is frustrating and broken"
Output: Negative (confidence: 0.89)

Example 3:
Input: "The weather is okay today"
Output: Neutral (confidence: 0.78)

Now classify:
Input: "Amazing work on this project!"
Output: ?</code>
            </pre>
          </div>
          
          <div class="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-lg p-6">
            <h4 class="text-green-300 font-semibold mb-4 text-lg">🎯 Format Consistency</h4>
            <pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
<code>Convert technical terms to plain English:

Technical: "API endpoint"
Plain: "A specific web address that accepts data"

Technical: "Database normalization"
Plain: "Organizing data to reduce redundancy"

Technical: "Machine learning model"
Plain: "A computer program that learns patterns"

Technical: "Containerization"
Plain: ?</code>
            </pre>
          </div>
        </div>

        <div class="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
          <h4 class="text-blue-300 font-semibold mb-3">🔧 Few-Shot Best Practices</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Use 3-5 diverse examples</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Show edge cases and variations</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Maintain consistent formatting</li>
            </ul>
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Order examples strategically</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Balance positive/negative cases</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Test with unseen examples</li>
            </ul>
          </div>
        </div>
      </div>`
    },
    {
      id: "role-based-prompting",
      title: "Role-Based Prompting",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Role-based prompting transforms the AI into specific personas or experts, dramatically improving response quality and consistency for specialized tasks.</p>
        
        <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/30 rounded-lg p-6">
          <h4 class="text-orange-300 font-semibold mb-4 text-lg">🎭 Expert Persona Template</h4>
          <pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
<code>You are a [SPECIFIC ROLE] with [X years] of experience in [DOMAIN].

Your expertise includes:
- [Key skill/knowledge area 1]
- [Key skill/knowledge area 2]
- [Key skill/knowledge area 3]

Your communication style is:
- [Tone: professional/casual/technical]
- [Approach: detailed/concise/practical]
- [Perspective: conservative/innovative/balanced]

When answering questions, you:
- Draw from real-world experience
- Provide actionable insights
- Consider industry best practices
- Acknowledge limitations when uncertain

Now, please [SPECIFIC TASK]...</code>
          </pre>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
            <h4 class="text-blue-300 font-semibold mb-3">💼 Business Roles</h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• Senior Software Architect</li>
              <li>• Product Manager</li>
              <li>• Data Scientist</li>
              <li>• UX Researcher</li>
            </ul>
          </div>
          
          <div class="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
            <h4 class="text-purple-300 font-semibold mb-3">🎓 Academic Roles</h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• Research Professor</li>
              <li>• Technical Writer</li>
              <li>• Code Reviewer</li>
              <li>• AI Ethics Specialist</li>
            </ul>
          </div>
          
          <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
            <h4 class="text-green-300 font-semibold mb-3">🛠️ Technical Roles</h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• DevOps Engineer</li>
              <li>• Security Analyst</li>
              <li>• Database Administrator</li>
              <li>• ML Engineer</li>
            </ul>
          </div>
        </div>

        <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
          <h4 class="text-yellow-300 font-semibold mb-3">⚡ Power Combination</h4>
          <p class="text-gray-300 mb-2">Combine role-based prompting with CoT for maximum effectiveness:</p>
          <p class="text-sm text-gray-400 italic">"As a senior architect, let me walk through this system design step by step..."</p>
        </div>
      </div>`
    },
    {
      id: "temperature-optimization",
      title: "Temperature & Parameter Control",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Understanding and controlling AI model parameters like temperature is crucial for getting consistent, appropriate responses for different use cases.</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
            <h4 class="text-blue-300 font-semibold mb-3">❄️ Low Temperature (0.1-0.3)</h4>
            <p class="text-sm text-gray-400 mb-3">Conservative, predictable outputs</p>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• Code generation</li>
              <li>• Factual Q&A</li>
              <li>• Data analysis</li>
              <li>• Technical documentation</li>
            </ul>
          </div>
          
          <div class="bg-orange-500/10 border border-orange-400/30 rounded-lg p-4">
            <h4 class="text-orange-300 font-semibold mb-3">🌡️ Medium Temperature (0.5-0.7)</h4>
            <p class="text-sm text-gray-400 mb-3">Balanced creativity and coherence</p>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• General conversation</li>
              <li>• Content writing</li>
              <li>• Problem solving</li>
              <li>• Explanations</li>
            </ul>
          </div>
          
          <div class="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
            <h4 class="text-red-300 font-semibold mb-3">🔥 High Temperature (0.8-1.0)</h4>
            <p class="text-sm text-gray-400 mb-3">Creative, diverse outputs</p>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• Creative writing</li>
              <li>• Brainstorming</li>
              <li>• Storytelling</li>
              <li>• Art generation</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-lg p-6">
          <h4 class="text-purple-300 font-semibold mb-4 text-lg">⚙️ Parameter Optimization Example</h4>
          <pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
<code>// OpenAI API with optimized parameters
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [...],
  temperature: 0.2,        // Low for consistent code
  max_tokens: 1000,        // Reasonable limit
  top_p: 0.9,             // Focus on top choices
  frequency_penalty: 0.1,  // Reduce repetition
  presence_penalty: 0.1    // Encourage new topics
});

// For creative tasks:
temperature: 0.8,          // Higher creativity
top_p: 0.95,              // More diverse choices</code>
          </pre>
        </div>

        <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
          <h4 class="text-green-300 font-semibold mb-3">🎯 Parameter Selection Guide</h4>
          <div class="space-y-2 text-sm text-gray-300">
            <p><strong class="text-white">Production apps:</strong> temperature 0.1-0.3, consistent formatting</p>
            <p><strong class="text-white">Content creation:</strong> temperature 0.6-0.8, balanced creativity</p>
            <p><strong class="text-white">Code generation:</strong> temperature 0.1-0.2, max_tokens 2000+</p>
            <p><strong class="text-white">Brainstorming:</strong> temperature 0.8-1.0, high top_p</p>
          </div>
        </div>
      </div>`
    },
    {
      id: "advanced-techniques",
      title: "Advanced Techniques & Strategies",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Master these sophisticated techniques used by AI professionals to build production-ready applications with reliable, consistent outputs.</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-lg p-6">
            <h4 class="text-blue-300 font-semibold mb-4 text-lg">🔗 Prompt Chaining</h4>
            <p class="text-gray-300 mb-3">Break complex tasks into sequential steps:</p>
            <pre class="bg-gray-900 border border-gray-700 rounded-lg p-3 text-xs text-gray-300">
<code>Step 1: Analyze the data
→ Extract key insights

Step 2: Generate hypotheses  
→ Based on insights from Step 1

Step 3: Validate findings
→ Cross-check hypotheses

Step 4: Create recommendations
→ Actionable next steps</code>
            </pre>
          </div>
          
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg p-6">
            <h4 class="text-purple-300 font-semibold mb-4 text-lg">🚫 Negative Prompting</h4>
            <p class="text-gray-300 mb-3">Specify what you don't want:</p>
            <pre class="bg-gray-900 border border-gray-700 rounded-lg p-3 text-xs text-gray-300">
<code>Write a technical blog post about AI.

DO NOT:
- Use overly complex jargon
- Make unsupported claims
- Include outdated information
- Write more than 1000 words
- Use first person perspective</code>
            </pre>
          </div>
        </div>

        <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-lg p-6">
          <h4 class="text-yellow-300 font-semibold mb-4 text-lg">🎛️ Multi-Modal Prompting</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h5 class="text-white font-medium mb-2">Text + Image</h5>
              <p class="text-sm text-gray-300">Combine visual context with detailed text instructions for better understanding</p>
            </div>
            <div>
              <h5 class="text-white font-medium mb-2">Structured Data</h5>
              <p class="text-sm text-gray-300">Include tables, JSON, or CSV data with specific formatting requirements</p>
            </div>
          </div>
        </div>

        <div class="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
          <h4 class="text-red-300 font-semibold mb-3">⚠️ Production Considerations</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Version control your prompts</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> A/B test different versions</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Monitor output quality</li>
            </ul>
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Implement fallback strategies</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Cache common patterns</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Set up quality metrics</li>
            </ul>
          </div>
        </div>
      </div>`
    },
    {
      id: "tools-and-resources",
      title: "Tools & Production Implementation",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Professional tools and frameworks for implementing advanced prompting techniques in production environments.</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
            <h4 class="text-blue-300 font-semibold mb-3">🧪 Testing Tools</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>• <a href="https://www.promptfoo.dev/" target="_blank" class="text-[#00F0FF] hover:underline">PromptFoo</a> - A/B testing</li>
              <li>• <a href="https://smith.langchain.com/" target="_blank" class="text-[#00F0FF] hover:underline">LangSmith</a> - Monitoring</li>
              <li>• <a href="https://wandb.ai/" target="_blank" class="text-[#00F0FF] hover:underline">Weights & Biases</a> - Tracking</li>
              <li>• <a href="https://humanloop.com/" target="_blank" class="text-[#00F0FF] hover:underline">Humanloop</a> - Evaluation</li>
            </ul>
          </div>
          
          <div class="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
            <h4 class="text-purple-300 font-semibold mb-3">📚 Prompt Libraries</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>• <a href="https://promptbase.com/" target="_blank" class="text-[#00F0FF] hover:underline">PromptBase</a> - Marketplace</li>
              <li>• <a href="https://github.com/f/awesome-chatgpt-prompts" target="_blank" class="text-[#00F0FF] hover:underline">Awesome ChatGPT</a> - GitHub</li>
              <li>• <a href="https://smith.langchain.com/hub" target="_blank" class="text-[#00F0FF] hover:underline">LangChain Hub</a> - Templates</li>
              <li>• <a href="https://www.anthropic.com/claude" target="_blank" class="text-[#00F0FF] hover:underline">Claude Prompts</a> - Examples</li>
            </ul>
          </div>
          
          <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
            <h4 class="text-green-300 font-semibold mb-3">⚙️ Development</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>• <a href="https://python.langchain.com/" target="_blank" class="text-[#00F0FF] hover:underline">LangChain</a> - Framework</li>
              <li>• <a href="https://www.llamaindex.ai/" target="_blank" class="text-[#00F0FF] hover:underline">LlamaIndex</a> - RAG systems</li>
              <li>• <a href="https://platform.openai.com/docs/api-reference" target="_blank" class="text-[#00F0FF] hover:underline">OpenAI API</a> - Direct access</li>
              <li>• <a href="https://docs.anthropic.com/claude/reference/getting-started" target="_blank" class="text-[#00F0FF] hover:underline">Anthropic API</a> - Claude access</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/30 rounded-lg p-6">
          <h4 class="text-orange-300 font-semibold mb-4 text-lg">🚀 Production Implementation Example</h4>
          <pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
<code>import { PromptTemplate } from "langchain/prompts";
import { OpenAI } from "langchain/llms/openai";

// Template with variables
const promptTemplate = new PromptTemplate({
  template: \`You are a {role} with {experience} years of experience.
  
Task: {task}
Context: {context}
Requirements: {requirements}

Please provide a {output_format} response.\`,
  inputVariables: ["role", "experience", "task", "context", "requirements", "output_format"]
});

// Usage
const prompt = await promptTemplate.format({
  role: "Senior Software Architect",
  experience: "15",
  task: "Review this API design",
  context: "E-commerce platform with 1M+ users",
  requirements: "Focus on scalability and security",
  output_format: "structured"
});</code>
          </pre>
        </div>

        <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
          <h4 class="text-yellow-300 font-semibold mb-3">💡 Next Steps</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-1">
              <li>• Build a prompt testing framework</li>
              <li>• Create reusable prompt templates</li>
              <li>• Implement quality monitoring</li>
            </ul>
            <ul class="space-y-1">
              <li>• Set up version control for prompts</li>
              <li>• Create evaluation datasets</li>
              <li>• Deploy with proper fallbacks</li>
            </ul>
          </div>
        </div>
      </div>`
    }
  ];

  const prerequisites = [
    "Basic understanding of AI/ML concepts",
    "Experience with API calls",
    "Familiarity with at least one LLM (GPT, Claude, etc.)",
    "Basic programming knowledge"
  ];

  const downloadableResources = [
    {
      title: "Advanced Prompting Cheat Sheet",
      url: "/downloads/advanced-prompting-cheat-sheet.pdf",
      type: "PDF"
    },
    {
      title: "Prompt Template Library",
      url: "/downloads/prompt-templates.json",
      type: "JSON"
    },
    {
      title: "Testing Framework Code",
      url: "/downloads/prompt-testing-framework.py",
      type: "Python"
    }
  ];

  const tags = ["Prompt Engineering", "LLMs", "Advanced", "Production", "AI Development"];

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Hero Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aiFrameworksComparison})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/70 via-[#0A192F]/60 to-[#0D1B2A]/80"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg px-2">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                  Advanced Prompt Engineering Techniques
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed drop-shadow-md px-2">
                Master sophisticated prompting strategies to unlock the full potential of large language models and build production-ready AI applications.
              </p>
              
              {/* Meta Information - Mobile Responsive */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 text-gray-200 mb-6 md:mb-8 px-2">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-sm md:text-base">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#00F0FF]" />
                  <span className="font-medium">45 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-sm md:text-base">
                  <span className="text-red-400 text-base md:text-lg">●</span>
                  <span className="font-medium">Advanced Level</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-sm md:text-base">
                  <span className="text-[#FF4D00] font-bold">6</span>
                  <span className="font-medium">Sections</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom gradient transition */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A192F] to-transparent"></div>
        </section>

        {/* Content Section */}
        <div className="relative">
          <GuideTemplate
            title="" // Empty title since we handle it in hero
            description=""
            estimatedTime={45}
            difficulty="Advanced"
            prerequisites={prerequisites}
            sections={sections}
            downloadableResources={downloadableResources}
            tags={tags}
          />
        </div>
        
        {/* Navigation Component */}
        <GuideNavigation />
      </div>
      <Footer />
    </>
  );
};

export default AdvancedPromptEngineering;