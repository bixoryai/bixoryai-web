
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-gray-600/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <Link to="/" className="flex items-center justify-center md:justify-start gap-3 mb-4">
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
              <li><Link to="/contact" className="text-gray-400 hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-empowerment" className="text-gray-400 hover:text-accent">AI Education & Training</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-accent">Custom AI Solutions</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-accent">Enterprise AI Consultation</Link></li>
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
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Bixory AI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-accent text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-accent text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
