import { GuideTemplate } from "@/components/knowledge-base/templates/GuideTemplate";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock } from "lucide-react";
import aiHero from "@/assets/ai-development-hero.jpg";
import aiRoadmap from "@/assets/ai-roadmap-infographic.jpg";
import aiFrameworks from "@/assets/ai-frameworks-comparison.jpg";

const AIGettingStartedGuide = () => {
  const sections = [
    {
      id: "fundamentals",
      title: "Understanding AI Fundamentals",
      content: `Artificial Intelligence (AI) in 2025 encompasses three main paradigms that every developer should understand:

**Machine Learning (ML)**: Systems that learn patterns from data without explicit programming. This includes:
• Supervised Learning: Training models with labeled examples
• Unsupervised Learning: Finding hidden patterns in unlabeled data  
• Reinforcement Learning: Learning through interaction and rewards

**Deep Learning**: Neural networks with multiple layers that can learn complex representations:
• Convolutional Neural Networks (CNNs) for image processing
• Recurrent Neural Networks (RNNs) for sequential data
• Transformers for natural language processing

**Large Language Models (LLMs)**: Pre-trained models like GPT-4, Claude, and others that understand and generate human-like text. These are revolutionizing how we build AI applications through:
• API integration for instant AI capabilities
• Fine-tuning for specialized tasks
• Prompt engineering for better outputs

The key insight for 2025 is that you don't need to build everything from scratch. Most AI development now involves leveraging existing models and frameworks.`
    },
    {
      id: "environment",
      title: "Setting Up Your Development Environment",
      content: `Your AI development setup in 2025 should include these essential components:

**Python Environment**:
• Python 3.9+ (recommended: Python 3.11 for optimal performance)
• Anaconda or Miniconda for package management
• Virtual environments for project isolation

**Essential Libraries**:
• NumPy & Pandas for data manipulation
• Matplotlib & Seaborn for visualization
• Scikit-learn for traditional machine learning
• Jupyter Notebooks for experimentation

**Hardware Considerations**:
• GPU: NVIDIA RTX 4060 or better for local training
• RAM: Minimum 16GB, ideally 32GB for larger models
• Storage: SSD with at least 500GB free space
• Cloud alternatives: Google Colab Pro, AWS SageMaker, or Azure ML

**Development Tools**:
• VS Code with Python and Jupyter extensions
• Git for version control
• Docker for containerization
• Weights & Biases (wandb) for experiment tracking

Pro tip: Start with cloud-based solutions like Google Colab if you're just beginning - you can always transition to local development later.`
    },
    {
      id: "frameworks",
      title: "Choosing the Right AI Framework",
      content: `<img src="${aiFrameworks}" alt="AI Frameworks Comparison" style="width: 100%; margin: 20px 0; border-radius: 8px;" />

In 2025, the AI framework landscape has stabilized around several key players:

**TensorFlow 2.15+**: 
• Best for: Production deployment and mobile/edge applications
• Strengths: Mature ecosystem, TensorFlow Serving, TensorFlow Lite
• Use when: Building production-ready applications with complex pipelines

**PyTorch 2.2+**:
• Best for: Research, prototyping, and dynamic neural networks
• Strengths: Intuitive API, strong community, excellent debugging
• Use when: Experimenting with new architectures or research projects

**Hugging Face Transformers**:
• Best for: Natural language processing and pre-trained models
• Strengths: Massive model hub, easy API, state-of-the-art models
• Use when: Working with text, speech, or vision transformers

**JAX (by Google)**:
• Best for: High-performance numerical computing
• Strengths: NumPy-compatible, auto-differentiation, JIT compilation
• Use when: Need maximum performance for mathematical computations

**OpenAI API / Anthropic Claude**:
• Best for: Quick AI integration without training
• Strengths: No training required, powerful capabilities, easy integration
• Use when: Building applications that need conversational AI or text processing

**Framework Selection Guide**:
• Beginners: Start with PyTorch for learning, then add Hugging Face for NLP
• Production focus: TensorFlow for deployment, PyTorch for development
• Quick prototypes: OpenAI/Anthropic APIs + basic web framework
• Research: PyTorch + JAX for performance-critical components`
    },
    {
      id: "first-project",
      title: "Building Your First AI Project",
      content: `Let's build a practical AI application: a sentiment analysis tool using modern approaches.

**Project: Real-time Sentiment Analyzer**

**Approach 1: Using Pre-trained Models (Recommended for beginners)**
\`\`\`python
from transformers import pipeline

# Load pre-trained sentiment analysis model
classifier = pipeline("sentiment-analysis", 
                     model="cardiffnlp/twitter-roberta-base-sentiment-latest")

def analyze_sentiment(text):
    result = classifier(text)
    return {
        'sentiment': result[0]['label'],
        'confidence': result[0]['score']
    }

# Test the model
sample_text = "I love learning AI development!"
print(analyze_sentiment(sample_text))
\`\`\`

**Approach 2: Using OpenAI API (For production applications)**
\`\`\`python
import openai

client = openai.OpenAI(api_key="your-api-key")

def analyze_sentiment_gpt(text):
    response = client.chat.completions.create(
        model="gpt-4.1-2025-04-14",
        messages=[
            {"role": "system", "content": "Analyze sentiment: positive, negative, or neutral. Respond with JSON."},
            {"role": "user", "content": text}
        ],
        response_format={"type": "json_object"}
    )
    return response.choices[0].message.content
\`\`\`

**Key Learning Points**:
• Start simple: Use pre-trained models before building from scratch
• Understand your data: Always examine what you're working with
• Evaluate performance: Test with diverse examples
• Consider costs: API calls vs. local computation trade-offs

**Next Steps**:
• Add a web interface using Streamlit or Flask
• Implement batch processing for multiple texts
• Add visualization of sentiment trends over time
• Deploy using Docker and cloud services`
    },
    {
      id: "ml-pipeline",
      title: "Understanding ML Pipelines",
      content: `<img src="${aiRoadmap}" alt="AI Development Roadmap" style="width: 100%; margin: 20px 0; border-radius: 8px;" />

A modern ML pipeline in 2025 follows this structure:

**1. Data Collection & Preparation**
• Data sources: APIs, databases, web scraping, synthetic data
• Cleaning: Handle missing values, outliers, duplicates
• Feature engineering: Create meaningful inputs for your model
• Data validation: Ensure quality and consistency

**2. Model Development**
• Problem definition: Classification, regression, generation, etc.
• Model selection: Start simple (linear models), then progress to complex
• Training: Split data (train/validation/test), fit models, tune hyperparameters
• Evaluation: Use appropriate metrics for your problem type

**3. Model Deployment**
• Containerization: Docker for consistent environments
• API creation: FastAPI or Flask for serving predictions
• Monitoring: Track model performance in production
• CI/CD: Automated testing and deployment pipelines

**Modern Tools for Each Stage**:
• **Data**: Pandas, Polars, DuckDB for processing
• **Training**: PyTorch Lightning, Hugging Face Trainer
• **Experimentation**: Weights & Biases, MLflow
• **Deployment**: FastAPI, Docker, Kubernetes
• **Monitoring**: Evidently AI, Great Expectations

**MLOps Best Practices**:
• Version control everything: code, data, models
• Automate testing: unit tests, integration tests, model validation
• Monitor drift: data distribution changes over time
• Plan for scaling: from prototype to production loads

**Common Pipeline Architecture**:
\`\`\`
Raw Data → Feature Store → Model Training → Model Registry → Deployment → Monitoring
\`\`\`

This pipeline approach ensures reproducibility, scalability, and maintainability of your AI systems.`
    },
    {
      id: "llm-integration",
      title: "Working with Large Language Models",
      content: `LLMs have revolutionized AI development in 2025. Here's how to leverage them effectively:

**Understanding LLM Capabilities**:
• Text generation and completion
• Language translation and summarization
• Code generation and debugging
• Reasoning and problem-solving
• Multimodal understanding (text + images)

**Popular LLM APIs in 2025**:

**OpenAI GPT-4.1**: 
• Best for: General-purpose applications, code generation
• Pricing: $15/1M input tokens, $30/1M output tokens
• Context: 128K tokens
• Strengths: Versatile, reliable, strong coding abilities

**Anthropic Claude Opus 4**:
• Best for: Complex reasoning, long-form content, safety-critical applications
• Pricing: $15/1M tokens for 7-hour coding sessions
• Context: 200K tokens
• Strengths: Superior reasoning, ethical considerations, document analysis

**Google Gemini Pro**:
• Best for: Multimodal applications, integration with Google services
• Pricing: Competitive rates, free tier available
• Strengths: Native multimodal capabilities, fast inference

**Practical Integration Example**:
\`\`\`python
# Using multiple LLM providers with fallback
import openai
import anthropic
from typing import Optional

class LLMManager:
    def __init__(self):
        self.openai_client = openai.OpenAI()
        self.anthropic_client = anthropic.Anthropic()
    
    async def generate_response(self, prompt: str, 
                              provider: str = "openai") -> Optional[str]:
        try:
            if provider == "openai":
                response = self.openai_client.chat.completions.create(
                    model="gpt-4.1-2025-04-14",
                    messages=[{"role": "user", "content": prompt}],
                    max_tokens=1000
                )
                return response.choices[0].message.content
            
            elif provider == "anthropic":
                response = self.anthropic_client.messages.create(
                    model="claude-opus-4-20250514",
                    max_tokens=1000,
                    messages=[{"role": "user", "content": prompt}]
                )
                return response.content[0].text
                
        except Exception as e:
            # Fallback to alternative provider
            print(f"Error with {provider}: {e}")
            return await self.generate_response(prompt, 
                                               "anthropic" if provider == "openai" else "openai")
\`\`\`

**Prompt Engineering Best Practices**:
• Be specific and clear in your instructions
• Provide examples (few-shot prompting)
• Use system messages to set context and constraints
• Break complex tasks into smaller steps
• Test prompts extensively with edge cases

**Cost Optimization Strategies**:
• Cache responses for repeated queries
• Use streaming for real-time applications
• Implement smart truncation for long inputs
• Consider fine-tuning for specialized tasks
• Monitor token usage and set limits`
    },
    {
      id: "production",
      title: "Deploying AI to Production",
      content: `Moving from prototype to production requires careful planning and robust infrastructure:

**Deployment Architecture Patterns**:

**1. API-First Approach**
\`\`\`python
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
import asyncio

app = FastAPI(title="AI Service API")

class PredictionRequest(BaseModel):
    text: str
    model_version: str = "v1.0"

class PredictionResponse(BaseModel):
    prediction: str
    confidence: float
    processing_time: float

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    start_time = time.time()
    
    # Load model based on version
    model = model_registry.get_model(request.model_version)
    
    # Make prediction
    result = await model.predict(request.text)
    
    processing_time = time.time() - start_time
    
    return PredictionResponse(
        prediction=result.prediction,
        confidence=result.confidence,
        processing_time=processing_time
    )
\`\`\`

**2. Containerization with Docker**
\`\`\`dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Health check
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:8000/health || exit 1

# Run application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

**3. Kubernetes Deployment**
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ai-service
  template:
    metadata:
      labels:
        app: ai-service
    spec:
      containers:
      - name: ai-service
        image: your-registry/ai-service:latest
        ports:
        - containerPort: 8000
        resources:
          requests:
            memory: "2Gi"
            cpu: "1000m"
          limits:
            memory: "4Gi"
            cpu: "2000m"
        env:
        - name: MODEL_PATH
          value: "/models/latest"
\`\`\`

**Production Considerations**:

**Performance Optimization**:
• Model quantization to reduce memory usage
• Batch processing for multiple requests
• Caching for frequently requested predictions
• Load balancing across multiple instances

**Monitoring & Observability**:
• Request/response logging
• Model performance metrics
• Infrastructure monitoring (CPU, memory, GPU)
• Error tracking and alerting

**Security Best Practices**:
• API authentication and rate limiting
• Input validation and sanitization
• Secure secret management
• Network security and encryption

**Scaling Strategies**:
• Horizontal scaling: Add more instances
• Vertical scaling: Increase instance resources
• Auto-scaling based on metrics
• Edge deployment for reduced latency

**CI/CD Pipeline Example**:
1. Code commit triggers automated tests
2. Model validation and performance benchmarks
3. Container build and security scanning
4. Staged deployment (dev → staging → production)
5. Monitoring and rollback capabilities

**Cost Management**:
• Right-size your infrastructure
• Use spot instances for non-critical workloads
• Implement intelligent caching
• Monitor and optimize API usage
• Consider serverless options for sporadic workloads`
    },
    {
      id: "best-practices",
      title: "AI Development Best Practices",
      content: `As AI development matures in 2025, following established best practices is crucial for success:

**Data Management**:
• **Data Quality**: "Garbage in, garbage out" - invest time in data cleaning
• **Data Versioning**: Track data changes with tools like DVC or Pachyderm
• **Privacy Compliance**: Implement GDPR, CCPA, and other privacy regulations
• **Bias Detection**: Regularly audit data for demographic and selection biases
• **Synthetic Data**: Use tools like Faker or Gretel for privacy-safe development

**Model Development**:
• **Start Simple**: Begin with baseline models before moving to complex architectures
• **Reproducibility**: Set random seeds, version environments, document everything
• **Cross-Validation**: Use robust validation strategies appropriate for your data
• **Feature Engineering**: Domain knowledge often beats algorithmic complexity
• **Regular Evaluation**: Continuously test models on new, unseen data

**Code Quality**:
\`\`\`python
# Example of well-structured AI code
import logging
from typing import Dict, List, Optional
from dataclasses import dataclass
import numpy as np

@dataclass
class ModelConfig:
    model_name: str
    learning_rate: float
    batch_size: int
    max_epochs: int
    
class ModelTrainer:
    def __init__(self, config: ModelConfig):
        self.config = config
        self.logger = logging.getLogger(__name__)
        
    def train(self, train_data: np.ndarray, 
              val_data: np.ndarray) -> Dict[str, float]:
        """Train model with proper logging and validation."""
        self.logger.info(f"Starting training with {self.config.model_name}")
        
        # Training logic here
        metrics = self._validate_model(val_data)
        
        self.logger.info(f"Training completed. Metrics: {metrics}")
        return metrics
    
    def _validate_model(self, val_data: np.ndarray) -> Dict[str, float]:
        """Validate model performance."""
        # Validation logic
        return {"accuracy": 0.95, "f1_score": 0.92}
\`\`\`

**Ethical AI Considerations**:
• **Fairness Testing**: Test model performance across different demographic groups
• **Explainability**: Use tools like SHAP or LIME to understand model decisions
• **Human Oversight**: Maintain human-in-the-loop for critical decisions
• **Transparency**: Document model limitations and failure modes
• **Continuous Monitoring**: Watch for drift in model behavior over time

**Team Collaboration**:
• **Clear Documentation**: Maintain up-to-date README, API docs, and model cards
• **Code Reviews**: Peer review for both code quality and ML methodology
• **Experiment Tracking**: Use MLflow or Weights & Biases for team visibility
• **Knowledge Sharing**: Regular tech talks and code walkthroughs
• **Version Control**: Git for code, DVC for data, model registries for models

**Performance Monitoring**:
• **A/B Testing**: Compare model versions in production
• **Data Drift Detection**: Monitor input distribution changes
• **Model Degradation**: Track performance metrics over time
• **Business Metrics**: Connect AI metrics to business outcomes
• **Alerting**: Set up notifications for anomalies or performance drops

**Staying Current**:
• **Follow Research**: ArXiv, Papers with Code, Google AI Blog
• **Community Engagement**: AI Twitter, Reddit r/MachineLearning, Discord servers
• **Conferences**: NeurIPS, ICML, ICLR (virtual attendance is often available)
• **Continuous Learning**: Online courses, certifications, hands-on projects
• **Open Source**: Contribute to projects, learn from others' code

Remember: AI development is as much about the process as it is about the technology. Focus on building reliable, maintainable systems that solve real problems.`
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
      url: "#",
      type: "PDF"
    },
    {
      title: "Python Environment Setup Script",
      url: "#",
      type: "Shell Script"
    },
    {
      title: "ML Project Template Repository",
      url: "#",
      type: "GitHub Repo"
    },
    {
      title: "Curated AI Learning Resources",
      url: "#",
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
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                  Getting Started with AI Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">
                A comprehensive guide to beginning your AI development journey in 2025. From setting up your environment to deploying production-ready AI applications.
              </p>
              
              {/* Meta Information with enhanced styling */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-200 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Clock className="h-5 w-5 text-[#00F0FF]" />
                  <span className="font-medium">120 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-green-400 text-lg">●</span>
                  <span className="font-medium">Beginner Level</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
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
      </div>
      <Footer />
    </>
  );
};

export default AIGettingStartedGuide;