import { Zap, Users, Target, Search, TrendingUp, Shield } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Automating Tasks",
      description: "Boost your productivity and streamline efficiency with taking on tasks"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Customer Support",
      description: "Personalized AI helps 24/7 with faster and more accurate responses"
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Personalize Experience",
      description: "Targeted customer recommendations and interactions that convert swiftly"
    },
    {
      icon: <Search className="w-8 h-8 text-secondary" />,
      title: "Generating Insights",
      description: "Identify patterns, trends and opportunities through data-driven decision"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Forecasting Trends",
      description: "Dynamic strategic planning and development, from concept to launch"
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Enhance Security",
      description: "Smart merger of reliable processes and algorithms, ensuring safety"
    }
  ];

  return (
    <section className="py-20 bg-primary/95">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Maximize Productivity & Growth
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card-gradient backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};