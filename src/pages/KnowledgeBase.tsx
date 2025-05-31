
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { KnowledgeBaseHeader } from "@/components/knowledge-base/KnowledgeBaseHeader";
import { CategoryTabs } from "@/components/knowledge-base/CategoryTabs";
import { ContentGrid } from "@/components/knowledge-base/ContentGrid";

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Placeholder data - will be replaced with real crawled content
  const placeholderContent = [
    {
      id: "1",
      title: "Getting Started with AI Development",
      description: "A comprehensive guide to beginning your journey in AI development, covering the essential tools, frameworks, and concepts you need to know.",
      category: "Guide",
      tags: ["AI", "Development", "Beginner"],
      isPlaceholder: true
    },
    {
      id: "2", 
      title: "Latest Trends in Machine Learning",
      description: "Explore the cutting-edge developments in machine learning, from transformer architectures to federated learning approaches.",
      category: "Article",
      tags: ["ML", "Trends", "Research"],
      isPlaceholder: true
    },
    {
      id: "3",
      title: "Building Your First Neural Network",
      description: "Step-by-step tutorial on creating a neural network from scratch, with practical examples and code implementations.",
      category: "Tutorial", 
      tags: ["Neural Networks", "Python", "Hands-on"],
      isPlaceholder: true
    },
    {
      id: "4",
      title: "AI Ethics and Responsible Development",
      description: "Understanding the ethical implications of AI development and how to build responsible AI systems that benefit society.",
      category: "Article",
      tags: ["Ethics", "Responsibility", "Society"],
      isPlaceholder: true
    },
    {
      id: "5",
      title: "Advanced Prompt Engineering Techniques",
      description: "Master the art of prompt engineering with advanced techniques for getting better results from large language models.",
      category: "Guide",
      tags: ["Prompting", "LLM", "Advanced"],
      isPlaceholder: true
    },
    {
      id: "6",
      title: "Setting Up Your AI Development Environment",
      description: "Complete walkthrough of setting up the perfect development environment for AI and machine learning projects.",
      category: "Tutorial",
      tags: ["Setup", "Environment", "Tools"],
      isPlaceholder: true
    }
  ];

  const categories = [
    { id: "all", label: "All", count: placeholderContent.length },
    { id: "articles", label: "Articles", count: placeholderContent.filter(item => item.category === "Article").length },
    { id: "guides", label: "Guides", count: placeholderContent.filter(item => item.category === "Guide").length },
    { id: "tutorials", label: "Tutorials", count: placeholderContent.filter(item => item.category === "Tutorial").length }
  ];

  // Filter content based on search and category
  const filteredContent = placeholderContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === "all" || 
                           item.category.toLowerCase() === activeCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#0A192F]/90 to-[#0D1B2A]/90">
        <section className="py-12 pt-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">
                  AI Knowledge Base
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Auto-crawled content from the latest AI research, tutorials, and industry insights
                </p>
              </div>

              <KnowledgeBaseHeader
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />

              <CategoryTabs
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                categories={categories}
              />

              <ContentGrid items={filteredContent} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default KnowledgeBase;
