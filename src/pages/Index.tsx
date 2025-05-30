
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
      <Hero />
      <Strip />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
