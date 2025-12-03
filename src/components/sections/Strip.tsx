import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";
import claudeLogo from "@/assets/logos/claude-logo.png";
import geminiLogo from "@/assets/logos/gemini-logo.svg";
import grokLogo from "@/assets/logos/grok-logo.png";
import llamaLogo from "@/assets/logos/llama-logo.png";
import deepseekLogo from "@/assets/logos/deepseek-logo.png";
import mistralLogo from "@/assets/logos/mistral-logo.png";
import { asset } from "@/lib/utils";

const Strip = () => {
  const { elementRef: stripRef, isVisible: stripVisible } = useScrollAnimation(0.2);
  const [processedChatGPTLogo, setProcessedChatGPTLogo] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        const response = await fetch(asset('lovable-uploads/d419fc4f-d4e6-4e45-8ef7-a8f57deaf9c7.png'));
        const blob = await response.blob();
        const img = await loadImage(blob);
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedChatGPTLogo(processedUrl);
      } catch (error) {
        console.error("Failed to process ChatGPT logo:", error);
        setProcessedChatGPTLogo(asset('lovable-uploads/d419fc4f-d4e6-4e45-8ef7-a8f57deaf9c7.png'));
      }
    };

    processLogo();
  }, []);

const aiModels = [
    { name: "ChatGPT", logo: processedChatGPTLogo || asset('lovable-uploads/d419fc4f-d4e6-4e45-8ef7-a8f57deaf9c7.png') },
    { name: "Claude", logo: asset('lovable-uploads/227e4f41-169c-413c-978f-8d8fa4f0a990.png') }, 
    { name: "Grok", logo: asset('lovable-uploads/6bae1fdc-4345-40c5-9057-09474541ad6b.png') },
    { name: "Google AI", logo: asset('lovable-uploads/6e8eb11a-292a-4643-9bd0-0c6dac8cbbe5.png') },
    { name: "Deepseek", logo: deepseekLogo },
    { name: "Hugging Face", logo: asset('lovable-uploads/4142cef5-f907-43dd-be4b-3a46ea2c657e.png') },
    { name: "Meta AI", logo: asset('lovable-uploads/89281abb-bff5-485d-be3d-5e89ac5d657e.png') },
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
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
            Empowered By
          </h3>
          
          {/* Second Row: AI Models */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {aiModels.map((model, index) => (
              <div
                key={model.name}
                className={`flex items-center gap-3 bg-card-gradient backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20 ${
                  stripVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  animationDelay: stripVisible ? `${index * 0.1}s` : '0s'
                }}
              >
                <img 
                  src={model.logo} 
                  alt={`${model.name} logo`}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-sm md:text-base font-medium text-white whitespace-nowrap">
                  {model.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strip;
