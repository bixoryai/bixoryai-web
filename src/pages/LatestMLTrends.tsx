import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Smartphone, Atom, Building2, Cpu, TrendingUp, Shield, Globe, Users, ChevronRight, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SocialShare } from "@/components/social/SocialShare";
import heroImage from "@/assets/ml-trends-hero.jpg";
import agenticAiImage from "@/assets/agentic-ai-illustration.jpg";
import multimodalAiImage from "@/assets/multimodal-ai-illustration.jpg";
import edgeAiImage from "@/assets/edge-ai-illustration.jpg";

export default function LatestMLTrends() {
  const keyTakeaways = [
    "Agentic AI is emerging as the next frontier, enabling autonomous systems that can adapt, decide, and collaborate",
    "Multimodal AI is becoming mainstream, with models processing text, images, audio, and video simultaneously", 
    "Edge AI is gaining momentum for real-time processing and privacy-preserving applications",
    "Quantum machine learning is showing early promise for solving complex optimization problems",
    "AI agents are evolving from simple chatbots to sophisticated autonomous digital workers",
    "Foundation models like GPT-5 are expected to achieve new levels of reasoning and unified intelligence",
    "Enterprise AI adoption is accelerating, with 73% of US companies now using AI in some capacity"
  ];

  const relatedLinks = [
    {
      title: "McKinsey Technology Trends Outlook 2025",
      url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-top-trends-in-tech"
    },
    {
      title: "IBM AI Trends Analysis 2024",
      url: "https://www.ibm.com/think/insights/artificial-intelligence-trends"
    },
    {
      title: "Gartner Hype Cycle for AI 2025",
      url: "https://www.gartner.com/en/articles/hype-cycle-for-artificial-intelligence"
    },
    {
      title: "Deloitte AI Breakthroughs Report",
      url: "https://www.deloitte.com/us/en/services/consulting/blogs/new-ai-breakthroughs-ai-trends.html"
    }
  ];

  const content = `
<div class="space-y-8">
  <div class="text-center mb-12">
    <img src="${heroImage}" alt="Machine Learning Trends 2025" class="w-full rounded-2xl shadow-2xl mb-8" />
    <p class="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
      The machine learning landscape is experiencing unprecedented transformation in 2025, driven by breakthrough innovations that are reshaping how we think about artificial intelligence and its applications across industries.
    </p>
  </div>

  <div class="grid gap-8 lg:gap-12">
    
    <!-- Agentic AI Section -->
    <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-white">The Rise of Agentic AI</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p class="text-lg text-gray-300 leading-relaxed mb-6">
            Perhaps the most significant trend emerging in 2025 is the development of <strong>agentic AI</strong> - autonomous intelligent systems that can adapt to changing environments, make complex decisions, and collaborate with both other agents and humans.
          </p>
          
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span class="text-sm font-semibold text-blue-400">Autonomous</span>
              </div>
              <p class="text-xs text-gray-400">Makes decisions without human intervention</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                <span class="text-sm font-semibold text-green-400">Adaptive</span>
              </div>
              <p class="text-xs text-gray-400">Adjusts strategies based on conditions</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span class="text-sm font-semibold text-purple-400">Collaborative</span>
              </div>
              <p class="text-xs text-gray-400">Works with humans and other AI agents</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                <span class="text-sm font-semibold text-orange-400">Proactive</span>
              </div>
              <p class="text-xs text-gray-400">Identifies and initiates tasks independently</p>
            </div>
          </div>
        </div>
        
        <div class="lg:pl-8">
          <img src="${agenticAiImage}" alt="Agentic AI Illustration" class="w-full rounded-xl shadow-lg" />
        </div>
      </div>
      
      <p class="text-gray-300 leading-relaxed mt-6">
        These systems represent a fundamental shift from reactive to proactive AI, enabling organizations to automate not just repetitive tasks but dynamic, complex workflows. Early implementations are already showing promise in customer service, financial planning, and supply chain optimization.
      </p>
    </div>

    <!-- Multimodal AI Section -->
    <div class="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-2xl p-8 border border-green-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-white">Multimodal AI Goes Mainstream</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div class="lg:order-2">
          <img src="${multimodalAiImage}" alt="Multimodal AI Visualization" class="w-full rounded-xl shadow-lg" />
        </div>
        
        <div class="lg:order-1">
          <p class="text-lg text-gray-300 leading-relaxed mb-6">
            The convergence of text, image, audio, and video processing in single AI models is no longer experimental - it's becoming the standard. Models like GPT-5, expected in August 2025, are designed as unified intelligence systems.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <div class="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Healthcare Revolution</h4>
                <p class="text-sm text-gray-400">Combining medical imaging with patient records for precise diagnostics</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Autonomous Vehicles</h4>
                <p class="text-sm text-gray-400">Processing visual, audio, and sensor data for real-time decisions</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v3m0 0v8a2 2 0 002 2h10a2 2 0 002-2V8m0 0V5a1 1 0 00-1-1h-2M7 4h10M9 9h6m-6 4h6m-7 4h8"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Creative Industries</h4>
                <p class="text-sm text-gray-400">Blending text, visual, and audio content generation seamlessly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Edge AI Section -->
    <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-white">Edge AI: Computing at the Source</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p class="text-lg text-gray-300 leading-relaxed mb-6">
            The push toward edge computing in machine learning is gaining significant momentum, driven by privacy concerns, latency requirements, and bandwidth limitations. Edge AI enables real-time processing directly on devices.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div class="text-center p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-white mb-1">Reduced Latency</h4>
              <p class="text-xs text-gray-400">Instant processing without cloud round-trips</p>
            </div>
            
            <div class="text-center p-4 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/20">
              <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-white mb-1">Enhanced Privacy</h4>
              <p class="text-xs text-gray-400">Data stays on device, improving security</p>
            </div>
            
            <div class="text-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-white mb-1">Lower Bandwidth</h4>
              <p class="text-xs text-gray-400">Reduced internet connectivity needs</p>
            </div>
            
            <div class="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-white mb-1">Improved Reliability</h4>
              <p class="text-xs text-gray-400">Works even when connection is poor</p>
            </div>
          </div>
        </div>
        
        <div class="lg:pl-8">
          <img src="${edgeAiImage}" alt="Edge AI Computing" class="w-full rounded-xl shadow-lg mb-4" />
          <p class="text-sm text-gray-400 italic text-center">
            Modern smartphones and IoT devices now pack specialized AI chips for local processing
          </p>
        </div>
      </div>
    </div>

    <!-- Statistics Section -->
    <div class="bg-gradient-to-r from-gray-900/40 to-gray-800/40 rounded-2xl p-8 border border-gray-600/20">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white mb-4">Enterprise AI Adoption in Numbers</h2>
        <p class="text-lg text-gray-300">The enterprise world is rapidly embracing AI technologies</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
          <div class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">73%</div>
          <div class="text-white font-semibold mb-1">of US companies</div>
          <div class="text-sm text-gray-400">now use AI in some capacity</div>
        </div>
        
        <div class="text-center p-6 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl border border-green-500/30">
          <div class="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">$4.4T</div>
          <div class="text-white font-semibold mb-1">economic impact</div>
          <div class="text-sm text-gray-400">potential annual value from AI</div>
        </div>
        
        <div class="text-center p-6 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30">
          <div class="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">2025</div>
          <div class="text-white font-semibold mb-1">breakthrough year</div>
          <div class="text-sm text-gray-400">for next-gen AI models</div>
        </div>
      </div>
    </div>

    <!-- Future Outlook Section -->
    <div class="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-2xl p-8 border border-indigo-500/20">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white mb-4">Looking Ahead: The Road to AI-Powered Future</h2>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto">
          As we move forward, the key to success will be balancing innovation with responsibility, ensuring these powerful technologies benefit society while mitigating potential risks.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            Key Challenges
          </h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 bg-red-900/20 rounded-lg border border-red-500/20">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div class="font-semibold text-white text-sm">AI Safety & Alignment</div>
                <div class="text-xs text-gray-400">Ensuring systems remain aligned with human values</div>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-red-900/20 rounded-lg border border-red-500/20">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div class="font-semibold text-white text-sm">Resource Management</div>
                <div class="text-xs text-gray-400">Addressing growing computational requirements</div>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-red-900/20 rounded-lg border border-red-500/20">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div class="font-semibold text-white text-sm">Bias & Fairness</div>
                <div class="text-xs text-gray-400">Creating equitable AI systems for everyone</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            Major Opportunities
          </h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 bg-green-900/20 rounded-lg border border-green-500/20">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div class="font-semibold text-white text-sm">AI Democratization</div>
                <div class="text-xs text-gray-400">Making AI accessible to businesses worldwide</div>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-green-900/20 rounded-lg border border-green-500/20">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div class="font-semibold text-white text-sm">Global Solutions</div>
                <div class="text-xs text-gray-400">Tackling climate change and healthcare challenges</div>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-green-900/20 rounded-lg border border-green-500/20">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div class="font-semibold text-white text-sm">Human Augmentation</div>
                <div class="text-xs text-gray-400">Enhancing rather than replacing human capabilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Conclusion -->
    <div class="text-center bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-2xl p-8 border border-blue-500/10">
      <h2 class="text-2xl font-bold text-white mb-4">The Future is Collaborative</h2>
      <p class="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
        The machine learning trends of 2025 represent more than incremental improvements - they signal a fundamental transformation in how AI systems operate, learn, and integrate into our daily lives. We're witnessing the emergence of AI systems that are not just tools, but collaborative partners in solving humanity's greatest challenges.
      </p>
    </div>
  </div>
</div>
`;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#0A192F] to-[#0D1B2A]">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <a href="/" className="flex items-center gap-1 hover:text-[#00F0FF] transition-colors duration-300">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </a>
              <ChevronRight className="w-4 h-4" />
              <a href="/knowledge-base" className="hover:text-[#00F0FF] transition-colors duration-300">
                Knowledge Base
              </a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#00F0FF]">Latest Trends in Machine Learning</span>
            </div>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                  Latest Trends in Machine Learning
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Shaping the Future of AI in 2025: An in-depth analysis of breakthrough innovations transforming industries worldwide
              </p>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span>BIXORY AI Research Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>12 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>January 8, 2025</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["Machine Learning", "AI Trends", "Agentic AI", "Multimodal AI", "Edge Computing", "Enterprise AI"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-800/50 border border-[#00F0FF]/50 text-[#00F0FF] text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Social Share Section */}
            <div className="bg-gradient-to-r from-gray-900/40 to-gray-800/40 rounded-2xl p-8 border border-gray-600/20 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Found this article helpful?</h3>
              <SocialShare 
                title="Latest Trends in Machine Learning: Shaping the Future of AI in 2025"
                url="/knowledge-base/latest-ml-trends"
                description="An in-depth analysis of the most significant machine learning trends emerging in 2025, from agentic AI and multimodal systems to edge computing and quantum ML."
                showLike={true}
                compact={false}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}