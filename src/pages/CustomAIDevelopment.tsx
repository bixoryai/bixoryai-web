import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Brain, Code, Eye, TrendingUp, ArrowRight, CheckCircle, Layers, Zap, 
  Cpu, Database, Network, MessageSquare, Camera, BarChart3, Users, 
  Clock, Award, Shield, Target, Workflow, Lightbulb, Settings
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { showComingSoonToast } from "@/utils/comingSoon";
import aiDevelopmentHeroImage from "@/assets/ai-development-hero.jpg";

const developmentServices = [
  {
    icon: <Brain className="w-8 h-8 text-secondary" />,
    title: "Machine Learning Models",
    description: "Custom ML algorithms designed for your specific use cases and data patterns.",
    features: [
      "Supervised & Unsupervised Learning",
      "Deep Learning Architectures",
      "Model Optimization & Tuning",
      "Cross-validation & Testing"
    ],
    complexity: "Advanced",
    timeframe: "8-16 weeks"
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-secondary" />,
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for text analysis, understanding, and generation.",
    features: [
      "Text Classification & Sentiment Analysis",
      "Named Entity Recognition",
      "Language Translation",
      "Conversational AI & Chatbots"
    ],
    complexity: "Expert",
    timeframe: "10-20 weeks"
  },
  {
    icon: <Eye className="w-8 h-8 text-secondary" />,
    title: "Computer Vision",
    description: "Intelligent visual recognition and analysis systems for various applications.",
    features: [
      "Object Detection & Recognition",
      "Image Classification",
      "Facial Recognition Systems",
      "Medical Image Analysis"
    ],
    complexity: "Advanced",
    timeframe: "12-24 weeks"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-secondary" />,
    title: "Predictive Analytics",
    description: "Data-driven forecasting models to predict trends and optimize decision-making.",
    features: [
      "Time Series Forecasting",
      "Risk Assessment Models",
      "Customer Behavior Prediction",
      "Market Trend Analysis"
    ],
    complexity: "Intermediate",
    timeframe: "6-12 weeks"
  }
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "Deep dive into your business requirements, data landscape, and technical constraints.",
    deliverables: ["Requirements Document", "Technical Feasibility Study", "Data Assessment Report"],
    duration: "2-4 weeks"
  },
  {
    step: "02", 
    title: "Architecture & Design",
    description: "Design scalable AI architecture and create detailed implementation roadmap.",
    deliverables: ["System Architecture", "API Specifications", "Development Timeline"],
    duration: "1-2 weeks"
  },
  {
    step: "03",
    title: "Development & Training",
    description: "Build, train, and optimize your custom AI models with rigorous testing.",
    deliverables: ["Trained Models", "Performance Metrics", "Testing Reports"],
    duration: "6-16 weeks"
  },
  {
    step: "04",
    title: "Integration & Deployment",
    description: "Seamlessly integrate AI solutions into your existing systems and workflows.",
    deliverables: ["Deployed Solution", "Integration Documentation", "User Training"],
    duration: "2-4 weeks"
  },
  {
    step: "05",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring, performance optimization, and model improvements.",
    deliverables: ["Monitoring Dashboard", "Performance Reports", "Optimization Recommendations"],
    duration: "Ongoing"
  }
];

const technicalStack = [
  {
    category: "Machine Learning Frameworks",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras"],
    icon: <Cpu className="w-6 h-6 text-secondary" />
  },
  {
    category: "Programming Languages",
    technologies: ["Python", "R", "Julia", "Scala", "Java"],
    icon: <Code className="w-6 h-6 text-secondary" />
  },
  {
    category: "Cloud Platforms",
    technologies: ["AWS", "Google Cloud", "Azure", "Databricks", "Snowflake"],
    icon: <Database className="w-6 h-6 text-secondary" />
  },
  {
    category: "MLOps & Deployment",
    technologies: ["Docker", "Kubernetes", "MLflow", "Kubeflow", "Apache Airflow"],
    icon: <Network className="w-6 h-6 text-secondary" />
  }
];

const caseStudies = [
  {
    industry: "Healthcare",
    title: "Medical Image Analysis System",
    challenge: "Automate radiology diagnosis with 95%+ accuracy",
    solution: "Custom CNN model for X-ray and MRI analysis",
    results: ["98.5% diagnostic accuracy", "75% faster analysis", "30% cost reduction"],
    icon: <Camera className="w-8 h-8 text-secondary" />
  },
  {
    industry: "Finance",
    title: "Fraud Detection Platform",
    challenge: "Real-time fraud detection with minimal false positives",
    solution: "Ensemble ML model with anomaly detection",
    results: ["99.2% fraud detection rate", "85% reduction in false positives", "$2M+ savings"],
    icon: <Shield className="w-8 h-8 text-secondary" />
  },
  {
    industry: "Retail",
    title: "Demand Forecasting System",
    challenge: "Optimize inventory management across 500+ stores",
    solution: "Multi-variate time series forecasting model",
    results: ["92% forecast accuracy", "25% inventory reduction", "15% revenue increase"],
    icon: <BarChart3 className="w-8 h-8 text-secondary" />
  }
];

