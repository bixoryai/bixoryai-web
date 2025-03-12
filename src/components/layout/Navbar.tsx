
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/lovable-uploads/3e317ebb-6aca-4d6a-8d86-94608c200a42.png" alt="Bixory AI" className="h-9" />
            <span className="text-xl font-bold text-red-500">BIXORY AI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#resources" className="text-white hover:text-accent transition-colors">Resources</a>
            <a href="#projects" className="text-white hover:text-accent transition-colors">Projects</a>
            <a href="#solutions" className="text-white hover:text-accent transition-colors">Solutions</a>
            <a href="#about" className="text-white hover:text-accent transition-colors">About</a>
            <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90 transition-colors">
              Contact
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {isOpen && <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#resources" className="text-white hover:text-accent transition-colors">Resources</a>
              <a href="#projects" className="text-white hover:text-accent transition-colors">Projects</a>
              <a href="#solutions" className="text-white hover:text-accent transition-colors">Solutions</a>
              <a href="#about" className="text-white hover:text-accent transition-colors">About</a>
              <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90 transition-colors">
                Contact
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;
