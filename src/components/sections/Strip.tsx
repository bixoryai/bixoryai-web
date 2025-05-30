
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Strip = () => {
  const { elementRef: stripRef, isVisible: stripVisible } = useScrollAnimation(0.2);

  const aiModels = [
    { name: "ChatGPT", color: "text-green-400" },
    { name: "Claude", color: "text-orange-400" }, 
    { name: "Gemini", color: "text-blue-400" },
    { name: "Grok", color: "text-purple-400" },
    { name: "Llama", color: "text-yellow-400" },
    { name: "Deepseek", color: "text-cyan-400" },
    { name: "Mistral", color: "text-red-400" }
  ];

  return (
    <section className="py-6 bg-primary/95 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div 
          ref={stripRef}
          className={`text-center transition-all duration-1200 ${
            stripVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* First Row: Empowered By */}
          <h3 className="text-lg font-semibold text-white mb-4">
            Empowered By
          </h3>
          
          {/* Second Row: AI Models */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {aiModels.map((model, index) => (
              <div
                key={model.name}
                className={`bg-card-gradient backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  stripVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  animationDelay: stripVisible ? `${index * 0.1}s` : '0s'
                }}
              >
                <span className={`text-sm font-medium ${model.color}`}>{model.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strip;
