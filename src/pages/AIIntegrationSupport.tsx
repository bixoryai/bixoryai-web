import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Monitor, 
  CheckCircle, 
  ArrowRight, 
  Settings,
  Activity,
  Clock,
  Users,
  Zap,
  RefreshCw,
  Smartphone,
  Cloud,
  Database,
  Code,
  AlertTriangle,
  TrendingUp,
  Globe,
  Lock,
  Headphones,
  PlayCircle,
  BarChart3,
  Gauge
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Progress } from "@/components/ui/progress";

const heroStats = [
  { label: "Average Integration Time", value: "2-4 weeks", icon: <Clock className="w-5 h-5 text-secondary" /> },
  { label: "System Uptime", value: "99.9%", icon: <Monitor className="w-5 h-5 text-secondary" /> },
  { label: "Support Response", value: "< 1 hour", icon: <Headphones className="w-5 h-5 text-secondary" /> },
  { label: "Client Satisfaction", value: "98%", icon: <CheckCircle className="w-5 h-5 text-secondary" /> }
];

const integrationServices = [
  {
    icon: <Settings className="w-8 h-8 text-secondary" />,
    title: "System Integration",
    description: "Seamless integration with your existing infrastructure and workflows",
    details: [
      "API development and management",
      "Legacy system connectivity",
      "Database synchronization",
      "Workflow automation setup"
    ],
    timeline: "2-4 weeks"
  },
  {
    icon: <Monitor className="w-8 h-8 text-secondary" />,
    title: "Performance Monitoring",
    description: "Real-time monitoring and optimization of your AI systems",
    details: [
      "24/7 system health monitoring",
      "Performance analytics dashboard",
      "Automated alert systems",
      "Resource utilization tracking"
    ],
    timeline: "Ongoing"
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-secondary" />,
    title: "Continuous Optimization",
    description: "Ongoing improvements to maximize AI system performance",
    details: [
      "Model performance tuning",
      "Infrastructure scaling",
      "Cost optimization",
      "Feature enhancement"
    ],
    timeline: "Monthly reviews"
  },
  {
    icon: <Headphones className="w-8 h-8 text-secondary" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support from AI experts",
    details: [
      "Emergency response team",
      "Technical troubleshooting",
      "System maintenance",
      "User training and guidance"
    ],
    timeline: "Always available"
  }
];

const integrationProcess = [
  {
    step: "01",
    title: "Assessment & Planning",
    description: "Comprehensive analysis of your current infrastructure and integration requirements",
    icon: <Activity className="w-6 h-6 text-secondary" />,
    tasks: ["Infrastructure audit", "Requirements gathering", "Integration roadmap", "Risk assessment"]
  },
  {
    step: "02", 
    title: "Development & Testing",
    description: "Custom integration development with rigorous testing protocols",
    icon: <Code className="w-6 h-6 text-secondary" />,
    tasks: ["API development", "Integration coding", "Security implementation", "Comprehensive testing"]
  },
  {
    step: "03",
    title: "Deployment & Go-Live",
    description: "Careful deployment with minimal disruption to your operations",
    icon: <PlayCircle className="w-6 h-6 text-secondary" />,
    tasks: ["Staged rollout", "User training", "Go-live support", "Performance validation"]
  },
  {
    step: "04",
    title: "Monitor & Optimize",
    description: "Ongoing monitoring and continuous optimization for peak performance",
    icon: <TrendingUp className="w-6 h-6 text-secondary" />,
    tasks: ["Performance monitoring", "Usage analytics", "Optimization recommendations", "Regular updates"]
  }
];

const supportLevels = [
  {
    tier: "Essential",
    price: "Starting at $2,500/month",
    description: "Core integration and basic support services",
    features: [
      "Business hours support (9AM-6PM)",
      "Monthly performance reports",
      "Basic monitoring dashboard",
      "Email and phone support",
      "Quarterly optimization reviews"
    ],
    popular: false
  },
  {
    tier: "Professional", 
    price: "Starting at $5,000/month",
    description: "Enhanced support with proactive monitoring",
    features: [
      "24/7 priority support",
      "Real-time monitoring dashboard",
      "Automated alert system",
      "Monthly optimization sessions",
      "Dedicated support manager"
    ],
    popular: true
  },
  {
    tier: "Enterprise",
    price: "Custom pricing",
    description: "Complete integration and premium support package",
    features: [
      "24/7 dedicated support team",
      "Custom monitoring solutions",
      "On-site integration support",
      "Weekly performance reviews",
      "Direct engineering access"
    ],
    popular: false
  }
];

