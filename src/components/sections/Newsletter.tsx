
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { elementRef, isVisible } = useScrollAnimation(0.3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section 
      className="py-20 relative"
      style={{ 
        backgroundImage: "url('/lovable-uploads/e388b3e0-7a73-4ff9-be3e-2848d2a2f38c.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      ref={elementRef}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Stay Updated
        </h2>
        <p className={`text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-800 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Subscribe to our newsletter for the latest updates on AI technology and industry insights.
        </p>
        <form 
          onSubmit={handleSubmit} 
          className={`max-w-md mx-auto flex gap-4 transition-all duration-800 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 focus:outline-none focus:border-accent transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
