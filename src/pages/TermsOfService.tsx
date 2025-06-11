
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-lg leading-relaxed">
                By accessing and using BIXORY AI's website and services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
              <p className="leading-relaxed">
                BIXORY AI provides AI education, training, and custom AI solutions. We reserve the right to modify, 
                suspend, or discontinue our services at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>You must provide accurate and complete information when using our services</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You agree not to use our services for any unlawful or prohibited activities</li>
                <li>You will not interfere with or disrupt our services or servers</li>
                <li>You will respect the intellectual property rights of BIXORY AI and others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, 
                logos, software, and design, are owned by BIXORY AI and are protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                BIXORY AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting 
                from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                Our services are provided on an "as is" and "as available" basis. We make no representations or warranties 
                of any kind, express or implied, regarding the operation or availability of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes 
                by posting the new Terms of Service on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@bixoryai.com
              </p>
            </section>

            <section>
              <p className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-accent hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
