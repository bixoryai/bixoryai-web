import { Brain, Code, LineChart } from "lucide-react";

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
  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card-gradient p-8 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;