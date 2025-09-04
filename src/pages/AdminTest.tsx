import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToolFinderTest } from "@/components/ToolFinderTest";

const AdminTest = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary">
        <section className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                  BIXORY AI
                </span>{" "}
                Tool Finder Test
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Test the autonomous AI tool finder and see how it discovers new AI tools
              </p>
            </div>
            
            <ToolFinderTest />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AdminTest;