import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface VisualArticleLayoutProps {
  children: ReactNode;
}

export const VisualArticleLayout = ({ children }: VisualArticleLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#0A192F] to-[#0D1B2A]">
        <div className="pt-24">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};