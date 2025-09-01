
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import chatgptLogo from "@/assets/logos/chatgpt-logo.png";
import claudeLogo from "@/assets/logos/claude-logo.png";
import geminiLogo from "@/assets/logos/gemini-logo.svg";
import grokLogo from "@/assets/logos/grok-logo.png";
import llamaLogo from "@/assets/logos/llama-logo.png";
import deepseekLogo from "@/assets/logos/deepseek-logo.png";
import mistralLogo from "@/assets/logos/mistral-logo.png";

const Strip = () => {
  const { elementRef: stripRef, isVisible: stripVisible } = useScrollAnimation(0.2);

  const aiModels = [
    { name: "ChatGPT", logo: chatgptLogo },
    { name: "Claude", logo: claudeLogo }, 
    { name: "Gemini", logo: geminiLogo },
    { name: "Grok", logo: grokLogo },
    { name: "Llama", logo: llamaLogo },
    { name: "Deepseek", logo: deepseekLogo },
    { name: "Mistral", logo: mistralLogo }
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
                <img 
                  src={model.logo} 
                  alt={`${model.name} logo`}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strip;
