import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="py-12 bg-gradient-to-r from-[#0A192F]/90 to-[#0D1B2A]/90 backdrop-blur-sm">
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
                  className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 border border-gray-600/30"
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="articles" 
                  className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 border border-gray-600/30"
                >
                  Articles
                </TabsTrigger>
                <TabsTrigger 
                  value="guides" 
                  className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 border border-gray-600/30"
                >
                  Guides
                </TabsTrigger>
                <TabsTrigger 
                  value="tutorials" 
                  className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 border border-gray-600/30"
                >
                  Tutorials
                </TabsTrigger>
              </TabsList>

              {/* Add any additional controls or information here */}
            </div>

            <TabsContent value="all" className="outline-none">
              <p className="text-gray-400">
                Displaying all knowledge base articles, guides, and tutorials.
              </p>
            </TabsContent>
            <TabsContent value="articles" className="outline-none">
              <p className="text-gray-400">Displaying articles.</p>
            </TabsContent>
            <TabsContent value="guides" className="outline-none">
              <p className="text-gray-400">Displaying guides.</p>
            </TabsContent>
            <TabsContent value="tutorials" className="outline-none">
              <p className="text-gray-400">Displaying tutorials.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
