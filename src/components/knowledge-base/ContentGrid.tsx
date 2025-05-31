
import { ContentCard } from "./ContentCard";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url?: string;
  source?: string;
  crawledAt?: string;
  tags?: string[];
}

interface ContentGridProps {
  items: ContentItem[];
  isLoading?: boolean;
}

export const ContentGrid = ({ items, isLoading = false }: ContentGridProps) => {
  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-3 bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-700 rounded"></div>
              <div className="h-2 bg-gray-700 rounded w-5/6"></div>
              <div className="h-2 bg-gray-700 rounded w-4/6"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-2">No content found</div>
        <div className="text-gray-500 text-sm">
          Try adjusting your search terms or check back later as we crawl more sources
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ContentCard
          key={item.id}
          title={item.title}
          description={item.description}
          category={item.category}
          url={item.url}
          source={item.source}
          crawledAt={item.crawledAt}
          tags={item.tags}
          isPlaceholder={!item.url}
        />
      ))}
    </div>
  );
};
