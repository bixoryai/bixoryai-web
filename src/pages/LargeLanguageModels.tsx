import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, CheckCircle } from "lucide-react";
import { SocialShare } from "@/components/social/SocialShare";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const LargeLanguageModels = () => {
  const keyTakeaways = [
    "LLMs are transformer-based models with billions of parameters trained on massive text datasets",
    "Built on attention mechanisms that understand context and relationships in language",
    "Capable of zero-shot learning - performing tasks without explicit training",
    "Applications span from content generation to code assistance and translation",
    "Challenges include computational costs, bias, hallucinations, and ethical considerations"
  ];

  const relatedLinks = [
    { title: "What is an AI Model?", url: "/knowledge-base/what-is-ai-model" },
    { title: "Understanding RAG Systems", url: "/knowledge-base/understanding-rag" },
    { title: "Advanced Prompt Engineering", url: "/knowledge-base/advanced-prompt-engineering" }
  ];

  const content = `
    <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
      <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
      What are Large Language Models?
    </h2>
    <p class="text-gray-300 mb-6 leading-relaxed">
      Large Language Models (LLMs) are advanced artificial intelligence systems trained on massive amounts of text data to understand and generate human-like language. Built on transformer architecture, these models have revolutionized natural language processing by achieving unprecedented levels of language understanding and generation capabilities.
    </p>
    <p class="text-gray-300 mb-6 leading-relaxed">
      LLMs are characterized by their enormous scale, typically containing billions or even trillions of parameters. These parameters allow the models to capture complex patterns in language, enabling them to perform a wide variety of tasks without task-specific training—a capability known as transfer learning.
    </p>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key Characteristics of LLMs</h2>
    
    <h3 class="text-xl font-semibold text-white mb-3 mt-6">1. Massive Scale</h3>
    <p class="text-gray-300 mb-4 leading-relaxed">
      Modern LLMs contain billions to trillions of parameters, trained on diverse datasets spanning books, websites, research papers, and various text sources from the internet. This massive scale enables the models to capture nuanced language patterns, contextual understanding, and world knowledge.
    </p>
    <div class="bg-primary/40 border border-gray-700 rounded-lg p-4 mb-4">
      <p class="text-gray-300 mb-2"><strong class="text-accent">Scale Examples:</strong></p>
      <ul class="list-disc list-inside text-gray-300 space-y-1">
        <li>GPT-3: 175 billion parameters</li>
        <li>GPT-4: Estimated over 1 trillion parameters</li>
        <li>LLaMA 2: Models ranging from 7B to 70B parameters</li>
        <li>Training datasets: Hundreds of billions of tokens</li>
      </ul>
    </div>

    <h3 class="text-xl font-semibold text-white mb-3 mt-6">2. Transformer Architecture</h3>
    <p class="text-gray-300 mb-4 leading-relaxed">
      LLMs are built on transformer networks, introduced in the groundbreaking "Attention is All You Need" paper. The transformer architecture uses self-attention mechanisms that allow the model to weigh the importance of different words in a sentence, understanding context and relationships regardless of their distance in the text.
    </p>
    <div class="bg-primary/40 border border-gray-700 rounded-lg p-4 mb-4">
      <p class="text-gray-300 mb-2"><strong class="text-accent">Key Components:</strong></p>
      <ul class="list-disc list-inside text-gray-300 space-y-1">
        <li>Self-attention layers that capture word relationships</li>
        <li>Feedforward neural networks for processing</li>
        <li>Positional encodings to understand word order</li>
        <li>Multiple layers enabling hierarchical understanding</li>
      </ul>
    </div>

    <h3 class="text-xl font-semibold text-white mb-3 mt-6">3. Transfer Learning & Fine-tuning</h3>
    <p class="text-gray-300 mb-4 leading-relaxed">
      Pre-trained on general language understanding, LLMs can be fine-tuned for specific tasks with minimal additional training data. This transfer learning approach dramatically reduces the time, data, and computational resources needed for specialized applications.
    </p>

    <h3 class="text-xl font-semibold text-white mb-3 mt-6">4. Zero-Shot and Few-Shot Learning</h3>
    <p class="text-gray-300 mb-4 leading-relaxed">
      LLMs can perform tasks they weren't explicitly trained for by understanding instructions and context from prompts alone. Zero-shot learning requires no examples, while few-shot learning uses just a handful of examples to adapt to new tasks—mimicking human-like learning flexibility.
    </p>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">How LLMs Work</h2>
    <div class="space-y-4 mb-6">
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">1</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Tokenization</h4>
          <p class="text-gray-300">Input text is broken down into smaller units called tokens (words, subwords, or characters) that the model can process. Modern tokenizers use byte-pair encoding (BPE) or similar algorithms for efficient representation.</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">2</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Embedding</h4>
          <p class="text-gray-300">Tokens are converted into high-dimensional numerical vectors (embeddings) that capture semantic meaning and relationships between words. Similar words have similar embeddings in vector space.</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">3</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Attention Mechanism</h4>
          <p class="text-gray-300">The transformer's attention layers analyze relationships between all tokens, understanding context and dependencies regardless of distance in the text. This allows the model to focus on relevant information when processing each word.</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">4</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Generation</h4>
          <p class="text-gray-300">The model predicts the next token based on the input context and all previous tokens, repeating this process autoregressively to generate coherent, contextually appropriate text sequences.</p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Popular Large Language Models</h2>
    <div class="space-y-4 mb-6">
      <div class="bg-primary/40 border-l-4 border-accent rounded-r-lg p-4">
        <h3 class="text-xl font-semibold text-white mb-2">GPT (Generative Pre-trained Transformer)</h3>
        <p class="text-gray-300">OpenAI's GPT series, including ChatGPT and GPT-4, represents state-of-the-art language models with billions of parameters. Known for exceptional generation quality, reasoning capabilities, and versatility across tasks.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h3 class="text-xl font-semibold text-white mb-2">Claude</h3>
        <p class="text-gray-300">Anthropic's AI assistant focused on safety, helpfulness, and harmlessness. Claude excels at nuanced conversations, complex reasoning, and following detailed instructions with strong ethical alignment.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-accent rounded-r-lg p-4">
        <h3 class="text-xl font-semibold text-white mb-2">LLaMA (Large Language Model Meta AI)</h3>
        <p class="text-gray-300">Meta's efficient open-source models designed to be more accessible while maintaining strong performance. Available in various sizes (7B to 70B parameters) for different computational requirements.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h3 class="text-xl font-semibold text-white mb-2">Gemini</h3>
        <p class="text-gray-300">Google's multimodal AI model capable of understanding and generating text, images, audio, and video. Designed for seamless integration across Google's ecosystem with strong reasoning capabilities.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-accent rounded-r-lg p-4">
        <h3 class="text-xl font-semibold text-white mb-2">BERT (Bidirectional Encoder Representations)</h3>
        <p class="text-gray-300">Google's bidirectional model that reads text in both directions simultaneously, excelling at understanding context for tasks like question answering, sentiment analysis, and named entity recognition.</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Applications of LLMs</h2>
    <p class="text-gray-300 mb-4 leading-relaxed">
      Large Language Models have transformed numerous industries and applications:
    </p>
    <div class="grid md:grid-cols-2 gap-6 mb-6">
      <div class="bg-gradient-to-br from-primary via-primary to-blue-900 border border-gray-700 rounded-lg p-6">
        <div class="text-accent mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </div>
        <h4 class="text-white font-semibold mb-2">Content Generation</h4>
        <p class="text-gray-300 text-sm">Creative writing, article creation, marketing copy, social media posts, and storytelling with human-like quality and style adaptation.</p>
      </div>
      <div class="bg-gradient-to-br from-primary via-primary to-blue-900 border border-gray-700 rounded-lg p-6">
        <div class="text-accent mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        </div>
        <h4 class="text-white font-semibold mb-2">Code Generation</h4>
        <p class="text-gray-300 text-sm">Programming assistance, code completion, debugging, documentation generation, and translating between programming languages with high accuracy.</p>
      </div>
      <div class="bg-gradient-to-br from-primary via-primary to-blue-900 border border-gray-700 rounded-lg p-6">
        <div class="text-accent mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
        </div>
        <h4 class="text-white font-semibold mb-2">Translation & Localization</h4>
        <p class="text-gray-300 text-sm">High-quality language translation, cultural adaptation, and localization services maintaining context and nuance across languages.</p>
      </div>
      <div class="bg-gradient-to-br from-primary via-primary to-blue-900 border border-gray-700 rounded-lg p-6">
        <div class="text-accent mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h4 class="text-white font-semibold mb-2">Question Answering</h4>
        <p class="text-gray-300 text-sm">Information retrieval, knowledge synthesis, research assistance, and conversational AI providing accurate, contextual answers.</p>
      </div>
      <div class="bg-gradient-to-br from-primary via-primary to-blue-900 border border-gray-700 rounded-lg p-6">
        <div class="text-accent mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </div>
        <h4 class="text-white font-semibold mb-2">Summarization & Analysis</h4>
        <p class="text-gray-300 text-sm">Document summarization, sentiment analysis, text classification, and extracting key insights from large volumes of text.</p>
      </div>
      <div class="bg-gradient-to-br from-primary via-primary to-blue-900 border border-gray-700 rounded-lg p-6">
        <div class="text-accent mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </div>
        <h4 class="text-white font-semibold mb-2">Conversational AI</h4>
        <p class="text-gray-300 text-sm">Chatbots, virtual assistants, customer service automation, and interactive tutoring systems with natural dialogue capabilities.</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Challenges and Considerations</h2>
    <div class="space-y-4 mb-6">
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h4 class="text-white font-semibold mb-2">Computational Resources</h4>
        <p class="text-gray-300">Training and running LLMs requires massive computational power, specialized hardware (GPUs/TPUs), and significant energy consumption. This raises environmental concerns and creates barriers to access for smaller organizations.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h4 class="text-white font-semibold mb-2">Bias and Fairness</h4>
        <p class="text-gray-300">LLMs can inherit and amplify biases present in their training data, potentially perpetuating stereotypes, unfair representations, or discriminatory patterns. Careful curation and bias mitigation techniques are essential.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h4 class="text-white font-semibold mb-2">Hallucinations</h4>
        <p class="text-gray-300">Models may generate plausible-sounding but factually incorrect or nonsensical information. This "hallucination" problem requires verification systems and user awareness when deploying LLMs in critical applications.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h4 class="text-white font-semibold mb-2">Privacy and Security</h4>
        <p class="text-gray-300">Concerns about data privacy, potential memorization of training data, prompt injection attacks, and the need for responsible deployment practices with proper safeguards and access controls.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h4 class="text-white font-semibold mb-2">Interpretability</h4>
        <p class="text-gray-300">LLMs operate as "black boxes" where understanding why a model produced a specific output is challenging. This lack of interpretability poses problems for debugging, trust, and deployment in regulated industries.</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Future of LLMs</h2>
    <p class="text-gray-300 mb-4 leading-relaxed">
      The field of Large Language Models continues to evolve rapidly with groundbreaking developments:
    </p>
    <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
      <li><strong class="text-accent">Multimodal Models:</strong> Integration of text, images, audio, and video understanding in unified models capable of cross-modal reasoning and generation.</li>
      <li><strong class="text-accent">Efficiency Improvements:</strong> Research into smaller, more efficient models through distillation, quantization, and novel architectures that maintain performance with reduced computational costs.</li>
      <li><strong class="text-accent">Enhanced Reasoning:</strong> Development of models with improved logical reasoning, mathematical capabilities, and multi-step problem-solving abilities.</li>
      <li><strong class="text-accent">Retrieval-Augmented Generation:</strong> Combining LLMs with external knowledge bases and search systems for more accurate, up-to-date, and factual responses.</li>
      <li><strong class="text-accent">Specialized Models:</strong> Domain-specific LLMs trained for particular industries (medical, legal, scientific) with enhanced expertise and terminology understanding.</li>
      <li><strong class="text-accent">Responsible AI:</strong> Continued focus on safety, alignment, bias reduction, and ethical deployment practices to ensure beneficial AI development.</li>
    </ul>

    <div class="bg-gradient-to-r from-secondary/20 to-accent/20 border-l-4 border-secondary rounded-r-lg p-6 mt-8">
      <p class="text-white text-lg font-semibold mb-2">Working with LLMs</p>
      <p class="text-gray-300">
        To effectively leverage Large Language Models, focus on prompt engineering—crafting clear, specific instructions that guide the model toward desired outputs. Experiment with different prompting techniques like chain-of-thought reasoning, few-shot examples, and role-based instructions. Always validate LLM outputs for accuracy, be aware of their limitations, and combine them with retrieval systems or other AI techniques for production applications. The future of AI development lies in thoughtfully integrating LLMs into broader systems that enhance human capabilities while maintaining safety and reliability.
      </p>
    </div>
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-blue-900">
      <Navbar />
      
      <Hero
        title="Large Language Models (LLMs)"
        subtitle="Comprehensive Guide to Transformer-Based AI Systems"
        backgroundImage="/lovable-uploads/d810ceaa-aedc-4471-b105-bfb9efa741c7.png"
        showButtons={false}
      />

      <div className="container mx-auto px-6 py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/knowledge-base">Knowledge Base</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Large Language Models</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/80 border-gray-700 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/40">
                  Guide
                </Badge>
                <Badge variant="outline" className="border-accent/40 text-accent">
                  AI Models
                </Badge>
                <Badge variant="outline" className="border-accent/40 text-accent">
                  LLMs
                </Badge>
              </div>

              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-primary/80 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-white">Key Takeaways</h3>
                </div>
                <ul className="space-y-3">
                  {keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-secondary mt-1">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-white">Related Articles</h3>
                </div>
                <ul className="space-y-3">
                  {relatedLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.url}
                        className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                      >
                        <TrendingUp className="w-4 h-4" />
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/80 border-gray-700 mb-8">
            <CardContent className="p-6">
              <SocialShare 
                url={window.location.href}
                title="Large Language Models (LLMs) - BIXORY AI"
                description="Comprehensive guide to Large Language Models - transformer-based AI systems achieving general-purpose language understanding and generation."
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LargeLanguageModels;
