
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { KnowledgeBaseHeader } from "@/components/knowledge-base/KnowledgeBaseHeader";
import { CategoryTabs } from "@/components/knowledge-base/CategoryTabs";
import { ContentGrid } from "@/components/knowledge-base/ContentGrid";
import { TagFilter } from "@/components/knowledge-base/TagFilter";

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Enhanced placeholder data with AI buzzword tags
  const placeholderContent = [
    {
      id: "1",
      title: "Getting Started with AI Development",
      description: "A comprehensive guide to beginning your journey in AI development, covering the essential tools, frameworks, and concepts you need to know.",
      category: "Guide",
      url: "/knowledge-base/getting-started-ai-development",
      tags: ["AI", "Development", "Beginner", "Neural Networks", "MLOps"],
      source: "BIXORY AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "2", 
      title: "Latest Trends in Machine Learning",
      description: "Explore the cutting-edge developments in machine learning, from transformer architectures to federated learning approaches.",
      category: "Article",
      url: "/knowledge-base/latest-ml-trends",
      tags: ["ML", "Trends", "Research", "Transformers", "LLMs"],
      source: "BIXORY AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "3",
      title: "Building Your First Neural Network",
      description: "Step-by-step tutorial on creating a neural network from scratch, with practical examples and code implementations.",
      category: "Tutorial", 
      url: "/knowledge-base/building-first-neural-network",
      tags: ["Neural Networks", "Python", "Hands-on", "Fine-tuning"],
      source: "BIXORY AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "4",
      title: "AI Ethics and Responsible Development",
      description: "Understanding the ethical implications of AI development and how to build responsible AI systems that benefit society.",
      category: "Article",
      url: "/knowledge-base/ai-ethics-responsible-development",
      tags: ["Ethics", "Responsibility", "Society", "Agents"],
      source: "BIXORY AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "5",
      title: "Advanced Prompt Engineering Techniques",
      description: "Master the art of prompt engineering with advanced techniques for getting better results from large language models.",
      category: "Guide",
      url: "/knowledge-base/advanced-prompt-engineering",
      tags: ["Prompt Engineering", "LLMs", "Advanced", "GPT"],
      source: "BIXORY AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "6",
      title: "Setting Up Your AI Development Environment",
      description: "Complete walkthrough of setting up the perfect development environment for AI and machine learning projects.",
      category: "Tutorial",
      url: "/knowledge-base/ai-dev-environment-setup",
      tags: ["Setup", "Environment", "Tools", "MLOps"],
      source: "BIXORY AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "7",
      title: "Understanding RAG Systems",
      description: "Deep dive into Retrieval-Augmented Generation systems and how they enhance LLM capabilities with external knowledge.",
      category: "Article",
      tags: ["RAG", "LLMs", "Vector Databases", "Embeddings"],
      url: "/knowledge-base/understanding-rag",
      isPlaceholder: false
    },
    {
      id: "8",
      title: "Model Context Protocol (MCP) Explained",
      description: "Learn about the Model Context Protocol and how it enables better integration between AI models and external tools.",
      category: "Guide",
      url: "/knowledge-base/mcp-explained",
      tags: ["MCP", "Agents", "Integration", "Protocol"],
      source: "BIXORY AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    // AI Evolution Timeline and History
    {
      id: "9",
      title: "Key Milestones of AI Evolution",
      description: "Comprehensive timeline of AI development from 1943 to 2022, covering major breakthroughs, winter periods, and revolutionary moments.",
      category: "Article",
      url: "/knowledge-base/ai-evolution-timeline",
      tags: ["AI History", "Timeline", "Milestones", "Evolution"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    // Basic AI Concepts
    {
      id: "10",
      title: "Types of Artificial Intelligence",
      description: "Understanding the four types of AI: reactive machines, limited memory, theory of mind, and self-awareness.",
      category: "Guide",
      url: "#",
      tags: ["AI Types", "Fundamentals", "Theory", "Classification"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "11",
      title: "What is an AI Model?",
      description: "Learn about AI models - programs trained on data to recognize patterns and make decisions without human intervention.",
      category: "Guide",
      url: "#",
      tags: ["AI Models", "Machine Learning", "Pattern Recognition", "Fundamentals"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "12",
      title: "Understanding Generative AI",
      description: "Explore generative AI that can create text, images, music, videos, and code based on prompts and training data.",
      category: "Article",
      url: "#",
      tags: ["Generative AI", "Content Creation", "LLMs", "Innovation"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "13",
      title: "Artificial General Intelligence (AGI)",
      description: "Understanding AGI - the theoretical pursuit of AI with human-level cognition and intellectual capabilities.",
      category: "Article",
      url: "#",
      tags: ["AGI", "General Intelligence", "Future AI", "Research"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "14",
      title: "Machine Learning Fundamentals",
      description: "Introduction to machine learning - how computers learn from data to identify patterns and improve over time.",
      category: "Guide",
      url: "#",
      tags: ["Machine Learning", "Data Science", "Algorithms", "Fundamentals"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "15",
      title: "Neural Networks Explained",
      description: "Understanding neural networks inspired by the human brain structure and their pattern recognition capabilities.",
      category: "Tutorial",
      url: "#",
      tags: ["Neural Networks", "Deep Learning", "Brain-inspired", "Architecture"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "16",
      title: "Large Language Models (LLMs)",
      description: "Comprehensive guide to LLMs - transformer-based models achieving general-purpose language understanding and generation.",
      category: "Guide",
      url: "#",
      tags: ["LLMs", "Transformers", "Language Models", "NLP"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    // Advanced Machine Learning
    {
      id: "17",
      title: "Deep Learning Fundamentals",
      description: "Understanding deep learning methods that mimic human brain operations using artificial neural networks.",
      category: "Tutorial",
      url: "#",
      tags: ["Deep Learning", "Neural Networks", "Advanced ML", "AI Methods"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "18",
      title: "Fine-tuning Machine Learning Models",
      description: "Learn fine-tuning techniques to optimize pre-trained models for specific datasets and use cases.",
      category: "Tutorial",
      url: "#",
      tags: ["Fine-tuning", "Model Optimization", "Transfer Learning", "ML Training"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "19",
      title: "Gradient Descent Optimization",
      description: "Master gradient descent algorithms for training ML models by minimizing cost functions through parameter adjustment.",
      category: "Tutorial",
      url: "#",
      tags: ["Gradient Descent", "Optimization", "ML Training", "Algorithms"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "20",
      title: "Three Types of Machine Learning",
      description: "Comprehensive guide to supervised, unsupervised, and reinforcement learning approaches with practical examples.",
      category: "Guide",
      url: "#",
      tags: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "ML Types"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "21",
      title: "Understanding Embeddings",
      description: "Learn about embeddings - methods to convert complex data into computer-understandable formats for AI processing.",
      category: "Tutorial",
      url: "#",
      tags: ["Embeddings", "Vector Representations", "NLP", "Data Processing"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    // Neural Network Architectures
    {
      id: "22",
      title: "Feedforward Neural Networks (FNNs)",
      description: "Understanding the simplest neural network architecture with one-directional information flow for pattern recognition.",
      category: "Tutorial",
      url: "#",
      tags: ["FNN", "Neural Architecture", "Pattern Recognition", "Basic Networks"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "23",
      title: "Recurrent Neural Networks (RNNs)",
      description: "Explore RNNs for processing sequential data with feedback connections for time series and language tasks.",
      category: "Tutorial",
      url: "#",
      tags: ["RNN", "Sequential Data", "Time Series", "Language Processing"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "24",
      title: "Transformer Networks Architecture",
      description: "Deep dive into transformer architecture using attention mechanisms for parallel processing and long-range dependencies.",
      category: "Tutorial",
      url: "#",
      tags: ["Transformers", "Attention Mechanism", "BERT", "GPT"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "25",
      title: "Generative Adversarial Networks (GANs)",
      description: "Learn about GANs with generator and discriminator networks for image synthesis and style transfer applications.",
      category: "Tutorial",
      url: "#",
      tags: ["GANs", "Image Synthesis", "Generative Models", "Computer Vision"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "26",
      title: "Convolutional Neural Networks (CNNs)",
      description: "Master CNNs for image recognition and processing with automatic feature learning through backpropagation.",
      category: "Tutorial",
      url: "#",
      tags: ["CNN", "Computer Vision", "Image Recognition", "Feature Learning"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "27",
      title: "Long Short-term Memory Networks (LSTMs)",
      description: "Understanding LSTMs - specialized RNNs designed to remember long-term dependencies in sequence data.",
      category: "Tutorial",
      url: "#",
      tags: ["LSTM", "Memory Networks", "Sequential Learning", "RNN Variant"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "28",
      title: "Autoencoders for Unsupervised Learning",
      description: "Explore autoencoders with encoder-decoder architecture for dimensionality reduction and feature learning.",
      category: "Tutorial",
      url: "#",
      tags: ["Autoencoders", "Unsupervised Learning", "Feature Learning", "Dimensionality Reduction"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "29",
      title: "Residual Neural Networks (ResNet)",
      description: "Learn about ResNet architecture with skip connections solving vanishing gradient problems in deep networks.",
      category: "Tutorial",
      url: "#",
      tags: ["ResNet", "Skip Connections", "Deep Networks", "Gradient Problems"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    // Popular LLMs
    {
      id: "30",
      title: "ChatGPT: Revolutionary Language Model",
      description: "Comprehensive overview of ChatGPT - OpenAI's transformer-based model revolutionizing natural language processing.",
      category: "Article",
      url: "#",
      tags: ["ChatGPT", "OpenAI", "Conversational AI", "Language Models"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "31",
      title: "Meta's LLaMA: Efficient Language Modeling",
      description: "Explore LLaMA - Meta's efficient and resource-conscious large language model with smaller parameter counts.",
      category: "Article",
      url: "#",
      tags: ["LLaMA", "Meta", "Efficient Models", "Resource Optimization"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "32",
      title: "BART: Bidirectional Auto-Regressive Transformer",
      description: "Understanding BART - Facebook's denoising autoencoder for high-quality text generation and NLP tasks.",
      category: "Article",
      url: "#",
      tags: ["BART", "Facebook AI", "Denoising", "Text Generation"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "33",
      title: "Claude: AI Safety-Focused Assistant",
      description: "Learn about Claude - Anthropic's safety-focused large language model emphasizing responsible AI development.",
      category: "Article",
      url: "#",
      tags: ["Claude", "Anthropic", "AI Safety", "Responsible AI"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    },
    {
      id: "34",
      title: "Falcon: Open-Source Language Model",
      description: "Explore Falcon LLM - TII's 180B parameter open-source model trained on 3.5 trillion tokens, outperforming GPT-3.5.",
      category: "Article",
      url: "#",
      tags: ["Falcon", "Open Source", "Large Scale", "Performance"],
      source: "AI Knowledge Base",
      crawledAt: new Date().toISOString()
    }
  ];

  const categories = [
    { id: "all", label: "All", count: placeholderContent.length },
    { id: "articles", label: "Articles", count: placeholderContent.filter(item => item.category === "Article").length },
    { id: "guides", label: "Guides", count: placeholderContent.filter(item => item.category === "Guide").length },
    { id: "tutorials", label: "Tutorials", count: placeholderContent.filter(item => item.category === "Tutorial").length }
  ];

  // Enhanced filtering logic to include tags
  const filteredContent = placeholderContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === "all" || 
                           item.category.toLowerCase() === activeCategory.toLowerCase();
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(selectedTag => 
                         item.tags?.some(itemTag => 
                           itemTag.toLowerCase().includes(selectedTag.toLowerCase())
                         )
                       );
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#0A192F]/90 to-[#0D1B2A]/90">
        {/* Hero Section - Updated to match AI Tools style */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Knowledge Base
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Latest AI research, tutorials, and industry insights.
              </p>
              
              {/* Search Section */}
              <div className="max-w-2xl mx-auto">
                <KnowledgeBaseHeader
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <TagFilter
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
              onClearTags={handleClearTags}
            />

            <CategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              categories={categories}
            />

            <ContentGrid items={filteredContent} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default KnowledgeBase;
