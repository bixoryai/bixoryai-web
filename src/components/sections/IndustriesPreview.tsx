import { Building2, ShoppingCart, Heart, GraduationCap, Factory, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const IndustriesPreview = () => {
  const navigate = useNavigate();
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2);
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);

  const industries = [
    {
      icon: <Building2 className="w-8 h-8 text-secondary" />,
      name: "Financial Services",
      description: "Risk assessment, fraud detection, algorithmic trading"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-secondary" />,
      name: "Retail & E-commerce",
      description: "Personalization, inventory optimization, demand forecasting"
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      name: "Healthcare",
      description: "Diagnostics, patient care, medical imaging analysis"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-secondary" />,
      name: "Education",
      description: "Personalized learning, assessment, content generation"
    },
    {
      icon: <Factory className="w-8 h-8 text-secondary" />,
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, supply chain"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      name: "Marketing",
      description: "Customer insights, campaign optimization, content creation"
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
          Industries We Serve
        </h2>
        
        <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          From startups to enterprises, we deliver AI solutions across diverse industries
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {industries.map((industry, index) => {
            const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation(0.3);
            
            return (
              <div
                key={index}
                ref={cardRef}
                className={`bg-card-gradient p-6 rounded-xl hover:scale-105 transition-all duration-300 border border-white/10 hover:border-secondary/30 ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
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
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPreview;