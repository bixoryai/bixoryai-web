import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Knowledge = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              ref={titleRef}
              className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-1200 ${
                titleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
              }`}
            >
              Knowledge
              <span className="text-secondary block">Empowerment</span>
            </h2>
            <p className="text-gray-400">
              As the technologies of AI technology transforms, we're committed to helping you grow. Stay in tune with our comprehensive content that covers a wide spectrum of AI topics.
              <br /><br />
              From beginner-friendly guides to deep dives into the AI world, we're here to guide you on your journey to help make you an AI expert.
            </p>
          </div>
          <div>
            <img
              src="/images/knowledge.svg"
              alt="Knowledge Empowerment"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
