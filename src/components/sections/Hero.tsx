
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div 
      className="h-[400px] md:h-[500px] relative flex items-center overflow-hidden"
      style={{ 
        backgroundImage: "url('/lovable-uploads/1193f0bd-0ad5-478a-8ee5-53eca0c79b93.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
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
          {/* Main title with staggered animation */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            Build Intelligence X
            <span className="text-secondary block opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]"> with AI</span>
          </h1>
          
          {/* Subtitle with typing effect */}
          <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
            <p className="text-lg md:text-xl text-gray-300 mb-8 overflow-hidden border-r-2 border-accent animate-[typewriter_3s_steps(80)_1.5s_forwards,_blink_1s_infinite_4.5s]">
              Pushing the boundaries of human intelligence at the age of AI. We're your partner in AI-powered solutions, education, and business transformation.
            </p>
          </div>
          
          {/* Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_0.8s_ease-out_1.1s_forwards]">
            <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-all duration-300 flex items-center gap-2 justify-center transform hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 group">
              Contact 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="border border-accent text-accent px-8 py-3 rounded-full hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/25 relative overflow-hidden group">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
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
