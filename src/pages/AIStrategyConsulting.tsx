import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  PieChart,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Award,
  Building,
  MessageSquare,
  FileText,
  Settings,
  Globe,
  Rocket
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import solutionsHeroImage from "@/assets/solutions-hero.jpg";

const AIStrategyConsulting = () => {
  const navigate = useNavigate();
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.3);
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation(0.3);
  const { elementRef: metricsRef, isVisible: metricsVisible } = useScrollAnimation(0.3);
  const { elementRef: roiRef, isVisible: roiVisible } = useScrollAnimation(0.3);
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);

  const strategicServices = [
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "AI Readiness Assessment",
      description: "Comprehensive evaluation of your organization's AI capabilities, data infrastructure, and change readiness.",
      features: ["Technology Stack Audit", "Data Quality Assessment", "Team Capability Review", "ROI Potential Analysis"],
      timeline: "2-4 weeks",
      deliverable: "Strategic Roadmap & Priority Matrix"
    },
    {
      icon: <Brain className="w-8 h-8 text-secondary" />,
      title: "Custom AI Strategy Design",
      description: "Tailored AI implementation roadmap aligned with your business objectives and industry requirements.",
      features: ["Use Case Prioritization", "Technology Selection", "Implementation Timeline", "Risk Mitigation Plan"],
      timeline: "3-6 weeks",
      deliverable: "AI Strategy Blueprint & Implementation Plan"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "ROI Optimization Framework",
      description: "Data-driven approach to maximize return on AI investments with clear KPIs and success metrics.",
      features: ["Cost-Benefit Analysis", "Success Metrics Definition", "Performance Tracking", "Continuous Optimization"],
      timeline: "2-3 weeks",
      deliverable: "ROI Framework & Measurement Dashboard"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Change Management & Training",
      description: "Organizational transformation support to ensure successful AI adoption across all teams.",
      features: ["Stakeholder Alignment", "Training Programs", "Change Communication", "Adoption Monitoring"],
      timeline: "4-8 weeks",
      deliverable: "Change Management Plan & Training Materials"
    }
  ];

  const consultingProcess = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Deep dive into your business objectives, current capabilities, and AI opportunities",
      icon: <MessageSquare className="w-6 h-6 text-secondary" />,
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom AI roadmap creation with prioritized use cases and implementation timeline",
      icon: <Lightbulb className="w-6 h-6 text-secondary" />,
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Detailed project plans, resource allocation, and risk mitigation strategies",
      icon: <Settings className="w-6 h-6 text-secondary" />,
      duration: "1-2 weeks"
    },
    {
      step: "04",
      title: "Execution Support",
      description: "Ongoing guidance, monitoring, and optimization throughout implementation",
      icon: <Rocket className="w-6 h-6 text-secondary" />,
      duration: "Ongoing"
    }
  ];

  const successMetrics = [
    { label: "Average ROI Increase", value: 285, unit: "%" },
    { label: "Implementation Success Rate", value: 94, unit: "%" },
    { label: "Time to Value Reduction", value: 65, unit: "%" },
    { label: "Client Satisfaction", value: 98, unit: "%" }
  ];

  const industryExpertise = [
    { 
      name: "Healthcare", 
      projects: 15, 
      avgROI: "320%",
      icon: <Building className="w-5 h-5 text-secondary" />
    },
    { 
      name: "Financial Services", 
      projects: 22, 
      avgROI: "280%",
      icon: <DollarSign className="w-5 h-5 text-secondary" />
    },
    { 
      name: "Manufacturing", 
      projects: 18, 
      avgROI: "245%",
      icon: <Settings className="w-5 h-5 text-secondary" />
    },
    { 
      name: "Retail & E-commerce", 
      projects: 12, 
      avgROI: "195%",
      icon: <Globe className="w-5 h-5 text-secondary" />
    }
  ];

  const roiBreakdown = [
    {
      category: "Operational Efficiency",
      improvement: 85,
      description: "Process automation and optimization",
      icon: <Zap className="w-5 h-5 text-yellow-400" />
    },
    {
      category: "Decision Making",
      improvement: 72,
      description: "Data-driven insights and predictive analytics",
      icon: <BarChart3 className="w-5 h-5 text-blue-400" />
    },
    {
      category: "Customer Experience",
      improvement: 68,
      description: "Personalization and service quality",
      icon: <Award className="w-5 h-5 text-green-400" />
    },
    {
      category: "Risk Reduction",
      improvement: 91,
      description: "Compliance and security improvements",
      icon: <Shield className="w-5 h-5 text-red-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative">
        <Hero
          backgroundImage={solutionsHeroImage}
          title={
            <span>
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                AI Strategy
              </span>
              <span className="text-white"> & Consulting</span>
            </span>
          }
          subtitle="Transform your business with strategic AI implementation. Our expert consultants design custom roadmaps that drive measurable results and sustainable competitive advantage."
          primaryButtonText="Start Your AI Journey"
          secondaryButtonText="View Case Studies"
          height="pt-24 pb-20"
          onPrimaryClick={() => navigate('/contact')}
          onSecondaryClick={() => navigate('/projects')}
        />
      </section>


      {/* Strategic Services */}
      <section ref={servicesRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive AI Strategy Services
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                End-to-end consulting services designed to accelerate your AI transformation 
                and ensure sustainable competitive advantage in your industry.
              </p>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {strategicServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 bg-primary/80 border-gray-700 hover:border-secondary/50 hover:scale-105"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-all duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-white mb-2 group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <div className="flex gap-2 mb-3">
                          <Badge variant="outline" className="border-secondary text-cyan-400">
                            <Clock className="w-3 h-3 mr-1" />
                            {service.timeline}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                              <ArrowRight className="w-3 h-3 text-secondary mt-1 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-t border-gray-700 pt-4">
                        <div className="flex items-center gap-2 text-accent">
                          <FileText className="w-4 h-4" />
                          <span className="text-sm font-medium">Deliverable: {service.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section ref={processRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Proven Consulting Process
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                A systematic approach to AI strategy development that ensures alignment with 
                your business objectives and sustainable implementation success.
              </p>
            </div>

            <div className={`transition-all duration-1000 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {consultingProcess.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connection Line */}
                    {index < consultingProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-secondary to-transparent -translate-y-1/2 z-0" />
                    )}
                    
                    <Card className="relative z-10 text-center bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:scale-105 group">
                      <CardContent className="p-6">
                        <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-all duration-300">
                          <span className="text-2xl font-bold text-secondary">{step.step}</span>
                        </div>
                        
                        <div className="mb-3 p-2 bg-secondary/10 rounded-lg w-fit mx-auto group-hover:bg-secondary/20 transition-all duration-300">
                          {step.icon}
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <Badge variant="outline" className="border-secondary text-cyan-400 text-xs">
                          {step.duration}
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Impact Breakdown */}
      <section ref={roiRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Measurable Business Impact
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our AI strategies deliver quantifiable improvements across key business areas
              </p>
            </div>

            <div className={`transition-all duration-1000 ${roiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {roiBreakdown.map((item, index) => (
                  <Card 
                    key={index} 
                    className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <h3 className="text-white font-semibold">{item.category}</h3>
                        </div>
                        <div className="text-2xl font-bold text-secondary">
                          {item.improvement}%
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Improvement</span>
                          <span className="text-accent font-medium">{item.improvement}%</span>
                        </div>
                        <Progress value={item.improvement} className="h-3" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="mt-12 bg-gradient-to-r from-secondary/10 via-primary/60 to-accent/10 rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">$2.4M</div>
                    <div className="text-gray-300">Average Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">6 Months</div>
                    <div className="text-gray-300">Average Payback Period</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">285%</div>
                    <div className="text-gray-300">Average 3-Year ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Dashboard */}
      <section ref={metricsRef} className="py-16 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Results Across Industries
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our strategic AI consulting delivers measurable outcomes that drive business transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {successMetrics.map((metric, index) => (
                <Card 
                  key={index} 
                  className="text-center bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">
                      {metric.value}{metric.unit}
                    </div>
                    <div className="text-gray-300 text-sm font-medium">
                      {metric.label}
                    </div>
                    <div className="mt-3">
                      <Progress value={metric.value > 100 ? 100 : metric.value} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Industry Expertise Chart */}
            <div className="bg-primary/60 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Industry Expertise & Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industryExpertise.map((industry, index) => (
                  <div 
                    key={index} 
                    className="bg-primary/80 rounded-lg p-6 border border-gray-600 hover:border-secondary/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {industry.icon}
                      <h4 className="text-white font-semibold">{industry.name}</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Projects:</span>
                        <span className="text-accent font-medium">{industry.projects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Avg ROI:</span>
                        <span className="text-secondary font-bold">{industry.avgROI}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              
              <div className="relative z-10 bg-primary/60 rounded-2xl p-12 border border-gray-700">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Schedule a consultation with our AI strategy experts and discover how 
                  we can accelerate your digital transformation journey.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary text-white font-bold px-8 py-3 rounded-lg shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 hover:scale-105 transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('/projects')}
                    className="border-accent text-accent hover:bg-accent/10 font-bold px-8 py-3"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    View Case Studies
                  </Button>
                </div>
                
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Free Initial Consultation
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    No Obligation Assessment
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Custom Strategy Roadmap
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIStrategyConsulting;