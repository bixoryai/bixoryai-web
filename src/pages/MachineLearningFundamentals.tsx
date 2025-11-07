import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Brain, CheckCircle } from "lucide-react";
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

const MachineLearningFundamentals = () => {
  const keyTakeaways = [
    "Machine learning enables computers to learn from data without explicit programming",
    "Supervised, unsupervised, and reinforcement learning are the three main ML approaches",
    "Training data quality directly impacts model performance and accuracy",
    "Feature engineering is crucial for effective pattern recognition",
    "Cross-validation prevents overfitting and ensures model generalization"
  ];

  const relatedLinks = [
    { title: "Types of Artificial Intelligence", url: "/knowledge-base/types-of-ai" },
    { title: "Building Your First Neural Network", url: "/knowledge-base/building-first-neural-network" },
    { title: "What is an AI Model?", url: "/knowledge-base/what-is-ai-model" }
  ];

  const content = `
    <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
      <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
      What is Machine Learning?
    </h2>
    <p class="text-gray-300 mb-6 leading-relaxed">
      Machine learning (ML) is a subset of artificial intelligence that enables computer systems to learn and improve from experience without being explicitly programmed. Instead of following rigid, pre-defined instructions, ML algorithms use statistical techniques to identify patterns in data and make predictions or decisions based on those patterns.
    </p>
    <p class="text-gray-300 mb-6 leading-relaxed">
      At its core, machine learning is about creating algorithms that can automatically learn from and make predictions on data. This learning process involves training models on large datasets, allowing them to recognize patterns, classify information, and make intelligent decisions with minimal human intervention.
    </p>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Three Types of Machine Learning</h2>
    
    <h3 class="text-xl font-semibold text-white mb-3 mt-6">1. Supervised Learning</h3>
    <p class="text-gray-300 mb-4 leading-relaxed">
      Supervised learning is the most common ML approach, where algorithms learn from labeled training data. The model is trained on input-output pairs, learning to map inputs to correct outputs. Once trained, it can predict outputs for new, unseen inputs.
    </p>
    <div class="bg-primary/40 border border-gray-700 rounded-lg p-4 mb-4">
      <p class="text-gray-300 mb-2"><strong class="text-accent">Common Applications:</strong></p>
      <ul class="list-disc list-inside text-gray-300 space-y-1">
        <li>Email spam detection (classifying emails as spam or not spam)</li>
        <li>Image recognition (identifying objects in photos)</li>
        <li>Stock price prediction (forecasting future values)</li>
        <li>Medical diagnosis (predicting diseases from symptoms)</li>
        <li>Speech recognition (converting speech to text)</li>
      </ul>
    </div>

    <h3 class="text-xl font-semibold text-white mb-3 mt-6">2. Unsupervised Learning</h3>
    <p class="text-gray-300 mb-4 leading-relaxed">
      Unsupervised learning works with unlabeled data, where the algorithm must find hidden patterns and structures on its own. There are no correct answers to guide the learning process—the model discovers the underlying structure of the data independently.
    </p>
    <div class="bg-primary/40 border border-gray-700 rounded-lg p-4 mb-4">
      <p class="text-gray-300 mb-2"><strong class="text-accent">Common Applications:</strong></p>
      <ul class="list-disc list-inside text-gray-300 space-y-1">
        <li>Customer segmentation (grouping customers by behavior)</li>
        <li>Anomaly detection (identifying unusual patterns)</li>
        <li>Recommendation systems (suggesting products or content)</li>
        <li>Data compression (reducing data dimensionality)</li>
        <li>Market basket analysis (finding product purchase patterns)</li>
      </ul>
    </div>

    <h3 class="text-xl font-semibold text-white mb-3 mt-6">3. Reinforcement Learning</h3>
    <p class="text-gray-300 mb-4 leading-relaxed">
      Reinforcement learning involves training agents to make sequential decisions by rewarding desired behaviors and punishing undesired ones. The agent learns through trial and error, receiving feedback in the form of rewards or penalties for its actions.
    </p>
    <div class="bg-primary/40 border border-gray-700 rounded-lg p-4 mb-4">
      <p class="text-gray-300 mb-2"><strong class="text-accent">Common Applications:</strong></p>
      <ul class="list-disc list-inside text-gray-300 space-y-1">
        <li>Game playing AI (chess, Go, video games)</li>
        <li>Robotics (teaching robots to navigate and manipulate objects)</li>
        <li>Autonomous vehicles (self-driving car decision-making)</li>
        <li>Resource management (optimizing data center cooling)</li>
        <li>Trading algorithms (stock market decision-making)</li>
      </ul>
    </div>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Machine Learning Workflow</h2>
    <div class="space-y-4 mb-6">
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">1</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Data Collection</h4>
          <p class="text-gray-300">Gather relevant, high-quality data that represents the problem you're trying to solve. Data quality is crucial for model success.</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">2</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Data Preprocessing</h4>
          <p class="text-gray-300">Clean, normalize, and transform raw data into a format suitable for training. Handle missing values, outliers, and inconsistencies.</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">3</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Feature Engineering</h4>
          <p class="text-gray-300">Select and create meaningful features (variables) that help the model identify patterns and make accurate predictions.</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">4</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Model Selection</h4>
          <p class="text-gray-300">Choose appropriate algorithms based on your problem type (classification, regression, clustering) and data characteristics.</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">5</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Model Training</h4>
          <p class="text-gray-300">Feed training data to the algorithm, allowing it to learn patterns and adjust its internal parameters to minimize prediction errors.</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">6</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Model Evaluation</h4>
          <p class="text-gray-300">Test the model on unseen data to assess its performance using metrics like accuracy, precision, recall, or mean squared error.</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="bg-secondary/20 rounded-full p-2 mt-1">
          <span class="text-secondary font-bold">7</span>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-1">Model Deployment</h4>
          <p class="text-gray-300">Deploy the trained model to production environments where it can make predictions on real-world data and deliver business value.</p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Common Machine Learning Algorithms</h2>
    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-primary/40 border border-gray-700 rounded-lg p-4">
        <h4 class="text-white font-semibold mb-2">Linear Regression</h4>
        <p class="text-gray-300 text-sm">Predicts continuous numerical values by finding the linear relationship between variables.</p>
      </div>
      <div class="bg-primary/40 border border-gray-700 rounded-lg p-4">
        <h4 class="text-white font-semibold mb-2">Logistic Regression</h4>
        <p class="text-gray-300 text-sm">Classification algorithm that predicts the probability of categorical outcomes.</p>
      </div>
      <div class="bg-primary/40 border border-gray-700 rounded-lg p-4">
        <h4 class="text-white font-semibold mb-2">Decision Trees</h4>
        <p class="text-gray-300 text-sm">Tree-like model that makes decisions by splitting data based on feature values.</p>
      </div>
      <div class="bg-primary/40 border border-gray-700 rounded-lg p-4">
        <h4 class="text-white font-semibold mb-2">Random Forests</h4>
        <p class="text-gray-300 text-sm">Ensemble method combining multiple decision trees for more accurate predictions.</p>
      </div>
      <div class="bg-primary/40 border border-gray-700 rounded-lg p-4">
        <h4 class="text-white font-semibold mb-2">Support Vector Machines (SVM)</h4>
        <p class="text-gray-300 text-sm">Creates optimal boundaries to separate different classes in the data.</p>
      </div>
      <div class="bg-primary/40 border border-gray-700 rounded-lg p-4">
        <h4 class="text-white font-semibold mb-2">K-Means Clustering</h4>
        <p class="text-gray-300 text-sm">Groups similar data points into clusters based on their characteristics.</p>
      </div>
      <div class="bg-primary/40 border border-gray-700 rounded-lg p-4">
        <h4 class="text-white font-semibold mb-2">Neural Networks</h4>
        <p class="text-gray-300 text-sm">Brain-inspired models that learn complex patterns through interconnected layers of nodes.</p>
      </div>
      <div class="bg-primary/40 border border-gray-700 rounded-lg p-4">
        <h4 class="text-white font-semibold mb-2">Naive Bayes</h4>
        <p class="text-gray-300 text-sm">Probabilistic classifier based on Bayes' theorem, effective for text classification.</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key Challenges in Machine Learning</h2>
    <div class="space-y-4 mb-6">
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h4 class="text-white font-semibold mb-2">Overfitting</h4>
        <p class="text-gray-300">When a model learns training data too well, including noise and outliers, resulting in poor performance on new data. Use cross-validation and regularization to prevent this.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h4 class="text-white font-semibold mb-2">Underfitting</h4>
        <p class="text-gray-300">When a model is too simple to capture the underlying patterns in the data. Increase model complexity or use more relevant features.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h4 class="text-white font-semibold mb-2">Data Quality Issues</h4>
        <p class="text-gray-300">Poor quality, biased, or insufficient training data leads to inaccurate models. Ensure diverse, representative, and properly labeled datasets.</p>
      </div>
      <div class="bg-primary/40 border-l-4 border-secondary rounded-r-lg p-4">
        <h4 class="text-white font-semibold mb-2">Feature Selection</h4>
        <p class="text-gray-300">Choosing the most relevant features while avoiding irrelevant or redundant ones. Use domain knowledge and automated feature selection techniques.</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Machine Learning Impact</h2>
    <p class="text-gray-300 mb-4 leading-relaxed">
      Machine learning has revolutionized countless industries and aspects of daily life:
    </p>
    <div class="grid md:grid-cols-2 gap-6 mb-6">
      <div class="bg-gradient-to-br from-primary via-primary to-blue-900 border border-gray-700 rounded-lg p-6">
        <div class="text-accent mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </div>
        <h4 class="text-white font-semibold mb-2">Healthcare</h4>
        <p class="text-gray-300 text-sm">Disease diagnosis, drug discovery, personalized treatment plans, and medical image analysis improving patient outcomes.</p>
      </div>
      <div class="bg-gradient-to-br from-primary via-primary to-blue-900 border border-gray-700 rounded-lg p-6">
        <div class="text-accent mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h4 class="text-white font-semibold mb-2">Finance</h4>
        <p class="text-gray-300 text-sm">Fraud detection, algorithmic trading, credit scoring, risk assessment, and personalized banking services.</p>
      </div>
      <div class="bg-gradient-to-br from-primary via-primary to-blue-900 border border-gray-700 rounded-lg p-6">
        <div class="text-accent mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </div>
        <h4 class="text-white font-semibold mb-2">E-Commerce</h4>
        <p class="text-gray-300 text-sm">Product recommendations, dynamic pricing, inventory management, and customer behavior prediction.</p>
      </div>
      <div class="bg-gradient-to-br from-primary via-primary to-blue-900 border border-gray-700 rounded-lg p-6">
        <div class="text-accent mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </div>
        <h4 class="text-white font-semibold mb-2">Customer Service</h4>
        <p class="text-gray-300 text-sm">Chatbots, sentiment analysis, automated support ticket routing, and voice assistants improving customer experience.</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Future of Machine Learning</h2>
    <p class="text-gray-300 mb-4 leading-relaxed">
      Machine learning continues to evolve rapidly, with emerging trends including:
    </p>
    <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
      <li><strong class="text-accent">AutoML:</strong> Automated machine learning tools that make ML accessible to non-experts by automating model selection and hyperparameter tuning.</li>
      <li><strong class="text-accent">Federated Learning:</strong> Training models across decentralized devices while keeping data local, enhancing privacy and security.</li>
      <li><strong class="text-accent">Explainable AI (XAI):</strong> Making ML models more transparent and interpretable, crucial for regulated industries and building trust.</li>
      <li><strong class="text-accent">Edge ML:</strong> Running ML models on edge devices (smartphones, IoT devices) for faster, more private inference without cloud dependency.</li>
      <li><strong class="text-accent">Few-Shot Learning:</strong> Training models that can learn from just a few examples, mimicking human learning capabilities.</li>
    </ul>

    <div class="bg-gradient-to-r from-secondary/20 to-accent/20 border-l-4 border-secondary rounded-r-lg p-6 mt-8">
      <p class="text-white text-lg font-semibold mb-2">Getting Started with Machine Learning</p>
      <p class="text-gray-300">
        Begin your ML journey by learning Python programming, understanding statistics and linear algebra, and exploring popular ML libraries like scikit-learn, TensorFlow, and PyTorch. Practice with real datasets from platforms like Kaggle, and start with simple projects before tackling complex problems. The key is consistent practice and staying curious about how machines can learn from data.
      </p>
    </div>
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-blue-900">
      <Navbar />
      
      <Hero
        title="Machine Learning Fundamentals"
        subtitle="Understanding How Computers Learn from Data"
        backgroundImage="/lovable-uploads/d419fc4f-d4e6-4e45-8ef7-a8f57deaf9c7.png"
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
            <BreadcrumbPage>Machine Learning Fundamentals</BreadcrumbPage>
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
                  Machine Learning
                </Badge>
                <Badge variant="outline" className="border-accent/40 text-accent">
                  Fundamentals
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
                title="Machine Learning Fundamentals - BIXORY AI"
                description="Learn the fundamentals of machine learning and how computers learn from data to identify patterns and improve over time."
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MachineLearningFundamentals;