const integrationPlatforms = [
  { name: "AWS", logo: <Cloud className="w-8 h-8 text-secondary" /> },
  { name: "Azure", logo: <Globe className="w-8 h-8 text-secondary" /> },
  { name: "Google Cloud", logo: <Database className="w-8 h-8 text-secondary" /> },
  { name: "Salesforce", logo: <Users className="w-8 h-8 text-secondary" /> },
  { name: "SAP", logo: <BarChart3 className="w-8 h-8 text-secondary" /> },
  { name: "ServiceNow", logo: <Settings className="w-8 h-8 text-secondary" /> }
];

const performanceMetrics = [
  { metric: "Integration Success Rate", value: 95, color: "bg-green-500" },
  { metric: "Average Response Time", value: 88, color: "bg-blue-500" },
  { metric: "System Reliability", value: 99, color: "bg-secondary" },
  { metric: "Client Satisfaction", value: 94, color: "bg-accent" }
];

const AIIntegrationSupport = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.3);
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation(0.3);
  const { elementRef: supportRef, isVisible: supportVisible } = useScrollAnimation(0.3);
  const { elementRef: platformsRef, isVisible: platformsVisible } = useScrollAnimation(0.3);
  const { elementRef: metricsRef, isVisible: metricsVisible } = useScrollAnimation(0.3);

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-20 bg-gradient-to-br from-primary via-primary to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-secondary/10 border border-secondary/20 rounded-full px-6 py-3 mb-6">
                <Shield className="w-6 h-6 text-secondary" />
                <span className="text-secondary font-semibold">AI Integration & Support</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Seamless AI Integration & 
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse"> 24/7 Support</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Expert integration services that connect AI solutions to your existing infrastructure, 
              with ongoing support and optimization to ensure peak performance and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg rounded-full"
              >
                Start Integration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-accent hover:bg-white/10 px-8 py-4 text-lg rounded-full"
              >
                Schedule Consultation
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {heroStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Services */}
      <section ref={servicesRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Integration Services
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              End-to-end integration services designed to seamlessly connect AI solutions 
              with your existing systems and workflows.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {integrationServices.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 bg-primary/80 border-gray-700 hover:border-secondary/50 hover:scale-105 relative overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <Badge variant="outline" className="border-accent text-accent">
                      {service.timeline}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className="flex items-start gap-2 text-gray-300 group-hover:text-gray-200 transition-all duration-300"
                        style={{ transitionDelay: `${detailIndex * 50}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section ref={processRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Integration Process
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              A proven methodology that ensures successful AI integration with minimal disruption to your operations.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {integrationProcess.map((phase, index) => (
              <Card 
                key={index}
                className="group bg-primary/80 border-gray-700 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold text-secondary/30 group-hover:text-secondary/50 transition-colors duration-300">
                      {phase.step}
                    </div>
                    <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                      {phase.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-accent transition-colors duration-300">
                    {phase.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {phase.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <li 
                        key={taskIndex}
                        className="flex items-start gap-2 text-gray-300 group-hover:text-gray-200 transition-all duration-300"
                      >
                        <ArrowRight className="w-3 h-3 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section ref={metricsRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Performance Metrics
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our track record speaks for itself - consistently delivering exceptional results across all integration projects.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
            metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {performanceMetrics.map((metric, index) => (
              <Card 
                key={index}
                className="bg-primary/80 border-gray-700 hover:border-secondary/50 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">{metric.metric}</h3>
                    <span className="text-2xl font-bold text-secondary">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className="h-3 bg-gray-700">
                    <div 
                      className={`h-full ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: metricsVisible ? `${metric.value}%` : '0%' }}
                    />
                  </Progress>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Compatibility */}
      <section ref={platformsRef} className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Platform Compatibility
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Seamless integration with leading enterprise platforms and cloud services.
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-1000 ${
            platformsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {integrationPlatforms.map((platform, index) => (
              <Card 
                key={index}
                className="group bg-primary/80 border-gray-700 hover:border-secondary/50 hover:scale-105 transition-all duration-300 text-center p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {platform.logo}
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-accent transition-colors duration-300">
                    {platform.name}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section ref={supportRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Support & Maintenance Plans
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Choose the support level that best fits your needs and budget.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            supportVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {supportLevels.map((tier, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-500 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary scale-105 shadow-2xl shadow-secondary/20' 
                    : 'bg-primary/80 border-gray-700 hover:border-secondary/50'
                } hover:scale-105`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-secondary text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={tier.popular ? "pt-12" : ""}>
                  <CardTitle className="text-2xl text-white text-center">{tier.tier}</CardTitle>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">{tier.price}</div>
                    <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-secondary hover:bg-secondary/90 text-white' 
                        : 'bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Integrate AI Into Your Systems?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              Let our experts help you seamlessly integrate AI solutions with professional support every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg rounded-full"
              >
                Start Your Integration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
                asChild
              >
                <Link to="/contact">
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIIntegrationSupport;