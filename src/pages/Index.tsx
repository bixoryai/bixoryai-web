
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Strip from "@/components/sections/Strip";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowWeWork from "@/components/sections/HowWeWork";
import SuccessMetrics from "@/components/sections/SuccessMetrics";
import FeaturedSolutions from "@/components/sections/FeaturedSolutions";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import CallToAction from "@/components/sections/CallToAction";
import Newsletter from "@/components/sections/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero 
        title={
          <span>
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
              Build Intelligent X
            </span>
            <span className="text-white"> with AI</span>
          </span>
        }
        subtitle="Transform your vision into AI-powered reality with cutting-edge solutions that adapt, learn, and evolve with your business"
      />
      <Strip />
      <WhyChooseUs />
      <Services />
      <HowWeWork />
      <SuccessMetrics />
      <FeaturedSolutions />
      <IndustriesPreview />
      <CallToAction />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
