import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="bg-secondary/10 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Stay Updated
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest updates on AI technology and industry insights.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 focus:outline-none focus:border-accent"
            required
          />
          <button
            type="submit"
            className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;