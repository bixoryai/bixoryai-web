import { Gift } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-hero-pattern flex items-center">
      <div className="container mx-auto px-6">
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
      <div className="absolute inset-0 bg-[url('/images/ai-grid.webp')] opacity-20 mix-blend-overlay pointer-events-none" />
    </section>
  );
};