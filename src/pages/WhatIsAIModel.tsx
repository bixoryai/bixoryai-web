import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Database, Lightbulb, Target, Zap, AlertCircle, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SocialShare } from "@/components/social/SocialShare";
import { Link } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import heroImage from "@/assets/ai-development-hero.jpg";
import knowledgeImage from "@/assets/knowledge-illustration.jpg";
import productivityImage from "@/assets/productivity-illustration.jpg";

export default function WhatIsAIModel() {
  const keyTakeaways = [
    "AI models are computer programs trained on large datasets to recognize patterns and make decisions",
    "Training involves feeding data to the model and adjusting internal parameters based on performance",
    "Different model architectures serve different purposes: CNNs for images, RNNs for sequences, Transformers for language",
    "Model parameters are learned values that determine how input data is processed and transformed",
    "Pre-trained models can be fine-tuned for specific tasks through transfer learning",
    "Model evaluation uses metrics like accuracy, precision, recall, and F1 score to measure performance",
    "Deployment requires optimization techniques like quantization and pruning for efficient inference"
  ];

  const relatedLinks = [
    {
      title: "Google AI Education",
      url: "https://ai.google/education/"
    },
    {
      title: "OpenAI Research",
      url: "https://openai.com/research"
    },
    {
      title: "Hugging Face Model Hub",
      url: "https://huggingface.co/models"
    },
    {
      title: "Papers with Code",
      url: "https://paperswithcode.com/"
    }
  ];

  const content = `
  <div class="space-y-6 md:space-y-8">
  <div class="grid gap-8 lg:gap-12">
    
    <!-- What is an AI Model Section -->
    <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">Understanding AI Models</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <div>
          <p class="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6 px-2 md:px-0">
            An <strong>AI model</strong> is a computer program trained on large datasets to recognize patterns and make intelligent decisions without explicit programming for every scenario. Think of it as a mathematical representation of knowledge learned from examples.
          </p>
          
          <div class="space-y-4">
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">Training Data</h4>
              </div>
              <p class="text-sm text-gray-400 ml-13">Models learn from vast amounts of labeled examples, extracting patterns and relationships to make predictions on new, unseen data.</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">Parameters</h4>
              </div>
              <p class="text-sm text-gray-400 ml-13">Internal values learned during training that determine how the model transforms input into output. Large models can have billions of parameters.</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">Inference</h4>
              </div>
              <p class="text-sm text-gray-400 ml-13">The process of using a trained model to make predictions on new data, applying learned patterns to generate outputs or decisions.</p>
            </div>
          </div>
        </div>
        
        <div class="lg:pl-8">
          <img src="${knowledgeImage}" alt="AI Model Concept" class="w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </div>

    <!-- How AI Models Work Section -->
    <div class="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-2xl p-8 border border-green-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">The Training Process</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <div class="lg:order-2">
          <img src="${productivityImage}" alt="AI Training Process" class="w-full rounded-xl shadow-lg" />
        </div>
        
        <div class="lg:order-1">
          <p class="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6 px-2 md:px-0">
            Training an AI model is an <strong>iterative process</strong> where the model learns to minimize errors by adjusting its parameters based on feedback from training data.
          </p>
          
          <div class="space-y-4">
            <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span class="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h4 class="text-lg font-semibold text-white">Data Preparation</h4>
              </div>
              <p class="text-sm text-gray-300 leading-relaxed">
                Collect and clean large datasets, ensuring quality and diversity. Data is split into training, validation, and test sets to prevent overfitting and evaluate performance accurately.
              </p>
            </div>
            
            <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span class="text-2xl font-bold text-green-400">2</span>
                </div>
                <h4 class="text-lg font-semibold text-white">Forward Pass</h4>
              </div>
              <p class="text-sm text-gray-300 leading-relaxed">
                Input data flows through the network layers, with each layer applying transformations using current parameter values. The model generates predictions based on its current state.
              </p>
            </div>
            
            <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span class="text-2xl font-bold text-purple-400">3</span>
                </div>
                <h4 class="text-lg font-semibold text-white">Loss Calculation</h4>
              </div>
              <p class="text-sm text-gray-300 leading-relaxed">
                Compare predictions to actual labels using a loss function. The loss quantifies how far off the model's predictions are, guiding the learning process.
              </p>
            </div>

            <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span class="text-2xl font-bold text-orange-400">4</span>
                </div>
                <h4 class="text-lg font-semibold text-white">Backpropagation</h4>
              </div>
              <p class="text-sm text-gray-300 leading-relaxed">
                Calculate gradients and update parameters using optimization algorithms like gradient descent. This iterative process continues until the model converges to optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Types of AI Models Section -->
    <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">Common Model Architectures</h2>
      </div>
      
      <p class="text-lg text-gray-300 leading-relaxed mb-8">
        Different AI tasks require different model architectures, each optimized for specific types of data and problems.
      </p>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
          <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Convolutional Neural Networks (CNNs)</h4>
          <p class="text-sm text-gray-400">Specialized for image processing and computer vision tasks. Use convolution operations to detect spatial patterns and features.</p>
        </div>
        
        <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl p-6 border border-green-500/20">
          <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Recurrent Neural Networks (RNNs)</h4>
          <p class="text-sm text-gray-400">Designed for sequential data like time series and text. Maintain memory of previous inputs through recurrent connections.</p>
        </div>
        
        <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
          <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Transformers</h4>
          <p class="text-sm text-gray-400">State-of-the-art for language tasks. Use attention mechanisms to process entire sequences in parallel, powering models like GPT and BERT.</p>
        </div>
        
        <div class="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
          <div class="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Generative Adversarial Networks (GANs)</h4>
          <p class="text-sm text-gray-400">Two networks compete: a generator creates fake data, and a discriminator learns to detect it. Used for image synthesis and style transfer.</p>
        </div>
        
        <div class="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl p-6 border border-red-500/20">
          <div class="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Autoencoders</h4>
          <p class="text-sm text-gray-400">Compress input data into a lower-dimensional representation, then reconstruct it. Used for dimensionality reduction and anomaly detection.</p>
        </div>
        
        <div class="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl p-6 border border-indigo-500/20">
          <div class="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Residual Networks (ResNet)</h4>
          <p class="text-sm text-gray-400">Deep networks with skip connections that allow gradients to flow through many layers. Solve the vanishing gradient problem in very deep networks.</p>
        </div>
      </div>
    </div>

    <!-- Model Lifecycle Section -->
    <div class="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">From Training to Deployment</h2>
      </div>
      
      <p class="text-lg text-gray-300 leading-relaxed mb-8">
        The journey of an AI model from initial development to production involves several critical stages.
      </p>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-sm font-bold">1</span>
              Model Development
            </h4>
            <p class="text-sm text-gray-300 leading-relaxed">
              Design architecture, prepare datasets, and train the model. Experiment with different hyperparameters and architectures to optimize performance.
            </p>
          </div>
          
          <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-sm font-bold">2</span>
              Validation & Testing
            </h4>
            <p class="text-sm text-gray-300 leading-relaxed">
              Evaluate model performance on unseen data using appropriate metrics. Identify and address issues like overfitting, underfitting, and bias.
            </p>
          </div>

          <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-sm font-bold">3</span>
              Optimization
            </h4>
            <p class="text-sm text-gray-300 leading-relaxed">
              Apply techniques like quantization, pruning, and knowledge distillation to reduce model size and improve inference speed without significant accuracy loss.
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 text-sm font-bold">4</span>
              Deployment
            </h4>
            <p class="text-sm text-gray-300 leading-relaxed">
              Deploy the model to production environments, whether cloud services, edge devices, or on-premise servers. Set up monitoring and logging systems.
            </p>
          </div>

          <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-sm font-bold">5</span>
              Monitoring & Maintenance
            </h4>
            <p class="text-sm text-gray-300 leading-relaxed">
              Continuously monitor model performance in production. Track metrics like latency, throughput, and accuracy. Retrain periodically with new data to prevent model drift.
            </p>
          </div>

          <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 text-sm font-bold">6</span>
              Iteration & Improvement
            </h4>
            <p class="text-sm text-gray-300 leading-relaxed">
              Collect feedback, analyze errors, and improve the model iteratively. Incorporate new data sources and refine the architecture based on real-world performance.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
  `;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary">
        <Hero
          title="What is an AI Model?"
          subtitle="Understanding how AI models learn from data to make intelligent predictions and decisions"
          backgroundImage={heroImage}
          showButtons={false}
        />

        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 py-6">
          <Breadcrumb>
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
              <BreadcrumbPage className="text-accent">What is an AI Model?</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Article Metadata */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                <Brain className="w-3 h-3 mr-1" />
                AI Fundamentals
              </Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 hover:bg-green-500/30">
                <Database className="w-3 h-3 mr-1" />
                Machine Learning
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                <Cpu className="w-3 h-3 mr-1" />
                Neural Networks
              </Badge>
            </div>

            {/* Introduction */}
            <Card className="bg-primary/80 border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-lg leading-relaxed">
                  AI models are the foundation of modern artificial intelligence, enabling machines to perform tasks that traditionally required human intelligence. From recognizing faces in photos to understanding natural language, AI models power countless applications that shape our daily lives.
                </p>
                <p className="leading-relaxed">
                  At their core, AI models are mathematical functions with millions or billions of parameters that are optimized through training on large datasets. Rather than being explicitly programmed with rules, these models learn patterns from examples, making them incredibly flexible and powerful for solving complex problems.
                </p>
                <p className="leading-relaxed">
                  Understanding how AI models work is essential for anyone looking to leverage AI technology, whether you're building applications, making business decisions, or simply curious about the technology shaping our future.
                </p>
              </CardContent>
            </Card>

            {/* Main Content */}
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Key Takeaways */}
            <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 my-12">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Target className="w-6 h-6 text-accent" />
                  Key Takeaways
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card className="bg-primary/80 border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-white">Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700/50"
                    >
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-gray-300 hover:text-white">{link.title}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Share */}
            <div className="flex justify-center my-8">
              <SocialShare 
                url={window.location.href}
                title="What is an AI Model? - BIXORY AI"
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}