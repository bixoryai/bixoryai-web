
import { Link } from "react-router-dom";
import { showComingSoonToast } from "@/utils/comingSoon";

const Footer = () => {
  const handleComingSoon = (featureName: string) => {
    showComingSoonToast(featureName);
  };

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/3e317ebb-6aca-4d6a-8d86-94608c200a42.png" alt="Bixory AI" className="h-9" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent animate-pulse">BIXORY AI</span>
            </Link>
            <p className="text-gray-400">
              Building the future of AI technology together.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-accent">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-accent">Careers</Link></li>
              <li><button onClick={() => handleComingSoon("Contact Page")} className="text-gray-400 hover:text-accent text-left">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-empowerment" className="text-gray-400 hover:text-accent">AI Education & Training</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-accent">Custom AI Solutions</Link></li>
              <li><button onClick={() => handleComingSoon("Enterprise AI Consultation")} className="text-gray-400 hover:text-accent text-left">Enterprise AI Consultation</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com/bixoryai" className="text-gray-400 hover:text-accent" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/1767868/admin/dashboard/" className="text-gray-400 hover:text-accent" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/bixoryai" className="text-gray-400 hover:text-accent" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bixory AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
