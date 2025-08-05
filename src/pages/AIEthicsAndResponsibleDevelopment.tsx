import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SocialShare } from '@/components/social/SocialShare';
import Hero from '@/components/sections/Hero';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import aiEthicsHero from '@/assets/ai-development-hero.jpg';

const AIEthicsAndResponsibleDevelopment = () => {
  const keyTakeaways = [
    "AI ethics encompasses fairness, transparency, privacy, accountability, and human autonomy as core principles",
    "Common challenges include algorithmic bias, black box decision-making, privacy concerns, and economic disruption",
    "Diverse development teams and inclusive practices are essential for identifying and mitigating ethical risks",
    "Industry-specific considerations require tailored approaches to AI ethics in healthcare, finance, criminal justice, and education",
    "Continuous monitoring, stakeholder engagement, and transparent documentation are crucial for responsible AI deployment",
    "Future AI development requires global cooperation, consistent standards, and widespread AI literacy"
  ];

  const relatedLinks = [
    {
      title: "IEEE Standards for Ethical Design of Autonomous and Intelligent Systems",
      url: "https://standards.ieee.org/initiatives/artificial-intelligence-systems/"
    },
    {
      title: "Partnership on AI Tenets",
      url: "https://partnershiponai.org/tenets/"
    },
    {
      title: "EU AI Act: Comprehensive Regulation Framework",
      url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    },
    {
      title: "MIT's Moral Machine Experiment",
      url: "https://www.moralmachine.net/"
    }
  ];

  const articleContent = `
    <div class="prose prose-lg max-w-none text-gray-300">
      <div class="bg-card-gradient p-6 md:p-8 rounded-lg border border-gray-700 mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Understanding AI Ethics: Core Principles</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-primary/50 p-6 rounded-lg border border-gray-600">
            <h3 class="text-xl font-bold text-white mb-3">Fairness and Non-Discrimination</h3>
            <p class="text-gray-300">AI systems should treat all individuals and groups equitably, avoiding biased outcomes that could perpetuate or amplify existing social inequalities.</p>
          </div>
          
          <div class="bg-primary/50 p-6 rounded-lg border border-gray-600">
            <h3 class="text-xl font-bold text-white mb-3">Transparency and Explainability</h3>
            <p class="text-gray-300">Users and stakeholders should understand how AI systems make decisions that affect them, particularly in high-stakes applications.</p>
          </div>
          
          <div class="bg-primary/50 p-6 rounded-lg border border-gray-600">
            <h3 class="text-xl font-bold text-white mb-3">Privacy and Data Protection</h3>
            <p class="text-gray-300">AI systems must respect individual privacy rights and implement robust data protection measures throughout the development lifecycle.</p>
          </div>
          
          <div class="bg-primary/50 p-6 rounded-lg border border-gray-600">
            <h3 class="text-xl font-bold text-white mb-3">Accountability and Responsibility</h3>
            <p class="text-gray-300">Clear lines of responsibility must be established for AI system outcomes, with organizations prepared to answer for their systems' actions.</p>
          </div>
        </div>
      </div>

      <div class="bg-card-gradient p-6 md:p-8 rounded-lg border border-gray-700 mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Common Ethical Challenges in AI Development</h2>
        
        <div class="space-y-6">
          <div class="border-l-4 border-secondary pl-6">
            <h3 class="text-xl font-bold text-white mb-3">Algorithmic Bias</h3>
            <p class="text-gray-300 mb-4">One of the most pressing concerns in AI ethics is the potential for algorithms to exhibit bias against certain groups:</p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong class="text-white">Historical Bias:</strong> When training data reflects past discriminatory practices</li>
              <li><strong class="text-white">Representation Bias:</strong> When certain groups are underrepresented in training datasets</li>
              <li><strong class="text-white">Evaluation Bias:</strong> When performance metrics don't adequately capture fairness across different groups</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-secondary pl-6">
            <h3 class="text-xl font-bold text-white mb-3">The Black Box Problem</h3>
            <p class="text-gray-300">Many modern AI systems, particularly deep learning models, operate as "black boxes" where the decision-making process is opaque even to their creators. This lack of interpretability poses significant challenges for accountability and trust.</p>
          </div>
          
          <div class="border-l-4 border-secondary pl-6">
            <h3 class="text-xl font-bold text-white mb-3">Privacy and Surveillance Concerns</h3>
            <p class="text-gray-300">AI systems often require vast amounts of data to function effectively, raising concerns about privacy invasion and the potential for mass surveillance. The balance between AI capabilities and individual privacy rights remains a contentious issue.</p>
          </div>
        </div>
      </div>

      <div class="bg-card-gradient p-6 md:p-8 rounded-lg border border-gray-700 mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Frameworks for Responsible AI Development</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl text-secondary">⚖️</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">IEEE Standards</h3>
            <p class="text-gray-300">Comprehensive standards for ethical AI design and implementation</p>
          </div>
          
          <div class="text-center">
            <div class="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl text-secondary">🤝</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Partnership on AI</h3>
            <p class="text-gray-300">Industry collaboration emphasizing human-centered AI development</p>
          </div>
          
          <div class="text-center">
            <div class="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl text-secondary">🏛️</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Government Initiatives</h3>
            <p class="text-gray-300">Regulatory frameworks like the EU's AI Act and national AI strategies</p>
          </div>
        </div>
      </div>

      <div class="bg-card-gradient p-6 md:p-8 rounded-lg border border-gray-700 mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Best Practices for Implementation</h2>
        
        <div class="space-y-4">
          <div class="flex items-start space-x-4">
            <div class="bg-secondary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-white text-sm font-bold">1</span>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Diverse and Inclusive Development Teams</h3>
              <p class="text-gray-300">Building diverse teams that represent different perspectives, backgrounds, and experiences is crucial for identifying potential biases and ethical issues early in the development process.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="bg-secondary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-white text-sm font-bold">2</span>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Ethical Impact Assessments</h3>
              <p class="text-gray-300">Conducting thorough assessments of potential ethical implications before deploying AI systems helps identify and mitigate risks proactively.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="bg-secondary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-white text-sm font-bold">3</span>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Continuous Monitoring and Auditing</h3>
              <p class="text-gray-300">Regular evaluation of AI system performance across different demographic groups and use cases ensures ongoing fairness and effectiveness.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="bg-secondary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-white text-sm font-bold">4</span>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Stakeholder Engagement</h3>
              <p class="text-gray-300">Involving affected communities, domain experts, and other stakeholders in the development process helps ensure AI systems meet real-world needs while respecting ethical boundaries.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-card-gradient p-6 md:p-8 rounded-lg border border-gray-700 mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Industry-Specific Considerations</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-primary/50 p-6 rounded-lg border border-gray-600">
            <h3 class="text-xl font-bold text-white mb-3 flex items-center">
              <span class="mr-3">🏥</span>
              Healthcare AI Ethics
            </h3>
            <p class="text-gray-300">Medical AI systems require special attention to patient safety, clinical validation, and equitable access to care.</p>
          </div>
          
          <div class="bg-primary/50 p-6 rounded-lg border border-gray-600">
            <h3 class="text-xl font-bold text-white mb-3 flex items-center">
              <span class="mr-3">💰</span>
              Financial Services
            </h3>
            <p class="text-gray-300">AI in finance must navigate complex regulatory environments while ensuring fair access to financial services.</p>
          </div>
          
          <div class="bg-primary/50 p-6 rounded-lg border border-gray-600">
            <h3 class="text-xl font-bold text-white mb-3 flex items-center">
              <span class="mr-3">⚖️</span>
              Criminal Justice
            </h3>
            <p class="text-gray-300">AI in policing and sentencing raises profound questions about bias, fairness, and the role of technology in justice systems.</p>
          </div>
          
          <div class="bg-primary/50 p-6 rounded-lg border border-gray-600">
            <h3 class="text-xl font-bold text-white mb-3 flex items-center">
              <span class="mr-3">🎓</span>
              Education
            </h3>
            <p class="text-gray-300">Educational AI systems must balance personalization with privacy while ensuring equitable access to learning opportunities.</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-secondary/20 to-primary/20 p-6 md:p-8 rounded-lg border border-gray-700 mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Key Statistics</h2>
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div class="text-3xl font-bold text-secondary mb-2">85%</div>
            <p class="text-gray-300">of organizations lack comprehensive AI ethics frameworks</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-secondary mb-2">73%</div>
            <p class="text-gray-300">of consumers want transparency in AI decision-making</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-secondary mb-2">60%</div>
            <p class="text-gray-300">of AI projects fail due to ethical or bias concerns</p>
          </div>
        </div>
      </div>

      <div class="bg-card-gradient p-6 md:p-8 rounded-lg border border-gray-700">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">The Future of AI Ethics</h2>
        <p class="text-gray-300 mb-6">As AI continues to evolve with developments in artificial general intelligence, quantum computing, and brain-computer interfaces, new ethical challenges will emerge that require proactive consideration.</p>
        
        <div class="bg-primary/30 p-6 rounded-lg border border-gray-600">
          <h3 class="text-xl font-bold text-white mb-4">Looking Ahead</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>International collaboration for consistent ethical standards</li>
            <li>Building AI literacy among policymakers and the public</li>
            <li>Developing adaptive frameworks for emerging technologies</li>
            <li>Ensuring equitable access to AI benefits across all communities</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <Hero
        backgroundImage={aiEthicsHero}
        title={
          <span>
            AI Ethics and <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">Responsible Development</span>
          </span>
        }
        subtitle="Building ethical AI systems that benefit humanity while minimizing potential harms"
        showButtons={false}
        height="h-[60vh]"
      />

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <Breadcrumb className="mb-6 md:mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/knowledge-base" className="text-gray-400 hover:text-white">
                Knowledge Base
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">AI Ethics and Responsible Development</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card-gradient p-6 md:p-8 rounded-lg border border-gray-700 mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">AI Ethics</span>
              <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Responsible AI</span>
              <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Technology Policy</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <span>By BIXORY AI Research Team</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>August 5, 2024</span>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              As artificial intelligence becomes increasingly integrated into our daily lives, the importance of ethical AI development cannot be overstated. This comprehensive guide explores the fundamental principles of AI ethics, common challenges faced by developers, and practical frameworks for building responsible AI systems that benefit humanity while minimizing potential harms.
            </p>
          </div>

          <div className="bg-card-gradient p-6 md:p-8 rounded-lg border border-gray-700 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              {keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-secondary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-300">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div dangerouslySetInnerHTML={{ __html: articleContent }} />

          <div className="bg-card-gradient p-6 md:p-8 rounded-lg border border-gray-700 mt-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Related Research</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedLinks.map((link, index) => (
                <div
                  key={index}
                  className="p-4 bg-primary/50 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors cursor-pointer"
                  onClick={() => window.open(link.url, '_blank')}
                >
                  <h3 className="text-white font-medium mb-2">{link.title}</h3>
                  <span className="text-sm text-gray-400">External Resource →</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <SocialShare 
              title="AI Ethics and Responsible Development: Building a Better Future"
              url={`${window.location.origin}/knowledge-base/ai-ethics-responsible-development`}
              description="Explore the fundamental principles of AI ethics and learn how to build responsible AI systems that benefit humanity."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIEthicsAndResponsibleDevelopment;