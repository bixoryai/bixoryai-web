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
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200"><strong>Model Context Protocol (MCP)</strong> is an open-source specification developed by <a href="https://www.anthropic.com" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Anthropic</a> that standardizes how AI models and development tools interact with external data sources and services.</p>
        
        <p class="text-gray-300">Think of MCP as a <strong>universal translator</strong> between AI models and the tools they need to access. Read the full <a href="https://spec.modelcontextprotocol.io/" target="_blank" class="text-blue-400 hover:text-blue-300 underline">MCP specification</a> for technical details.</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
            <h4 class="text-blue-300 font-semibold mb-2">🗄️ Data Access</h4>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• Connect to databases</li>
              <li>• Access file systems</li>
              <li>• Read/write documents</li>
            </ul>
          </div>
          <div class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
            <h4 class="text-purple-300 font-semibold mb-2">🔧 Tool Integration</h4>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• Interact with APIs</li>
              <li>• Execute code securely</li>
              <li>• Browse the web</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/30 rounded-lg p-6">
          <h4 class="text-green-300 font-semibold mb-4 text-lg">🚀 Key Benefits</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <span class="text-green-400">✓</span>
                <span class="text-gray-300"><strong>Standardization:</strong> One protocol for all AI tool integrations</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-green-400">✓</span>
                <span class="text-gray-300"><strong>Security:</strong> Built-in permissions and sandboxing</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <span class="text-green-400">✓</span>
                <span class="text-gray-300"><strong>Efficiency:</strong> Reusable components across applications</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-green-400">✓</span>
                <span class="text-gray-300"><strong>Flexibility:</strong> Easy to extend and customize</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
          <h4 class="text-yellow-300 font-semibold mb-2">💡 Key Insight</h4>
          <p class="text-gray-300">The protocol enables AI models to maintain context across different tools and services, making them more capable and useful for complex tasks.</p>
        </div>
      </div>`
    },
    {
      id: "how-mcp-works",
      title: "How MCP Works: Architecture Overview",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">MCP follows a <strong>client-server architecture</strong> where AI applications (clients) communicate with various tools and services (servers) through a standardized protocol.</p>
        
        <div class="grid md:grid-cols-3 gap-4 my-6">
          <div class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
            <h4 class="text-blue-300 font-semibold mb-2">🤖 MCP Client</h4>
            <p class="text-xs text-gray-400 mb-2">AI Application</p>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• Sends requests for data</li>
              <li>• Manages authentication</li>
              <li>• Handles responses</li>
            </ul>
            <div class="mt-2 text-xs text-cyan-300">Examples: <a href="https://claude.ai/desktop" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Claude Desktop</a>, custom AI apps</div>
          </div>
          <div class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
            <h4 class="text-purple-300 font-semibold mb-2">🔧 MCP Server</h4>
            <p class="text-xs text-gray-400 mb-2">Tool/Service</p>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• Exposes capabilities</li>
              <li>• Handles data retrieval</li>
              <li>• Processes actions</li>
            </ul>
            <div class="mt-2 text-xs text-cyan-300">Examples: Database connectors, file systems</div>
          </div>
          <div class="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
            <h4 class="text-green-300 font-semibold mb-2">📡 Protocol Layer</h4>
            <p class="text-xs text-gray-400 mb-2">Communication</p>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• JSON-RPC based</li>
              <li>• Error handling</li>
              <li>• Transport agnostic</li>
            </ul>
            <div class="mt-2 text-xs text-cyan-300">HTTP, WebSocket, IPC</div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/30 rounded-lg p-6">
          <h4 class="text-orange-300 font-semibold mb-4 text-lg">🔄 Communication Flow</h4>
          <div class="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <code class="text-cyan-300 text-sm">
              AI Application → MCP Request → Tool/Service<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← MCP Response ←
            </code>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-indigo-500/10 border border-indigo-400/30 rounded-lg p-4">
            <h4 class="text-indigo-300 font-semibold mb-3">📋 Message Types</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-center gap-2"><span class="text-blue-400">•</span><strong>Resources:</strong> Request data from sources</li>
              <li class="flex items-center gap-2"><span class="text-green-400">•</span><strong>Tools:</strong> Execute actions/operations</li>
              <li class="flex items-center gap-2"><span class="text-purple-400">•</span><strong>Prompts:</strong> Get structured prompts</li>
              <li class="flex items-center gap-2"><span class="text-orange-400">•</span><strong>Sampling:</strong> Request AI completions</li>
            </ul>
          </div>
          
          <div class="bg-teal-500/10 border border-teal-400/30 rounded-lg p-4">
            <h4 class="text-teal-300 font-semibold mb-3">🔗 Compatibility</h4>
            <p class="text-sm text-gray-300 leading-relaxed">
              This architecture ensures that any MCP-compatible AI application can work with any MCP-compatible tool without custom integration work.
            </p>
          </div>
        </div>
      </div>`
    },
    {
      id: "setting-up-mcp",
      title: "Setting Up Your First MCP Integration",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Let's walk through setting up a basic MCP server that provides file system access to AI models.</p>
        
        <div class="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-6">
          <h4 class="text-amber-300 font-semibold mb-4 text-lg">📋 Prerequisites</h4>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="flex items-center gap-3">
              <span class="text-green-400">✓</span>
              <span class="text-gray-300">Node.js 18+ or Python 3.8+</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-green-400">✓</span>
              <span class="text-gray-300">Basic understanding of JSON-RPC</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-green-400">✓</span>
              <span class="text-gray-300">AI application with MCP support</span>
            </div>
          </div>
        </div>

        <div class="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
          <h4 class="text-blue-300 font-semibold mb-4 text-lg">📦 Step 1: Install MCP SDK</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h5 class="text-gray-200 font-medium mb-2">For Node.js:</h5>
              <div class="bg-gray-900 border border-gray-700 rounded-lg p-3">
                <code class="text-green-300 text-sm">npm install <a href="https://github.com/modelcontextprotocol/typescript-sdk" target="_blank" class="text-blue-400 hover:text-blue-300 underline">@modelcontextprotocol/sdk</a></code>
              </div>
            </div>
            <div>
              <h5 class="text-gray-200 font-medium mb-2">For Python:</h5>
              <div class="bg-gray-900 border border-gray-700 rounded-lg p-3">
                <code class="text-green-300 text-sm">pip install <a href="https://github.com/modelcontextprotocol/python-sdk" target="_blank" class="text-blue-400 hover:text-blue-300 underline">mcp</a></code>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-purple-500/10 border border-purple-400/30 rounded-lg p-6">
          <h4 class="text-purple-300 font-semibold mb-4 text-lg">⚙️ Step 2: Create a Basic MCP Server</h4>
          <div class="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code class="language-javascript">import { Server } from '@modelcontextprotocol/sdk/server/index.js';
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
await server.connect(transport);</code></pre>
          </div>
        </div>

        <div class="bg-green-500/10 border border-green-400/30 rounded-lg p-6">
          <h4 class="text-green-300 font-semibold mb-4 text-lg">🔧 Step 3: Configure Your AI Application</h4>
          <p class="text-gray-300 mb-4">Add your MCP server to your AI application's configuration (e.g., <a href="https://claude.ai/desktop" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Claude Desktop</a> config):</p>
          <div class="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <pre class="text-sm text-gray-300"><code class="language-json">{
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": ["path/to/your/server.js"]
    }
  }
}</code></pre>
          </div>
        </div>

        <div class="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-4">
          <h4 class="text-cyan-300 font-semibold mb-2">🎉 Success!</h4>
          <p class="text-gray-300">Your AI model can now securely access and read files through the MCP protocol!</p>
        </div>
      </div>`
    },
    {
      id: "mcp-capabilities",
      title: "MCP Capabilities and Use Cases",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">MCP enables a wide range of capabilities that make AI models more powerful and practical for real-world applications.</p>
        
        <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/30 rounded-lg p-6">
          <h4 class="text-indigo-300 font-semibold mb-4 text-lg">🎯 Core Capabilities</h4>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <h5 class="text-blue-300 font-semibold mb-2">📊 Resources</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Database Access</li>
                <li>• File Systems</li>
                <li>• Web Content</li>
                <li>• Documents</li>
              </ul>
            </div>
            <div class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <h5 class="text-purple-300 font-semibold mb-2">🛠️ Tools</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Code Execution</li>
                <li>• API Integrations</li>
                <li>• Data Processing</li>
                <li>• External Services</li>
              </ul>
            </div>
            <div class="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
              <h5 class="text-green-300 font-semibold mb-2">💬 Prompts</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Dynamic Templates</li>
                <li>• Multi-modal</li>
                <li>• Personalization</li>
                <li>• Context-aware</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-400/30 rounded-lg p-6">
          <h4 class="text-orange-300 font-semibold mb-4 text-lg">🌍 Real-World Use Cases</h4>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-4">
                <h5 class="text-cyan-300 font-semibold mb-2">💻 Software Development</h5>
                <ul class="text-sm text-gray-300 space-y-1">
                  <li>• Access codebases and documentation</li>
                  <li>• Execute tests and deploy applications</li>
                  <li>• Integrate with Git, Jira, CI/CD systems</li>
                </ul>
              </div>
              <div class="bg-emerald-500/10 border border-emerald-400/30 rounded-lg p-4">
                <h5 class="text-emerald-300 font-semibold mb-2">📈 Data Analysis</h5>
                <ul class="text-sm text-gray-300 space-y-1">
                  <li>• Connect to analytics databases</li>
                  <li>• Generate reports and visualizations</li>
                  <li>• Automate data pipelines</li>
                </ul>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-pink-500/10 border border-pink-400/30 rounded-lg p-4">
                <h5 class="text-pink-300 font-semibold mb-2">✍️ Content Creation</h5>
                <ul class="text-sm text-gray-300 space-y-1">
                  <li>• Access content management systems</li>
                  <li>• Integrate with design tools</li>
                  <li>• Publish to multiple platforms</li>
                </ul>
              </div>
              <div class="bg-violet-500/10 border border-violet-400/30 rounded-lg p-4">
                <h5 class="text-violet-300 font-semibold mb-2">🏢 Business Operations</h5>
                <ul class="text-sm text-gray-300 space-y-1">
                  <li>• Connect to CRM and ERP systems</li>
                  <li>• Automate workflows and approvals</li>
                  <li>• Generate compliance reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-400/30 rounded-lg p-4">
          <h4 class="text-teal-300 font-semibold mb-2">🔑 Key Advantage</h4>
          <p class="text-gray-300">Once you build an MCP integration, it works with any MCP-compatible AI application, maximizing reusability and reducing development effort.</p>
        </div>
      </div>`
    },
    {
      id: "security-best-practices",
      title: "Security and Best Practices",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Security is paramount when giving AI models access to external systems. MCP includes several built-in security features and best practices.</p>
        
        <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-lg p-6">
          <h4 class="text-red-300 font-semibold mb-4 text-lg">🔒 Built-in Security Features</h4>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
              <h5 class="text-amber-300 font-semibold mb-2">🛡️ Permission System</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Capability Declaration</li>
                <li>• Resource Scoping</li>
                <li>• Action Restrictions</li>
              </ul>
            </div>
            <div class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <h5 class="text-blue-300 font-semibold mb-2">📦 Sandboxing</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Process Isolation</li>
                <li>• Network Restrictions</li>
                <li>• Resource Limits</li>
              </ul>
            </div>
            <div class="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
              <h5 class="text-green-300 font-semibold mb-2">🔐 Authentication</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Token-based Auth</li>
                <li>• Role-based Access</li>
                <li>• Audit Logging</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-purple-500/10 border border-purple-400/30 rounded-lg p-6">
          <h4 class="text-purple-300 font-semibold mb-4 text-lg">💻 MCP Server Development Best Practices</h4>
          <div class="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code class="language-javascript">// Always validate inputs
server.setRequestHandler("tools/call", async (request) => {
  const { name, arguments: args } = request.params;
  
  // Input validation
  if (!name || typeof name !== "string") {
    throw new Error("Invalid tool name");
  }
  
  // Sanitize file paths
  if (name === "read_file") {
    const safePath = path.resolve(SAFE_DIRECTORY, args.path);
    if (!safePath.startsWith(SAFE_DIRECTORY)) {
      throw new Error("Path traversal attempt blocked");
    }
  }
  
  // Execute with proper error handling
  try {
    return await executeTool(name, args);
  } catch (error) {
    console.error("Tool execution failed:", error);
    throw new Error("Tool execution failed");
  }
});</code></pre>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-4">
            <h4 class="text-cyan-300 font-semibold mb-3">🔧 AI Application Integration</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-center gap-2"><span class="text-green-400">•</span><strong>Least Privilege:</strong> Only grant necessary permissions</li>
              <li class="flex items-center gap-2"><span class="text-blue-400">•</span><strong>Regular Audits:</strong> Monitor MCP server access</li>
              <li class="flex items-center gap-2"><span class="text-purple-400">•</span><strong>Environment Separation:</strong> Use different servers per environment</li>
              <li class="flex items-center gap-2"><span class="text-orange-400">•</span><strong>Data Classification:</strong> Protect sensitive data appropriately</li>
            </ul>
          </div>
          
          <div class="bg-teal-500/10 border border-teal-400/30 rounded-lg p-4">
            <h4 class="text-teal-300 font-semibold mb-3">⚙️ Configuration Security</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-center gap-2"><span class="text-green-400">•</span>Store credentials securely (env vars, key vaults)</li>
              <li class="flex items-center gap-2"><span class="text-blue-400">•</span>Use HTTPS for all network communications</li>
              <li class="flex items-center gap-2"><span class="text-purple-400">•</span>Implement rate limiting and validation</li>
              <li class="flex items-center gap-2"><span class="text-orange-400">•</span>Regular security updates for dependencies</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-400/30 rounded-lg p-4">
          <h4 class="text-yellow-300 font-semibold mb-2">⚠️ Important Reminder</h4>
          <p class="text-gray-300">MCP enables powerful AI capabilities, but with great power comes great responsibility for security.</p>
        </div>
      </div>`
    },
    {
      id: "advanced-patterns",
      title: "Advanced MCP Patterns and Techniques",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">Once you're comfortable with basic MCP implementations, these advanced patterns will help you build more sophisticated and efficient integrations.</p>
        
        <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/30 rounded-lg p-6">
          <h4 class="text-indigo-300 font-semibold mb-4 text-lg">🧩 1. Composable MCP Servers</h4>
          <p class="text-gray-300 mb-4">Instead of building monolithic servers, create small, focused servers that can be composed:</p>
          <div class="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code class="language-javascript">// Database server
const dbServer = new MCPServer("database-server", {
  tools: ["query_sql", "insert_record"],
  resources: ["tables", "schemas"]
});

// File server
const fileServer = new MCPServer("file-server", {
  tools: ["read_file", "write_file"],
  resources: ["documents", "images"]
});

// API server
const apiServer = new MCPServer("api-server", {
  tools: ["http_request", "webhook"],
  resources: ["endpoints"]
});</code></pre>
          </div>
        </div>

        <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-400/30 rounded-lg p-6">
          <h4 class="text-emerald-300 font-semibold mb-4 text-lg">🎯 2. Context-Aware Resource Discovery</h4>
          <p class="text-gray-300 mb-4">Implement dynamic resource discovery based on user context:</p>
          <div class="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code class="language-javascript">server.setRequestHandler("resources/list", async (request) => {
  const userContext = request.meta?.userContext;
  const resources = [];
  
  // Add user-specific resources
  if (userContext?.role === "developer") {
    resources.push({
      uri: "git://repositories",
      name: "Code Repositories",
      description: "Access to development repositories"
    });
  }
  
  return { resources };
});</code></pre>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-orange-500/10 border border-orange-400/30 rounded-lg p-6">
            <h4 class="text-orange-300 font-semibold mb-4 text-lg">📡 3. Streaming Updates</h4>
            <p class="text-gray-300 mb-4">For large datasets or real-time applications:</p>
            <div class="bg-gray-900 border border-gray-700 rounded-lg p-3 overflow-x-auto">
              <pre class="text-xs text-gray-300"><code>server.setRequestHandler("resources/read", async (request) => {
  const { uri } = request.params;
  
  if (uri.startsWith("stream://")) {
    return {
      contents: [{
        uri,
        mimeType: "application/json-stream",
        text: await setupStreamingResponse(uri)
      }]
    };
  }
});</code></pre>
            </div>
          </div>
          
          <div class="bg-pink-500/10 border border-pink-400/30 rounded-lg p-6">
            <h4 class="text-pink-300 font-semibold mb-4 text-lg">💾 4. Intelligent Caching</h4>
            <p class="text-gray-300 mb-4">Implement smart caching for performance:</p>
            <div class="bg-gray-900 border border-gray-700 rounded-lg p-3 overflow-x-auto">
              <pre class="text-xs text-gray-300"><code>const cache = new Map();

server.setRequestHandler("tools/call", async (request) => {
  const cacheKey = generateCacheKey(request);
  
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (!isCacheExpired(cached)) {
      return cached.result;
    }
  }
  
  const result = await executeTool(request);
  cache.set(cacheKey, {
    result,
    timestamp: Date.now(),
    ttl: getTTLForTool(request.params.name)
  });
  
  return result;
});</code></pre>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/30 rounded-lg p-6">
          <h4 class="text-violet-300 font-semibold mb-4 text-lg">🔄 5. Error Recovery and Resilience</h4>
          <p class="text-gray-300 mb-4">Build robust error handling and recovery mechanisms:</p>
          <div class="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code class="language-javascript">class ResilientMCPServer extends MCPServer {
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
}</code></pre>
          </div>
        </div>

        <div class="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-4">
          <h4 class="text-cyan-300 font-semibold mb-2">🎯 Production Ready</h4>
          <p class="text-gray-300">These patterns help you build production-ready MCP integrations that are scalable, maintainable, and robust.</p>
        </div>
      </div>`
    },
    {
      id: "ecosystem-future",
      title: "MCP Ecosystem and Future Developments",
      content: `<div class="space-y-6">
        <p class="text-lg text-gray-200">The MCP ecosystem is rapidly evolving, with new tools, integrations, and capabilities being developed by both Anthropic and the community.</p>
        
        <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/30 rounded-lg p-6">
          <h4 class="text-blue-300 font-semibold mb-4 text-lg">🏢 Current Ecosystem</h4>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <h5 class="text-purple-300 font-semibold mb-2">🎯 Official Integrations</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• <a href="https://claude.ai/desktop" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Claude Desktop</a>: Built-in MCP support</li>
                <li>• <a href="https://docs.anthropic.com/en/api/mcp" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Claude API</a>: Server-side integration</li>
                <li>• Development Tools: Multi-language SDKs</li>
              </ul>
              </div>
              <div class="bg-emerald-500/20 border border-emerald-400/30 rounded-lg p-4">
              <h5 class="text-emerald-300 font-semibold mb-2">🌟 Community Projects</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Database Connectors (<a href="https://github.com/modelcontextprotocol/servers" target="_blank" class="text-blue-400 hover:text-blue-300 underline">PostgreSQL, MongoDB</a>)</li>
                <li>• Cloud Services (AWS, GCP, Azure)</li>
                <li>• Development Tools (<a href="https://github.com/modelcontextprotocol/servers" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Git, Docker, K8s</a>)</li>
                <li>• Productivity (Google Workspace, Office 365)</li>
              </ul>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4">
                <h5 class="text-orange-300 font-semibold mb-2">📦 Popular MCP Servers</h5>
                <div class="space-y-3">
                  <div>
                    <div class="text-xs text-cyan-300 font-medium"><a href="https://github.com/modelcontextprotocol/servers" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Filesystem Server</a></div>
                    <div class="text-xs text-gray-400">Safe file system access with restrictions</div>
                  </div>
                  <div>
                    <div class="text-xs text-cyan-300 font-medium"><a href="https://github.com/modelcontextprotocol/servers" target="_blank" class="text-blue-400 hover:text-blue-300 underline">SQLite Server</a></div>
                    <div class="text-xs text-gray-400">Direct database queries with schema inspection</div>
                  </div>
                  <div>
                    <div class="text-xs text-cyan-300 font-medium"><a href="https://github.com/modelcontextprotocol/servers" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Web Search Server</a></div>
                    <div class="text-xs text-gray-400">Real-time search with content extraction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-400/30 rounded-lg p-6">
          <h4 class="text-pink-300 font-semibold mb-4 text-lg">🚀 Emerging Trends</h4>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-violet-500/20 border border-violet-400/30 rounded-lg p-4">
              <h5 class="text-violet-300 font-semibold mb-2">🏥 Specialized Domains</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Healthcare: FHIR integration</li>
                <li>• Finance: Trading platforms</li>
                <li>• Education: LMS systems</li>
                <li>• Legal: Document analysis</li>
              </ul>
            </div>
            <div class="bg-cyan-500/20 border border-cyan-400/30 rounded-lg p-4">
              <h5 class="text-cyan-300 font-semibold mb-2">🎭 Multi-modal</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Image: Computer vision, OCR</li>
                <li>• Audio: Speech recognition</li>
                <li>• Video: Content analysis</li>
                <li>• Mixed: Cross-modal understanding</li>
              </ul>
            </div>
            <div class="bg-teal-500/20 border border-teal-400/30 rounded-lg p-4">
              <h5 class="text-teal-300 font-semibold mb-2">⚡ Edge Computing</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• IoT: Sensor data collection</li>
                <li>• Mobile: On-device AI</li>
                <li>• Embedded: Real-time processing</li>
                <li>• Distributed: Edge networks</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-400/30 rounded-lg p-6">
          <h4 class="text-amber-300 font-semibold mb-4 text-lg">🗓️ Future Roadmap</h4>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
              <h5 class="text-green-300 font-semibold mb-2">2024-2025 (Short-term)</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Enhanced security models</li>
                <li>• Performance optimizations</li>
                <li>• Better debugging tools</li>
                <li>• More language SDKs</li>
              </ul>
            </div>
            <div class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <h5 class="text-blue-300 font-semibold mb-2">2025-2026 (Medium-term)</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Visual server builders</li>
                <li>• Advanced orchestration</li>
                <li>• Enterprise integrations</li>
                <li>• Deployment standards</li>
              </ul>
            </div>
            <div class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <h5 class="text-purple-300 font-semibold mb-2">2026+ (Long-term)</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• AI-powered generation</li>
                <li>• Autonomous integration</li>
                <li>• Cross-protocol compatibility</li>
                <li>• Decentralized networks</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-400/30 rounded-lg p-6">
          <h4 class="text-indigo-300 font-semibold mb-4 text-lg">🤝 Getting Involved</h4>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-emerald-500/10 border border-emerald-400/30 rounded-lg p-4">
              <h5 class="text-emerald-300 font-semibold mb-2">👨‍💻 For Developers</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Contribute to <a href="https://github.com/modelcontextprotocol" target="_blank" class="text-blue-400 hover:text-blue-300 underline">open-source development</a></li>
                <li>• Build MCP servers for favorite tools</li>
                <li>• Share reusable components</li>
              </ul>
            </div>
            <div class="bg-orange-500/10 border border-orange-400/30 rounded-lg p-4">
              <h5 class="text-orange-300 font-semibold mb-2">🏢 For Organizations</h5>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Adopt MCP in AI workflows</li>
                <li>• Standardize tool integrations</li>
                <li>• Develop domain-specific solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-lg p-4">
          <h4 class="text-cyan-300 font-semibold mb-2">🌟 The Future is Bright</h4>
          <p class="text-gray-300">MCP represents a paradigm shift toward standardized, secure, and scalable AI tool integration. This standardization will make AI more accessible, powerful, and useful across industries.</p>
        </div>
      </div>`
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
      url: "https://spec.modelcontextprotocol.io/specification/basic/security/",
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
                A comprehensive guide to understanding and implementing the Model Context Protocol for AI tool integrations. Learn how to build secure, standardized connections between AI models and external services.
              </p>
              
              {/* Meta Information - Mobile Responsive */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 text-gray-200 mb-6 md:mb-8 px-2">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-sm md:text-base">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#00F0FF]" />
                  <span className="font-medium">90 minutes</span>
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

        {/* Content Section with Different Background */}
        <div className="relative bg-gradient-to-br from-primary via-primary to-blue-900">
          <GuideTemplate
            title="" // Empty title since we handle it in hero
            description=""
            estimatedTime={90}
            difficulty="Intermediate"
            prerequisites={prerequisites}
            sections={sections}
            downloadableResources={downloadableResources}
            tags={tags}
          />
        </div>
        
        {/* Gradient Transition Before Footer */}
        <div className="h-32 bg-gradient-to-b from-blue-900 to-primary"></div>
        
        {/* Navigation Component */}
        <GuideNavigation />
      </div>
      <Footer />
    </>
  );
};

export default MCPExplained;