
import { Gift } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <img 
          src="/lovable-uploads/3e317ebb-6aca-4d6a-8d86-94608c200a42.png" 
          alt="AI Background" 
          className="w-full h-full object-cover opacity-10 z-0"
        />
      </div>
      
      {/* Content overlay with a subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70 z-10" />
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            All About
            <span className="text-secondary block">AI Empowerment</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 text-white animate-slide-up">
            <Gift className="w-6 h-6 text-secondary" />
            <p className="text-lg md:text-xl">Cost-effective Full-Cycle AI solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};
