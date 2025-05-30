
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, ChevronDown, SortAsc } from "lucide-react";

interface ProjectFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  filteredCount: number;
  totalCount: number;
  categories: string[];
  statuses: string[];
}

const ProjectFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  sortBy,
  setSortBy,
  filteredCount,
  totalCount,
  categories,
  statuses
}: ProjectFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const sortOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "stars", label: "Most Stars" },
    { value: "name", label: "Alphabetical" },
    { value: "status", label: "By Status" }
  ];

  return (
    <section className="py-10 border-b border-gray-800/50 bg-gradient-to-r from-[#0A192F]/90 to-[#0D1B2A]/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Search Bar with better mobile sizing */}
          <div className="relative mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00]/10 to-[#00F0FF]/10 rounded-xl blur-sm"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search projects by name, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 sm:h-14 text-sm sm:text-base bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 backdrop-blur-sm focus:border-[#00F0FF]/50 focus:ring-[#00F0FF]/20 transition-all duration-300"
                aria-label="Search projects"
              />
            </div>
          </div>
          
          {/* Top Controls Row - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-3 bg-gray-900/50 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-[#FF4D00]/50 transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm w-full sm:w-auto justify-center sm:justify-start"
                    aria-expanded={isFilterOpen}
                    aria-controls="filter-content"
                  >
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Advanced Filters</span>
                    <span className="sm:hidden">Filters</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="space-y-6 mt-6" id="filter-content">
                  {/* Enhanced Category Filter with much better visibility */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300 block">Categories</label>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                      {categories.map(category => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className={`transition-all duration-300 hover:scale-105 backdrop-blur-sm text-xs sm:text-sm ${
                            selectedCategory === category 
                              ? "bg-gradient-to-r from-[#FF4D00] to-[#FF4D00]/80 border-[#FF4D00] text-white shadow-lg shadow-[#FF4D00]/25" 
                              : "bg-gray-700/80 border-gray-500 text-white hover:bg-gray-600/80 hover:border-[#FF4D00]/50 hover:text-white"
                          }`}
                          aria-pressed={selectedCategory === category}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced Status Filter with much better visibility */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300 block">Project Status</label>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                      {statuses.map(status => (
                        <Button
                          key={status}
                          variant={selectedStatus === status ? "secondary" : "outline"}
                          size="sm"
                          onClick={() => setSelectedStatus(status)}
                          className={`transition-all duration-300 hover:scale-105 backdrop-blur-sm text-xs sm:text-sm ${
                            selectedStatus === status 
                              ? "bg-gradient-to-r from-[#00F0FF] to-[#00F0FF]/80 border-[#00F0FF] text-[#0A192F] font-medium shadow-lg shadow-[#00F0FF]/25" 
                              : "bg-gray-700/80 border-gray-500 text-white hover:bg-gray-600/80 hover:border-[#00F0FF]/50 hover:text-white"
                          }`}
                          aria-pressed={selectedStatus === status}
                        >
                          {status}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SortAsc className="h-4 w-4 text-gray-400" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-gray-900/50 border-gray-700/50 text-white hover:bg-gray-800/50 w-full sm:w-48">
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700 text-white z-50">
                    {sortOptions.map(option => (
                      <SelectItem key={option.value} value={option.value} className="hover:bg-gray-800 focus:bg-gray-800">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="text-sm text-gray-400 bg-gray-900/30 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm w-full sm:w-auto text-center">
              <span className="text-[#00F0FF] font-medium">{filteredCount}</span> of <span className="text-white">{totalCount}</span> projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;
