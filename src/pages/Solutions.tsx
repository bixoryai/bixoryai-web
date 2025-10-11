import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Brain, Zap, Shield, Users, Cog, TrendingUp, ArrowRight, CheckCircle, Database, Layers, FileText, BarChart3, Lock, Award, Clock, Heart, DollarSign, Factory, ShoppingCart, GraduationCap, Monitor } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { showComingSoonToast } from "@/utils/comingSoon";
import solutionsHeroImage from "@/assets/solutions-hero.jpg";
const mainSolutionCategories = [{
  icon: <Brain className="w-8 h-8 text-secondary" />,
  title: "AI Strategy & Consulting",
  subtitle: "The Foundation",
  description: "Strategic AI implementation roadmaps tailored to your business objectives and industry requirements.",
  features: ["AI Readiness Assessment", "Custom Implementation Strategy", "ROI Optimization", "Change Management"]
}, {
  icon: <Database className="w-8 h-8 text-secondary" />,
  title: "AI Data Solutions",
  subtitle: "Your Core Offering",
  description: "Comprehensive data solutions including synthetic data generation and domain-specific data curation services.",
  features: ["Synthetic Data Generation", "Domain Data Curation", "Data Pipeline Solutions", "Privacy-Preserving Datasets"]
}, {
  icon: <Cog className="w-8 h-8 text-secondary" />,
  title: "Custom AI Development",
  subtitle: "Implementation Services",
  description: "Bespoke AI solutions designed and built specifically for your unique business challenges and workflows.",
  features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
}, {
  icon: <Shield className="w-8 h-8 text-secondary" />,
  title: "AI Integration & Support",
  subtitle: "Ongoing Services",
  description: "Seamless integration of AI solutions into your existing infrastructure with ongoing support and optimization.",
  features: ["System Integration", "24/7 Support", "Performance Monitoring", "Continuous Optimization"]
}];
const dataSubSolutions = [{
  icon: <Layers className="w-8 h-8 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Synthetic Data Generation",
  problem: "Limited or sensitive training data",
  solution: "Privacy-preserving synthetic datasets",
  outcome: "Scalable AI training without privacy risks",
  features: ["Privacy-preserving data creation", "Training data augmentation", "Edge case simulation", "Compliance-ready datasets"]
}, {
  icon: <FileText className="w-8 h-8 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12" />,
  title: "Domain Data Curation",
  problem: "Unstructured industry-specific data",
  solution: "Expert data preparation & annotation",
  outcome: "High-quality domain datasets",
  features: ["Industry-specific data preparation", "Data quality assessment", "Custom annotation services", "Domain expertise integration"]
}, {
  icon: <BarChart3 className="w-8 h-8 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />,
  title: "Data Pipeline Solutions",
  problem: "Manual data processing bottlenecks",
  solution: "Automated data workflows",
  outcome: "Real-time insights & efficiency",
  features: ["Automated data processing", "Real-time data streams", "Data validation & monitoring", "Scalable infrastructure"]
}];
const trustIndicators = [{
  icon: <Lock className="w-5 h-5 text-green-400" />,
  label: "SOC 2 Compliant"
}, {
  icon: <Shield className="w-5 h-5 text-green-400" />,
  label: "GDPR Ready"
}, {
  icon: <Award className="w-5 h-5 text-green-400" />,
  label: "ISO 27001"
}, {
  icon: <CheckCircle className="w-5 h-5 text-green-400" />,
  label: "HIPAA Compatible"
}];
const industries = [{
  name: "Healthcare",
  description: "AI-powered diagnostics, synthetic medical data, and patient care solutions with privacy compliance",
  icon: <Heart className="w-8 h-8 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />
}, {
  name: "Finance",
  description: "Fraud detection, algorithmic trading, and compliant synthetic financial datasets for risk modeling",
  icon: <DollarSign className="w-8 h-8 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
}, {
  name: "Manufacturing",
  description: "Predictive maintenance, quality control, and production data optimization with synthetic datasets",
  icon: <Factory className="w-8 h-8 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12" />
}, {
  name: "Retail",
  description: "Personalized recommendations, inventory optimization, and customer behavior analytics with privacy protection",
  icon: <ShoppingCart className="w-8 h-8 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce" />
}, {
  name: "Education",
  description: "Adaptive learning platforms and student performance analytics with privacy-preserving synthetic data",
  icon: <GraduationCap className="w-8 h-8 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
}, {
  name: "Technology",
  description: "Enhanced software development, testing automation, and synthetic test data generation for DevOps",
  icon: <Monitor className="w-8 h-8 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />
}];
const Solutions = () => {
  const {
    elementRef: categoriesRef,
    isVisible: categoriesVisible
  } = useScrollAnimation(0.3);
  const {
    elementRef: dataRef,
    isVisible: dataVisible
  } = useScrollAnimation(0.3);
  const {
    elementRef: trustRef,
    isVisible: trustVisible
  } = useScrollAnimation(0.3);
  const {
    elementRef: industriesRef,
    isVisible: industriesVisible
  } = useScrollAnimation(0.3);
  const {
    elementRef: ctaRef,
    isVisible: ctaVisible
  } = useScrollAnimation(0.3);
  const handleComingSoon = (featureName: string) => {
    showComingSoonToast(featureName);
  };
  return <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <Hero backgroundImage={solutionsHeroImage} title="AI Solutions That Transform" subtitle="Comprehensive artificial intelligence solutions designed to accelerate your business growth and operational efficiency." primaryButtonText="Get Started" secondaryButtonText="View Case Studies" height="pt-24 pb-20" onPrimaryClick={() => handleComingSoon("Get Started Form")} onSecondaryClick={() => handleComingSoon("Case Studies")} />

      {/* Main Solution Categories */}
      <section ref={categoriesRef} className="py-12 pb-8 bg-primary">
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

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 ${categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {mainSolutionCategories.map((solution, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-primary/80 border-gray-700 hover:border-secondary/50" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-transparent">
                      {solution.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{solution.title}</CardTitle>
                      <Badge variant="outline" className="border-secondary text-cyan-400 mt-1">
                        {solution.subtitle}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                    asChild
                  >
                    {solution.title === "AI Strategy & Consulting" ? (
                      <Link to="/solutions/ai-strategy-consulting">Learn More</Link>
                    ) : solution.title === "AI Data Solutions" ? (
                      <Link to="/solutions/ai-data-solutions">Learn More</Link>
                    ) : solution.title === "Custom AI Development" ? (
                      <Link to="/solutions/custom-ai-development">Learn More</Link>
                    ) : solution.title === "AI Integration & Support" ? (
                      <Link to="/solutions/ai-integration-support">Learn More</Link>
                    ) : (
                      <span onClick={() => handleComingSoon(solution.title)}>Learn More</span>
                    )}
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* AI Data Solutions Breakdown */}
      <section ref={dataRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Data Solutions Breakdown
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Specialized data solutions that transform raw information into powerful AI assets, 
              from synthetic data generation to domain-specific curation.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${dataVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {dataSubSolutions.map((solution, index) => <Card key={index} className="group hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 bg-primary/80 border-gray-700 hover:border-secondary/50 hover:scale-105 hover:-translate-y-2 relative overflow-hidden" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="mb-4 p-4 bg-secondary/10 rounded-xl w-fit mx-auto group-hover:bg-secondary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/30">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-lg text-white mb-3 text-center group-hover:text-accent transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  {/* Problem → Solution → Outcome Flow */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded group-hover:bg-red-500/30 transition-colors duration-300">PROBLEM</span>
                      <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{solution.problem}</span>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    
                    <div className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300" style={{
                  transitionDelay: '50ms'
                }}>
                      <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded group-hover:bg-yellow-500/30 transition-colors duration-300">SOLUTION</span>
                      <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{solution.solution}</span>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform duration-300" style={{
                    transitionDelay: '100ms'
                  }} />
                    </div>
                    
                    <div className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300" style={{
                  transitionDelay: '100ms'
                }}>
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded group-hover:bg-green-500/30 transition-colors duration-300">OUTCOME</span>
                      <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{solution.outcome}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4 group-hover:border-gray-600 transition-colors duration-300">
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2 text-gray-300 group-hover:text-gray-200 transition-all duration-300 group-hover:translate-x-1" style={{
                    transitionDelay: `${featureIndex * 50}ms`
                  }}>
                          <CheckCircle className="w-3 h-3 text-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-xs">{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section ref={trustRef} className="py-12 bg-primary">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-white text-center mb-8">
              Trusted & Compliant Data Solutions
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {trustIndicators.map((indicator, index) => <div key={index} className="flex items-center gap-2 bg-primary/80 border border-gray-700 px-4 py-2 rounded-lg" style={{
              transitionDelay: `${index * 100}ms`
            }}>
                  {indicator.icon}
                  <span className="text-sm text-gray-300">{indicator.label}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section ref={industriesRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
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

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {industries.map((industry, index) => <Card key={index} className="group text-center hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 bg-primary/80 border-gray-700 hover:border-secondary/50 hover:scale-105 hover:-translate-y-2 relative overflow-hidden" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="mb-4 p-4 bg-secondary/10 rounded-xl w-fit mx-auto group-hover:bg-secondary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/30">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-accent transition-colors duration-300">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 group-hover:translate-x-1">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our AI solutions can address your specific challenges 
              and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg flex items-center gap-2" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-primary border-accent text-accent hover:bg-accent/20 px-8 py-4 text-lg" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Solutions;
