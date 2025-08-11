import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SocialShare } from "@/components/social/SocialShare";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Calendar, Brain, Landmark, Sparkles, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-circuit-board.jpg";
import knowledgeImage from "@/assets/knowledge-illustration.jpg";

export default function AIEvolutionTimeline() {
  // SEO
  useEffect(() => {
    const title = "Key Milestones of AI Evolution | BIXORY AI";
    document.title = title;

    const metaDescContent = "Timeline of AI milestones: early symbolic AI, winters, deep learning, transformers, and modern LLM breakthroughs.";
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
    canonical.setAttribute("href", window.location.origin + "/knowledge-base/ai-evolution-timeline");
  }, []);

  const relatedLinks = [
    { title: "Dartmouth AI Workshop (1956)", url: "https://plato.stanford.edu/entries/artificial-intelligence/" },
    { title: "AlexNet and ImageNet (2012)", url: "https://proceedings.neurips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html" },
    { title: "Attention Is All You Need (2017)", url: "https://arxiv.org/abs/1706.03762" },
    { title: "GPT-3: Language Models are Few-Shot Learners (2020)", url: "https://arxiv.org/abs/2005.14165" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#0A192F] to-[#0D1B2A]">
        {/* Hero */}
        <section className="pt-28 md:pt-32 pb-8 md:pb-12">
          <div className="container mx-auto px-6">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/knowledge-base">Knowledge Base</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>AI Evolution</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">Key Milestones</span> of AI Evolution
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  A visual, practical timeline of artificial intelligence—from early symbolic systems and AI winters to deep learning, transformers, and today’s foundation models.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700/60 text-gray-300"><Calendar className="h-4 w-4" /> 1943 → Present</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700/60 text-gray-300"><Brain className="h-4 w-4" /> Deep Learning</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700/60 text-gray-300"><Layers className="h-4 w-4" /> Transformers</span>
                </div>
              </div>
              <div className="lg:pl-6">
                <img src={heroImage} alt="AI evolution circuit board visualization" className="w-full rounded-2xl shadow-2xl border border-gray-700/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Blocks */}
        <main className="container mx-auto px-6 pb-16">
          <div className="grid gap-8 lg:gap-10">
            {/* Early Foundations */}
            <div className="rounded-2xl p-8 border border-blue-500/20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="h-6 w-6 text-blue-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">1943–1957 · Early Foundations</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  <li>McCulloch & Pitts propose artificial neurons (1943)</li>
                  <li>Turing Test formalizes machine intelligence (1950)</li>
                  <li>Dartmouth Workshop coins “Artificial Intelligence” (1956)</li>
                </ul>
                <div className="lg:pl-6">
                  <img src={knowledgeImage} alt="Early AI foundations illustration" className="w-full rounded-xl border border-gray-700/40" />
                </div>
              </div>
            </div>

            {/* Symbolic AI */}
            <div className="rounded-2xl p-8 border border-green-500/20 bg-gradient-to-r from-green-900/20 to-teal-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-green-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">1958–1973 · Symbolic AI</h2>
              </div>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Perceptron popularizes early neural networks (1958)</li>
                <li>Limitations of symbolic methods become clear (1966–1973)</li>
              </ul>
            </div>

            {/* AI Winters & Expert Systems */}
            <div className="rounded-2xl p-8 border border-orange-500/20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-orange-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">1974–1993 · Winters and Expert Systems</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-3">Cycles of optimism and cuts shaped progress:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>First AI Winter: funding cuts and slowed research (1974–1980)</li>
                    <li>Expert Systems boom in enterprises (1980–1987)</li>
                    <li>Second AI Winter: hardware limits and brittleness (1987–1993)</li>
                  </ul>
                </div>
                <div className="bg-gray-800/40 border border-gray-700/40 rounded-xl p-4">
                  <p className="text-sm text-gray-400">Key lesson: brittle, hand-crafted knowledge struggles at scale without robust learning and data.</p>
                </div>
              </div>
            </div>

            {/* Statistical Learning Era */}
            <div className="rounded-2xl p-8 border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-indigo-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-purple-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">1994–2011 · Statistical Learning</h2>
              </div>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>SVMs, HMMs, probabilistic models dominate applications</li>
                <li>2006: “Deep Learning” term gains traction (Hinton et al.)</li>
              </ul>
            </div>

            {/* Deep Learning Breakthroughs */}
            <div className="rounded-2xl p-8 border border-pink-500/20 bg-gradient-to-r from-pink-900/20 to-rose-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-pink-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">2012–2017 · Deep Learning Breakthroughs</h2>
              </div>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>AlexNet wins ImageNet; GPU training mainstreamed (2012)</li>
                <li>GANs introduced (2014)</li>
                <li>AlphaGo defeats Lee Sedol (2016)</li>
              </ul>
            </div>

            {/* Transformers & LLMs */}
            <div className="rounded-2xl p-8 border border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-cyan-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">2017–Present · Transformers & LLMs</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  <li>Transformer introduced (2017); BERT, GPT-2 (2018–2019)</li>
                  <li>GPT-3 popularizes few-shot learning (2020)</li>
                  <li>ChatGPT and multimodal models reach mass adoption (2022–2024)</li>
                </ul>
                <div className="bg-gray-800/40 border border-gray-700/40 rounded-xl p-4">
                  <p className="text-sm text-gray-400">Enterprise value accelerates with RAG, agents, vector databases, and AI tooling.</p>
                </div>
              </div>
            </div>

            {/* Related */}
            <div className="rounded-2xl p-6 border border-gray-700/40 bg-gray-900/40">
              <h3 className="text-xl font-semibold text-white mb-4">Related Research</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {relatedLinks.map((link) => (
                  <a key={link.title} href={link.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 p-3 rounded-lg border border-gray-700/50 hover:border-[#00F0FF]/50 bg-gray-800/40 hover:bg-gray-800/60 transition-colors">
                    <span className="text-sm text-gray-200 group-hover:text-white">{link.title}</span>
                    <span className="text-[#00F0FF] text-xs">Open ↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="rounded-2xl p-6 border border-gray-700/40 bg-gray-900/40">
              <SocialShare
                title="Key Milestones of AI Evolution"
                description="From symbolic AI to transformers: explore the pivotal moments that shaped modern AI."
                url="/knowledge-base/ai-evolution-timeline"
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
