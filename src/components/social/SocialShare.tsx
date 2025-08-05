import { useState, useEffect } from "react";
import { Heart, Share2, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
  showLike?: boolean;
  compact?: boolean;
  className?: string;
}

export const SocialShare = ({ 
  title, 
  url, 
  description = "", 
  showLike = true, 
  compact = false,
  className = "" 
}: SocialShareProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const { toast } = useToast();

  // Generate a unique key for this content based on URL
  const contentKey = `like_${url.replace(/[^a-zA-Z0-9]/g, '_')}`;
  const countKey = `count_${url.replace(/[^a-zA-Z0-9]/g, '_')}`;

  useEffect(() => {
    // Load like state from localStorage
    const liked = localStorage.getItem(contentKey) === 'true';
    const count = parseInt(localStorage.getItem(countKey) || '0', 10);
    setIsLiked(liked);
    setLikeCount(count);
  }, [contentKey, countKey]);

  const handleLike = () => {
    const newLikedState = !isLiked;
    const newCount = newLikedState ? likeCount + 1 : Math.max(0, likeCount - 1);
    
    setIsLiked(newLikedState);
    setLikeCount(newCount);
    
    localStorage.setItem(contentKey, newLikedState.toString());
    localStorage.setItem(countKey, newCount.toString());
    
    toast({
      description: newLikedState ? "Added to your liked articles!" : "Removed from liked articles",
      duration: 2000,
    });
  };

  const shareToX = () => {
    const text = `${title}\n\n${description}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin + url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareToFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + url)}&quote=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareToLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.origin + url);
    toast({
      description: "Link copied to clipboard!",
      duration: 2000,
    });
  };

  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {showLike && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex items-center gap-1 transition-colors duration-300 ${
              isLiked 
                ? 'text-red-500 hover:text-red-600' 
                : 'text-gray-400 hover:text-red-500'
            }`}
          >
            <Heart 
              className={`w-4 h-4 transition-all duration-300 ${
                isLiked ? 'fill-current scale-110' : ''
              }`} 
            />
            <span className="text-xs">{likeCount}</span>
          </Button>
        )}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-400 hover:text-[#00F0FF] transition-colors duration-300"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-gray-800 border-gray-700">
            <DropdownMenuItem onClick={shareToX} className="flex items-center gap-2 text-white hover:bg-gray-700">
              <Twitter className="w-4 h-4" />
              Share on X
            </DropdownMenuItem>
            <DropdownMenuItem onClick={shareToFacebook} className="flex items-center gap-2 text-white hover:bg-gray-700">
              <Facebook className="w-4 h-4" />
              Share on Facebook
            </DropdownMenuItem>
            <DropdownMenuItem onClick={shareToLinkedIn} className="flex items-center gap-2 text-white hover:bg-gray-700">
              <Linkedin className="w-4 h-4" />
              Share on LinkedIn
            </DropdownMenuItem>
            <DropdownMenuItem onClick={copyToClipboard} className="flex items-center gap-2 text-white hover:bg-gray-700">
              <Share2 className="w-4 h-4" />
              Copy Link
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-between gap-4 ${className}`}>
      {showLike && (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={handleLike}
            className={`flex items-center gap-2 transition-all duration-300 ${
              isLiked 
                ? 'text-red-500 hover:text-red-600 hover:scale-105' 
                : 'text-gray-400 hover:text-red-500 hover:scale-105'
            }`}
          >
            <Heart 
              className={`w-5 h-5 transition-all duration-300 ${
                isLiked ? 'fill-current scale-110' : ''
              }`} 
            />
            <span className="font-medium">{likeCount} {likeCount === 1 ? 'like' : 'likes'}</span>
          </Button>
        </div>
      )}
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400 mr-2">Share:</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={shareToX}
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <Twitter className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={shareToFacebook}
          className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
        >
          <Facebook className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={shareToLinkedIn}
          className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-[#00F0FF] transition-colors duration-300"
        >
          <Share2 className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};