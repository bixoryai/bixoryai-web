import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Search, Brain, FileText, Zap, Shield, Building2, Users, ChevronRight, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SocialShare } from "@/components/social/SocialShare";
import { Link } from "react-router-dom";
import heroImage from "@/assets/ai-development-hero.jpg";
import knowledgeImage from "@/assets/knowledge-illustration.jpg";
import productivityImage from "@/assets/productivity-illustration.jpg";

export default function UnderstandingRAG() {
  const keyTakeaways = [
    "RAG combines the power of pre-trained language models with real-time information retrieval",
    "The technique enables AI to access up-to-date information beyond its training data cutoff",
    "Vector databases are crucial for efficient similarity search in RAG implementations", 
    "RAG reduces hallucinations by grounding responses in actual retrieved documents",
    "Enterprise adoption is accelerating due to improved accuracy and reduced computational costs",
    "Hybrid approaches combining dense and sparse retrieval are becoming the gold standard",
    "RAG enables domain-specific AI applications without requiring model fine-tuning"
  ];

  const relatedLinks = [
    {
      title: "LangChain RAG Documentation",
      url: "https://python.langchain.com/docs/use_cases/question_answering/"
    },
    {
      title: "OpenAI RAG Best Practices",
      url: "https://help.openai.com/en/articles/8868588-retrieval-augmented-generation-rag-and-semantic-search-for-gpts"
    },
    {
      title: "Pinecone Vector Database Guide",
      url: "https://www.pinecone.io/learn/retrieval-augmented-generation/"
    },
    {
      title: "Microsoft RAG Research Papers",
      url: "https://www.microsoft.com/en-us/research/blog/rag-vs-fine-tuning-pipelines-tradeoffs-and-a-case-study-with-agriculture/"
    }
  ];

  const content = `
  <div class="space-y-6 md:space-y-8">
  <div class="text-center mb-8 md:mb-12">
    <img src="${heroImage}" alt="Understanding RAG Systems" class="w-full rounded-xl md:rounded-2xl shadow-2xl mb-6 md:mb-8" />
    <p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
      Retrieval-Augmented Generation (RAG) represents a paradigm shift in how AI systems access and utilize information, combining the reasoning capabilities of large language models with dynamic knowledge retrieval for more accurate and contextual responses.
    </p>
  </div>

  <div class="grid gap-8 lg:gap-12">
    
    <!-- Core RAG Concept Section -->
    <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">What is RAG?</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <div>
          <p class="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6 px-2 md:px-0">
            <strong>Retrieval-Augmented Generation (RAG)</strong> is an AI framework that enhances language models by retrieving relevant information from external knowledge bases before generating responses. This approach bridges the gap between static training data and dynamic, real-world information needs.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span class="text-sm font-semibold text-blue-400">Retrieval</span>
              </div>
              <p class="text-xs text-gray-400">Finds relevant documents from knowledge base</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                <span class="text-sm font-semibold text-green-400">Augmentation</span>
              </div>
              <p class="text-xs text-gray-400">Combines retrieved context with user query</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                <span class="text-sm font-semibold text-purple-400">Generation</span>
              </div>
              <p class="text-xs text-gray-400">Creates informed responses using LLM</p>
            </div>
            
            <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-sm font-semibold text-orange-400">Accuracy</span>
              </div>
              <p class="text-xs text-gray-400">Reduces hallucinations with factual grounding</p>
            </div>
          </div>
        </div>
        
        <div class="lg:pl-8">
          <img src="${knowledgeImage}" alt="RAG System Architecture" class="w-full rounded-xl shadow-lg" />
        </div>
      </div>
      
      <p class="text-gray-300 leading-relaxed mt-6">
        Unlike traditional language models that rely solely on training data, RAG systems can access and reason over fresh, domain-specific information, making them ideal for applications requiring up-to-date knowledge or specialized expertise.
      </p>
    </div>

    <!-- RAG Architecture Section -->
    <div class="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-2xl p-8 border border-green-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">The RAG Pipeline</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <div class="lg:order-2">
          <img src="${productivityImage}" alt="RAG Pipeline Visualization" class="w-full rounded-xl shadow-lg" />
        </div>
        
        <div class="lg:order-1">
          <p class="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6 px-2 md:px-0">
            A typical RAG system consists of several interconnected components that work together to provide contextually relevant and accurate responses by leveraging both stored knowledge and generative AI capabilities.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Document Indexing</h4>
                <p class="text-sm text-gray-400">Converting documents into searchable vector embeddings in a vector database</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Query Processing</h4>
                <p class="text-sm text-gray-400">Converting user queries into vector representations for similarity search</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Context Generation</h4>
                <p class="text-sm text-gray-400">Combining retrieved documents with the original query for LLM processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Use Cases Section -->
    <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">Enterprise RAG Applications</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p class="text-lg text-gray-300 leading-relaxed mb-6">
            RAG systems are transforming how organizations handle knowledge management, customer support, and decision-making processes by providing AI systems with access to current, domain-specific information.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div class="text-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-white mb-1">Customer Support</h4>
              <p class="text-xs text-gray-400">Instant answers from knowledge bases</p>
            </div>
            
            <div class="text-center p-4 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/20">
              <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-white mb-1">Document Q&A</h4>
              <p class="text-xs text-gray-400">Query complex documents intelligently</p>
            </div>
            
            <div class="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-white mb-1">Research Assistance</h4>
              <p class="text-xs text-gray-400">Academic and business intelligence</p>
            </div>
            
            <div class="text-center p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
              <div class="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-white mb-1">Legal Analysis</h4>
              <p class="text-xs text-gray-400">Case law and regulation research</p>
            </div>
          </div>
        </div>
        
        <div class="lg:pl-8">
          <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h3 class="text-xl font-bold text-white mb-4">RAG vs Traditional Approaches</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <span class="text-green-400 font-semibold">Real-time Updates</span>
                <span class="text-white">✓ RAG</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <span class="text-green-400 font-semibold">Lower Training Costs</span>
                <span class="text-white">✓ RAG</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <span class="text-green-400 font-semibold">Source Attribution</span>
                <span class="text-white">✓ RAG</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                <span class="text-red-400 font-semibold">Retrieval Latency</span>
                <span class="text-white">⚠ Challenge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technical Implementation Section -->
    <div class="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 border border-purple-500/20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">Implementation Best Practices</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
          <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-3">Vector Databases</h3>
          <p class="text-sm text-gray-400 mb-4">Choose appropriate vector databases like Pinecone, Weaviate, or Chroma for optimal similarity search performance.</p>
          <div class="space-y-2">
            <div class="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded">Pinecone</div>
            <div class="text-xs bg-green-500/10 text-green-300 px-2 py-1 rounded">Weaviate</div>
            <div class="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded">ChromaDB</div>
          </div>
        </div>
        
        <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
          <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-3">Embedding Models</h3>
          <p class="text-sm text-gray-400 mb-4">Select high-quality embedding models that capture semantic meaning effectively for your domain.</p>
          <div class="space-y-2">
            <div class="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded">OpenAI Ada-002</div>
            <div class="text-xs bg-green-500/10 text-green-300 px-2 py-1 rounded">Sentence-BERT</div>
            <div class="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded">Cohere Embed</div>
          </div>
        </div>
        
        <div class="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
          <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-3">Chunk Optimization</h3>
          <p class="text-sm text-gray-400 mb-4">Optimize document chunking strategies for balance between context preservation and retrieval precision.</p>
          <div class="space-y-2">
            <div class="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded">Semantic Chunking</div>
            <div class="text-xs bg-green-500/10 text-green-300 px-2 py-1 rounded">Overlap Strategy</div>
            <div class="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded">Size Optimization</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistics Section -->
    <div class="bg-gradient-to-r from-gray-900/40 to-gray-800/40 rounded-2xl p-8 border border-gray-600/20">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white mb-4">RAG Adoption Metrics</h2>
        <p class="text-lg text-gray-300">Growing enterprise adoption and performance improvements</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
          <div class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">85%</div>
          <div class="text-white font-semibold mb-1">accuracy improvement</div>
          <div class="text-sm text-gray-400">compared to standalone LLMs</div>
        </div>
        
        <div class="text-center p-6 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl border border-green-500/30">
          <div class="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">60%</div>
          <div class="text-white font-semibold mb-1">cost reduction</div>
          <div class="text-sm text-gray-400">vs fine-tuning approaches</div>
        </div>
        
        <div class="text-center p-6 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30">
          <div class="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">92%</div>
          <div class="text-white font-semibold mb-1">enterprise satisfaction</div>
          <div class="text-sm text-gray-400">with RAG implementations</div>
        </div>
      </div>
    </div>

    <!-- Future Outlook Section -->
    <div class="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-2xl p-8 border border-indigo-500/20">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white mb-4">The Future of RAG</h2>
        <p class="text-lg text-gray-300">Emerging trends and advanced RAG implementations</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <h4 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
              Multi-hop Reasoning
            </h4>
            <p class="text-sm text-gray-400">Advanced RAG systems that can perform complex reasoning across multiple retrieved documents</p>
          </div>
          
          <div class="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <h4 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="w-2 h-2 bg-green-400 rounded-full"></span>
              Agentic RAG
            </h4>
            <p class="text-sm text-gray-400">Integration with AI agents for autonomous information gathering and synthesis</p>
          </div>
          
          <div class="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <h4 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              Multimodal RAG
            </h4>
            <p class="text-sm text-gray-400">Retrieval systems that handle text, images, audio, and video content seamlessly</p>
          </div>
        </div>
        
        <div class="space-y-6">
          <div class="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <h4 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
              Real-time RAG
            </h4>
            <p class="text-sm text-gray-400">Systems that can update knowledge bases and adapt retrievals in real-time</p>
          </div>
          
          <div class="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <h4 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="w-2 h-2 bg-red-400 rounded-full"></span>
              Federated RAG
            </h4>
            <p class="text-sm text-gray-400">Privacy-preserving RAG across distributed knowledge sources</p>
          </div>
          
          <div class="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <h4 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
              Graph RAG
            </h4>
            <p class="text-sm text-gray-400">Knowledge graph integration for enhanced relationship understanding</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <div className="pt-24">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/knowledge-base" className="hover:text-accent transition-colors">
              Knowledge Base
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Understanding RAG Systems</span>
          </nav>
        </div>

        <article className="container mx-auto px-6 py-12">
          {/* Article Header */}
          <header className="text-center mb-16">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-[#FF4D00]/20 text-[#FF4D00] border-[#FF4D00]/30">
                AI Architecture
              </Badge>
              <Badge variant="secondary" className="bg-[#00F0FF]/20 text-[#00F0FF] border-[#00F0FF]/30">
                Knowledge Systems
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                Enterprise AI
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Understanding RAG Systems
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              A comprehensive guide to Retrieval-Augmented Generation: bridging the gap between static AI models and dynamic knowledge access
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>By BIXORY AI Team</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-gray-400">
                  January 15, 2025
                </Badge>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          {/* Key Takeaways */}
          <Card className="my-12 bg-gradient-to-r from-[#FF4D00]/10 to-[#00F0FF]/10 border-[#FF4D00]/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#FF4D00]" />
                Key Takeaways
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-[#00F0FF] rounded-full mt-2 flex-shrink-0"></span>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Related Resources */}
          <Card className="my-12 bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#00F0FF]" />
                Related Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-[#00F0FF]/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00F0FF]/30 transition-colors">
                      <FileText className="w-5 h-5 text-[#00F0FF]" />
                    </div>
                    <span className="text-white group-hover:text-[#00F0FF] transition-colors">
                      {link.title}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <SocialShare 
              title="Understanding RAG Systems"
              url={window.location.href}
              description="A comprehensive guide to Retrieval-Augmented Generation: bridging the gap between static AI models and dynamic knowledge access"
              showLike={true}
            />
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}