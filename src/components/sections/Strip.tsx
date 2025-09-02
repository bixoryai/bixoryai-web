import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import llamaLogo from "@/assets/logos/llama-logo.png";
import deepseekLogo from "@/assets/logos/deepseek-logo.png";

const Strip = () => {
  const { elementRef: stripRef, isVisible: stripVisible } = useScrollAnimation(0.2);

const aiModels = [
    { name: "ChatGPT", logo: "/lovable-uploads/d419fc4f-d4e6-4e45-8ef7-a8f57deaf9c7.png" },
    { name: "Claude", logo: "/lovable-uploads/227e4f41-169c-413c-978f-8d8fa4f0a990.png" }, 
    { name: "Grok", logo: "/lovable-uploads/6bae1fdc-4345-40c5-9057-09474541ad6b.png" },
    { name: "Google AI", logo: "/lovable-uploads/6e8eb11a-292a-4643-9bd0-0c6dac8cbbe5.png" },
    { name: "Deepseek", logo: deepseekLogo },
    { name: "Meta AI", logo: llamaLogo },
    { name: "Mistral", logo: "/lovable-uploads/e388b3e0-7a73-4ff9-be3e-2848d2a2f38c.png" },
    { name: "Hugging Face", logo: "/lovable-uploads/4142cef5-f907-43dd-be4b-3a46ea2c657e.png" }
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
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
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
                  className="h-10 md:h-12 w-auto object-contain"
                  onError={(e) => {
                    console.error(`Failed to load ${model.name} logo:`, model.logo);
                    e.currentTarget.style.display = 'none';
                  }}
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