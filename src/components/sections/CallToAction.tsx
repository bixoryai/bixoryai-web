import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CallToAction = () => {
  const navigate = useNavigate();
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.3);

  return (
    <section 
      className="py-20 bg-primary"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div 
          className={`bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-12 text-center border border-secondary/20 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the AI revolution and unlock your business potential. Our experts are ready to guide you through every step of your AI transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full text-lg"
            >
              Schedule Free Consultation
            </Button>
            
            <Button 
              onClick={() => navigate('/solutions')}
              variant="outline"
              className="bg-primary border-accent text-accent hover:bg-accent/20 px-8 py-3 rounded-full text-lg"
            >
              View Our Solutions
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            No commitment required • Free 30-minute consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;