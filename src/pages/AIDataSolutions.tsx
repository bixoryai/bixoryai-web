import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Database, 
  Layers, 
  FileText, 
  BarChart3, 
  Shield,
  CheckCircle, 
  ArrowRight,
  PieChart,
  Zap,
  Lock,
  Clock,
  TrendingUp,
  Users,
  Globe,
  Building,
  Brain,
  Target,
  Award,
  Workflow,
  Settings
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import solutionsHeroImage from "@/assets/solutions-hero.jpg";

const AIDataSolutions = () => {
  const navigate = useNavigate();
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.3);
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation(0.3);
  const { elementRef: metricsRef, isVisible: metricsVisible } = useScrollAnimation(0.3);
  const { elementRef: industriesRef, isVisible: industriesVisible } = useScrollAnimation(0.3);
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);

  const dataServices = [
    {
      icon: <Layers className="w-8 h-8 text-secondary" />,
      title: "Synthetic Data Generation",
      description: "Create privacy-preserving synthetic datasets that maintain statistical properties while protecting sensitive information.",
      features: ["Privacy-compliant data creation", "Statistical accuracy preservation", "Bias reduction techniques", "Scalable generation pipelines"],
      use_cases: ["Training ML models", "Testing applications", "Data augmentation", "Compliance scenarios"],
      timeline: "2-4 weeks",
      deliverable: "Production-ready synthetic datasets"
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Domain Data Curation",
      description: "Expert preparation and annotation of industry-specific datasets with domain knowledge integration.",
      features: ["Expert data annotation", "Quality assurance processes", "Domain-specific preprocessing", "Custom labeling workflows"],
      use_cases: ["Medical imaging", "Legal documents", "Financial records", "Industrial processes"],
      timeline: "3-6 weeks",
      deliverable: "Curated domain datasets & documentation"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
      title: "Data Pipeline Solutions",
      description: "Automated data processing workflows that transform raw data into AI-ready formats at scale.",
      features: ["Real-time data processing", "Automated quality checks", "Scalable infrastructure", "Monitoring & alerting"],
      use_cases: ["Stream processing", "Batch operations", "Data validation", "ETL workflows"],
      timeline: "4-8 weeks",
      deliverable: "Automated data pipelines & monitoring"
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Privacy-Preserving Analytics",
      description: "Advanced techniques to analyze sensitive data while maintaining privacy and regulatory compliance.",
      features: ["Differential privacy", "Federated learning", "Homomorphic encryption", "Secure multi-party computation"],
      use_cases: ["Healthcare analytics", "Financial modeling", "Cross-organization insights", "Regulatory compliance"],
      timeline: "6-10 weeks",
      deliverable: "Privacy-preserving analytics platform"
    }
  ];

  const dataProcess = [
    {
      step: "01",
      title: "Data Assessment & Planning",
      description: "Comprehensive evaluation of your data landscape, quality, and AI readiness",
      icon: <Target className="w-6 h-6 text-secondary" />,
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Custom data solution architecture tailored to your specific requirements",
      icon: <Building className="w-6 h-6 text-secondary" />,
      duration: "1-2 weeks"
    },
    {
      step: "03",
      title: "Implementation & Testing",
      description: "Build and deploy data solutions with rigorous testing and validation",
      icon: <Settings className="w-6 h-6 text-secondary" />,
      duration: "3-6 weeks"
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and ongoing support for peak performance",
      icon: <TrendingUp className="w-6 h-6 text-secondary" />,
      duration: "Ongoing"
    }
  ];

  const successMetrics = [
    { label: "Data Quality Improvement", value: 95, unit: "%" },
    { label: "Processing Speed Increase", value: 340, unit: "%" },
    { label: "Privacy Compliance Rate", value: 100, unit: "%" },
    { label: "Cost Reduction", value: 60, unit: "%" }
  ];

  const industryExpertise = [
    { 
      name: "Healthcare", 
      projects: 28, 
      dataVolume: "500TB+",
      compliance: "HIPAA, FDA",
      icon: <Building className="w-5 h-5 text-secondary" />
    },
    { 
      name: "Finance", 
      projects: 35, 
      dataVolume: "2.1PB+",
      compliance: "PCI DSS, GDPR",
      icon: <BarChart3 className="w-5 h-5 text-secondary" />
    },
    { 
      name: "Manufacturing", 
      projects: 22, 
      dataVolume: "150TB+",
      compliance: "ISO 27001",
      icon: <Settings className="w-5 h-5 text-secondary" />
    },
    { 
      name: "Technology", 
      projects: 31, 
      dataVolume: "800TB+",
      compliance: "SOC 2, GDPR",
      icon: <Globe className="w-5 h-5 text-secondary" />
    }
  ];

  const dataCapabilities = [
    {
      capability: "Data Quality Enhancement",
      improvement: 92,
      description: "Automated cleaning, validation, and standardization",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      capability: "Privacy Protection",
      improvement: 98,
      description: "Advanced anonymization and synthetic data techniques",
      icon: <Lock className="w-5 h-5 text-blue-400" />
    },
    {
      capability: "Processing Efficiency",
      improvement: 85,
      description: "Optimized pipelines and real-time processing",
      icon: <Zap className="w-5 h-5 text-yellow-400" />
    },
    {
      capability: "Scalability",
      improvement: 89,
      description: "Cloud-native solutions for unlimited growth",
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />
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
                AI Data
              </span>
              <span className="text-white"> Solutions</span>
            </span>
          }
          subtitle="Transform raw data into powerful AI assets with our comprehensive data solutions. From synthetic data generation to privacy-preserving analytics, we make your data AI-ready."
          primaryButtonText="Start Your Data Journey"
          secondaryButtonText="View Case Studies"
          height="pt-24 pb-20"
          onPrimaryClick={() => navigate('/contact')}
          onSecondaryClick={() => navigate('/projects')}
        />
      </section>

      {/* Core Data Services */}
      <section ref={servicesRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Data Solutions Portfolio
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                End-to-end data services that transform your information assets into competitive 
                advantages while ensuring privacy, compliance, and scalability.
              </p>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {dataServices.map((service, index) => (
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
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                              <ArrowRight className="w-3 h-3 text-secondary mt-1 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                          <Brain className="w-4 h-4 text-accent" />
                          Common Use Cases
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.use_cases.map((useCase, useCaseIndex) => (
                            <Badge key={useCaseIndex} variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-xs">
                              {useCase}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-700 pt-4">
                        <div className="flex items-center gap-2 text-accent">
                          <Award className="w-4 h-4" />
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

      {/* Data Processing Workflow */}
      <section ref={processRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Data Solutions Process
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                A systematic approach to data transformation that ensures quality, 
                compliance, and optimal AI readiness for your specific use cases.
              </p>
            </div>

            <div className={`transition-all duration-1000 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dataProcess.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connection Line */}
                    {index < dataProcess.length - 1 && (
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

      {/* Data Capabilities Impact */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Data Transformation Impact
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our data solutions deliver measurable improvements across critical data management areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {dataCapabilities.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <h3 className="text-white font-semibold">{item.capability}</h3>
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

            {/* Data Volume Stats */}
            <div className="bg-gradient-to-r from-secondary/10 via-primary/60 to-accent/10 rounded-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">3.5PB+</div>
                  <div className="text-gray-300">Data Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">116</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-gray-300">Monitoring & Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Dashboard */}
      <section ref={metricsRef} className="py-16 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Data Solutions Performance
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our data solutions consistently deliver exceptional results across quality, speed, and compliance metrics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {successMetrics.map((metric, index) => (
                <Card 
                  key={index} 
                  className="text-center bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:scale-105 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-secondary mb-2 group-hover:text-accent transition-colors duration-300">
                      {metric.value}{metric.unit}
                    </div>
                    <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {metric.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Industry Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryExpertise.map((industry, index) => (
                <Card 
                  key={index} 
                  className="bg-primary/60 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:scale-105 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-3 p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-all duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-300">
                      <div>{industry.projects} Projects</div>
                      <div>{industry.dataVolume} Processed</div>
                      <div className="text-xs text-accent">{industry.compliance}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data Assets?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Let our data experts help you unlock the full potential of your information assets 
              with privacy-preserving, scalable, and AI-ready data solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full"
              >
                Start Your Data Project
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/projects')}
                className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-full"
              >
                View Data Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDataSolutions;