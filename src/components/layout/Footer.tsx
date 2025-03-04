
const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/3e317ebb-6aca-4d6a-8d86-94608c200a42.png" alt="Bixory AI" className="h-9" />
              <span className="text-white text-xl font-bold">BIXORY AI</span>
            </div>
            <p className="text-gray-400">
              Building the future of AI technology together.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-accent">About Us</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-accent">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#ai-agents" className="text-gray-400 hover:text-accent">AI Agents</a></li>
              <li><a href="#development" className="text-gray-400 hover:text-accent">Development</a></li>
              <li><a href="#consulting" className="text-gray-400 hover:text-accent">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#twitter" className="text-gray-400 hover:text-accent">Twitter</a></li>
              <li><a href="#linkedin" className="text-gray-400 hover:text-accent">LinkedIn</a></li>
              <li><a href="#github" className="text-gray-400 hover:text-accent">GitHub</a></li>
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
