import { GuideTemplate } from "@/components/knowledge-base/templates/GuideTemplate";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuideNavigation from "@/components/navigation/GuideNavigation";
import { Clock } from "lucide-react";
import solutionsHero from "@/assets/solutions-hero.jpg";

const MCPExplained = () => {
  const sections = [
    {
      id: "what-is-mcp",
      title: "What is Model Context Protocol (MCP)?",
      content: `**Model Context Protocol (MCP)** is an open-source specification developed by Anthropic that standardizes how AI models and development tools interact with external data sources and services.

Think of MCP as a **universal translator** between AI models and the tools they need to access. Instead of each AI application creating custom integrations for every service, MCP provides a standardized way for AI models to:

• **Connect to databases** and retrieve relevant information
• **Access file systems** and read/write documents
• **Interact with APIs** and web services
• **Execute code** in secure environments
• **Browse the web** and fetch real-time data

**Key Benefits:**
• **Standardization**: One protocol for all AI tool integrations
• **Security**: Built-in permissions and sandboxing
• **Efficiency**: Reusable components across different AI applications
• **Flexibility**: Easy to extend and customize for specific needs

The protocol enables AI models to maintain context across different tools and services, making them more capable and useful for complex tasks.`
    },
    {
      id: "how-mcp-works",
      title: "How MCP Works: Architecture Overview",
      content: `MCP follows a **client-server architecture** where AI applications (clients) communicate with various tools and services (servers) through a standardized protocol.

**Core Components:**

**1. MCP Client (AI Application)**
• Sends requests for data or actions
• Manages authentication and permissions
• Handles responses and error cases
• Examples: Claude Desktop, custom AI applications

**2. MCP Server (Tool/Service)**
• Exposes specific capabilities through standardized endpoints
• Handles data retrieval, processing, or actions
• Examples: Database connectors, file system access, API integrations

**3. Protocol Layer**
• JSON-RPC based communication
• Standardized message formats
• Built-in error handling and validation
• Transport agnostic (HTTP, WebSocket, IPC)

**Communication Flow:**
\`\`\`
AI Application → MCP Request → Tool/Service
               ← MCP Response ←
\`\`\`

**Message Types:**
• **Resources**: Request data from external sources
• **Tools**: Execute actions or operations
• **Prompts**: Get structured prompts with context
• **Sampling**: Request AI model completions

This architecture ensures that any MCP-compatible AI application can work with any MCP-compatible tool without custom integration work.`
    },
    {
      id: "setting-up-mcp",
      title: "Setting Up Your First MCP Integration",
      content: `Let's walk through setting up a basic MCP server that provides file system access to AI models.

**Prerequisites:**
• Node.js 18+ or Python 3.8+
• Basic understanding of JSON-RPC
• An AI application that supports MCP (like Claude Desktop)

**Step 1: Install MCP SDK**

For Node.js:
\`\`\`bash
npm install @modelcontextprotocol/sdk
\`\`\`

For Python:
\`\`\`bash
pip install mcp
\`\`\`

**Step 2: Create a Basic MCP Server**

\`\`\`javascript
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'filesystem-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

// Handle resource requests
server.setRequestHandler('resources/list', async () => {
  return {
    resources: [
      {
        uri: 'file:///documents',
        name: 'Documents',
        mimeType: 'inode/directory',
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler('tools/list', async () => {
  return {
    tools: [
      {
        name: 'read_file',
        description: 'Read contents of a file',
        inputSchema: {
          type: 'object',
          properties: {
            path: { type: 'string' },
          },
          required: ['path'],
        },
      },
    ],
  };
});

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
\`\`\`

**Step 3: Configure Your AI Application**

Add your MCP server to your AI application's configuration (e.g., Claude Desktop config):
\`\`\`json
{
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": ["path/to/your/server.js"]
    }
  }
}
\`\`\`

Your AI model can now securely access and read files through the MCP protocol!`
    },
    {
      id: "mcp-capabilities",
      title: "MCP Capabilities and Use Cases",
      content: `MCP enables a wide range of capabilities that make AI models more powerful and practical for real-world applications.

**Core Capabilities:**

**1. Resources**
• **Database Access**: Query SQL databases, NoSQL stores
• **File Systems**: Read/write files, directory traversal
• **Web Content**: Fetch web pages, APIs, RSS feeds
• **Documents**: Access PDFs, Word docs, spreadsheets

**2. Tools**
• **Code Execution**: Run Python, JavaScript, shell commands
• **API Integrations**: Call REST APIs, GraphQL endpoints
• **Data Processing**: Transform, filter, aggregate data
• **External Services**: Email, notifications, webhooks

**3. Prompts**
• **Dynamic Templates**: Context-aware prompt generation
• **Multi-modal**: Text, image, audio prompt combinations
• **Personalization**: User-specific prompt adaptations

**Real-World Use Cases:**

**Software Development**
• Access codebases and documentation
• Execute tests and deploy applications
• Integrate with Git, Jira, CI/CD systems

**Data Analysis**
• Connect to analytics databases
• Generate reports and visualizations
• Automate data pipelines

**Content Creation**
• Access content management systems
• Integrate with design tools
• Publish to multiple platforms

**Business Operations**
• Connect to CRM and ERP systems
• Automate workflows and approvals
• Generate compliance reports

**Research and Learning**
• Access academic databases
• Retrieve real-time information
• Synthesize information from multiple sources

The key advantage is that once you build an MCP integration, it works with any MCP-compatible AI application, maximizing reusability and reducing development effort.`
    },
    {
      id: "security-best-practices",
      title: "Security and Best Practices",
      content: `Security is paramount when giving AI models access to external systems. MCP includes several built-in security features and best practices.

**Built-in Security Features:**

**1. Permission System**
• **Capability Declaration**: Servers must explicitly declare what they can do
• **Resource Scoping**: Limit access to specific files, databases, or APIs
• **Action Restrictions**: Control which operations are allowed

**2. Sandboxing**
• **Process Isolation**: MCP servers run in separate processes
• **Network Restrictions**: Limit network access and destinations
• **Resource Limits**: CPU, memory, and execution time constraints

**3. Authentication & Authorization**
• **Token-based Auth**: Secure API access with proper credentials
• **Role-based Access**: Different permissions for different use cases
• **Audit Logging**: Track all interactions and requests

**Best Practices:**

**For MCP Server Development:**
\`\`\`javascript
// Always validate inputs
server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params;
  
  // Input validation
  if (!name || typeof name !== 'string') {
    throw new Error('Invalid tool name');
  }
  
  // Sanitize file paths
  if (name === 'read_file') {
    const safePath = path.resolve(SAFE_DIRECTORY, args.path);
    if (!safePath.startsWith(SAFE_DIRECTORY)) {
      throw new Error('Path traversal attempt blocked');
    }
  }
  
  // Execute with proper error handling
  try {
    return await executeTool(name, args);
  } catch (error) {
    console.error('Tool execution failed:', error);
    throw new Error('Tool execution failed');
  }
});
\`\`\`

**For AI Application Integration:**
• **Principle of Least Privilege**: Only grant necessary permissions
• **Regular Audits**: Review and monitor MCP server access
• **Environment Separation**: Use different servers for dev/staging/prod
• **Data Classification**: Protect sensitive data with appropriate controls

**Configuration Security:**
• Store credentials securely (environment variables, key vaults)
• Use HTTPS for all network communications
• Implement rate limiting and request validation
• Regular security updates for MCP SDK and dependencies

Remember: MCP enables powerful AI capabilities, but with great power comes great responsibility for security.`
    },
    {
      id: "advanced-patterns",
      title: "Advanced MCP Patterns and Techniques",
      content: `Once you're comfortable with basic MCP implementations, these advanced patterns will help you build more sophisticated and efficient integrations.

**1. Composable MCP Servers**

Instead of building monolithic servers, create small, focused servers that can be composed:

\`\`\`javascript
// Database server
const dbServer = new MCPServer('database-server', {
  tools: ['query_sql', 'insert_record'],
  resources: ['tables', 'schemas']
});

// File server
const fileServer = new MCPServer('file-server', {
  tools: ['read_file', 'write_file'],
  resources: ['documents', 'images']
});

// API server
const apiServer = new MCPServer('api-server', {
  tools: ['http_request', 'webhook'],
  resources: ['endpoints']
});
\`\`\`

**2. Context-Aware Resource Discovery**

Implement dynamic resource discovery based on user context:

\`\`\`javascript
server.setRequestHandler('resources/list', async (request) => {
  const userContext = request.meta?.userContext;
  const resources = [];
  
  // Add user-specific resources
  if (userContext?.role === 'developer') {
    resources.push({
      uri: 'git://repositories',
      name: 'Code Repositories',
      description: 'Access to development repositories'
    });
  }
  
  if (userContext?.department === 'marketing') {
    resources.push({
      uri: 'cms://content',
      name: 'Content Management',
      description: 'Marketing content and campaigns'
    });
  }
  
  return { resources };
});
\`\`\`

**3. Streaming and Real-time Updates**

For large datasets or real-time applications:

\`\`\`javascript
server.setRequestHandler('resources/read', async (request) => {
  const { uri } = request.params;
  
  if (uri.startsWith('stream://')) {
    return {
      contents: [{
        uri,
        mimeType: 'application/json-stream',
        text: await setupStreamingResponse(uri)
      }]
    };
  }
});
\`\`\`

**4. Intelligent Caching Strategies**

Implement smart caching to improve performance:

\`\`\`javascript
const cache = new Map();

server.setRequestHandler('tools/call', async (request) => {
  const cacheKey = generateCacheKey(request);
  
  // Check cache first
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (!isCacheExpired(cached)) {
      return cached.result;
    }
  }
  
  // Execute and cache result
  const result = await executeTool(request);
  cache.set(cacheKey, {
    result,
    timestamp: Date.now(),
    ttl: getTTLForTool(request.params.name)
  });
  
  return result;
});
\`\`\`

**5. Error Recovery and Resilience**

Build robust error handling and recovery mechanisms:

\`\`\`javascript
class ResilientMCPServer extends MCPServer {
  async executeWithRetry(operation, maxRetries = 3) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        if (attempt === maxRetries - 1) throw error;
        
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
}
\`\`\`

**6. Multi-tenant Support**

Design servers that can handle multiple users or organizations:

\`\`\`javascript
server.setRequestHandler('resources/list', async (request) => {
  const tenantId = extractTenantId(request);
  const resources = await getResourcesForTenant(tenantId);
  
  return {
    resources: resources.map(resource => ({
      ...resource,
      uri: \`tenant://\${tenantId}/\${resource.path}\`
    }))
  };
});
\`\`\`

These patterns help you build production-ready MCP integrations that are scalable, maintainable, and robust.`
    },
    {
      id: "ecosystem-future",
      title: "MCP Ecosystem and Future Developments",
      content: `The MCP ecosystem is rapidly evolving, with new tools, integrations, and capabilities being developed by both Anthropic and the community.

**Current Ecosystem:**

**Official Integrations:**
• **Claude Desktop**: Built-in MCP support for local tool access
• **Claude API**: Server-side MCP integration capabilities
• **Development Tools**: SDKs for Python, TypeScript/JavaScript, and more

**Community Projects:**
• **Database Connectors**: PostgreSQL, MySQL, MongoDB, Redis
• **Cloud Services**: AWS, GCP, Azure integrations
• **Development Tools**: Git, Docker, Kubernetes controllers
• **Productivity**: Google Workspace, Microsoft 365, Notion
• **Analytics**: Jupyter notebooks, data visualization tools

**Popular MCP Servers:**

**1. Filesystem Server**
\`\`\`bash
npm install @modelcontextprotocol/server-filesystem
\`\`\`
• Safe file system access with path restrictions
• Support for multiple file formats
• Built-in security controls

**2. SQLite Server**
\`\`\`bash
npm install @modelcontextprotocol/server-sqlite
\`\`\`
• Direct SQLite database queries
• Schema inspection capabilities
• Transaction support

**3. Web Search Server**
\`\`\`bash
npm install @modelcontextprotocol/server-web-search
\`\`\`
• Real-time web search capabilities
• Multiple search engine support
• Content extraction and summarization

**Emerging Trends:**

**1. Specialized Domain Servers**
• **Healthcare**: FHIR protocol integration
• **Finance**: Trading platforms and market data
• **Education**: Learning management systems
• **Legal**: Document analysis and case law research

**2. Multi-modal Capabilities**
• **Image Processing**: Computer vision and OCR
• **Audio Analysis**: Speech recognition and transcription
• **Video Understanding**: Content analysis and extraction

**3. Edge Computing Integration**
• **IoT Devices**: Sensor data collection and control
• **Mobile Applications**: On-device AI with MCP
• **Embedded Systems**: Real-time data processing

**Future Roadmap:**

**Short-term (2024-2025):**
• Enhanced security and permission models
• Performance optimizations and caching
• Better debugging and monitoring tools
• More official language SDKs

**Medium-term (2025-2026):**
• Visual MCP server builders (no-code/low-code)
• Advanced orchestration and workflow capabilities
• Integration with major enterprise platforms
• Standardized deployment and discovery mechanisms

**Long-term (2026+):**
• AI-powered MCP server generation
• Autonomous system integration
• Cross-protocol compatibility layers
• Decentralized MCP networks

**Getting Involved:**

**For Developers:**
• **Contribute**: Join the open-source development on GitHub
• **Build**: Create MCP servers for your favorite tools
• **Share**: Publish reusable MCP components

**For Organizations:**
• **Adopt**: Integrate MCP into your AI workflows
• **Standardize**: Use MCP for all AI tool integrations
• **Innovate**: Develop domain-specific MCP solutions

The MCP ecosystem represents a paradigm shift toward standardized, secure, and scalable AI tool integration. As more developers and organizations adopt MCP, we can expect to see increasingly sophisticated AI applications that can seamlessly interact with complex, multi-tool environments.

This standardization will ultimately make AI more accessible, powerful, and useful across a wide range of industries and use cases.`
    }
  ];

  const downloadableResources = [
    {
      title: "MCP Specification Document",
      url: "https://spec.modelcontextprotocol.io/",
      type: "PDF"
    },
    {
      title: "MCP Python SDK Documentation",
      url: "https://github.com/modelcontextprotocol/python-sdk",
      type: "Guide"
    },
    {
      title: "MCP TypeScript SDK",
      url: "https://github.com/modelcontextprotocol/typescript-sdk",
      type: "Code"
    },
    {
      title: "Example MCP Servers Collection",
      url: "https://github.com/modelcontextprotocol/servers",
      type: "Code"
    },
    {
      title: "MCP Security Best Practices",
      url: "https://docs.modelcontextprotocol.io/security/",
      type: "Guide"
    }
  ];

  const prerequisites = [
    "Basic understanding of JSON-RPC protocol",
    "Familiarity with client-server architecture",
    "Experience with Node.js or Python",
    "Understanding of API design principles",
    "Basic knowledge of security concepts"
  ];

  const tags = [
    "MCP", 
    "Model Context Protocol", 
    "AI Integration", 
    "Tool Access", 
    "Anthropic", 
    "API Design",
    "Security",
    "Protocol"
  ];

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Hero Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${solutionsHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/70 via-[#0A192F]/60 to-[#0D1B2A]/80"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg px-2">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                  Model Context Protocol (MCP) Explained
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed drop-shadow-md px-2">
                Master the Model Context Protocol (MCP) to build powerful AI integrations that connect models with external tools and data sources.
              </p>
              
              {/* Meta Information - Mobile Responsive */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 text-gray-200 mb-6 md:mb-8 px-2">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-sm md:text-base">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#00F0FF]" />
                  <span className="font-medium">45 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-sm md:text-base">
                  <span className="text-yellow-400 text-base md:text-lg">●</span>
                  <span className="font-medium">Intermediate Level</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-sm md:text-base">
                  <span className="text-[#FF4D00] font-bold">7</span>
                  <span className="font-medium">Sections</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom gradient transition */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A192F] to-transparent"></div>
        </section>

        {/* Content Section */}
        <div className="relative">
          <GuideTemplate
            title="" // Empty title since we handle it in hero
            description=""
            estimatedTime={45}
            difficulty="Intermediate"
            prerequisites={prerequisites}
            sections={sections}
            downloadableResources={downloadableResources}
            tags={tags}
          />
        </div>
        
        {/* Navigation Component */}
        <GuideNavigation />
      </div>
      <Footer />
    </>
  );
};

export default MCPExplained;