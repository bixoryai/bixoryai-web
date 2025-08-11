import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArticleTemplate } from "@/components/knowledge-base/templates/ArticleTemplate";

export default function AIEvolutionTimeline() {
  const title = "Key Milestones of AI Evolution";
  const abstract = "A concise timeline of artificial intelligence from early theoretical roots to modern breakthroughs, highlighting pivotal moments, winter periods, and the emergence of deep learning and LLMs.";
  const keyTakeaways = [
    "AI has progressed in waves, with periods of rapid innovation followed by AI winters",
    "Statistical learning and compute scaling enabled modern deep learning",
    "Transformer architectures unlocked foundation models and LLMs",
    "Practical AI value surged with better data, GPUs, and tooling"
  ];
  const tags = ["AI History", "Timeline", "Milestones", "Evolution"];

  const content = `
<h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Timeline Highlights</h2>
<div class="space-y-6 text-gray-300">
  <div>
    <h3 class="text-white font-semibold">1943–1957: Early Foundations</h3>
    <ul class="list-disc pl-6 text-sm md:text-base space-y-1">
      <li>1943: McCulloch & Pitts propose artificial neurons</li>
      <li>1950: Turing Test introduced; question of machine intelligence formalized</li>
      <li>1956: Dartmouth Workshop coins the term "Artificial Intelligence"</li>
    </ul>
  </div>
  <div>
    <h3 class="text-white font-semibold">1958–1973: Symbolic AI and First Optimism</h3>
    <ul class="list-disc pl-6 space-y-1">
      <li>1958: Perceptron (Rosenblatt) sparks early neural network research</li>
      <li>1966–1973: Limits of symbolic methods become apparent</li>
    </ul>
  </div>
  <div>
    <h3 class="text-white font-semibold">1974–1980: First AI Winter</h3>
    <p class="text-sm md:text-base">Funding cuts follow unmet expectations; research slows.</p>
  </div>
  <div>
    <h3 class="text-white font-semibold">1980–1987: Expert Systems Boom</h3>
    <ul class="list-disc pl-6 space-y-1">
      <li>Knowledge-based systems rise in enterprises</li>
      <li>1986: Backpropagation re-popularizes neural nets</li>
    </ul>
  </div>
  <div>
    <h3 class="text-white font-semibold">1987–1993: Second AI Winter</h3>
    <p class="text-sm md:text-base">Hardware limits and brittle systems reduce investment.</p>
  </div>
  <div>
    <h3 class="text-white font-semibold">1994–2011: Statistical Learning Era</h3>
    <ul class="list-disc pl-6 space-y-1">
      <li>SVMs, HMMs, and probabilistic models dominate</li>
      <li>2006: "Deep Learning" term (Hinton et al.) gains traction</li>
    </ul>
  </div>
  <div>
    <h3 class="text-white font-semibold">2012–2017: Deep Learning Breakthroughs</h3>
    <ul class="list-disc pl-6 space-y-1">
      <li>2012: AlexNet wins ImageNet; GPU training mainstreamed</li>
      <li>2014: GANs introduced</li>
      <li>2016: AlphaGo defeats Lee Sedol</li>
    </ul>
  </div>
  <div>
    <h3 class="text-white font-semibold">2017–2020: Transformers and Pretraining</h3>
    <ul class="list-disc pl-6 space-y-1">
      <li>2017: Attention Is All You Need (Transformer)</li>
      <li>2018–2019: BERT, GPT-2 demonstrate powerful pretraining</li>
    </ul>
  </div>
  <div>
    <h3 class="text-white font-semibold">2020–Present: Foundation Models & LLMs</h3>
    <ul class="list-disc pl-6 space-y-1">
      <li>2020: GPT-3 popularizes few-shot learning</li>
      <li>2022–2024: ChatGPT, multimodal models reach mass adoption</li>
      <li>RAG, agents, and tooling accelerate enterprise value</li>
    </ul>
  </div>
</div>`;

  return (
    <>
      <Navbar />
      <ArticleTemplate
        title={title}
        abstract={abstract}
        content={content}
        author="BIXORY AI"
        readingTime={7}
        publishedAt={new Date().toISOString()}
        tags={tags}
        keyTakeaways={keyTakeaways}
      />
      <Footer />
    </>
  );
}
