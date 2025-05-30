
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Strip = () => {
  const { elementRef: stripRef, isVisible: stripVisible } = useScrollAnimation(0.2);

  const aiModels = [
    "ChatGPT",
    "Claude", 
    "Gemini",
    "Grok",
    "Llama",
    "Deepseek",
    "Mistral"
  ];

  return (
    <section className="py-16 bg-primary/95 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div 
          ref={stripRef}
          className={`text-center transition-all duration-1200 ${
            stripVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* First Row: Empowered By */}
          <h3 className="text-xl font-semibold text-white mb-8">
            Empowered By
          </h3>
          
          {/* Second Row: AI Models */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {aiModels.map((model, index) => (
              <div
                key={model}
                className={`bg-card-gradient backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  stripVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  animationDelay: stripVisible ? `${index * 0.1}s` : '0s'
                }}
              >
                <span className="text-sm font-medium text-white">{model}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strip;
