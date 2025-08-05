import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface VisualArticleLayoutProps {
  children: ReactNode;
}

export const VisualArticleLayout = ({ children }: VisualArticleLayoutProps) => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <div className="pt-24">
        {children}
      </div>
      <Footer />
    </div>
  );
};