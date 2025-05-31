
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categories: Array<{
    id: string;
    label: string;
    count?: number;
  }>;
}

export const CategoryTabs = ({ 
  activeCategory, 
  onCategoryChange, 
  categories 
}: CategoryTabsProps) => {
  return (
    <div className="mb-8">
      <Tabs value={activeCategory} onValueChange={onCategoryChange}>
        <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300"
            >
              {category.label}
              {category.count !== undefined && (
                <span className="ml-1 text-xs opacity-75">({category.count})</span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
