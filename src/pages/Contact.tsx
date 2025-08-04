
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Phone, Send } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "@/hooks/use-toast";
import Hero from "@/components/sections/Hero";
import contactHeroImage from "@/assets/contact-hero.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "general",
    message: ""
  });

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation(0.3);
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation(0.4);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubjectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a success toast
    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "general",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <Hero
        backgroundImage={contactHeroImage}
        title="Get in Touch with Us"
        subtitle="Ready to transform your business with AI? We're here to help you navigate the future of technology and unlock new possibilities."
        showButtons={false}
        height="pt-24 pb-20"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div
              ref={formRef}
              className={`transition-all duration-1200 delay-200 ${
                formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-primary/80 border border-gray-700 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-white">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-white mb-3 block">Subject *</Label>
                    <RadioGroup value={formData.subject} onValueChange={handleSubjectChange}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" className="border-white text-accent" />
                          <Label htmlFor="general" className="text-gray-300">General Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ai-training" id="ai-training" className="border-white text-accent" />
                          <Label htmlFor="ai-training" className="text-gray-300">AI Training</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="custom-solutions" id="custom-solutions" className="border-white text-accent" />
                          <Label htmlFor="custom-solutions" className="text-gray-300">Custom AI Solutions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="consultation" id="consultation" className="border-white text-accent" />
                          <Label htmlFor="consultation" className="text-gray-300">Enterprise Consultation</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent min-h-[120px]"
                      placeholder="Tell us about your project, goals, or how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div
              ref={infoRef}
              className={`transition-all duration-1200 delay-400 ${
                infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Whether you're looking to implement AI solutions, need training for your team, 
                    or want to explore custom AI development, we're here to guide you through 
                    your AI transformation journey.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                      <p className="text-gray-300">develop@bixory.ai</p>
                      <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                      <p className="text-gray-300">+1 (408) 658-8538</p>
                      <p className="text-sm text-gray-400">Mon-Fri, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Why Choose BIXORY AI?</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Expert AI consultants and trainers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Custom solutions tailored to your needs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Proven track record with 500+ clients
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      24/7 support and ongoing guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
