import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Code, Database, CheckCircle, Copy, Clock, Users, Star, Download, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SocialShare } from "@/components/social/SocialShare";
import Hero from "@/components/sections/Hero";

const BuildingFirstNeuralNetwork = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleStepCompletion = (stepIndex: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepIndex)) {
      newCompleted.delete(stepIndex);
    } else {
      newCompleted.add(stepIndex);
    }
    setCompletedSteps(newCompleted);
  };

  const getDifficultyStars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < level ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
      />
    ));
  };

  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "NumPy", icon: "🔢" },
    { name: "Matplotlib", icon: "📊" }
  ];

  const prerequisites = [
    "Basic Python programming knowledge",
    "Understanding of mathematical concepts (linear algebra basics)",
    "Familiarity with data structures",
    "Basic knowledge of machine learning concepts"
  ];

  const tutorialSteps = [
    {
      title: "Understanding Neural Network Basics",
      description: "Learn the fundamental concepts behind neural networks and how they work.",
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">What is a Neural Network?</h3>
        <p class="text-gray-300 mb-4">A neural network is a computational model inspired by biological neural networks. It consists of interconnected nodes (neurons) that process information through weighted connections.</p>
        
        <h4 class="text-lg font-semibold text-white mb-3">Key Components:</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2">
          <li><strong>Neurons:</strong> Basic processing units that receive inputs and produce outputs</li>
          <li><strong>Weights:</strong> Parameters that determine the strength of connections between neurons</li>
          <li><strong>Bias:</strong> Additional parameters that help the model fit the data better</li>
          <li><strong>Activation Function:</strong> Functions that introduce non-linearity to the model</li>
        </ul>
      `,
      code: `# Basic neuron structure
import numpy as np

class Neuron:
    def __init__(self, num_inputs):
        # Initialize weights randomly
        self.weights = np.random.randn(num_inputs)
        self.bias = np.random.randn()
    
    def forward(self, inputs):
        # Calculate weighted sum
        total = np.dot(inputs, self.weights) + self.bias
        # Apply activation function (sigmoid)
        return 1 / (1 + np.exp(-total))

# Example usage
neuron = Neuron(3)  # 3 inputs
inputs = np.array([0.5, -0.2, 0.1])
output = neuron.forward(inputs)
print(f"Neuron output: {output}")`,
      language: "python"
    },
    {
      title: "Setting Up the Environment",
      description: "Install and configure the necessary libraries for neural network development.",
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Installation Requirements</h3>
        <p class="text-gray-300 mb-4">We'll use TensorFlow/Keras for building our neural network, along with supporting libraries for data manipulation and visualization.</p>
      `,
      code: `# Install required packages
pip install tensorflow numpy matplotlib pandas scikit-learn

# Import essential libraries
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Verify TensorFlow installation
print(f"TensorFlow version: {tf.__version__}")
print(f"GPU Available: {tf.config.list_physical_devices('GPU')}")`,
      language: "bash"
    },
    {
      title: "Preparing Your Dataset",
      description: "Learn how to load, preprocess, and prepare data for neural network training.",
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Data Preparation Steps</h3>
        <p class="text-gray-300 mb-4">Proper data preparation is crucial for neural network success. We'll use a simple classification dataset to demonstrate the process.</p>
      `,
      code: `# Generate sample dataset (or load your own)
from sklearn.datasets import make_classification
from sklearn.preprocessing import StandardScaler

# Create a sample dataset
X, y = make_classification(
    n_samples=1000,
    n_features=20,
    n_informative=15,
    n_redundant=5,
    n_classes=2,
    random_state=42
)

# Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Normalize the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print(f"Training set shape: {X_train_scaled.shape}")
print(f"Test set shape: {X_test_scaled.shape}")`,
      language: "python"
    },
    {
      title: "Building the Neural Network",
      description: "Create your first neural network architecture using TensorFlow/Keras.",
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Network Architecture</h3>
        <p class="text-gray-300 mb-4">We'll build a simple feedforward neural network with multiple hidden layers. This architecture is perfect for learning the basics.</p>
      `,
      code: `# Build the neural network model
model = keras.Sequential([
    # Input layer
    layers.Dense(64, activation='relu', input_shape=(20,)),
    
    # Hidden layers
    layers.Dense(32, activation='relu'),
    layers.Dropout(0.3),  # Prevent overfitting
    
    layers.Dense(16, activation='relu'),
    layers.Dropout(0.2),
    
    # Output layer
    layers.Dense(1, activation='sigmoid')  # Binary classification
])

# Compile the model
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Display model summary
model.summary()`,
      language: "python"
    },
    {
      title: "Training Your Neural Network",
      description: "Train your model and monitor its performance during the learning process.",
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Training Process</h3>
        <p class="text-gray-300 mb-4">Training involves feeding data through the network, calculating errors, and updating weights to improve performance.</p>
      `,
      code: `# Set up callbacks for better training
callbacks = [
    keras.callbacks.EarlyStopping(
        monitor='val_loss',
        patience=10,
        restore_best_weights=True
    ),
    keras.callbacks.ReduceLROnPlateau(
        monitor='val_loss',
        factor=0.5,
        patience=5,
        min_lr=1e-7
    )
]

# Train the model
history = model.fit(
    X_train_scaled, y_train,
    epochs=100,
    batch_size=32,
    validation_split=0.2,
    callbacks=callbacks,
    verbose=1
)

print("Training completed!")`,
      language: "python"
    },
    {
      title: "Evaluating Model Performance",
      description: "Assess your neural network's performance and visualize training results.",
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Performance Evaluation</h3>
        <p class="text-gray-300 mb-4">Evaluate your model using various metrics and visualize the training process to understand how well your network learned.</p>
      `,
      code: `# Evaluate the model
test_loss, test_accuracy = model.evaluate(X_test_scaled, y_test, verbose=0)
print(f"Test Accuracy: {test_accuracy:.4f}")
print(f"Test Loss: {test_loss:.4f}")

# Make predictions
predictions = model.predict(X_test_scaled)
predicted_classes = (predictions > 0.5).astype(int)

# Plot training history
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('Model Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history.history['accuracy'], label='Training Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.title('Model Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()

plt.tight_layout()
plt.show()`,
      language: "python"
    },
    {
      title: "Making Predictions",
      description: "Use your trained neural network to make predictions on new data.",
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Prediction and Deployment</h3>
        <p class="text-gray-300 mb-4">Now that your model is trained, learn how to make predictions and save your model for future use.</p>
      `,
      code: `# Make predictions on new data
def predict_sample(model, scaler, new_data):
    # Normalize the new data
    new_data_scaled = scaler.transform(new_data.reshape(1, -1))
    
    # Make prediction
    prediction = model.predict(new_data_scaled)
    probability = prediction[0][0]
    
    # Convert to class prediction
    predicted_class = 1 if probability > 0.5 else 0
    
    return predicted_class, probability

# Example prediction
new_sample = np.random.randn(20)  # Random sample
pred_class, prob = predict_sample(model, scaler, new_sample)

print(f"Predicted Class: {pred_class}")
print(f"Probability: {prob:.4f}")

# Save the model
model.save('my_first_neural_network.h5')
print("Model saved successfully!")

# Save the scaler for future use
import joblib
joblib.dump(scaler, 'feature_scaler.pkl')
print("Scaler saved successfully!")`,
      language: "python"
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        backgroundImage="/lovable-uploads/d810ceaa-aedc-4471-b105-bfb9efa741c7.png"
        title={
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Building Your First Neural Network
          </span>
        }
        subtitle="A comprehensive step-by-step guide to creating, training, and deploying your first neural network using TensorFlow and Python"
        showButtons={false}
        height="h-[60vh]"
      />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/knowledge-base" className="hover:text-white transition-colors">Knowledge Base</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Building Your First Neural Network</span>
        </nav>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Tutorial Meta Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-primary/80 border-gray-700">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3-4 Hours</div>
                <div className="text-sm text-gray-400">Estimated Time</div>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-2">
                  {getDifficultyStars(3)}
                </div>
                <div className="text-lg font-semibold text-white">Intermediate</div>
                <div className="text-sm text-gray-400">Difficulty Level</div>
              </CardContent>
            </Card>


            <Card className="bg-primary/80 border-gray-700">
              <CardContent className="p-6 text-center">
                <Brain className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-lg font-semibold text-white">Hands-on</div>
                <div className="text-sm text-gray-400">Learning Style</div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack Preview */}
          <Card className="bg-primary/80 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-white font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What You'll Need Section */}
          <Card className="bg-primary/80 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                What You'll Need
              </CardTitle>
              <CardDescription className="text-gray-400">
                Prerequisites and requirements for this tutorial
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Prerequisites</h4>
                  <ul className="space-y-2">
                    {prerequisites.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">System Requirements</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      Python 3.7+ installed
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      4GB+ RAM (8GB recommended)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      GPU optional but recommended
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      Internet connection for package installation
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tutorial Steps */}
          <Card className="bg-primary/80 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Tutorial Steps</CardTitle>
              <CardDescription className="text-gray-400">
                Follow these steps to build your first neural network from scratch
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {tutorialSteps.map((step, index) => (
                  <AccordionItem key={index} value={`step-${index}`} className="border-gray-700">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-center gap-4 w-full">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                            completedSteps.has(index) 
                              ? 'bg-green-500 text-white' 
                              : 'bg-secondary text-white'
                          }`}>
                            {completedSteps.has(index) ? <CheckCircle className="w-4 h-4" /> : index + 1}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                            <p className="text-sm text-gray-400 mt-1">{step.description}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleStepCompletion(index);
                          }}
                          className="ml-auto text-gray-400 hover:text-white"
                        >
                          {completedSteps.has(index) ? 'Mark Incomplete' : 'Mark Complete'}
                        </Button>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="space-y-6">
                        {/* Visual illustration for each step */}
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-400/20">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                              <Brain className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white">Visual Overview</h4>
                          </div>
                          
                          {/* Step-specific visual content */}
                          {index === 0 && (
                            <div className="space-y-4">
                              <div className="bg-white/5 rounded-lg p-4">
                                <div className="text-center text-gray-300 text-sm mb-3">Neural Network Architecture</div>
                                <div className="flex items-center justify-center space-x-8">
                                  <div className="flex flex-col items-center space-y-2">
                                    <div className="text-accent text-xs">Input Layer</div>
                                    <div className="flex flex-col space-y-1">
                                      {[1,2,3].map(i => (
                                        <div key={i} className="w-4 h-4 rounded-full bg-blue-400"></div>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center space-y-2">
                                    <div className="text-accent text-xs">Hidden Layer</div>
                                    <div className="flex flex-col space-y-1">
                                      {[1,2,3,4].map(i => (
                                        <div key={i} className="w-4 h-4 rounded-full bg-purple-400"></div>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center space-y-2">
                                    <div className="text-accent text-xs">Output Layer</div>
                                    <div className="w-4 h-4 rounded-full bg-green-400"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 1 && (
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div className="bg-white/5 rounded-lg p-3">
                                <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                <div className="text-sm text-white">Install Libraries</div>
                              </div>
                              <div className="bg-white/5 rounded-lg p-3">
                                <Database className="w-8 h-8 text-green-400 mx-auto mb-2" />
                                <div className="text-sm text-white">Setup Environment</div>
                              </div>
                              <div className="bg-white/5 rounded-lg p-3">
                                <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                <div className="text-sm text-white">Verify Installation</div>
                              </div>
                            </div>
                          )}
                          
                          {index === 2 && (
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="text-center text-gray-300 text-sm mb-3">Data Pipeline Flow</div>
                              <div className="flex items-center justify-between">
                                <div className="text-center">
                                  <div className="w-12 h-8 bg-yellow-400 rounded mb-2"></div>
                                  <div className="text-xs text-gray-400">Raw Data</div>
                                </div>
                                <div className="text-accent">→</div>
                                <div className="text-center">
                                  <div className="w-12 h-8 bg-orange-400 rounded mb-2"></div>
                                  <div className="text-xs text-gray-400">Split</div>
                                </div>
                                <div className="text-accent">→</div>
                                <div className="text-center">
                                  <div className="w-12 h-8 bg-blue-400 rounded mb-2"></div>
                                  <div className="text-xs text-gray-400">Normalize</div>
                                </div>
                                <div className="text-accent">→</div>
                                <div className="text-center">
                                  <div className="w-12 h-8 bg-green-400 rounded mb-2"></div>
                                  <div className="text-xs text-gray-400">Ready</div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 3 && (
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="text-center text-gray-300 text-sm mb-3">Layer Architecture</div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-16 h-8 bg-blue-400 rounded flex items-center justify-center text-xs text-white">Input</div>
                                  <div className="text-gray-400 text-sm">20 neurons (features)</div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-16 h-8 bg-purple-400 rounded flex items-center justify-center text-xs text-white">Dense</div>
                                  <div className="text-gray-400 text-sm">64 neurons + ReLU</div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-16 h-8 bg-purple-400 rounded flex items-center justify-center text-xs text-white">Dense</div>
                                  <div className="text-gray-400 text-sm">32 neurons + Dropout</div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-16 h-8 bg-green-400 rounded flex items-center justify-center text-xs text-white">Output</div>
                                  <div className="text-gray-400 text-sm">1 neuron + Sigmoid</div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 4 && (
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="text-center text-gray-300 text-sm mb-3">Training Process</div>
                              <div className="grid grid-cols-4 gap-2 text-center">
                                <div className="space-y-2">
                                  <div className="w-full h-6 bg-gradient-to-r from-red-400 to-orange-400 rounded"></div>
                                  <div className="text-xs text-gray-400">Forward Pass</div>
                                </div>
                                <div className="space-y-2">
                                  <div className="w-full h-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded"></div>
                                  <div className="text-xs text-gray-400">Loss Calculation</div>
                                </div>
                                <div className="space-y-2">
                                  <div className="w-full h-6 bg-gradient-to-r from-yellow-400 to-green-400 rounded"></div>
                                  <div className="text-xs text-gray-400">Backpropagation</div>
                                </div>
                                <div className="space-y-2">
                                  <div className="w-full h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded"></div>
                                  <div className="text-xs text-gray-400">Update Weights</div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 5 && (
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="text-center text-gray-300 text-sm mb-3">Model Performance Metrics</div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                  <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center mx-auto mb-2">
                                    <span className="text-white font-bold">85%</span>
                                  </div>
                                  <div className="text-xs text-gray-400">Accuracy</div>
                                </div>
                                <div className="text-center">
                                  <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center mx-auto mb-2">
                                    <span className="text-white font-bold">0.3</span>
                                  </div>
                                  <div className="text-xs text-gray-400">Loss</div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 6 && (
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="text-center text-gray-300 text-sm mb-3">Model Deployment Flow</div>
                              <div className="flex items-center justify-between">
                                <div className="text-center">
                                  <div className="w-12 h-8 bg-purple-400 rounded mb-2"></div>
                                  <div className="text-xs text-gray-400">New Data</div>
                                </div>
                                <div className="text-accent">→</div>
                                <div className="text-center">
                                  <div className="w-12 h-8 bg-blue-400 rounded mb-2"></div>
                                  <div className="text-xs text-gray-400">Preprocess</div>
                                </div>
                                <div className="text-accent">→</div>
                                <div className="text-center">
                                  <div className="w-12 h-8 bg-orange-400 rounded mb-2"></div>
                                  <div className="text-xs text-gray-400">Predict</div>
                                </div>
                                <div className="text-accent">→</div>
                                <div className="text-center">
                                  <div className="w-12 h-8 bg-green-400 rounded mb-2"></div>
                                  <div className="text-xs text-gray-400">Result</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {step.content && (
                          <div 
                            className="prose prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: step.content }}
                          />
                        )}

                        {step.code && (
                          <div className="relative">
                            <div className="flex items-center justify-between mb-3">
                              <Badge variant="outline" className="text-accent border-accent">
                                {step.language}
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(step.code!, `step-${index}`)}
                                className="text-gray-400 hover:text-white"
                              >
                                {copiedCode === `step-${index}` ? (
                                  <CheckCircle className="w-4 h-4" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                                {copiedCode === `step-${index}` ? 'Copied!' : 'Copy'}
                              </Button>
                            </div>
                            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                              <code className="text-gray-300">{step.code}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Congratulations Section */}
          <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/30 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                🎉 Congratulations!
              </CardTitle>
              <CardDescription className="text-gray-300">
                You've successfully built your first neural network!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300">
                  You now have the fundamental knowledge to create, train, and deploy neural networks. 
                  Consider exploring these next steps to further your machine learning journey.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">Next Steps</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Experiment with different architectures</li>
                      <li>• Try convolutional neural networks (CNNs)</li>
                      <li>• Explore recurrent neural networks (RNNs)</li>
                      <li>• Learn about transfer learning</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">Resources</h4>
                    <div className="space-y-2">
                      <a href="https://tensorflow.org/tutorials" className="flex items-center gap-2 text-accent hover:text-accent/80 text-sm">
                        <ExternalLink className="w-4 h-4" />
                        TensorFlow Tutorials
                      </a>
                      <a href="https://keras.io/guides/" className="flex items-center gap-2 text-accent hover:text-accent/80 text-sm">
                        <ExternalLink className="w-4 h-4" />
                        Keras Guides
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Neural Networks", "Machine Learning", "TensorFlow", "Python", "Deep Learning", "AI", "Beginner-Friendly"].map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Live Training CTA Section */}
          <Card className="bg-gradient-to-br from-secondary/20 to-red-600/20 border-secondary/30 mt-12">
            <CardContent className="p-8 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Want Personalized Live Training?
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Take your neural network skills to the next level with our expert-led, hands-on training sessions. 
                    Get direct mentorship, work on real projects, and accelerate your AI learning journey.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/5 rounded-lg p-4">
                    <Brain className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-2">Expert Instructors</h4>
                    <p className="text-sm text-gray-400">Learn from industry professionals with years of AI experience</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <Code className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-2">Hands-on Projects</h4>
                    <p className="text-sm text-gray-400">Build real-world neural networks and AI applications</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-2">Small Groups</h4>
                    <p className="text-sm text-gray-400">Personalized attention in intimate learning environments</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-gradient-to-r from-secondary to-red-600 hover:from-secondary/90 hover:to-red-600/90 text-white px-8 py-3 text-lg"
                  >
                    <Link to="/contact">
                      Schedule a Consultation
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-400">
                    Free 30-minute consultation to discuss your learning goals and training options
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Share */}
          <div className="text-center mt-8">
            <SocialShare 
              url={window.location.href}
              title="Building Your First Neural Network - BIXORY AI Tutorial"
              description="Learn to build, train, and deploy neural networks with this comprehensive step-by-step guide."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuildingFirstNeuralNetwork;