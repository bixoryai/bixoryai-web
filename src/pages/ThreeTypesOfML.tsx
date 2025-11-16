import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Zap, TrendingUp, AlertCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SocialShare } from "@/components/social/SocialShare";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import mlTrendsHero from "@/assets/ml-trends-hero.jpg";

export default function ThreeTypesOfML() {
  const keyTakeaways = [
    "Supervised Learning learns from labeled data to make predictions on new, unseen data",
    "Unsupervised Learning discovers patterns in unlabeled data without explicit guidance",
    "Reinforcement Learning learns through trial and error using rewards and penalties",
    "Classification and regression are the two main types of supervised learning tasks",
    "Clustering and dimensionality reduction are key unsupervised learning techniques",
    "Q-learning and policy gradients are popular reinforcement learning algorithms",
    "Each learning type is suited for different problem domains and data scenarios"
  ];

  const relatedLinks = [
    {
      title: "Google Machine Learning Crash Course",
      url: "https://developers.google.com/machine-learning/crash-course"
    },
    {
      title: "Stanford CS229 Machine Learning",
      url: "https://cs229.stanford.edu/"
    },
    {
      title: "OpenAI Spinning Up in Deep RL",
      url: "https://spinningup.openai.com/"
    },
    {
      title: "Scikit-learn Documentation",
      url: "https://scikit-learn.org/stable/user_guide.html"
    }
  ];

  const content = `
  <div class="space-y-6 md:space-y-8">
  <div class="grid gap-8 lg:gap-12">
    
    <!-- Introduction Section -->
    <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">Understanding Machine Learning Types</h2>
      </div>
      
      <p class="text-base md:text-lg text-gray-300 leading-relaxed mb-6 px-2 md:px-0">
        Machine learning approaches can be categorized into three fundamental types based on <strong>how they learn from data</strong>. Each type serves different purposes and is suited for specific problem domains, from making predictions to discovering hidden patterns to learning optimal behaviors.
      </p>
      
      <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white">Supervised</h4>
          </div>
          <p class="text-sm text-gray-400">Learning from labeled examples</p>
        </div>
        
        <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white">Unsupervised</h4>
          </div>
          <p class="text-sm text-gray-400">Discovering hidden patterns</p>
        </div>
        
        <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white">Reinforcement</h4>
          </div>
          <p class="text-sm text-gray-400">Learning through feedback</p>
        </div>
      </div>
    </div>

    <!-- Supervised Learning Section -->
    <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">1. Supervised Learning</h2>
      </div>
      
      <div class="space-y-6">
        <p class="text-base md:text-lg text-gray-300 leading-relaxed px-2 md:px-0">
          <strong>Supervised learning</strong> is the most common type of machine learning where the model learns from <strong>labeled training data</strong>. Each example in the training set includes input features and the correct output (label), allowing the algorithm to learn the mapping between inputs and outputs.
        </p>
        
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <h4 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
                Classification
              </h4>
              <p class="text-gray-300 mb-3">Predicting discrete categories or classes</p>
              <ul class="space-y-2 text-sm text-gray-400">
                <li class="flex items-start gap-2">
                  <span class="text-orange-400 mt-1">•</span>
                  <span>Email spam detection (spam vs. not spam)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-orange-400 mt-1">•</span>
                  <span>Image recognition (cat, dog, bird, etc.)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-orange-400 mt-1">•</span>
                  <span>Medical diagnosis (disease present or absent)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-orange-400 mt-1">•</span>
                  <span>Sentiment analysis (positive, negative, neutral)</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <h4 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
                Regression
              </h4>
              <p class="text-gray-300 mb-3">Predicting continuous numerical values</p>
              <ul class="space-y-2 text-sm text-gray-400">
                <li class="flex items-start gap-2">
                  <span class="text-red-400 mt-1">•</span>
                  <span>House price prediction</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-400 mt-1">•</span>
                  <span>Stock price forecasting</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-400 mt-1">•</span>
                  <span>Temperature prediction</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-400 mt-1">•</span>
                  <span>Sales forecasting</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h4 class="text-xl font-semibold text-white mb-4">Common Algorithms</h4>
            <div class="space-y-3 text-gray-300">
              <div class="flex items-start gap-3">
                <span class="text-orange-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Linear/Logistic Regression:</strong>
                  <p class="text-sm text-gray-400 mt-1">Simple yet powerful for many prediction tasks</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-orange-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Decision Trees & Random Forests:</strong>
                  <p class="text-sm text-gray-400 mt-1">Tree-based models for both classification and regression</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-orange-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Support Vector Machines (SVM):</strong>
                  <p class="text-sm text-gray-400 mt-1">Effective for high-dimensional spaces</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-orange-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Neural Networks:</strong>
                  <p class="text-sm text-gray-400 mt-1">Deep learning for complex pattern recognition</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-orange-400 font-bold">•</span>
                <div>
                  <strong class="text-white">k-Nearest Neighbors (k-NN):</strong>
                  <p class="text-sm text-gray-400 mt-1">Instance-based learning algorithm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Unsupervised Learning Section -->
    <div class="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">2. Unsupervised Learning</h2>
      </div>
      
      <div class="space-y-6">
        <p class="text-base md:text-lg text-gray-300 leading-relaxed px-2 md:px-0">
          <strong>Unsupervised learning</strong> works with <strong>unlabeled data</strong> where the algorithm must discover patterns, structures, or relationships within the data without explicit guidance. The model identifies hidden patterns and insights that humans might not easily detect.
        </p>
        
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <h4 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                Clustering
              </h4>
              <p class="text-gray-300 mb-3">Grouping similar data points together</p>
              <ul class="space-y-2 text-sm text-gray-400">
                <li class="flex items-start gap-2">
                  <span class="text-purple-400 mt-1">•</span>
                  <span>Customer segmentation for marketing</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-400 mt-1">•</span>
                  <span>Document categorization</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-400 mt-1">•</span>
                  <span>Image compression</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-400 mt-1">•</span>
                  <span>Anomaly detection</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <h4 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                Dimensionality Reduction
              </h4>
              <p class="text-gray-300 mb-3">Reducing the number of features while preserving information</p>
              <ul class="space-y-2 text-sm text-gray-400">
                <li class="flex items-start gap-2">
                  <span class="text-blue-400 mt-1">•</span>
                  <span>Data visualization in 2D/3D</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-400 mt-1">•</span>
                  <span>Feature extraction and selection</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-400 mt-1">•</span>
                  <span>Noise reduction</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-400 mt-1">•</span>
                  <span>Computational efficiency improvement</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h4 class="text-xl font-semibold text-white mb-4">Common Algorithms</h4>
            <div class="space-y-3 text-gray-300">
              <div class="flex items-start gap-3">
                <span class="text-purple-400 font-bold">•</span>
                <div>
                  <strong class="text-white">K-Means Clustering:</strong>
                  <p class="text-sm text-gray-400 mt-1">Partitions data into K distinct clusters</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-purple-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Hierarchical Clustering:</strong>
                  <p class="text-sm text-gray-400 mt-1">Builds a tree of clusters (dendrogram)</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-purple-400 font-bold">•</span>
                <div>
                  <strong class="text-white">DBSCAN:</strong>
                  <p class="text-sm text-gray-400 mt-1">Density-based spatial clustering of applications with noise</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-purple-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Principal Component Analysis (PCA):</strong>
                  <p class="text-sm text-gray-400 mt-1">Linear dimensionality reduction technique</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-purple-400 font-bold">•</span>
                <div>
                  <strong class="text-white">t-SNE:</strong>
                  <p class="text-sm text-gray-400 mt-1">Non-linear dimensionality reduction for visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reinforcement Learning Section -->
    <div class="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-2xl p-8 border border-green-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">3. Reinforcement Learning</h2>
      </div>
      
      <div class="space-y-6">
        <p class="text-base md:text-lg text-gray-300 leading-relaxed px-2 md:px-0">
          <strong>Reinforcement learning</strong> is inspired by behavioral psychology where an <strong>agent learns to make decisions</strong> by interacting with an environment. The agent receives rewards or penalties based on its actions and learns to maximize cumulative rewards over time through trial and error.
        </p>
        
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h4 class="text-xl font-semibold text-white mb-4">Key Components</h4>
            <div class="space-y-3 text-gray-300">
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Agent:</strong>
                  <p class="text-sm text-gray-400 mt-1">The learner or decision maker</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Environment:</strong>
                  <p class="text-sm text-gray-400 mt-1">The world the agent interacts with</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Actions:</strong>
                  <p class="text-sm text-gray-400 mt-1">Choices the agent can make</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Rewards:</strong>
                  <p class="text-sm text-gray-400 mt-1">Feedback signals (positive or negative)</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Policy:</strong>
                  <p class="text-sm text-gray-400 mt-1">Strategy for selecting actions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h4 class="text-xl font-semibold text-white mb-3">Real-World Applications</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">•</span>
                <span><strong>Game Playing:</strong> Chess, Go, video games (AlphaGo, OpenAI Five)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">•</span>
                <span><strong>Robotics:</strong> Autonomous navigation and manipulation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">•</span>
                <span><strong>Autonomous Vehicles:</strong> Self-driving cars learning from road conditions</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">•</span>
                <span><strong>Resource Management:</strong> Energy optimization, network routing</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">•</span>
                <span><strong>Finance:</strong> Trading strategies and portfolio optimization</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">•</span>
                <span><strong>Personalization:</strong> Recommendation systems that adapt</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <h4 class="text-xl font-semibold text-white mb-4">Popular Algorithms</h4>
          <div class="grid md:grid-cols-2 gap-4 text-gray-300">
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Q-Learning:</strong>
                  <p class="text-sm text-gray-400 mt-1">Model-free value-based learning</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Deep Q-Networks (DQN):</strong>
                  <p class="text-sm text-gray-400 mt-1">Combines Q-learning with deep neural networks</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">SARSA:</strong>
                  <p class="text-sm text-gray-400 mt-1">On-policy temporal difference learning</p>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Policy Gradients:</strong>
                  <p class="text-sm text-gray-400 mt-1">Directly optimize the policy</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Actor-Critic:</strong>
                  <p class="text-sm text-gray-400 mt-1">Combines value and policy-based methods</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-green-400 font-bold">•</span>
                <div>
                  <strong class="text-white">Proximal Policy Optimization (PPO):</strong>
                  <p class="text-sm text-gray-400 mt-1">Stable and efficient policy optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Comparison Table -->
    <div class="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Quick Comparison</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="border-b border-gray-700">
              <th class="pb-4 px-4 text-white font-semibold">Aspect</th>
              <th class="pb-4 px-4 text-white font-semibold">Supervised</th>
              <th class="pb-4 px-4 text-white font-semibold">Unsupervised</th>
              <th class="pb-4 px-4 text-white font-semibold">Reinforcement</th>
            </tr>
          </thead>
          <tbody class="text-gray-300">
            <tr class="border-b border-gray-700/50">
              <td class="py-4 px-4 font-semibold text-white">Data Type</td>
              <td class="py-4 px-4">Labeled data</td>
              <td class="py-4 px-4">Unlabeled data</td>
              <td class="py-4 px-4">Reward/penalty signals</td>
            </tr>
            <tr class="border-b border-gray-700/50">
              <td class="py-4 px-4 font-semibold text-white">Goal</td>
              <td class="py-4 px-4">Predict outcomes</td>
              <td class="py-4 px-4">Find patterns</td>
              <td class="py-4 px-4">Maximize rewards</td>
            </tr>
            <tr class="border-b border-gray-700/50">
              <td class="py-4 px-4 font-semibold text-white">Feedback</td>
              <td class="py-4 px-4">Direct (labels)</td>
              <td class="py-4 px-4">None</td>
              <td class="py-4 px-4">Delayed rewards</td>
            </tr>
            <tr class="border-b border-gray-700/50">
              <td class="py-4 px-4 font-semibold text-white">Examples</td>
              <td class="py-4 px-4">Spam detection, image classification</td>
              <td class="py-4 px-4">Customer segmentation, anomaly detection</td>
              <td class="py-4 px-4">Game playing, robotics</td>
            </tr>
            <tr>
              <td class="py-4 px-4 font-semibold text-white">Complexity</td>
              <td class="py-4 px-4">Moderate</td>
              <td class="py-4 px-4">Moderate to High</td>
              <td class="py-4 px-4">High</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
  </div>
  `;

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section with Image Background */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${mlTrendsHero})` }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/80 z-10" />
        
        <div className="container mx-auto px-6 relative z-20">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="text-gray-300 hover:text-white">
                  <Link to="/knowledge-base">Knowledge Base</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Three Types of Machine Learning</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Three Types of Machine Learning
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl">
              Comprehensive guide to supervised, unsupervised, and reinforcement learning approaches with practical examples.
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                Supervised Learning
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                Unsupervised Learning
              </Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                Reinforcement Learning
              </Badge>
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                ML Types
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Social Share Component */}
        <div className="mb-8">
          <SocialShare 
            title="Three Types of Machine Learning"
            url={window.location.href}
            description="Comprehensive guide to supervised, unsupervised, and reinforcement learning approaches with practical examples."
            showLike={true}
          />
        </div>

        {/* Main Content */}
        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Key Takeaways */}
        <Card className="mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Zap className="w-6 h-6 text-accent" />
              Key Takeaways
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-accent mt-1">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Related Resources */}
        <Card className="mt-8 bg-gradient-to-r from-purple-900/20 to-orange-900/20 border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <BookOpen className="w-6 h-6 text-accent" />
              Related Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {relatedLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                  >
                    <span>{link.title}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Back to Knowledge Base */}
        <div className="mt-12 text-center">
          <Link
            to="/knowledge-base"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Knowledge Base
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
