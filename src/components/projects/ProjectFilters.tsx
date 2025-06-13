
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, ChevronDown, SortAsc, X } from "lucide-react";

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
    { value: "default", label: "Default Order" },
    { value: "recent", label: "Most Recent" },
    { value: "stars", label: "Most Stars" },
    { value: "name", label: "Alphabetical" },
    { value: "status", label: "By Status" }
  ];

  const hasActiveFilters = selectedCategory !== "All" || selectedStatus !== "All";
  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedStatus("All");
  };

  return (
    <section className="py-8 border-b border-gray-800/50 bg-gradient-to-r from-[#0A192F]/95 to-[#0D1B2A]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Compact Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00]/5 to-[#00F0FF]/5 rounded-xl blur-sm"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search projects by name, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-base bg-gray-900/60 border-gray-700/50 text-white placeholder-gray-400 backdrop-blur-sm focus:border-[#00F0FF]/50 focus:ring-[#00F0FF]/20 transition-all duration-300"
                aria-label="Search projects"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          
          {/* Compact Controls Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Left side - Filters and Sort */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              {/* Filter Toggle with Active Indicator */}
              <div className="flex items-center gap-3">
                <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="outline" 
                      className={`flex items-center gap-2 transition-all duration-300 px-4 py-2 backdrop-blur-sm ${
                        hasActiveFilters 
                          ? "bg-[#FF4D00]/20 border-[#FF4D00]/50 text-white hover:bg-[#FF4D00]/30" 
                          : "bg-gray-900/50 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-[#FF4D00]/50"
                      }`}
                      aria-expanded={isFilterOpen}
                      aria-controls="filter-content"
                    >
                      <Filter className="h-4 w-4" />
                      <span className="hidden sm:inline">Filters</span>
                      {hasActiveFilters && (
                        <Badge className="bg-[#FF4D00] text-white text-xs px-1.5 py-0.5 ml-1">
                          {[selectedCategory !== "All" ? 1 : 0, selectedStatus !== "All" ? 1 : 0].reduce((a, b) => a + b, 0)}
                        </Badge>
                      )}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                </Collapsible>
                
                {/* Clear Filters Button */}
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Clear
                  </Button>
                )}
              </div>
              
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
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
            
            {/* Right side - Results Count */}
            <div className="text-sm text-gray-400 bg-gray-900/30 px-4 py-2 rounded-lg backdrop-blur-sm">
              <span className="text-[#00F0FF] font-medium">{filteredCount}</span> of <span className="text-white">{totalCount}</span> projects
            </div>
          </div>

          {/* Collapsible Advanced Filters - Optimized spacing */}
          <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <CollapsibleContent 
              className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" 
              id="filter-content"
            >
              <div className="pt-6 space-y-6">
                {/* Category Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300 block">Categories</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={`transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm ${
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
                
                {/* Status Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300 block">Project Status</label>
                  <div className="flex flex-wrap gap-2">
                    {statuses.map(status => (
                      <Button
                        key={status}
                        variant={selectedStatus === status ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => setSelectedStatus(status)}
                        className={`transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm ${
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
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;
