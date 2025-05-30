
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0A192F]/90 to-[#0D1B2A]/90">
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00]/10 to-[#00F0FF]/10 rounded-xl blur-sm"></div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search articles, guides, and tutorials..."
                  className="pl-12 h-12 sm:h-14 text-sm sm:text-base bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 backdrop-blur-sm focus:border-[#00F0FF]/50 focus:ring-[#00F0FF]/20 transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search knowledge base"
                />
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <TabsList className="grid w-full sm:w-auto grid-cols-4 bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                  <TabsTrigger 
                    value="all" 
                    className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger 
                    value="articles" 
                    className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300"
                  >
                    Articles
                  </TabsTrigger>
                  <TabsTrigger 
                    value="guides" 
                    className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300"
                  >
                    Guides
                  </TabsTrigger>
                  <TabsTrigger 
                    value="tutorials" 
                    className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300"
                  >
                    Tutorials
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="outline-none">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-2">Getting Started</h3>
                    <p className="text-gray-400 mb-4">Learn the basics of our platform and how to get up and running quickly.</p>
                    <span className="text-[#00F0FF] text-sm">Article</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-2">Advanced Features</h3>
                    <p className="text-gray-400 mb-4">Explore advanced functionality and pro tips for power users.</p>
                    <span className="text-[#FF4D00] text-sm">Guide</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-2">Video Tutorials</h3>
                    <p className="text-gray-400 mb-4">Step-by-step video guides to help you master our tools.</p>
                    <span className="text-green-400 text-sm">Tutorial</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="articles" className="outline-none">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-2">Getting Started</h3>
                    <p className="text-gray-400 mb-4">Learn the basics of our platform and how to get up and running quickly.</p>
                    <span className="text-[#00F0FF] text-sm">Article</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="guides" className="outline-none">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-2">Advanced Features</h3>
                    <p className="text-gray-400 mb-4">Explore advanced functionality and pro tips for power users.</p>
                    <span className="text-[#FF4D00] text-sm">Guide</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tutorials" className="outline-none">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-2">Video Tutorials</h3>
                    <p className="text-gray-400 mb-4">Step-by-step video guides to help you master our tools.</p>
                    <span className="text-green-400 text-sm">Tutorial</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBase;
