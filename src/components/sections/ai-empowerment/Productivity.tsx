
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Productivity = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 bg-primary/95">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/images/productivity.svg"
              alt="Boost Productivity"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 
              ref={titleRef}
              className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-1200 ${
                titleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
              }`}
            >
              Boost Productivity
              <span className="text-secondary block">and Creativity</span>
            </h2>
            <p className="text-gray-400">
              With AI as the backbone of innovative solutions powering AI-driven applications, we're shaping the future of work. Our AI models, services and efficiently utilize technology, transforming the way businesses operate while maintaining the highest standards of personalized user experience creating yearly cost-effective results. Embrace the future with us as we bring cutting-edge AI solutions to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
