import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Lightbulb, Target, Zap, AlertCircle, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SocialShare } from "@/components/social/SocialShare";
import { Link } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import heroImage from "@/assets/ai-development-hero.jpg";
import knowledgeImage from "@/assets/knowledge-illustration.jpg";
import productivityImage from "@/assets/productivity-illustration.jpg";

export default function TypesOfAI() {
  const keyTakeaways = [
    "Reactive Machines represent the most basic form of AI with no memory or learning capability",
    "Limited Memory AI systems learn from historical data and are used in most modern applications",
    "Theory of Mind AI remains largely theoretical, aiming to understand emotions and social interactions",
    "Self-Aware AI represents the ultimate goal but exists only in concept and science fiction",
    "Narrow AI (ANI) excels at specific tasks and powers today's AI applications",
    "Artificial General Intelligence (AGI) would match human cognitive abilities across all domains",
    "Artificial Superintelligence (ASI) would theoretically surpass human intelligence in every aspect"
  ];

  const relatedLinks = [
    {
      title: "IBM AI Types Overview",
      url: "https://www.ibm.com/topics/artificial-intelligence"
    },
    {
      title: "Stanford AI Index Report",
      url: "https://aiindex.stanford.edu/"
    },
    {
      title: "MIT Technology Review AI",
      url: "https://www.technologyreview.com/topic/artificial-intelligence/"
    },
    {
      title: "DeepMind Research",
      url: "https://www.deepmind.com/research"
    }
  ];

  const content = `
  <div class="space-y-6 md:space-y-8">
  <div class="grid gap-8 lg:gap-12">
    
    <!-- Types Based on Capabilities Section -->
    <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">AI Types Based on Capabilities</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <div>
          <p class="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6 px-2 md:px-0">
            AI systems can be classified based on their <strong>capabilities and cognitive functions</strong>. This classification ranges from simple reactive systems to hypothetical superintelligent entities, representing the evolutionary spectrum of artificial intelligence development.
          </p>
          
          <div class="space-y-4">
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">Reactive Machines</h4>
              </div>
              <p class="text-sm text-gray-400 ml-13">The most basic AI type that responds to inputs with predetermined outputs. No memory or learning capability. Example: IBM's Deep Blue chess computer.</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">Limited Memory</h4>
              </div>
              <p class="text-sm text-gray-400 ml-13">AI that learns from historical data and past experiences. Powers most modern AI applications including self-driving cars and virtual assistants.</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">Theory of Mind</h4>
              </div>
              <p class="text-sm text-gray-400 ml-13">Theoretical AI capable of understanding human emotions, beliefs, and social interactions. Still in research and development phase.</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">Self-Aware AI</h4>
              </div>
              <p class="text-sm text-gray-400 ml-13">Hypothetical AI with consciousness and self-awareness. Exists only in concept and science fiction. Represents the ultimate evolution of AI.</p>
            </div>
          </div>
        </div>
        
        <div class="lg:pl-8">
          <img src="${knowledgeImage}" alt="AI Types Classification" class="w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </div>

    <!-- Types Based on Functionality Section -->
    <div class="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-2xl p-8 border border-green-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">AI Types Based on Functionality</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <div class="lg:order-2">
          <img src="${productivityImage}" alt="AI Functionality Types" class="w-full rounded-xl shadow-lg" />
        </div>
        
        <div class="lg:order-1">
          <p class="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6 px-2 md:px-0">
            Another classification system categorizes AI based on <strong>functionality and scope</strong> of capabilities, ranging from narrow task-specific systems to theoretical superintelligent entities that could surpass human intelligence in every domain.
          </p>
          
          <div class="space-y-4">
            <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">Narrow AI (ANI)</h4>
              </div>
              <p class="text-sm text-gray-300 leading-relaxed mb-2">
                Also called <strong>Weak AI</strong>, designed to perform specific tasks with superhuman efficiency. Examples include facial recognition, spam filters, recommendation systems, and virtual assistants like Siri and Alexa.
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span class="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">Current Technology</span>
                <span class="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">Task-Specific</span>
              </div>
            </div>
            
            <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">General AI (AGI)</h4>
              </div>
              <p class="text-sm text-gray-300 leading-relaxed mb-2">
                Also called <strong>Strong AI</strong>, would possess human-level cognitive abilities across all domains. Could learn, understand, and apply intelligence to any problem, matching human flexibility and adaptability.
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span class="text-xs px-3 py-1 bg-green-500/20 text-green-300 rounded-full">Theoretical</span>
                <span class="text-xs px-3 py-1 bg-green-500/20 text-green-300 rounded-full">Human-Level</span>
              </div>
            </div>
            
            <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">Super AI (ASI)</h4>
              </div>
              <p class="text-sm text-gray-300 leading-relaxed mb-2">
                Hypothetical AI that would surpass human intelligence in every aspect—creativity, decision-making, social intelligence, and general wisdom. Remains purely speculative and raises significant ethical considerations.
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span class="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">Speculative</span>
                <span class="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">Beyond Human</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Current AI Applications Section -->
    <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">Real-World AI Applications Today</h2>
      </div>
      
      <p class="text-lg text-gray-300 leading-relaxed mb-8">
        Currently, all practical AI applications fall under <strong>Narrow AI (ANI)</strong> category. These systems excel at specific tasks but cannot generalize beyond their trained domain.
      </p>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
          <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Natural Language Processing</h4>
          <p class="text-sm text-gray-400">ChatGPT, translation services, sentiment analysis, and text generation.</p>
        </div>
        
        <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl p-6 border border-green-500/20">
          <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Computer Vision</h4>
          <p class="text-sm text-gray-400">Facial recognition, object detection, medical imaging, and autonomous vehicles.</p>
        </div>
        
        <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
          <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Recommendation Systems</h4>
          <p class="text-sm text-gray-400">Netflix, Spotify, Amazon product suggestions, and personalized content.</p>
        </div>
        
        <div class="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
          <div class="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Cybersecurity</h4>
          <p class="text-sm text-gray-400">Threat detection, anomaly identification, and fraud prevention systems.</p>
        </div>
        
        <div class="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl p-6 border border-red-500/20">
          <div class="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Healthcare Diagnostics</h4>
          <p class="text-sm text-gray-400">Disease prediction, drug discovery, and personalized treatment plans.</p>
        </div>
        
        <div class="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl p-6 border border-indigo-500/20">
          <div class="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-white mb-2">Financial Analysis</h4>
          <p class="text-sm text-gray-400">Algorithmic trading, risk assessment, and credit scoring models.</p>
        </div>
      </div>
    </div>

    <!-- Future of AI Section -->
    <div class="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 border border-purple-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">The Path to AGI and Beyond</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <div>
          <p class="text-lg text-gray-300 leading-relaxed mb-6">
            While <strong>Artificial General Intelligence (AGI)</strong> remains a theoretical goal, the AI research community continues to make progress toward systems with broader capabilities and human-like reasoning.
          </p>
          
          <div class="space-y-4">
            <div class="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl p-4 border border-blue-500/20">
              <h4 class="font-semibold text-white mb-2 flex items-center gap-2">
                <span class="text-blue-400">■</span>
                Current Research Focus
              </h4>
              <ul class="text-sm text-gray-300 space-y-1 ml-6">
                <li>• Transfer learning across domains</li>
                <li>• Multi-modal AI systems</li>
                <li>• Improved reasoning and planning</li>
                <li>• Common sense understanding</li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl p-4 border border-green-500/20">
              <h4 class="font-semibold text-white mb-2 flex items-center gap-2">
                <span class="text-green-400">■</span>
                Technical Challenges
              </h4>
              <ul class="text-sm text-gray-300 space-y-1 ml-6">
                <li>• Computational requirements</li>
                <li>• Data efficiency and quality</li>
                <li>• Generalization capabilities</li>
                <li>• Ethical and safety considerations</li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-xl p-4 border border-orange-500/20">
              <h4 class="font-semibold text-white mb-2 flex items-center gap-2">
                <span class="text-orange-400">■</span>
                Timeline Predictions
              </h4>
              <p class="text-sm text-gray-300 ml-6">
                Expert predictions for AGI vary widely from 2030 to 2100+, with many researchers believing it's still decades away. The path forward requires breakthroughs in multiple areas of AI research.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-700/50 h-full">
            <h3 class="text-xl font-bold text-white mb-4">AI Evolution Roadmap</h3>
            <div class="space-y-4">
              <div class="relative pl-8 pb-4 border-l-2 border-blue-500/30">
                <div class="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div class="font-semibold text-blue-400 text-sm mb-1">NOW: Narrow AI (ANI)</div>
                <p class="text-xs text-gray-400">Task-specific AI systems dominating current applications</p>
              </div>
              
              <div class="relative pl-8 pb-4 border-l-2 border-green-500/30">
                <div class="absolute -left-2 top-0 w-4 h-4 bg-green-500/50 rounded-full"></div>
                <div class="font-semibold text-green-400 text-sm mb-1">NEAR FUTURE: Advanced ANI</div>
                <p class="text-xs text-gray-400">More sophisticated narrow AI with better reasoning</p>
              </div>
              
              <div class="relative pl-8 pb-4 border-l-2 border-purple-500/30">
                <div class="absolute -left-2 top-0 w-4 h-4 bg-purple-500/30 rounded-full"></div>
                <div class="font-semibold text-purple-400 text-sm mb-1">FUTURE: General AI (AGI)</div>
                <p class="text-xs text-gray-400">Human-level intelligence across all domains</p>
              </div>
              
              <div class="relative pl-8">
                <div class="absolute -left-2 top-0 w-4 h-4 bg-orange-500/20 rounded-full"></div>
                <div class="font-semibold text-orange-400 text-sm mb-1">SPECULATIVE: Super AI (ASI)</div>
                <p class="text-xs text-gray-400">Beyond human intelligence - purely theoretical</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-8 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-yellow-400 mb-2">Important Consideration</h4>
            <p class="text-sm text-gray-300">
              The development of AGI and ASI raises profound ethical, safety, and societal questions. Responsible AI development requires careful consideration of potential risks and benefits, robust safety measures, and inclusive governance frameworks.
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
          title="Types of Artificial Intelligence"
          subtitle="Understanding the spectrum of AI capabilities from reactive machines to theoretical superintelligence"
          backgroundImage={heroImage}
          height="h-[50vh]"
        />
        
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2 text-accent hover:text-accent/80">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base" className="text-accent hover:text-accent/80">
                    Knowledge Base
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-300">Types of AI</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Metadata Section */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                Guide
              </Badge>
              <span className="text-sm text-gray-400">15 min read</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">Updated {new Date().toLocaleDateString()}</span>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Key Takeaways Card */}
            <Card className="my-12 bg-card-gradient border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Lightbulb className="h-6 w-6" />
                  Key Takeaways
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <Zap className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card className="my-12 bg-card-gradient border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Brain className="h-6 w-6" />
                  Further Reading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {relatedLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors group"
                    >
                      <span className="text-gray-300 group-hover:text-accent transition-colors">
                        {link.title}
                      </span>
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-accent transition-colors ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Share */}
            <div className="my-12">
              <SocialShare 
                url={window.location.href}
                title="Types of Artificial Intelligence - BIXORY AI"
              />
            </div>

            {/* Back to Knowledge Base Button */}
            <div className="text-center my-12">
              <Link 
                to="/knowledge-base"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-medium transition-colors"
              >
                <Home className="h-5 w-5" />
                Back to Knowledge Base
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}