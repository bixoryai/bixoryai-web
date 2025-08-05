import { useState, useEffect } from 'react';
import { ArrowUp, ArrowLeft, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuideNavigation = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Breadcrumb Navigation - Mobile Responsive */}
      <div className="fixed top-20 left-3 md:left-6 z-40 bg-primary/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-2 md:p-3 shadow-lg max-w-[calc(100vw-6rem)] md:max-w-none">
        <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
          <Link 
            to="/knowledge-base" 
            className="flex items-center gap-1 md:gap-2 text-gray-300 hover:text-accent transition-colors"
          >
            <BookOpen size={14} className="md:w-4 md:h-4" />
            <span className="hidden sm:inline">Knowledge Base</span>
            <span className="sm:hidden">KB</span>
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-white truncate">AI Getting Started</span>
        </div>
      </div>

      {/* Floating Action Buttons - Mobile Responsive */}
      <div className="fixed bottom-4 right-3 md:bottom-6 md:right-6 z-40 flex flex-col gap-2 md:gap-3">
        {/* Back to Knowledge Base */}
        <Link
          to="/knowledge-base"
          className="bg-secondary hover:bg-secondary/90 text-white p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
          title="Back to Knowledge Base"
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform" />
        </Link>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="bg-accent hover:bg-accent/90 text-primary p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-2"
            title="Back to Top"
          >
            <ArrowUp size={18} className="md:w-5 md:h-5" />
          </button>
        )}
      </div>
    </>
  );
};

export default GuideNavigation;