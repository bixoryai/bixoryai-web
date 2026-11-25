
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CONSULTATION_CTA_LABEL } from "@/config/site";
import { ConsultationLink } from "@/components/conversion/ConsultationLink";

export const Contact = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold text-[#1a0a00] mb-8 transition-all duration-1200 ${
            titleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'
          }`}
        >
          Help Us Better Serve You
        </h2>
        <ConsultationLink className="inline-flex items-center justify-center rounded-md border border-input bg-white px-4 py-2 text-sm font-medium text-secondary hover:bg-white/90">
          {CONSULTATION_CTA_LABEL}
        </ConsultationLink>
      </div>
    </section>
  );
};
