import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SuccessMetrics = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2);
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);

  const metrics = [
    { number: "50+", label: "AI Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "10+", label: "AI Models Deployed" },
    { number: "99%", label: "Client Satisfaction" }
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
          Our Success by the Numbers
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => {
            const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation(0.3);
            
            return (
              <div
                key={index}
                ref={cardRef}
                className={`text-center transition-all duration-700 ${
                  cardVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-75'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-card-gradient p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-white/10 hover:border-secondary/30">
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                    {metric.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {metric.label}
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

export default SuccessMetrics;