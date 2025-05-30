
import { Gift } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center">
      {/* Background image with increased visibility */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/50 z-10" />
        <div 
          className="absolute inset-0 bg-[url('/lovable-uploads/775da253-bbac-4914-9fe0-e5646d67a90e.png')] bg-no-repeat bg-cover bg-center opacity-80 z-0"
        />
      </div>
      
      {/* Content overlay with reduced opacity gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/40 z-10" />
      
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
