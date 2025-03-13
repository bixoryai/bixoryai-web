
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="h-[500px] md:h-[600px] relative flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* New background image */}
        <div 
          className="absolute inset-0 bg-[url('/lovable-uploads/d498a479-5931-4b37-b81c-eb98dbc202bb.png')] bg-no-repeat bg-cover bg-center z-0"
        />
      </div>
      
      {/* Light gradient overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent z-10" />

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
              Contact <ArrowRight className="w-4 h-4" />
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
