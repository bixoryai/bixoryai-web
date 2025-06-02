
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface TagFilterProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearTags: () => void;
}

const popularAITags = [
  "LLMs",
  "Agents", 
  "MCP",
  "RAG",
  "Fine-tuning",
  "Transformers",
  "Prompt Engineering",
  "Diffusion Models",
  "Computer Vision",
  "NLP",
  "MLOps",
  "Neural Networks",
  "Embeddings",
  "Vector Databases",
  "Multimodal AI",
  "GPT",
  "BERT",
  "Reinforcement Learning"
];

export const TagFilter = ({ selectedTags, onTagToggle, onClearTags }: TagFilterProps) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-sm font-medium text-gray-300 mr-2">Popular AI Topics:</span>
        {popularAITags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <Badge
              key={tag}
              variant={isSelected ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? "bg-[#FF4D00] text-white hover:bg-[#FF4D00]/90" 
                  : "border-gray-600 text-gray-300 hover:border-[#00F0FF] hover:text-[#00F0FF]"
              }`}
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </Badge>
          );
        })}
      </div>
      
      {selectedTags.length > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Active filters:</span>
          <div className="flex flex-wrap gap-1">
            {selectedTags.map((tag) => (
              <Badge key={tag} className="bg-[#FF4D00] text-white">
                {tag}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 ml-1 p-0 hover:bg-white/20"
                  onClick={() => onTagToggle(tag)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white h-6"
            onClick={onClearTags}
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
};
