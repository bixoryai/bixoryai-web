import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/sections/ai-empowerment/Hero";
import { Innovation } from "@/components/sections/ai-empowerment/Innovation";
import { Productivity } from "@/components/sections/ai-empowerment/Productivity";
import { Knowledge } from "@/components/sections/ai-empowerment/Knowledge";
import { Features } from "@/components/sections/ai-empowerment/Features";
import { Contact } from "@/components/sections/ai-empowerment/Contact";

const AIEmpowerment = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <Innovation />
        <Productivity />
        <Knowledge />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AIEmpowerment;