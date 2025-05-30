
import { Brain, Code, LineChart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: <Brain className="w-8 h-8 text-secondary" />,
    title: "AI Agent Development",
    description: "Custom ML model training & fine-tuning for your specific needs",
  },
  {
    icon: <Code className="w-8 h-8 text-secondary" />,
    title: "App Development",
    description: "Generative AI-powered applications built with cutting-edge technology",
  },
  {
    icon: <LineChart className="w-8 h-8 text-secondary" />,
    title: "Business Consulting",
    description: "Strategic AI solutions to boost productivity and drive growth",
  },
];

const Services = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2);

  return (
    <section 
      id="services" 
      className="py-20 bg-primary"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-white text-center mb-12 transition-all duration-800 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation(0.3);
            
            return (
              <div
                key={index}
                ref={cardRef}
                className={`bg-card-gradient p-8 rounded-xl hover:scale-105 transition-all duration-700 ${
                  cardVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms` 
                }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
