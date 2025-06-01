
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Strip from "@/components/sections/Strip";
import Services from "@/components/sections/Services";
import Newsletter from "@/components/sections/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero 
        title={
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
            BIXORY AI
          </span>
        }
        subtitle="Empowering businesses with cutting-edge artificial intelligence solutions"
      />
      <Strip />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
