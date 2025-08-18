
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Link } from "react-router-dom";
import { Gift, Zap, Users, Target, Search, TrendingUp, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import productivityImage from "@/assets/productivity-illustration.jpg";
import knowledgeImage from "@/assets/knowledge-illustration.jpg";


const About = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { elementRef: innovationRef, isVisible: innovationVisible } = useScrollAnimation(0.2);
  const { elementRef: productivityRef, isVisible: productivityVisible } = useScrollAnimation(0.2);
  const { elementRef: knowledgeRef, isVisible: knowledgeVisible } = useScrollAnimation(0.2);
  const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.2);

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
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        backgroundImage="/lovable-uploads/3392d363-afc5-4208-af24-9ed0d2d8a192.png"
        title={
          <>
            About <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">BIXORY AI</span>
          </>
        }
        subtitle="Pushing Boundaries & Redefining Possibilities"
        primaryButtonText="Get Started"
        secondaryButtonText="Our Solutions"
        height="pt-24 pb-20"
      >
      </Hero>

      {/* Our Story Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-sm font-semibold mb-8 uppercase tracking-wider">
              OUR STORY
            </h2>
            
            <div className="space-y-12">
              {/* Build Intelligence X with AI */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  Build Intelligence X with AI
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our core belief is that AI has the power to elevate, adapt, and transform human intelligence 
                  to levels marked by the unknown—represented by the X in our name. We're not just building 
                  AI solutions; we're pioneering the path to Intelligence X.
                </p>
              </div>

              {/* Empowering People and Organizations */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  Empowering People and Organizations
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Through our three-pillar value propositions—Learn, Build, and Grow—we empower 
                  individuals and businesses to harness the potential of AI. We offer cutting-edge AI courses, 
                  develop innovative AI-powered applications, and provide expert consultancy services.
                </p>
              </div>

              {/* Join Us */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  Join Us
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We invite you to be a part of our exciting journey towards Intelligence X. Whether you're a 
                  student, a professional, an organization, or an AI enthusiast, there's a place for you at Bixory AI. 
                  Together, let's explore the limitless possibilities of AI and shape a future where intelligence 
                  knows no bounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              ref={innovationRef}
              className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-1200 ${
                innovationVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
              }`}
            >
              Cultivating Responsible & Safe AI Innovation
            </h2>
            <p className="text-gray-400 mb-12">
              🚀 Always place Responsibility and Safety at the heart of everything we do. ❤️
            </p>
          </div>
        </div>
      </section>

      {/* Productivity Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                ref={productivityRef}
                className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-1200 ${
                  productivityVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
                }`}
              >
                Boost Productivity
                <span className="text-secondary block">and Creativity</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                With AI as the backbone of innovative solutions powering AI-driven applications, we're shaping the future of work. Our AI models, services and efficiently utilize technology, transforming the way businesses operate while maintaining the highest standards of personalized user experience creating yearly cost-effective results.
              </p>
            </div>
            <div>
              <img
                src={productivityImage}
                alt="Boost Productivity and Creativity"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={knowledgeImage}
                alt="Knowledge Empowerment"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 
                ref={knowledgeRef}
                className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-1200 ${
                  knowledgeVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
                }`}
              >
                Knowledge
                <span className="text-secondary block">Empowerment</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                As the technologies of AI technology transforms, we're committed to helping you grow. Stay in tune with our comprehensive content that covers a wide spectrum of AI topics.
                <br /><br />
                From beginner-friendly guides to deep dives into the AI world, we're here to guide you on your journey to help make you an AI expert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <h2 
            ref={featuresRef}
            className={`text-3xl md:text-4xl font-bold text-white text-center mb-12 transition-all duration-1200 ${
              featuresVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
            }`}
          >
            Maximize Productivity & Growth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-lg bg-card-gradient backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be Empowered Not Overpowered
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Your Cost-effective Full-cycle AI Solution Partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="bg-primary border-accent text-accent hover:bg-accent/20 px-8 py-3 rounded-full">
              <Link to="/solutions">Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
