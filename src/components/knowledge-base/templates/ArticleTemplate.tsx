import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ExternalLink, BookOpen, ArrowRight } from "lucide-react";

interface ArticleTemplateProps {
  title: string;
  abstract: string;
  content: string;
  author?: string;
  source?: string;
  readingTime?: number;
  publishedAt?: string;
  url?: string;
  keyTakeaways?: string[];
  relatedLinks?: { title: string; url: string }[];
  tags?: string[];
}

export const ArticleTemplate = ({
  title,
  abstract,
  content,
  author,
  source,
  readingTime = 5,
  publishedAt,
  url,
  keyTakeaways = [],
  relatedLinks = [],
  tags = []
}: ArticleTemplateProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] to-[#0D1B2A] py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-gray-300 mb-4 md:mb-6">
            {author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
            {publishedAt && (
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{new Date(publishedAt).toLocaleDateString()}</span>
              </div>
            )}
            {url && (
              <Button 
                variant="ghost" 
                size="sm"
                className="text-[#00F0FF] hover:text-white p-0 h-auto text-sm md:text-base"
                onClick={() => window.open(url, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Source
              </Button>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-[#00F0FF] border-[#00F0FF]/50 text-xs md:text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Abstract */}
        <Card className="bg-gray-900/50 border-gray-700/50 mb-6 md:mb-8">
          <CardHeader>
            <h2 className="text-lg md:text-xl font-semibold text-white">Abstract</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">{abstract}</p>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        {keyTakeaways.length > 0 && (
          <Card className="bg-gray-900/50 border-gray-700/50 mb-6 md:mb-8">
            <CardHeader>
              <h2 className="text-lg md:text-xl font-semibold text-white">Key Takeaways</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 md:space-y-3">
                {keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="h-4 w-4 mt-1 text-[#FF4D00] flex-shrink-0" />
                    <span className="text-sm md:text-base">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        <Card className="bg-gray-900/50 border-gray-700/50 mb-6 md:mb-8">
          <CardContent className="pt-4 md:pt-6">
            <div className="prose prose-invert max-w-none">
              <div className="text-sm md:text-base text-gray-300 leading-relaxed whitespace-pre-line">
                {content}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Links */}
        {relatedLinks.length > 0 && (
          <Card className="bg-gray-900/50 border-gray-700/50">
            <CardHeader>
              <h2 className="text-lg md:text-xl font-semibold text-white">Related Research</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 md:space-y-3">
                {relatedLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="justify-start h-auto p-2 md:p-3 w-full text-left border border-gray-700/50 hover:border-[#00F0FF]/50"
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <ExternalLink className="h-4 w-4 text-[#00F0FF] flex-shrink-0" />
                      <span className="text-sm md:text-base text-white">{link.title}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};