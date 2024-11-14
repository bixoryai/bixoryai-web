import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Help Us Better Serve You
        </h2>
        <Button
          variant="outline"
          className="bg-white text-secondary hover:bg-white/90 hover:text-secondary/90"
        >
          Contact
        </Button>
      </div>
    </section>
  );
};