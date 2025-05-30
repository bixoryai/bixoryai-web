
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Contact = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold text-white mb-8 transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
          }`}
        >
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
