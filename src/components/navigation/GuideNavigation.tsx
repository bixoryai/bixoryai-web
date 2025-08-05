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
      {/* Breadcrumb Navigation */}
      <div className="fixed top-20 left-6 z-40 bg-primary/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <Link 
            to="/knowledge-base" 
            className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
          >
            <BookOpen size={16} />
            <span>Knowledge Base</span>
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-white">AI Getting Started</span>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Back to Knowledge Base */}
        <Link
          to="/knowledge-base"
          className="bg-secondary hover:bg-secondary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
          title="Back to Knowledge Base"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
        </Link>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="bg-accent hover:bg-accent/90 text-primary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-2"
            title="Back to Top"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default GuideNavigation;