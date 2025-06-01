
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Zap, Shield, Users, Cog, TrendingUp, ArrowRight, CheckCircle, Database, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const solutionCategories = [
  {
    icon: <Brain className="w-8 h-8 text-secondary" />,
    title: "AI Strategy & Consulting",
    description: "Strategic AI implementation roadmaps tailored to your business objectives and industry requirements.",
    features: ["AI Readiness Assessment", "Custom Implementation Strategy", "ROI Optimization", "Change Management"]
  },
  {
    icon: <Database className="w-8 h-8 text-secondary" />,
    title: "AI Data Solutions",
    description: "Comprehensive data solutions including synthetic data generation and domain-specific data curation services.",
    features: ["Synthetic Data Generation", "Domain Data Curation", "Data Pipeline Solutions", "Privacy-Preserving Datasets"]
  },
  {
    icon: <Layers className="w-8 h-8 text-secondary" />,
    title: "Synthetic Data Generation",
    description: "Create high-quality synthetic datasets that preserve statistical properties while ensuring privacy compliance.",
    features: ["Privacy-Preserving Data", "Training Data Augmentation", "Edge Case Simulation", "Compliance-Ready Datasets"]
  },
  {
    icon: <Cog className="w-8 h-8 text-secondary" />,
    title: "Domain Data Curation",
    description: "Industry-specific data preparation and curation services with deep domain expertise integration.",
    features: ["Industry-Specific Preparation", "Data Quality Assessment", "Custom Annotation Services", "Domain Expertise Integration"]
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-secondary" />,
    title: "Custom AI Development",
    description: "Bespoke AI solutions designed and built specifically for your unique business challenges and workflows.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    icon: <Shield className="w-8 h-8 text-secondary" />,
    title: "AI Integration & Support",
    description: "Seamless integration of AI solutions into your existing infrastructure with ongoing support and optimization.",
    features: ["System Integration", "24/7 Support", "Performance Monitoring", "Continuous Optimization"]
  }
];

const industries = [
  { name: "Healthcare", description: "AI-powered diagnostics, synthetic medical data, and patient care solutions" },
  { name: "Finance", description: "Fraud detection, algorithmic trading, and compliant synthetic financial datasets" },
  { name: "Manufacturing", description: "Predictive maintenance, quality control, and production data optimization" },
  { name: "Retail", description: "Personalized recommendations, inventory optimization, and customer behavior analytics" },
  { name: "Education", description: "Adaptive learning platforms and student performance analytics with privacy protection" },
  { name: "Technology", description: "Enhanced software development, testing automation, and synthetic test data generation" }
];

const Solutions = () => {
  const { elementRef: solutionsRef, isVisible: solutionsVisible } = useScrollAnimation(0.3);
  const { elementRef: industriesRef, isVisible: industriesVisible } = useScrollAnimation(0.3);
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        backgroundImage="/lovable-uploads/d810ceaa-aedc-4471-b105-bfb9efa741c7.png"
        title="AI Solutions That Transform"
        subtitle="Comprehensive artificial intelligence solutions designed to accelerate your business growth and operational efficiency."
        primaryButtonText="Get Started"
        secondaryButtonText="View Case Studies"
        height="pt-24 pb-20"
      />

      {/* Solutions Grid */}
      <section 
        ref={solutionsRef}
        className="py-20 bg-primary"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Solution Portfolio
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              From strategy to implementation, we provide end-to-end AI solutions 
              that drive measurable results for businesses of all sizes.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            solutionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {solutionCategories.map((solution, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 bg-primary/80 border-gray-700 hover:border-secondary/50"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-secondary/20 rounded-lg w-fit">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl text-white mb-3">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section 
        ref={industriesRef}
        className="py-20 bg-gradient-to-br from-primary to-blue-900"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tailored AI solutions designed for the unique challenges and opportunities 
              in your industry sector, with specialized data solutions for each vertical.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${
            industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 bg-primary/80 border-gray-700 hover:border-secondary/50"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-white">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`text-center transition-all duration-1000 ${
            industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg flex items-center gap-2 mx-auto"
            >
              Contact for More Info
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        ref={ctaRef}
        className="py-20 bg-primary"
      >
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our AI solutions can address your specific challenges 
              and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg flex items-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 px-8 py-4 text-lg"
                asChild
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
