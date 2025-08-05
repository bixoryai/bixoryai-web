import { GuideTemplate } from "@/components/knowledge-base/templates/GuideTemplate";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuideNavigation from "@/components/navigation/GuideNavigation";
import { Clock } from "lucide-react";
import aiHero from "@/assets/ai-development-hero.jpg";
import aiRoadmap from "@/assets/ai-roadmap-infographic.jpg";
import aiFrameworksGuide from "@/assets/ai-frameworks-selection-guide.jpg";

const AIGettingStartedGuide = () => {
  const sections = [
    {
      id: "fundamentals",
      title: "Understanding AI Fundamentals",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Artificial Intelligence in 2025 encompasses three main paradigms that every developer should understand:</p>
        
        <div class="grid md:grid-cols-3 gap-4 my-6">
          <div class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
            <h4 class="text-blue-300 font-semibold mb-2">🧠 Machine Learning (ML)</h4>
            <p class="text-sm text-gray-300">Systems that learn patterns from data without explicit programming</p>
          </div>
          <div class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
            <h4 class="text-purple-300 font-semibold mb-2">🔗 Deep Learning</h4>
            <p class="text-sm text-gray-300">Neural networks with multiple layers for complex representations</p>
          </div>
          <div class="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
            <h4 class="text-green-300 font-semibold mb-2">💬 Large Language Models</h4>
            <p class="text-sm text-gray-300">Pre-trained models like GPT-4 and Claude for text understanding</p>
          </div>
        </div>

        <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
          <h4 class="text-yellow-300 font-semibold mb-2">💡 Key Insight for 2025</h4>
          <p class="text-gray-300">You don't need to build everything from scratch. Most AI development now involves leveraging existing models and frameworks.</p>
        </div>
      </div>`
    },
    {
      id: "environment",
      title: "Setting Up Your Development Environment",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Your AI development setup in 2025 should include these essential components:</p>
        
        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg p-6">
          <h4 class="text-blue-300 font-semibold mb-4 text-lg">🐍 Python Environment</h4>
          <div class="space-y-2 text-gray-300">
            <div class="flex items-center gap-3">
              <span class="text-green-400">✓</span>
              <span>Python 3.11+ for optimal performance</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-green-400">✓</span>
              <span>Anaconda or Miniconda for package management</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-green-400">✓</span>
              <span>Virtual environments for project isolation</span>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
            <h4 class="text-green-300 font-semibold mb-3">📚 Essential Libraries</h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• NumPy & Pandas for data manipulation</li>
              <li>• Matplotlib & Seaborn for visualization</li>
              <li>• Scikit-learn for traditional ML</li>
              <li>• Jupyter Notebooks for experimentation</li>
            </ul>
          </div>
          
          <div class="bg-orange-500/10 border border-orange-400/30 rounded-lg p-4">
            <h4 class="text-orange-300 font-semibold mb-3">🔧 Development Tools</h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• VS Code with Python extensions</li>
              <li>• Git for version control</li>
              <li>• Docker for containerization</li>
              <li>• Weights & Biases for tracking</li>
            </ul>
          </div>
        </div>

        <div class="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
          <h4 class="text-red-300 font-semibold mb-3">💻 Hardware Considerations</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <strong class="text-white">Local Setup:</strong>
              <ul class="mt-2 space-y-1">
                <li>• GPU: NVIDIA RTX 4060+</li>
                <li>• RAM: 16GB minimum, 32GB ideal</li>
                <li>• Storage: 500GB+ SSD</li>
              </ul>
            </div>
            <div>
              <strong class="text-white">Cloud Alternatives:</strong>
              <ul class="mt-2 space-y-1">
                <li>• <a href="https://colab.research.google.com/" target="_blank" class="text-[#00F0FF] hover:underline">Google Colab Pro</a></li>
                <li>• <a href="https://aws.amazon.com/sagemaker/" target="_blank" class="text-[#00F0FF] hover:underline">AWS SageMaker</a></li>
                <li>• <a href="https://azure.microsoft.com/en-us/products/machine-learning/" target="_blank" class="text-[#00F0FF] hover:underline">Azure ML</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
          <h4 class="text-yellow-300 font-semibold mb-2">💡 Pro Tip</h4>
          <p class="text-gray-300">Start with <a href="https://colab.research.google.com/" target="_blank" class="text-[#00F0FF] hover:underline font-semibold">Google Colab</a> if you're just beginning - you can always transition to local development later.</p>
        </div>
      </div>`
    },
    {
      id: "frameworks",
      title: "Choosing the Right AI Framework",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">In 2025, the AI framework landscape has stabilized around several key players:</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-400/30 rounded-lg p-4">
            <h4 class="text-orange-300 font-semibold mb-3 flex items-center gap-2">
              🔥 <a href="https://www.tensorflow.org/" target="_blank" class="hover:underline">TensorFlow 2.15+</a>
            </h4>
            <div class="space-y-2 text-sm text-gray-300">
              <p><strong class="text-white">Best for:</strong> Production deployment and mobile/edge applications</p>
              <p><strong class="text-white">Use when:</strong> Building production-ready applications with complex pipelines</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg p-4">
            <h4 class="text-purple-300 font-semibold mb-3 flex items-center gap-2">
              🔬 <a href="https://pytorch.org/" target="_blank" class="hover:underline">PyTorch 2.2+</a>
            </h4>
            <div class="space-y-2 text-sm text-gray-300">
              <p><strong class="text-white">Best for:</strong> Research, prototyping, and dynamic neural networks</p>
              <p><strong class="text-white">Use when:</strong> Experimenting with new architectures or research projects</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-lg p-4">
            <h4 class="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
              🤗 <a href="https://huggingface.co/transformers/" target="_blank" class="hover:underline">Hugging Face Transformers</a>
            </h4>
            <div class="space-y-2 text-sm text-gray-300">
              <p><strong class="text-white">Best for:</strong> Natural language processing and pre-trained models</p>
              <p><strong class="text-white">Use when:</strong> Working with text, speech, or vision transformers</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-lg p-4">
            <h4 class="text-blue-300 font-semibold mb-3 flex items-center gap-2">
              ⚡ <a href="https://jax.readthedocs.io/" target="_blank" class="hover:underline">JAX (by Google)</a>
            </h4>
            <div class="space-y-2 text-sm text-gray-300">
              <p><strong class="text-white">Best for:</strong> High-performance numerical computing</p>
              <p><strong class="text-white">Use when:</strong> Need maximum performance for mathematical computations</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-lg p-6">
          <h4 class="text-green-300 font-semibold mb-4 text-lg flex items-center gap-2">
            🚀 API-First Approach
          </h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <h5 class="text-white font-medium"><a href="https://openai.com/api/" target="_blank" class="text-[#00F0FF] hover:underline">OpenAI API</a></h5>
              <p class="text-sm text-gray-300">General-purpose applications, code generation</p>
            </div>
            <div class="space-y-2">
              <h5 class="text-white font-medium"><a href="https://www.anthropic.com/api" target="_blank" class="text-[#00F0FF] hover:underline">Anthropic Claude</a></h5>
              <p class="text-sm text-gray-300">Complex reasoning, safety-critical applications</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-500/10 border border-gray-400/30 rounded-lg p-4">
          <h4 class="text-gray-300 font-semibold mb-3">🎯 Framework Selection Guide</h4>
          <div class="space-y-2 text-sm text-gray-300">
            <p><strong class="text-white">Beginners:</strong> Start with <a href="https://pytorch.org/" target="_blank" class="text-[#00F0FF] hover:underline">PyTorch</a> for learning, then add <a href="https://huggingface.co/" target="_blank" class="text-[#00F0FF] hover:underline">Hugging Face</a> for NLP</p>
            <p><strong class="text-white">Production focus:</strong> <a href="https://www.tensorflow.org/" target="_blank" class="text-[#00F0FF] hover:underline">TensorFlow</a> for deployment, PyTorch for development</p>
            <p><strong class="text-white">Quick prototypes:</strong> <a href="https://openai.com/api/" target="_blank" class="text-[#00F0FF] hover:underline">OpenAI</a>/<a href="https://www.anthropic.com/" target="_blank" class="text-[#00F0FF] hover:underline">Anthropic</a> APIs + basic web framework</p>
          </div>
        </div>
      </div>`
    },
    {
      id: "first-project",
      title: "Building Your First AI Project",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Let's build a practical AI application: a sentiment analysis tool using modern approaches.</p>
        
        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg p-6">
          <h4 class="text-blue-300 font-semibold mb-4 text-lg flex items-center gap-2">
            🚀 Project: Real-time Sentiment Analyzer
          </h4>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-6">
            <h4 class="text-green-300 font-semibold mb-4 flex items-center gap-2">
              🤗 Approach 1: Pre-trained Models
            </h4>
            <p class="text-sm text-gray-400 mb-4">Recommended for beginners - using <a href="https://huggingface.co/transformers/" target="_blank" class="text-[#00F0FF] hover:underline">Hugging Face Transformers</a></p>
            <pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
<code>from transformers import pipeline

# Load pre-trained sentiment model
classifier = pipeline("sentiment-analysis", 
    model="cardiffnlp/twitter-roberta-base-sentiment-latest")

def analyze_sentiment(text):
    result = classifier(text)
    return {
        'sentiment': result[0]['label'],
        'confidence': result[0]['score']
    }</code>
            </pre>
          </div>
          
          <div class="bg-orange-500/10 border border-orange-400/30 rounded-lg p-6">
            <h4 class="text-orange-300 font-semibold mb-4 flex items-center gap-2">
              🔥 Approach 2: OpenAI API
            </h4>
            <p class="text-sm text-gray-400 mb-4">For production applications - using <a href="https://openai.com/api/" target="_blank" class="text-[#00F0FF] hover:underline">OpenAI API</a></p>
            <pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
<code>import openai

client = openai.OpenAI(api_key="your-api-key")

def analyze_sentiment_gpt(text):
    response = client.chat.completions.create(
        model="gpt-4.1-2025-04-14",
        messages=[
            {"role": "system", "content": "Analyze sentiment: positive, negative, or neutral."},
            {"role": "user", "content": text}
        ]
    )
    return response.choices[0].message.content</code>
            </pre>
          </div>
        </div>

        <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
          <h4 class="text-yellow-300 font-semibold mb-3">💡 Key Learning Points</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Start simple: Use pre-trained models first</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Understand your data: Examine what you're working with</li>
            </ul>
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Evaluate performance: Test with diverse examples</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Consider costs: API calls vs. local computation</li>
            </ul>
          </div>
        </div>

        <div class="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
          <h4 class="text-purple-300 font-semibold mb-3">🎯 Next Steps</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-1">
              <li>• Add web interface using <a href="https://streamlit.io/" target="_blank" class="text-[#00F0FF] hover:underline">Streamlit</a></li>
              <li>• Implement batch processing for multiple texts</li>
            </ul>
            <ul class="space-y-1">
              <li>• Add visualization of sentiment trends over time</li>
              <li>• Deploy using <a href="https://www.docker.com/" target="_blank" class="text-[#00F0FF] hover:underline">Docker</a> and cloud services</li>
            </ul>
          </div>
        </div>
      </div>`
    },
    {
      id: "ml-pipeline",
      title: "Understanding ML Pipelines",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">A modern ML pipeline in 2025 follows this structured approach:</p>

        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
            <h4 class="text-blue-300 font-semibold mb-3 flex items-center gap-2">
              📊 1. Data Collection & Preparation
            </h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• Data sources: APIs, databases, web scraping</li>
              <li>• Cleaning: Handle missing values, outliers</li>
              <li>• Feature engineering: Create meaningful inputs</li>
              <li>• Data validation: Ensure quality and consistency</li>
            </ul>
          </div>
          
          <div class="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
            <h4 class="text-purple-300 font-semibold mb-3 flex items-center gap-2">
              🔬 2. Model Development
            </h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• Problem definition: Classification, regression</li>
              <li>• Model selection: Start simple, progress to complex</li>
              <li>• Training: Split data, fit models, tune parameters</li>
              <li>• Evaluation: Use appropriate metrics</li>
            </ul>
          </div>
          
          <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
            <h4 class="text-green-300 font-semibold mb-3 flex items-center gap-2">
              🚀 3. Model Deployment
            </h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• Containerization: <a href="https://www.docker.com/" target="_blank" class="text-[#00F0FF] hover:underline">Docker</a> for consistent environments</li>
              <li>• API creation: <a href="https://fastapi.tiangolo.com/" target="_blank" class="text-[#00F0FF] hover:underline">FastAPI</a> or Flask for serving</li>
              <li>• Monitoring: Track model performance</li>
              <li>• CI/CD: Automated testing and deployment</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-lg p-6">
          <h4 class="text-yellow-300 font-semibold mb-4 text-lg">🛠️ Modern Tools for Each Stage</h4>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div>
                <h5 class="text-white font-medium mb-2">Data Processing</h5>
                <p class="text-sm text-gray-300">Pandas, Polars, <a href="https://duckdb.org/" target="_blank" class="text-[#00F0FF] hover:underline">DuckDB</a></p>
              </div>
              <div>
                <h5 class="text-white font-medium mb-2">Training</h5>
                <p class="text-sm text-gray-300"><a href="https://pytorch-lightning.readthedocs.io/" target="_blank" class="text-[#00F0FF] hover:underline">PyTorch Lightning</a>, Hugging Face Trainer</p>
              </div>
            </div>
            <div class="space-y-3">
              <div>
                <h5 class="text-white font-medium mb-2">Experimentation</h5>
                <p class="text-sm text-gray-300"><a href="https://wandb.ai/" target="_blank" class="text-[#00F0FF] hover:underline">Weights & Biases</a>, <a href="https://mlflow.org/" target="_blank" class="text-[#00F0FF] hover:underline">MLflow</a></p>
              </div>
              <div>
                <h5 class="text-white font-medium mb-2">Deployment</h5>
                <p class="text-sm text-gray-300">FastAPI, Docker, <a href="https://kubernetes.io/" target="_blank" class="text-[#00F0FF] hover:underline">Kubernetes</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-500/10 border border-gray-400/30 rounded-lg p-4">
          <h4 class="text-gray-300 font-semibold mb-3">📈 Common Pipeline Architecture</h4>
          <div class="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <div class="text-center text-gray-300 font-mono text-sm">
              Raw Data → Feature Store → Model Training → Model Registry → Deployment → Monitoring
            </div>
          </div>
        </div>
      </div>`
    },
    {
      id: "llm-integration",
      title: "Working with Large Language Models",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">LLMs have revolutionized AI development in 2025. Here's how to leverage them effectively:</p>

        <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg p-6">
          <h4 class="text-purple-300 font-semibold mb-4 text-lg">🧠 Understanding LLM Capabilities</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-purple-400">•</span> Text generation and completion</li>
              <li class="flex items-center gap-2"><span class="text-purple-400">•</span> Language translation and summarization</li>
              <li class="flex items-center gap-2"><span class="text-purple-400">•</span> Code generation and debugging</li>
            </ul>
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-purple-400">•</span> Reasoning and problem-solving</li>
              <li class="flex items-center gap-2"><span class="text-purple-400">•</span> Multimodal understanding (text + images)</li>
            </ul>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
            <h4 class="text-green-300 font-semibold mb-3 flex items-center gap-2">
              🤖 <a href="https://openai.com/api/" target="_blank" class="hover:underline">OpenAI GPT-4.1</a>
            </h4>
            <div class="space-y-2 text-sm text-gray-300">
              <p><strong class="text-white">Best for:</strong> General-purpose, code generation</p>
              <p><strong class="text-white">Context:</strong> 128K tokens</p>
              <p><strong class="text-white">Pricing:</strong> $15/1M input tokens</p>
            </div>
          </div>
          
          <div class="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
            <h4 class="text-blue-300 font-semibold mb-3 flex items-center gap-2">
              🔬 <a href="https://www.anthropic.com/api" target="_blank" class="hover:underline">Anthropic Claude</a>
            </h4>
            <div class="space-y-2 text-sm text-gray-300">
              <p><strong class="text-white">Best for:</strong> Complex reasoning, safety-critical</p>
              <p><strong class="text-white">Context:</strong> 200K tokens</p>
              <p><strong class="text-white">Pricing:</strong> Competitive rates</p>
            </div>
          </div>
          
          <div class="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
            <h4 class="text-red-300 font-semibold mb-3 flex items-center gap-2">
              🌟 <a href="https://ai.google.dev/" target="_blank" class="hover:underline">Google Gemini</a>
            </h4>
            <div class="space-y-2 text-sm text-gray-300">
              <p><strong class="text-white">Best for:</strong> Multimodal applications</p>
              <p><strong class="text-white">Strengths:</strong> Native multimodal, fast inference</p>
              <p><strong class="text-white">Pricing:</strong> Free tier available</p>
            </div>
          </div>
        </div>

        <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
          <h4 class="text-yellow-300 font-semibold mb-3">💡 Prompt Engineering Best Practices</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Be specific and clear in instructions</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Provide examples (few-shot prompting)</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Use system messages for context</li>
            </ul>
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Break complex tasks into smaller steps</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Test prompts extensively with edge cases</li>
            </ul>
          </div>
        </div>

        <div class="bg-orange-500/10 border border-orange-400/30 rounded-lg p-4">
          <h4 class="text-orange-300 font-semibold mb-3">💰 Cost Optimization Strategies</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-1">
              <li>• Cache responses for repeated queries</li>
              <li>• Use streaming for real-time applications</li>
              <li>• Implement smart truncation for long inputs</li>
            </ul>
            <ul class="space-y-1">
              <li>• Consider fine-tuning for specialized tasks</li>
              <li>• Monitor token usage and set limits</li>
            </ul>
          </div>
        </div>
      </div>`
    },
    {
      id: "production",
      title: "Deploying AI to Production",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Moving from prototype to production requires careful planning and robust infrastructure:</p>

        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg p-6">
          <h4 class="text-blue-300 font-semibold mb-4 text-lg flex items-center gap-2">
            🏗️ Deployment Architecture Patterns
          </h4>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-6">
            <h4 class="text-green-300 font-semibold mb-4 flex items-center gap-2">
              🚀 API-First Approach
            </h4>
            <p class="text-sm text-gray-400 mb-4">Using <a href="https://fastapi.tiangolo.com/" target="_blank" class="text-[#00F0FF] hover:underline">FastAPI</a> for scalable AI services</p>
            <pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
<code>from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="AI Service API")

class PredictionRequest(BaseModel):
    text: str
    model_version: str = "v1.0"

@app.post("/predict")
async def predict(request: PredictionRequest):
    # AI prediction logic here
    return {"prediction": "positive", "confidence": 0.95}</code>
            </pre>
          </div>
          
          <div class="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
            <h4 class="text-blue-300 font-semibold mb-4 flex items-center gap-2">
              🐳 Containerization
            </h4>
            <p class="text-sm text-gray-400 mb-4">Using <a href="https://www.docker.com/" target="_blank" class="text-[#00F0FF] hover:underline">Docker</a> for consistent environments</p>
            <pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
<code>FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy application code
COPY . .

# Run application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]</code>
            </pre>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
            <h4 class="text-yellow-300 font-semibold mb-3">⚡ Performance Optimization</h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• Model quantization to reduce memory usage</li>
              <li>• Batch processing for multiple requests</li>
              <li>• Caching for frequently requested predictions</li>
              <li>• Load balancing across multiple instances</li>
            </ul>
          </div>
          
          <div class="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
            <h4 class="text-purple-300 font-semibold mb-3">📊 Monitoring & Observability</h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• Request/response logging</li>
              <li>• Model performance metrics</li>
              <li>• Infrastructure monitoring (CPU, memory, GPU)</li>
              <li>• Error tracking and alerting</li>
            </ul>
          </div>
        </div>

        <div class="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
          <h4 class="text-red-300 font-semibold mb-3">🔒 Security Best Practices</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-1">
              <li>• API authentication and rate limiting</li>
              <li>• Input validation and sanitization</li>
            </ul>
            <ul class="space-y-1">
              <li>• Secure secret management</li>
              <li>• Network security and encryption</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-500/10 border border-gray-400/30 rounded-lg p-4">
          <h4 class="text-gray-300 font-semibold mb-3">📈 CI/CD Pipeline</h4>
          <div class="space-y-2 text-sm text-gray-300">
            <div class="flex items-center gap-3">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs">1</span>
              <span>Code commit triggers automated tests</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs">2</span>
              <span>Model validation and performance benchmarks</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="bg-orange-500 text-white px-2 py-1 rounded text-xs">3</span>
              <span>Container build and security scanning</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="bg-purple-500 text-white px-2 py-1 rounded text-xs">4</span>
              <span>Staged deployment (dev → staging → production)</span>
            </div>
          </div>
        </div>
      </div>`
    },
    {
      id: "best-practices",
      title: "AI Development Best Practices",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">As AI development matures in 2025, following established best practices is crucial for success:</p>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
            <h4 class="text-blue-300 font-semibold mb-4 flex items-center gap-2">
              📊 Data Management
            </h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">•</span>
                <div>
                  <strong class="text-white">Data Quality:</strong> "Garbage in, garbage out" - invest time in data cleaning
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">•</span>
                <div>
                  <strong class="text-white">Data Versioning:</strong> Track changes with <a href="https://dvc.org/" target="_blank" class="text-[#00F0FF] hover:underline">DVC</a> or Pachyderm
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">•</span>
                <div>
                  <strong class="text-white">Privacy Compliance:</strong> Implement GDPR, CCPA regulations
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">•</span>
                <div>
                  <strong class="text-white">Bias Detection:</strong> Regularly audit data for demographic biases
                </div>
              </li>
            </ul>
          </div>
          
          <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-6">
            <h4 class="text-green-300 font-semibold mb-4 flex items-center gap-2">
              🔬 Model Development
            </h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">•</span>
                <div>
                  <strong class="text-white">Start Simple:</strong> Begin with baseline models before complex architectures
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">•</span>
                <div>
                  <strong class="text-white">Reproducibility:</strong> Set random seeds, version environments
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">•</span>
                <div>
                  <strong class="text-white">Cross-Validation:</strong> Use robust validation strategies
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">•</span>
                <div>
                  <strong class="text-white">Regular Evaluation:</strong> Test models on new, unseen data
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-6">
          <h4 class="text-yellow-300 font-semibold mb-4 flex items-center gap-2">
            🤝 Team Collaboration
          </h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-yellow-400">✓</span> Clear Documentation: README, API docs, model cards</li>
              <li class="flex items-center gap-2"><span class="text-yellow-400">✓</span> Code Reviews: Peer review for quality and ML methodology</li>
              <li class="flex items-center gap-2"><span class="text-yellow-400">✓</span> Experiment Tracking: Use <a href="https://mlflow.org/" target="_blank" class="text-[#00F0FF] hover:underline">MLflow</a> or <a href="https://wandb.ai/" target="_blank" class="text-[#00F0FF] hover:underline">W&B</a></li>
            </ul>
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><span class="text-yellow-400">✓</span> Knowledge Sharing: Regular tech talks and walkthroughs</li>
              <li class="flex items-center gap-2"><span class="text-yellow-400">✓</span> Version Control: Git for code, DVC for data</li>
            </ul>
          </div>
        </div>

        <div class="bg-purple-500/10 border border-purple-400/30 rounded-lg p-6">
          <h4 class="text-purple-300 font-semibold mb-4 flex items-center gap-2">
            🔍 Ethical AI Considerations
          </h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">•</span>
                <div><strong class="text-white">Fairness Testing:</strong> Test across demographic groups</div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">•</span>
                <div><strong class="text-white">Explainability:</strong> Use <a href="https://shap.readthedocs.io/" target="_blank" class="text-[#00F0FF] hover:underline">SHAP</a> or LIME for model decisions</div>
              </li>
            </ul>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">•</span>
                <div><strong class="text-white">Human Oversight:</strong> Maintain human-in-the-loop for critical decisions</div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">•</span>
                <div><strong class="text-white">Transparency:</strong> Document model limitations and failure modes</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-orange-500/10 border border-orange-400/30 rounded-lg p-4">
          <h4 class="text-orange-300 font-semibold mb-3">📚 Staying Current</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul class="space-y-1">
              <li>• Follow Research: <a href="https://arxiv.org/" target="_blank" class="text-[#00F0FF] hover:underline">ArXiv</a>, <a href="https://paperswithcode.com/" target="_blank" class="text-[#00F0FF] hover:underline">Papers with Code</a></li>
              <li>• Community: AI Twitter, <a href="https://reddit.com/r/MachineLearning" target="_blank" class="text-[#00F0FF] hover:underline">Reddit r/MachineLearning</a></li>
              <li>• Conferences: <a href="https://neurips.cc/" target="_blank" class="text-[#00F0FF] hover:underline">NeurIPS</a>, <a href="https://icml.cc/" target="_blank" class="text-[#00F0FF] hover:underline">ICML</a>, <a href="https://iclr.cc/" target="_blank" class="text-[#00F0FF] hover:underline">ICLR</a></li>
            </ul>
            <ul class="space-y-1">
              <li>• Continuous Learning: Online courses, certifications</li>
              <li>• Open Source: Contribute to projects, learn from code</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-lg p-4">
          <h4 class="text-red-300 font-semibold mb-2">🎯 Remember</h4>
          <p class="text-gray-300 italic">AI development is as much about the process as it is about the technology. Focus on building reliable, maintainable systems that solve real problems.</p>
        </div>
      </div>`
    }
  ];

  const prerequisites = [
    "Basic programming knowledge (preferably Python)",
    "Understanding of mathematics: linear algebra, statistics, calculus basics",
    "Familiarity with data structures and algorithms",
    "Command line/terminal usage",
    "Git version control basics"
  ];

  const downloadableResources = [
    {
      title: "AI Development Roadmap PDF",
      url: "https://www.dfc.gov/sites/default/files/media/documents/DFC_AI_Roadmap_and_Compliance_Plan_0.pdf",
      type: "PDF"
    },
    {
      title: "Python Environment Setup Script",
      url: "https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer",
      type: "Shell Script"
    },
    {
      title: "ML Project Template Repository",
      url: "https://github.com/drivendata/cookiecutter-data-science",
      type: "GitHub Repo"
    },
    {
      title: "Curated AI Learning Resources",
      url: "https://github.com/josephmisiti/awesome-machine-learning/blob/master/README.md",
      type: "JSON"
    }
  ];

  const tags = [
    "AI Development",
    "Machine Learning", 
    "Deep Learning",
    "Python",
    "TensorFlow",
    "PyTorch",
    "LLMs",
    "MLOps",
    "Production",
    "Best Practices"
  ];

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Hero Background with lighter overlay to show image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aiHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/70 via-[#0A192F]/60 to-[#0D1B2A]/80"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg px-2">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                  Getting Started with AI Development
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed drop-shadow-md px-2">
                A comprehensive guide to beginning your AI development journey in 2025. From setting up your environment to deploying production-ready AI applications.
              </p>
              
              {/* Meta Information with enhanced styling - Mobile Responsive */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 text-gray-200 mb-6 md:mb-8 px-2">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-sm md:text-base">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#00F0FF]" />
                  <span className="font-medium">120 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-sm md:text-base">
                  <span className="text-green-400 text-base md:text-lg">●</span>
                  <span className="font-medium">Beginner Level</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-sm md:text-base">
                  <span className="text-[#FF4D00] font-bold">7</span>
                  <span className="font-medium">Sections</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom gradient transition */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A192F] to-transparent"></div>
        </section>

        {/* Content Section - Remove custom background since GuideTemplate handles it */}
        <div className="relative">
          <GuideTemplate
            title="" // Empty title since we handle it in hero
            description=""
            estimatedTime={120}
            difficulty="Beginner"
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

export default AIGettingStartedGuide;