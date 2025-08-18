
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  backgroundImage?: string;
  title: string | ReactNode;
  subtitle?: string;
  showButtons?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  children?: ReactNode;
  height?: string;
}

const Hero = ({ 
  backgroundImage = '/lovable-uploads/d810ceaa-aedc-4471-b105-bfb9efa741c7.png',
  title,
  subtitle,
  showButtons = true,
  primaryButtonText = "Contact",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  children,
  height = "h-[400px] md:h-[500px]"
}: HeroProps) => {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      navigate('/contact');
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      navigate('/solutions');
    }
  };

  return (
    <div 
      className={`${height} relative flex items-center overflow-hidden`}
      style={{ 
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      {/* Animated tech grid overlay */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-pulse"></div>
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-accent/10 animate-pulse"
              style={{ 
                animationDelay: `${(i * 0.1) % 3}s`,
                animationDuration: '3s'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main title with staggered animation and increased top margin */}
          <div className="text-4xl md:text-6xl font-bold text-white mb-6 mt-20 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            {title}
          </div>
          
          {/* Subtitle with typing effect */}
          {subtitle && (
            <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
              <p className="text-lg md:text-xl text-gray-300 mb-8 overflow-hidden border-r-2 border-accent animate-[typewriter_3s_steps(80)_1.5s_forwards,_blink_1s_infinite_4.5s]">
                {subtitle}
              </p>
            </div>
          )}
          
          {/* Custom children content */}
          {children}
          
          {/* Buttons with enhanced animations */}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_0.8s_ease-out_1.1s_forwards]">
              <button 
                onClick={handlePrimaryClick}
                className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-all duration-300 flex items-center gap-2 justify-center transform hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 group"
              >
                {primaryButtonText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button 
                onClick={handleSecondaryClick}
                className="border border-accent text-accent px-8 py-3 rounded-full hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/25 relative overflow-hidden group"
              >
                <span className="relative z-10">{secondaryButtonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
