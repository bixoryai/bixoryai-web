
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
    { value: "default", label: "Default Order" },
    { value: "recent", label: "Most Recent" },
    { value: "stars", label: "Most Stars" },
    { value: "name", label: "Alphabetical" },
    { value: "status", label: "By Status" }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#0A192F] via-[#0D1B2A] to-[#0A192F] border-t border-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00]/5 to-[#00F0FF]/5 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-1">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search projects by name, description, or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-14 h-14 text-base bg-transparent border-0 text-white placeholder-gray-400 focus:ring-0 focus:outline-none focus:border-0"
                  aria-label="Search projects"
                />
              </div>
            </div>
          </div>
          
          {/* Improved Controls Row */}
          <div className="bg-gradient-to-r from-gray-900/40 to-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              {/* Left side controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
                <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-3 bg-gradient-to-r from-[#FF4D00]/10 to-[#FF4D00]/5 border-[#FF4D00]/30 text-white hover:bg-[#FF4D00]/20 hover:border-[#FF4D00]/50 transition-all duration-300 px-6 py-3 backdrop-blur-sm w-full sm:w-auto justify-center sm:justify-start rounded-xl"
                      aria-expanded={isFilterOpen}
                      aria-controls="filter-content"
                    >
                      <Filter className="h-4 w-4" />
                      <span>Advanced Filters</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="mt-6" id="filter-content">
                    <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 space-y-6">
                      {/* Category Filter */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#FF4D00] rounded-full"></div>
                          <label className="text-sm font-medium text-white">Categories</label>
                        </div>
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
                          {categories.map(category => (
                            <Button
                              key={category}
                              variant={selectedCategory === category ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedCategory(category)}
                              className={`transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm rounded-lg ${
                                selectedCategory === category 
                                  ? "bg-gradient-to-r from-[#FF4D00] to-[#FF4D00]/80 border-[#FF4D00] text-white shadow-lg shadow-[#FF4D00]/25" 
                                  : "bg-gray-800/60 border-gray-600/50 text-gray-300 hover:bg-gray-700/60 hover:border-[#FF4D00]/50 hover:text-white"
                              }`}
                              aria-pressed={selectedCategory === category}
                            >
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Status Filter */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00F0FF] rounded-full"></div>
                          <label className="text-sm font-medium text-white">Project Status</label>
                        </div>
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
                          {statuses.map(status => (
                            <Button
                              key={status}
                              variant={selectedStatus === status ? "secondary" : "outline"}
                              size="sm"
                              onClick={() => setSelectedStatus(status)}
                              className={`transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm rounded-lg ${
                                selectedStatus === status 
                                  ? "bg-gradient-to-r from-[#00F0FF] to-[#00F0FF]/80 border-[#00F0FF] text-[#0A192F] font-medium shadow-lg shadow-[#00F0FF]/25" 
                                  : "bg-gray-800/60 border-gray-600/50 text-gray-300 hover:bg-gray-700/60 hover:border-[#00F0FF]/50 hover:text-white"
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
                
                {/* Sort Dropdown */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="flex items-center gap-2 text-gray-400">
                    <SortAsc className="h-4 w-4" />
                    <span className="text-sm font-medium">Sort:</span>
                  </div>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 border-gray-600/50 text-white hover:bg-gray-800/60 w-full sm:w-48 rounded-xl">
                      <SelectValue placeholder="Sort by..." />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700 text-white z-50 rounded-xl">
                      {sortOptions.map(option => (
                        <SelectItem key={option.value} value={option.value} className="hover:bg-gray-800 focus:bg-gray-800 rounded-lg">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Results counter */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-gray-900/80 to-gray-800/80 px-4 py-2 rounded-xl border border-gray-700/40 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">
                  <span className="text-[#00F0FF] font-semibold">{filteredCount}</span> of <span className="text-white font-medium">{totalCount}</span> projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;
