import { Brain, Database, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedSolutions = () => {
  const navigate = useNavigate();
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2);
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);

  const solutions = [
    {
      icon: <Brain className="w-12 h-12 text-secondary" />,
      title: "Custom AI Models",
      description: "Tailored machine learning solutions designed specifically for your business challenges and data requirements.",
      features: ["Model Training & Fine-tuning", "Performance Optimization", "Deployment & Scaling"]
    },
    {
      icon: <Database className="w-12 h-12 text-secondary" />,
      title: "Data Intelligence",
      description: "Transform your raw data into actionable insights with advanced analytics and intelligent data processing.",
      features: ["Data Preparation", "Predictive Analytics", "Real-time Processing"]
    },
    {
      icon: <Zap className="w-12 h-12 text-secondary" />,
      title: "AI Automation",
      description: "Streamline operations and boost productivity with intelligent automation solutions that adapt to your workflow.",
      features: ["Process Automation", "Intelligent Workflows", "Integration Solutions"]
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-br from-primary via-primary to-blue-900"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold text-white text-center mb-6 transition-all duration-1200 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Featured Solutions
        </h2>
        
        <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Discover our most popular AI solutions that drive real business results
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {solutions.map((solution, index) => {
            const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation(0.3);
            
            return (
              <div
                key={index}
                ref={cardRef}
                className={`group bg-card-gradient p-8 rounded-xl hover:scale-105 transition-all duration-300 border border-white/10 hover:border-secondary/30 ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="mb-4 p-4 bg-secondary/10 rounded-lg w-fit mx-auto group-hover:bg-secondary/20 transition-colors duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => navigate('/solutions')}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full"
          >
            Explore All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;