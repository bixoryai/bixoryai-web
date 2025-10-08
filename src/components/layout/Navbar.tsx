import { useState } from "react";
import { Menu, X, ChevronDown, LogOut, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { asset } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  
  // Safely access auth context with fallback
  let user = null;
  let isAdmin = false;
  let signOut = () => {};
  
  try {
    const auth = useAuth();
    user = auth.user;
    isAdmin = auth.isAdmin;
    signOut = auth.signOut;
  } catch (error) {
    // Auth context not available yet
    console.log('Auth context not available');
  }
  
  
  return <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={asset('lovable-uploads/3e317ebb-6aca-4d6a-8d86-94608c200a42.png')} alt="Bixory AI" className="h-9" />
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent animate-pulse">BIXORY AI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center text-white hover:text-accent transition-colors gap-1"
                onClick={() => setShowResourcesMenu(!showResourcesMenu)}
              >
                Resources <ChevronDown className="h-4 w-4" />
              </button>
              {showResourcesMenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link to="/knowledge-base" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Knowledge Base
                  </Link>
                  <Link to="/ai-tools" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Popular AI Tools
                  </Link>
                </div>
              )}
            </div>
            <Link to="/projects" className="text-white hover:text-accent transition-colors">Projects</Link>
            <Link to="/solutions" className="text-white hover:text-accent transition-colors">Solutions</Link>
            <Link to="/careers" className="text-white hover:text-accent transition-colors">Careers</Link>
            <Link to="/about" className="text-white hover:text-accent transition-colors">About</Link>
            <Link 
              to="/contact"
              className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90 transition-colors"
            >
              Contact
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {isOpen && <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <button 
                  className="flex items-center text-white hover:text-accent transition-colors gap-1"
                  onClick={() => setShowResourcesMenu(!showResourcesMenu)}
                >
                  Resources <ChevronDown className="h-4 w-4" />
                </button>
                {showResourcesMenu && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    <Link to="/knowledge-base" className="text-white hover:text-accent transition-colors">
                      Knowledge Base
                    </Link>
                    <Link to="/ai-tools" className="text-white hover:text-accent transition-colors">
                      Popular AI Tools
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/projects" className="text-white hover:text-accent transition-colors">Projects</Link>
              <Link to="/solutions" className="text-white hover:text-accent transition-colors">Solutions</Link>
              <Link to="/careers" className="text-white hover:text-accent transition-colors">Careers</Link>
              <Link to="/about" className="text-white hover:text-accent transition-colors">About</Link>
              <Link 
                to="/contact"
                className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;
