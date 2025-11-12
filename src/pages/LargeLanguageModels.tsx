import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SocialShare } from "@/components/social/SocialShare";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Brain, MessageSquare, Cpu, Layers, Sparkles, TrendingUp, Globe, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/ai-development-hero.jpg";
import knowledgeImage from "@/assets/knowledge-illustration.jpg";

export default function LargeLanguageModels() {
  // SEO
  useEffect(() => {
    const title = "Large Language Models (LLMs) | BIXORY AI";
    document.title = title;

    const metaDescContent = "Comprehensive guide to Large Language Models: architecture, training, applications, and the future of AI-powered natural language processing.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", metaDescContent);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/knowledge-base/large-language-models");

    // JSON-LD structured data
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: metaDescContent,
      author: { "@type": "Organization", name: "BIXORY AI" },
      dateModified: new Date().toISOString(),
      mainEntityOfPage: window.location.href,
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const keyTakeaways = [
    "LLMs are neural networks trained on massive text datasets to understand and generate human-like text",
    "Transformer architecture with attention mechanisms enables LLMs to process context efficiently",
    "Pre-training on diverse data followed by fine-tuning creates versatile, task-specific models",
    "GPT, BERT, and T5 represent different architectural approaches to language understanding",
    "LLMs power applications from chatbots to code generation, translation, and content creation",
    "Challenges include computational costs, bias, hallucinations, and ethical considerations",
    "Prompt engineering and RAG techniques enhance LLM performance and accuracy"
  ];

  const relatedLinks = [
    { title: "Attention Is All You Need (Original Transformer Paper)", url: "https://arxiv.org/abs/1706.03762" },
    { title: "GPT-3: Language Models are Few-Shot Learners", url: "https://arxiv.org/abs/2005.14165" },
    { title: "BERT: Pre-training of Deep Bidirectional Transformers", url: "https://arxiv.org/abs/1810.04805" },
    { title: "Understanding RAG", url: "/knowledge-base/understanding-rag" },
    { title: "Advanced Prompt Engineering", url: "/knowledge-base/advanced-prompt-engineering" },
    { title: "AI Evolution Timeline", url: "/knowledge-base/ai-evolution-timeline" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-blue-900">
        {/* Hero */}
        <section className="pt-28 md:pt-32 pb-8 md:pb-12">
          <div className="container mx-auto px-6">
            <Breadcrumb className="mb-4 text-white">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/knowledge-base">Knowledge Base</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Large Language Models</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">Large Language Models</span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Explore the transformative technology behind modern AI: how LLMs learn, reason, and generate human-like text through billions of parameters and cutting-edge neural architectures.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700/60 text-gray-300">
                    <Brain className="h-4 w-4" /> Deep Learning
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700/60 text-gray-300">
                    <Layers className="h-4 w-4" /> Transformers
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700/60 text-gray-300">
                    <MessageSquare className="h-4 w-4" /> NLP
                  </span>
                </div>
              </div>
              <div className="lg:pl-6">
                <img src={heroImage} alt="Large Language Models Architecture" className="w-full rounded-2xl shadow-2xl border border-gray-700/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-6 pb-16">
          <div className="grid gap-6 lg:gap-8">
            
            {/* What are LLMs */}
            <div className="rounded-2xl p-8 border border-blue-500/20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-blue-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">What are Large Language Models?</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">Large Language Models (LLMs)</strong> are advanced neural networks trained on vast amounts of text data to understand, generate, and manipulate human language. These models contain billions of parameters—learned weights that enable them to capture complex patterns, relationships, and nuances in language.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Unlike traditional rule-based systems, LLMs learn statistical patterns from data, allowing them to perform a wide range of language tasks without explicit programming for each specific task. They can write essays, answer questions, translate languages, generate code, and even engage in creative writing.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="text-2xl font-bold text-blue-400 mb-1">175B+</div>
                      <div className="text-xs text-gray-400">Parameters in GPT-3</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="text-2xl font-bold text-purple-400 mb-1">45TB+</div>
                      <div className="text-xs text-gray-400">Training Data</div>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-6">
                  <img src={knowledgeImage} alt="LLM Knowledge Representation" className="w-full rounded-xl border border-gray-700/40" />
                </div>
              </div>
            </div>

            {/* Transformer Architecture */}
            <div className="rounded-2xl p-8 border border-green-500/20 bg-gradient-to-r from-green-900/20 to-teal-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-green-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">The Transformer Architecture</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Modern LLMs are built on the <strong className="text-white">Transformer architecture</strong>, introduced in the groundbreaking 2017 paper "Attention Is All You Need." This architecture revolutionized NLP by replacing recurrent networks with a mechanism called <em className="text-accent">self-attention</em>.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/40">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                    <Cpu className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Self-Attention</h4>
                  <p className="text-sm text-gray-400">Weighs the importance of different words in a sequence to understand context and relationships.</p>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/40">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-3">
                    <Layers className="h-6 w-6 text-teal-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Multi-Head Attention</h4>
                  <p className="text-sm text-gray-400">Processes multiple representations simultaneously, capturing diverse linguistic patterns.</p>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/40">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-3">
                    <Sparkles className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Positional Encoding</h4>
                  <p className="text-sm text-gray-400">Injects information about word positions since transformers don't inherently process sequences.</p>
                </div>
              </div>
            </div>

            {/* Training Process */}
            <div className="rounded-2xl p-8 border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-purple-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">How LLMs Learn</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Training an LLM is a multi-stage process that requires massive computational resources and carefully curated datasets. The process typically involves two main phases:
              </p>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-purple-400 font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-white">Pre-Training</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      The model learns general language understanding by predicting masked or next tokens on billions of text examples from books, websites, and articles.
                    </p>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• Unsupervised learning on diverse corpora</li>
                      <li>• Captures grammar, facts, reasoning patterns</li>
                      <li>• Weeks to months of GPU/TPU training</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-pink-400 font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-white">Fine-Tuning</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      The pre-trained model is adapted to specific tasks or domains using smaller, task-specific datasets and human feedback.
                    </p>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• Supervised learning on labeled data</li>
                      <li>• Reinforcement Learning from Human Feedback (RLHF)</li>
                      <li>• Domain adaptation and instruction following</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-4">Training Challenges</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-white">Computational Cost</div>
                        <div className="text-xs text-gray-400">Training can cost millions in GPU hours</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-white">Data Quality</div>
                        <div className="text-xs text-gray-400">Biased data leads to biased models</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-white">Scaling Laws</div>
                        <div className="text-xs text-gray-400">More parameters ≠ always better performance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular LLM Families */}
            <div className="rounded-2xl p-8 border border-orange-500/20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-orange-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Popular LLM Families</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/40">
                  <h4 className="font-semibold text-white mb-2">GPT Series (OpenAI)</h4>
                  <p className="text-sm text-gray-400 mb-3">Autoregressive models trained to predict the next token. GPT-3, GPT-4, and ChatGPT excel at text generation and conversation.</p>
                  <div className="text-xs text-accent">Decoder-only architecture</div>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/40">
                  <h4 className="font-semibold text-white mb-2">BERT (Google)</h4>
                  <p className="text-sm text-gray-400 mb-3">Bidirectional encoder trained with masked language modeling. Excels at understanding context for classification tasks.</p>
                  <div className="text-xs text-accent">Encoder-only architecture</div>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/40">
                  <h4 className="font-semibold text-white mb-2">T5 (Google)</h4>
                  <p className="text-sm text-gray-400 mb-3">Text-to-text transformer that frames all NLP tasks as text generation, enabling unified training.</p>
                  <div className="text-xs text-accent">Encoder-decoder architecture</div>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/40">
                  <h4 className="font-semibold text-white mb-2">LLaMA (Meta)</h4>
                  <p className="text-sm text-gray-400 mb-3">Open-source foundation models available in multiple sizes. Optimized for efficiency and research accessibility.</p>
                  <div className="text-xs text-accent">Decoder-only architecture</div>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/40">
                  <h4 className="font-semibold text-white mb-2">Claude (Anthropic)</h4>
                  <p className="text-sm text-gray-400 mb-3">Safety-focused LLM trained with Constitutional AI. Emphasizes helpfulness, harmlessness, and honesty.</p>
                  <div className="text-xs text-accent">Decoder-only with RLHF</div>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/40">
                  <h4 className="font-semibold text-white mb-2">Gemini (Google)</h4>
                  <p className="text-sm text-gray-400 mb-3">Multimodal LLM capable of understanding text, images, audio, and video in a unified model.</p>
                  <div className="text-xs text-accent">Multimodal architecture</div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="rounded-2xl p-8 border border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-cyan-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Real-World Applications</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                LLMs are transforming industries by automating complex language tasks, enhancing productivity, and enabling new forms of human-AI collaboration:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="h-5 w-5 text-cyan-400" />
                      <h4 className="font-semibold text-white">Conversational AI</h4>
                    </div>
                    <p className="text-sm text-gray-400">Chatbots, virtual assistants, customer support automation</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-2">
                      <Cpu className="h-5 w-5 text-blue-400" />
                      <h4 className="font-semibold text-white">Code Generation</h4>
                    </div>
                    <p className="text-sm text-gray-400">GitHub Copilot, code completion, debugging assistance</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="h-5 w-5 text-green-400" />
                      <h4 className="font-semibold text-white">Translation</h4>
                    </div>
                    <p className="text-sm text-gray-400">Real-time multilingual communication, localization</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="h-5 w-5 text-purple-400" />
                      <h4 className="font-semibold text-white">Content Creation</h4>
                    </div>
                    <p className="text-sm text-gray-400">Marketing copy, articles, creative writing, summarization</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-2">
                      <Brain className="h-5 w-5 text-pink-400" />
                      <h4 className="font-semibold text-white">Education & Research</h4>
                    </div>
                    <p className="text-sm text-gray-400">Tutoring, knowledge extraction, literature review</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="h-5 w-5 text-yellow-400" />
                      <h4 className="font-semibold text-white">Data Analysis</h4>
                    </div>
                    <p className="text-sm text-gray-400">Sentiment analysis, entity extraction, document classification</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges & Future */}
            <div className="rounded-2xl p-8 border border-pink-500/20 bg-gradient-to-r from-pink-900/20 to-rose-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-pink-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Challenges & The Future</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Current Challenges</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Hallucinations</div>
                        <div className="text-sm text-gray-400">Models can generate plausible-sounding but incorrect information</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Bias & Fairness</div>
                        <div className="text-sm text-gray-400">Training data biases can be amplified in model outputs</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Environmental Impact</div>
                        <div className="text-sm text-gray-400">Massive energy consumption for training and inference</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Future Directions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Multimodal Models</div>
                        <div className="text-sm text-gray-400">Unified understanding of text, images, audio, and video</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Efficient Architectures</div>
                        <div className="text-sm text-gray-400">Smaller models with comparable performance through distillation</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Better Reasoning</div>
                        <div className="text-sm text-gray-400">Enhanced logical reasoning and fact verification capabilities</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 border border-gray-700/40 bg-gray-900/40">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-accent" />
                  Key Takeaways
                </h3>
                <ul className="space-y-2">
                  {keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <span className="text-sm text-gray-300">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6 border border-gray-700/40 bg-gray-900/40">
                <h3 className="text-xl font-semibold text-white mb-4">Related Research & Articles</h3>
                <div className="space-y-2">
                  {relatedLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.url}
                      target={link.url.startsWith('http') ? "_blank" : undefined}
                      rel={link.url.startsWith('http') ? "noreferrer" : undefined}
                      className="group flex items-center justify-between gap-4 p-3 rounded-lg border border-gray-700/50 hover:border-accent/50 bg-gray-800/40 hover:bg-gray-800/60 transition-colors"
                    >
                      <span className="text-sm text-gray-200 group-hover:text-white">{link.title}</span>
                      <span className="text-accent text-xs">{link.url.startsWith('http') ? 'Open ↗' : 'Read →'}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="rounded-2xl p-6 border border-gray-700/40 bg-gray-900/40">
              <SocialShare
                title="Large Language Models (LLMs)"
                description="Comprehensive guide to Large Language Models: architecture, training, applications, and the future of AI-powered NLP."
                url="/knowledge-base/large-language-models"
                className="justify-between"
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
