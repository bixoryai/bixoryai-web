
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

interface KnowledgeBaseHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onAddSource?: () => void;
}

export const KnowledgeBaseHeader = ({ 
  searchTerm, 
  onSearchChange, 
  onAddSource 
}: KnowledgeBaseHeaderProps) => {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00]/10 to-[#00F0FF]/10 rounded-xl blur-sm"></div>
      <div className="relative bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="Search crawled articles, guides, and tutorials..."
              className="pl-12 h-12 text-base bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-[#00F0FF]/50 focus:ring-[#00F0FF]/20"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          {onAddSource && (
            <Button 
              onClick={onAddSource}
              className="bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white whitespace-nowrap"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Source
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
