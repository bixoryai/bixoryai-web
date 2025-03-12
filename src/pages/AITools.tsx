
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { Link } from "react-router-dom";

const AITools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Popular AI Tools</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover the most powerful and innovative AI tools available today. This is a placeholder page for our future curated collection of AI tools and resources.
          </p>
          
          <div className="grid gap-8 mt-12">
            <div className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="mb-6">Our AI tools directory is currently under development. We're curating a list of the most useful AI tools across various categories including content generation, data analysis, automation, and more.</p>
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

export default AITools;
