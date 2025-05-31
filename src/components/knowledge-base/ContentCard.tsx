
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Globe } from "lucide-react";

interface ContentCardProps {
  title: string;
  description: string;
  category: string;
  url?: string;
  source?: string;
  crawledAt?: string;
  tags?: string[];
  isPlaceholder?: boolean;
}

export const ContentCard = ({
  title,
  description,
  category,
  url,
  source,
  crawledAt,
  tags = [],
  isPlaceholder = false
}: ContentCardProps) => {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'article': return 'text-[#00F0FF]';
      case 'guide': return 'text-[#FF4D00]';
      case 'tutorial': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <Card className="bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-semibold text-white group-hover:text-[#00F0FF] transition-colors">
            {title}
          </CardTitle>
          {url && (
            <Button 
              variant="ghost" 
              size="icon"
              className="text-gray-400 hover:text-white flex-shrink-0"
              onClick={() => window.open(url, '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Badge variant="outline" className={`${getCategoryColor(category)} border-current`}>
            {category}
          </Badge>
          {source && (
            <div className="flex items-center gap-1 text-gray-500">
              <Globe className="h-3 w-3" />
              <span className="text-xs">{source}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-gray-400 mb-4 line-clamp-3">
          {description}
        </CardDescription>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        {crawledAt && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>Crawled {new Date(crawledAt).toLocaleDateString()}</span>
          </div>
        )}

        {isPlaceholder && (
          <div className="text-xs text-yellow-400 italic">
            Placeholder - Will be populated via web crawling
          </div>
        )}
      </CardContent>
    </Card>
  );
};
