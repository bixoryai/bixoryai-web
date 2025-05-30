
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Innovation = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            ref={titleRef}
            className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-800 ${
              titleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
            }`}
          >
            Cultivating Responsible & Safe AI Innovation
          </h2>
          <p className="text-gray-400 mb-12">
            🚀 Always place Responsibility and Safety at the heart of everything we do. ❤️
          </p>
          <img
            src="/images/innovation.svg"
            alt="AI Innovation"
            className="w-64 h-64 mx-auto animate-float"
          />
        </div>
      </div>
    </section>
  );
};
