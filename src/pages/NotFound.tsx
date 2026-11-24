import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CONSULTATION_CTA_LABEL } from "@/config/site";
import { ConsultationLink } from "@/components/conversion/ConsultationLink";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent font-semibold tracking-wide mb-3">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Page not found</h1>
          <p className="text-lg text-gray-300 mb-10">
            That address is not on this site. You can browse services, read about AI education and training, or book a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-accent hover:bg-accent/20"
            >
              View services
            </Link>
            <Link
              to="/ai-empowerment"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10"
            >
              AI Education & Training
            </Link>
            <ConsultationLink className="bg-secondary text-white px-6 py-3 rounded-full inline-flex items-center justify-center">
              {CONSULTATION_CTA_LABEL}
            </ConsultationLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
