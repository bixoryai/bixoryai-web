/** Production origin. Canonical and social tags always use this host, not the preview host. */
export const SITE_ORIGIN = "https://bixory.ai";

export const OG_IMAGE = `${SITE_ORIGIN}/lovable-uploads/3e317ebb-6aca-4d6a-8d86-94608c200a42.png`;

/**
 * GA4 measurement ID. Leave empty until one is supplied.
 * A placeholder or blank value does not load gtag or record events.
 */
export const GA_MEASUREMENT_ID = "";

export function isAnalyticsConfigured(id: string = GA_MEASUREMENT_ID): boolean {
  return /^G-[A-Z0-9]+$/.test(id);
}

export type PageMeta = {
  title: string;
  description: string;
  /** When false, the URL is left out of the sitemap and marked noindex. */
  index?: boolean;
};

export const DEFAULT_META: PageMeta = {
  title: "Bixory AI",
  description: "Bixory AI - Build Intelligence X with AI",
};

export const NOT_FOUND_META: PageMeta = {
  title: "Page not found | Bixory AI",
  description: "That address is not on bixory.ai.",
  index: false,
};

/** One title and description per indexable route. Wording stays within the pages that already exist. */
export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Bixory AI | AI Education, Custom Solutions, and Consulting",
    description:
      "Bixory AI helps teams learn AI, build custom solutions, and plan enterprise adoption. Build Intelligence X with AI.",
  },
  "/about": {
    title: "About Bixory AI",
    description: "The story behind Bixory AI and how the team approaches AI education, custom development, and enterprise consultation.",
  },
  "/contact": {
    title: "Contact Bixory AI",
    description: "Contact Bixory AI at develop@bixory.ai or +1 (408) 658-8538 about AI training, custom solutions, or a consultation.",
  },
  "/solutions": {
    title: "AI Solutions | Bixory AI",
    description: "AI strategy and consulting, data solutions, custom AI development, and integration support from Bixory AI.",
  },
  "/solutions/ai-strategy-consulting": {
    title: "AI Strategy Consulting | Bixory AI",
    description: "Strategic AI implementation roadmaps, readiness assessments, and consulting from Bixory AI.",
  },
  "/solutions/ai-data-solutions": {
    title: "AI Data Solutions | Bixory AI",
    description: "Data preparation, privacy-preserving analytics, and AI-ready data services from Bixory AI.",
  },
  "/solutions/custom-ai-development": {
    title: "Custom AI Development | Bixory AI",
    description: "Custom models, agents, and AI applications designed for a specific business workflow.",
  },
  "/solutions/ai-integration-support": {
    title: "AI Integration and Support | Bixory AI",
    description: "Integration of AI into existing systems, with ongoing support options from Bixory AI.",
  },
  "/ai-empowerment": {
    title: "AI Education and Training | Bixory AI",
    description: "AI education and training from Bixory AI: workshops, learning paths, and team enablement.",
  },
  "/projects": {
    title: "AI Projects | Bixory AI",
    description: "A gallery of AI projects from Bixory AI, including models, agents, and applied tools.",
  },
  "/careers": {
    title: "Careers | Bixory AI",
    description: "Open roles at Bixory AI.",
  },
  "/job-application": {
    title: "Apply | Bixory AI Careers",
    description: "Apply for an open role at Bixory AI.",
  },
  "/ai-tools": {
    title: "Popular AI Tools | Bixory AI",
    description: "A catalog of third-party AI tools, with categories and links, published by Bixory AI.",
  },
  "/knowledge-base": {
    title: "AI Knowledge Base | Bixory AI",
    description: "Guides and articles on AI concepts, models, agents, and development, published by Bixory AI.",
  },
  "/knowledge-base/getting-started-ai-development": {
    title: "Getting Started with AI Development | Bixory AI",
    description: "A beginner guide to starting AI development, from Bixory AI's knowledge base.",
  },
  "/knowledge-base/advanced-prompt-engineering": {
    title: "Advanced Prompt Engineering | Bixory AI",
    description: "Prompt engineering techniques explained in the Bixory AI knowledge base.",
  },
  "/knowledge-base/mcp-explained": {
    title: "Model Context Protocol Explained | Bixory AI",
    description: "What the Model Context Protocol is and how it is used, from the Bixory AI knowledge base.",
  },
  "/knowledge-base/latest-ml-trends": {
    title: "Latest Trends in Machine Learning | Bixory AI",
    description: "A knowledge-base article on machine learning trends, published by Bixory AI.",
  },
  "/knowledge-base/understanding-rag": {
    title: "Understanding RAG | Bixory AI",
    description: "Retrieval-augmented generation explained in the Bixory AI knowledge base.",
  },
  "/knowledge-base/ai-ethics-responsible-development": {
    title: "AI Ethics and Responsible Development | Bixory AI",
    description: "An article on ethical and responsible AI development from the Bixory AI knowledge base.",
  },
  "/knowledge-base/ai-dev-environment-setup": {
    title: "AI Development Environment Setup | Bixory AI",
    description: "How to set up an AI development environment, from the Bixory AI knowledge base.",
  },
  "/knowledge-base/building-first-neural-network": {
    title: "Building Your First Neural Network | Bixory AI",
    description: "A tutorial for building a first neural network, from the Bixory AI knowledge base.",
  },
  "/knowledge-base/ai-evolution-timeline": {
    title: "Key Milestones of AI Evolution | Bixory AI",
    description: "Timeline of AI milestones: early symbolic AI, winters, deep learning, transformers, and modern LLM breakthroughs.",
  },
  "/knowledge-base/types-of-ai": {
    title: "Types of Artificial Intelligence | Bixory AI",
    description: "Reactive, limited-memory, theory-of-mind, and self-aware AI, explained by Bixory AI.",
  },
  "/knowledge-base/what-is-ai-model": {
    title: "What Is an AI Model? | Bixory AI",
    description: "How an AI model learns from data, from the Bixory AI knowledge base.",
  },
  "/knowledge-base/machine-learning-fundamentals": {
    title: "Machine Learning Fundamentals | Bixory AI",
    description: "Core machine learning ideas explained in the Bixory AI knowledge base.",
  },
  "/knowledge-base/large-language-models": {
    title: "Large Language Models (LLMs) | Bixory AI",
    description: "Guide to large language models: architecture, training, applications, and natural language processing.",
  },
  "/knowledge-base/three-types-of-machine-learning": {
    title: "Three Types of Machine Learning | Bixory AI",
    description: "Supervised, unsupervised, and reinforcement learning, explained by Bixory AI.",
  },
  "/knowledge-base/building-ai-agents": {
    title: "Building AI Agents | Bixory AI",
    description: "A knowledge-base guide to building AI agents, published by Bixory AI.",
  },
  "/technical-docs": {
    title: "Technical Documentation | Bixory AI",
    description: "Technical guides and references for building with the tools Bixory AI writes about.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Bixory AI",
    description: "How Bixory AI handles personal information. Last updated June 11, 2025.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Bixory AI",
    description: "Terms for using Bixory AI's website and services. Last updated June 11, 2025.",
  },
  "/auth": { title: "Sign in | Bixory AI", description: "Sign in to Bixory AI.", index: false },
  "/admin": { title: "Admin | Bixory AI", description: "Bixory AI admin.", index: false },
  "/admin-tools": { title: "Admin tools | Bixory AI", description: "Bixory AI admin tools.", index: false },
  "/admin-test": { title: "Admin test | Bixory AI", description: "Bixory AI admin test.", index: false },
};

export const SITEMAP_PATHS = Object.entries(PAGE_META)
  .filter(([, meta]) => meta.index !== false)
  .map(([path]) => path);
