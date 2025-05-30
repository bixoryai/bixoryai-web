
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[600px] md:h-[700px] flex items-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/c81fdb86-6992-4d62-af6d-9b1d014921d6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Welcome to <span className="text-secondary">BIXORY AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-slide-up">
              Pushing Boundaries & Redefine Possibilities
            </p>
          </div>
        </div>
      </section>

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

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-secondary/20 to-accent/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be Empowered Not Overpowered
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Your Cost-effective Full-cycle AI Solution Partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link to="/ai-empowerment">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
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
