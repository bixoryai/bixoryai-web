
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
    <section className="py-12 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div 
          ref={stripRef}
          className={`text-center transition-all duration-1200 ${
            stripVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* First Row: Empowered By */}
          <h3 className="text-lg font-semibold text-gray-600 mb-4">
            Empowered By
          </h3>
          
          {/* Second Row: AI Models */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {aiModels.map((model, index) => (
              <div
                key={model}
                className={`bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105 ${
                  stripVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  animationDelay: stripVisible ? `${index * 0.1}s` : '0s'
                }}
              >
                <span className="text-sm font-medium text-gray-800">{model}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strip;
