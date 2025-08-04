
import { GraduationCap, Cog, Building } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: <GraduationCap className="w-8 h-8 text-secondary" />,
    title: "AI Education & Training",
    description: "Empower your team with AI knowledge through customized training programs and workshops",
    features: [
      "Customized learning paths",
      "Hands-on workshops", 
      "Expert-led training"
    ],
    link: "/knowledge-base"
  },
  {
    icon: <Cog className="w-8 h-8 text-secondary" />,
    title: "Custom AI Solutions",
    description: "From data services to custom model training and deployment, we build tailored AI solutions for your unique challenges",
    features: [
      "Data preparation & analysis",
      "Custom AI model training and finetuning",
      "AI application development & integration"
    ],
    link: "/solutions"
  },
  {
    icon: <Building className="w-8 h-8 text-secondary" />,
    title: "Enterprise AI Consultation",
    description: "Strategic guidance for implementing AI across your organization to drive innovation and efficiency",
    features: [
      "AI readiness assessment",
      "Implementation roadmap",
      "Technology selection"
    ],
    link: "/about"
  },
];

const Services = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2);
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3);
  const navigate = useNavigate();

  return (
    <section 
      id="services" 
      className="py-20 bg-primary"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold text-white text-center mb-16 transition-all duration-1200 ${
            titleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
          }`}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation(0.3);
            
            return (
              <div
                key={index}
                ref={cardRef}
                className={`group bg-card-gradient p-6 sm:p-8 rounded-xl hover:scale-105 transition-all duration-700 border border-white/10 hover:border-secondary/30 ${
                  cardVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms` 
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <div className="mb-4 p-3 bg-secondary/10 rounded-lg w-fit group-hover:bg-secondary/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed flex-grow text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <button 
                      onClick={() => navigate(service.link)}
                      className="w-full py-3 px-4 bg-transparent border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 font-medium text-sm group-hover:shadow-lg group-hover:shadow-secondary/20"
                    >
                      Learn More
                    </button>
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

export default Services;
