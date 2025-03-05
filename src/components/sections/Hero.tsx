
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center">
      {/* Background image with increased visibility */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/70 z-10" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-no-repeat bg-cover bg-center opacity-40 z-0"
        />
      </div>
      
      {/* Content overlay with reduced opacity gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-10" />

      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build Intelligence X
            <span className="text-secondary"> with AI</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Pushing the boundaries of human intelligence at the age of AI. We're your partner in AI-powered solutions, education, and business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-accent text-accent px-8 py-3 rounded-full hover:bg-accent/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
