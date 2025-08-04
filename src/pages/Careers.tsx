
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Briefcase, Heart, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import careersHeroImage from "@/assets/careers-hero.jpg";

const jobOpenings = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Join our team to build cutting-edge AI solutions and help shape the future of artificial intelligence.",
    requirements: ["5+ years in AI/ML", "Python, TensorFlow/PyTorch", "Experience with LLMs"]
  },
  {
    title: "AI Trainer & Educator",
    department: "Education",
    location: "Remote / New York",
    type: "Full-time",
    description: "Design and deliver AI training programs to help organizations understand and implement AI technologies.",
    requirements: ["3+ years teaching experience", "AI/ML expertise", "Strong communication skills"]
  },
  {
    title: "AI Solutions Consultant",
    department: "Consulting",
    location: "Remote / Multiple",
    type: "Full-time",
    description: "Work directly with clients to assess their AI needs and develop strategic implementation roadmaps.",
    requirements: ["Business consulting experience", "AI technology knowledge", "Client-facing skills"]
  }
];

const benefits = [
  {
    icon: <Heart className="w-6 h-6 text-secondary" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: <Zap className="w-6 h-6 text-secondary" />,
    title: "Learning & Growth",
    description: "Continuous learning opportunities and conference attendance"
  },
  {
    icon: <Users className="w-6 h-6 text-secondary" />,
    title: "Flexible Work",
    description: "Remote-first culture with flexible working arrangements"
  }
];

const Careers = () => {
  const navigate = useNavigate();
  const { elementRef: jobsRef, isVisible: jobsVisible } = useScrollAnimation(0.3);
  const { elementRef: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.3);

  const handleApplyClick = (jobTitle: string) => {
    navigate("/job-application", { state: { position: jobTitle } });
  };

  const handleSendResumeClick = () => {
    navigate("/job-application");
  };

  const handleViewPositionsClick = () => {
    const jobsSection = document.getElementById('job-openings');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        backgroundImage={careersHeroImage}
        title="Join The Team" 
        subtitle="Be part of a team that's shaping the future of artificial intelligence. Help us empower businesses and individuals with cutting-edge AI solutions." 
        primaryButtonText="View Open Positions" 
        secondaryButtonText="Send Your Resume" 
        height="pt-24 pb-20" 
        onPrimaryClick={handleViewPositionsClick} 
        onSecondaryClick={handleSendResumeClick} 
      />

      {/* Why Work With Us */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Bixory AI, we believe in creating an environment where innovation thrives 
              and every team member can make a meaningful impact on the future of AI.
            </p>
          </div>
          
          <div 
            ref={benefitsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
              benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-shadow duration-300 bg-primary/80 border-gray-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-secondary/20 rounded-lg w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section 
        id="job-openings"
        ref={jobsRef}
        className="py-20 bg-gradient-to-br from-primary to-blue-900"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Current Openings
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Explore exciting opportunities to grow your career while making a real impact in the AI industry.
            </p>
          </div>

          <div className={`max-w-4xl mx-auto space-y-6 transition-all duration-1000 ${
            jobsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {jobOpenings.map((job, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 bg-primary/80 border-gray-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-white mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => handleApplyClick(job.title)}
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </CardDescription>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals who share our passion for AI innovation. 
              Send us your resume and let's explore opportunities together.
            </p>
            <Button 
              size="lg" 
              onClick={handleSendResumeClick}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg"
            >
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
