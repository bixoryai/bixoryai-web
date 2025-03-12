
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how our AI solutions can transform your business. This is a placeholder page for our future solutions overview.
          </p>
          
          <div className="grid gap-8 mt-12">
            <div className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="mb-6">Our solutions page is currently under development. We'll be showcasing our industry-specific AI solutions, service offerings, and technology integrations.</p>
              <Button asChild>
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Solutions;