const whyChooseUs = [
  {
    icon: <Award className="w-6 h-6 text-secondary" />,
    title: "Proven Expertise",
    description: "10+ years of AI development experience with 200+ successful deployments"
  },
  {
    icon: <Target className="w-6 h-6 text-secondary" />,
    title: "Business-Focused",
    description: "Solutions designed to deliver measurable ROI and competitive advantage"
  },
  {
    icon: <Users className="w-6 h-6 text-secondary" />,
    title: "End-to-End Support",
    description: "From concept to deployment with ongoing maintenance and optimization"
  },
  {
    icon: <Zap className="w-6 h-6 text-secondary" />,
    title: "Rapid Deployment",
    description: "Agile development methodology for faster time-to-market"
  }
];

const CustomAIDevelopment = () => {
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.3);
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation(0.3);
  const { elementRef: stackRef, isVisible: stackVisible } = useScrollAnimation(0.3);
  const { elementRef: casesRef, isVisible: casesVisible } = useScrollAnimation(0.3);
  const { elementRef: whyRef, isVisible: whyVisible } = useScrollAnimation(0.3);
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);

  const handleComingSoon = (featureName: string) => {
    showComingSoonToast(featureName);
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        backgroundImage={aiDevelopmentHeroImage}
        title="Custom AI Development Services"
        subtitle="Bespoke artificial intelligence solutions designed and built specifically for your unique business challenges and workflows."
        primaryButtonText="Start Your Project"
        secondaryButtonText="View Case Studies"
        height="pt-24 pb-20"
        onPrimaryClick={() => handleComingSoon("Project Consultation")}
        onSecondaryClick={() => handleComingSoon("Case Studies")}
      />

      {/* Development Services */}
      <section ref={servicesRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Development Services
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              From machine learning models to computer vision systems, we develop 
              cutting-edge AI solutions tailored to your specific requirements.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {developmentServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 bg-primary/80 border-gray-700 hover:border-secondary/50 hover:scale-105" style={{
                transitionDelay: `${index * 100}ms`
              }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-secondary text-cyan-400 mb-1">
                        {service.complexity}
                      </Badge>
                      <div className="text-xs text-gray-400">{service.timeframe}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-gray-300 group-hover:text-gray-200 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section ref={processRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              A proven methodology that ensures successful AI implementation 
              from conception to deployment and beyond.
            </p>
          </div>

          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {developmentProcess.map((phase, index) => (
              <div key={index} className="relative mb-12 last:mb-0" style={{
                transitionDelay: `${index * 100}ms`
              }}>
                {/* Connection Line */}
                {index < developmentProcess.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-secondary to-accent"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-secondary/30">
                      {phase.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <CardTitle className="text-xl text-white">{phase.title}</CardTitle>
                        <Badge variant="outline" className="border-cyan-400 text-cyan-400 w-fit">
                          {phase.duration}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-300 leading-relaxed">
                        {phase.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-secondary mb-2">Key Deliverables:</h4>
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center gap-2 text-gray-300">
                            <ArrowRight className="w-3 h-3 text-secondary" />
                            <span className="text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section ref={stackRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Technical Stack
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We leverage cutting-edge technologies and frameworks to build 
              robust, scalable, and performant AI solutions.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
            stackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {technicalStack.map((stack, index) => (
              <Card key={index} className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg" style={{
                transitionDelay: `${index * 100}ms`
              }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {stack.icon}
                    <CardTitle className="text-lg text-white">{stack.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-secondary/20 text-gray-300 hover:bg-secondary/30 transition-colors duration-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Real-world implementations that demonstrate the transformative 
              power of custom AI development across various industries.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            casesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 bg-primary/80 border-gray-700 hover:border-secondary/50 hover:scale-105 hover:-translate-y-2 relative overflow-hidden" style={{
                transitionDelay: `${index * 100}ms`
              }}>
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <Badge variant="outline" className="border-cyan-400 text-cyan-400 w-fit mb-3">
                    {study.industry}
                  </Badge>
                  <div className="mb-4 p-4 bg-secondary/10 rounded-xl w-fit group-hover:bg-secondary/20 transition-all duration-300">
                    {study.icon}
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-accent transition-colors duration-300">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-2">Solution:</h4>
                    <p className="text-sm text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">BIXORY AI</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Partner with us for custom AI development that delivers real business value 
              and competitive advantage through proven expertise and methodologies.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
            whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg" style={{
                transitionDelay: `${index * 100}ms`
              }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {reason.icon}
                    <CardTitle className="text-lg text-white">{reason.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {reason.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Custom AI Solution?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Let's discuss your project requirements and create a tailored development 
              plan that aligns with your business objectives and technical constraints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full"
                onClick={() => handleComingSoon("Project Consultation")}
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-full"
                onClick={() => handleComingSoon("Technical Documentation")}
              >
                <Settings className="w-5 h-5 mr-2" />
                View Technical Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomAIDevelopment;