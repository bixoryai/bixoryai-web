import { Shield, Clock, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyChooseUs = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2);
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);

  const advantages = [
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Proven Expertise",
      description: "Deep knowledge across all major AI models and frameworks"
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "Fast Implementation",
      description: "Rapid deployment with minimal disruption to your operations"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Full-Cycle Support",
      description: "From consultation to deployment and ongoing maintenance"
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Cost-Effective",
      description: "Maximum ROI with tailored solutions that fit your budget"
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
          className={`text-3xl md:text-4xl font-bold text-white text-center mb-16 transition-all duration-1200 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
            BIXORY AI
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation(0.3);
            
            return (
              <div
                key={index}
                ref={cardRef}
                className={`text-center transition-all duration-700 ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-card-gradient p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-white/10 hover:border-secondary/30">
                  <div className="mb-4 p-3 bg-secondary/10 rounded-lg w-fit mx-auto">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;