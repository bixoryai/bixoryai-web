
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
      tags: ["Neural Networks", "Python", "Hands-on", "Fine-tuning"],
      isPlaceholder: true
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
