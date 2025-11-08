import { ArrowLeft, Brain, Zap, Network, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { SocialShare } from "@/components/social/SocialShare";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LargeLanguageModels = () => {
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 pt-24">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base" className="text-gray-400 hover:text-accent transition-colors">
                    Knowledge Base
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Large Language Models</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/knowledge-base" 
                className="inline-flex items-center text-accent hover:text-secondary transition-colors mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Knowledge Base
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                  Large Language Models
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive guide to LLMs - transformer-based models achieving general-purpose language understanding and generation
              </p>

              {/* Share buttons */}
              <SocialShare 
                url={window.location.href}
                title="Large Language Models (LLMs) - BIXORY AI"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12" ref={contentRef}>
          <div className="container mx-auto px-6">
            <div className={`max-w-4xl mx-auto space-y-12 transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Introduction */}
              <Card className="bg-primary/80 border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">What are Large Language Models?</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Large Language Models (LLMs) are advanced AI systems trained on massive amounts of text data to understand and generate human-like language. Built on transformer architecture, these models have revolutionized natural language processing by achieving unprecedented levels of language understanding and generation capabilities.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    LLMs are characterized by their enormous scale, typically containing billions or even trillions of parameters. These parameters allow the models to capture complex patterns in language, enabling them to perform a wide variety of tasks without task-specific training.
                  </p>
                </CardContent>
              </Card>

              {/* Key Characteristics */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Key Characteristics of LLMs</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-primary/80 border-gray-700 hover:border-accent transition-colors">
                    <CardContent className="p-6">
                      <Brain className="w-12 h-12 text-accent mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">Massive Scale</h3>
                      <p className="text-gray-300">
                        Modern LLMs contain billions to trillions of parameters, trained on diverse datasets spanning books, websites, and various text sources from the internet.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/80 border-gray-700 hover:border-accent transition-colors">
                    <CardContent className="p-6">
                      <Zap className="w-12 h-12 text-secondary mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">Transfer Learning</h3>
                      <p className="text-gray-300">
                        Pre-trained on general language understanding, LLMs can be fine-tuned for specific tasks with minimal additional training data.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/80 border-gray-700 hover:border-accent transition-colors">
                    <CardContent className="p-6">
                      <Network className="w-12 h-12 text-accent mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">Transformer Architecture</h3>
                      <p className="text-gray-300">
                        Built on transformer networks using attention mechanisms that allow the model to understand context and relationships between words effectively.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/80 border-gray-700 hover:border-accent transition-colors">
                    <CardContent className="p-6">
                      <TrendingUp className="w-12 h-12 text-secondary mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">Zero-Shot Learning</h3>
                      <p className="text-gray-300">
                        Can perform tasks they weren't explicitly trained for by understanding instructions and context from prompts alone.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* How LLMs Work */}
              <Card className="bg-primary/80 border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">How LLMs Work</h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">1. Tokenization</h3>
                      <p>Input text is broken down into smaller units called tokens (words, subwords, or characters) that the model can process.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">2. Embedding</h3>
                      <p>Tokens are converted into numerical vectors (embeddings) that capture semantic meaning and relationships between words.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">3. Attention Mechanism</h3>
                      <p>The transformer's attention layers analyze relationships between all tokens, understanding context and dependencies regardless of distance in the text.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">4. Generation</h3>
                      <p>The model predicts the next token based on the input context, repeating this process to generate coherent, contextually appropriate text.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular LLMs */}
              <Card className="bg-primary/80 border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Popular Large Language Models</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="text-xl font-semibold text-white mb-2">GPT (Generative Pre-trained Transformer)</h3>
                      <p className="text-gray-300">OpenAI's GPT series, including ChatGPT and GPT-4, represents state-of-the-art language models with billions of parameters.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h3 className="text-xl font-semibold text-white mb-2">BERT (Bidirectional Encoder Representations)</h3>
                      <p className="text-gray-300">Google's BERT reads text bidirectionally, excelling at understanding context for tasks like question answering and sentiment analysis.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="text-xl font-semibold text-white mb-2">LLaMA (Large Language Model Meta AI)</h3>
                      <p className="text-gray-300">Meta's efficient open-source models designed to be more accessible while maintaining strong performance.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h3 className="text-xl font-semibold text-white mb-2">Claude</h3>
                      <p className="text-gray-300">Anthropic's AI assistant focused on safety and helpful, harmless, and honest responses.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Applications */}
              <Card className="bg-primary/80 border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Applications of LLMs</h2>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Content generation and creative writing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Code generation and programming assistance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Language translation and localization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Question answering and information retrieval</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Text summarization and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Conversational AI and chatbots</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Sentiment analysis and text classification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Educational tutoring and assistance</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Challenges and Considerations */}
              <Card className="bg-primary/80 border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Challenges and Considerations</h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      <strong className="text-white">Computational Resources:</strong> Training and running LLMs requires significant computational power and energy, raising environmental and accessibility concerns.
                    </p>
                    <p>
                      <strong className="text-white">Bias and Fairness:</strong> LLMs can inherit biases present in their training data, potentially perpetuating stereotypes or unfair representations.
                    </p>
                    <p>
                      <strong className="text-white">Hallucinations:</strong> Models may generate plausible-sounding but factually incorrect information, requiring careful verification of outputs.
                    </p>
                    <p>
                      <strong className="text-white">Privacy and Security:</strong> Concerns about data privacy, potential misuse, and the need for responsible deployment practices.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Future of LLMs */}
              <Card className="bg-gradient-to-br from-primary via-primary to-blue-900 border-accent">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">The Future of LLMs</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The field of LLMs continues to evolve rapidly with ongoing research into more efficient architectures, improved reasoning capabilities, and multimodal models that can understand and generate not just text, but images, audio, and video.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Future developments focus on reducing computational requirements, improving factual accuracy, enhancing controllability, and ensuring ethical and responsible AI deployment across various applications and industries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LargeLanguageModels;