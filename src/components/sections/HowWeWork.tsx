import { Search, Settings, Rocket, HeadphonesIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowWeWork = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2);
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-secondary" />,
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify AI opportunities"
    },
    {
      icon: <Settings className="w-8 h-8 text-secondary" />,
      title: "Custom Development",
      description: "We build and train AI solutions tailored to your requirements"
    },
    {
      icon: <Rocket className="w-8 h-8 text-secondary" />,
      title: "Deployment & Integration",
      description: "Seamless implementation into your existing workflow"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-secondary" />,
      title: "Ongoing Support",
      description: "Continuous monitoring, optimization, and maintenance"
    }
  ];

  return (
    <section 
      className="py-20 bg-primary"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold text-white text-center mb-16 transition-all duration-1200 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          How We Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation(0.3);
            
            return (
              <div
                key={index}
                ref={cardRef}
                className={`relative transition-all duration-700 ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-secondary to-transparent z-10"></div>
                )}
                
                <div className="bg-card-gradient p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-white/10 hover:border-secondary/30 relative">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  <div className="text-center pt-2">
                    <div className="mb-4 p-3 bg-secondary/10 rounded-lg w-fit mx-auto">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;