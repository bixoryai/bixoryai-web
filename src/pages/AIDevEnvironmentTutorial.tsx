import { VisualArticleLayout } from "@/components/VisualArticleLayout";
import { TutorialTemplate } from "@/components/knowledge-base/templates/TutorialTemplate";
import GuideNavigation from "@/components/navigation/GuideNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Download, Code, Terminal, Database, Cloud, GitBranch, Settings, Zap, ChevronRight, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import aiDevHero from "@/assets/ai-development-hero.jpg";

const AIDevEnvironmentTutorial = () => {
  const steps = [
    {
      id: "step-1",
      title: "Installing Python and Setting Up Virtual Environments",
      description: "First, we'll install Python and learn to manage dependencies using virtual environments. This ensures your projects don't interfere with each other.",
      codeBlocks: [
        {
          language: "bash",
          filename: "terminal",
          code: `# Install Python (if not already installed)
# On macOS with Homebrew:
brew install python

# On Ubuntu/Debian:
sudo apt update
sudo apt install python3 python3-pip

# On Windows, download from python.org

# Verify installation
python --version
python -m pip --version`
        },
        {
          language: "bash",
          filename: "virtual_environment_setup",
          code: `# Create a new virtual environment
python -m venv ai-env

# Activate the environment
# On macOS/Linux:
source ai-env/bin/activate

# On Windows:
ai-env\\Scripts\\activate

# Your prompt should now show (ai-env)
# Install essential packages
pip install --upgrade pip
pip install jupyter notebook ipython`
        }
      ],
      tryItYourself: "Create a virtual environment named 'my-ai-project' and activate it. Install numpy and pandas to test your setup."
    },
    {
      id: "step-2", 
      title: "Installing Essential AI/ML Libraries",
      description: "Install the core libraries you'll need for most AI and machine learning projects, including data manipulation, visualization, and basic ML frameworks.",
      codeBlocks: [
        {
          language: "bash",
          filename: "requirements.txt",
          code: `# Core data science libraries
numpy>=1.21.0
pandas>=1.3.0
matplotlib>=3.4.0
seaborn>=0.11.0
scikit-learn>=1.0.0

# Deep learning frameworks
tensorflow>=2.8.0
torch>=1.11.0
torchvision>=0.12.0

# Jupyter and development tools
jupyter>=1.0.0
ipykernel>=6.0.0
notebook>=6.4.0

# Additional useful libraries
plotly>=5.0.0
opencv-python>=4.5.0
pillow>=8.3.0
requests>=2.26.0`
        },
        {
          language: "bash",
          filename: "installation_commands",
          code: `# Install from requirements file
pip install -r requirements.txt

# Or install individually for specific needs:
# Data manipulation and analysis
pip install numpy pandas matplotlib seaborn

# Machine learning
pip install scikit-learn tensorflow torch torchvision

# Computer vision
pip install opencv-python pillow

# Natural language processing
pip install nltk spacy transformers

# For API development
pip install fastapi uvicorn requests`
        }
      ],
      tryItYourself: "Create a requirements.txt file with your preferred libraries and install them in your virtual environment."
    },
    {
      id: "step-3",
      title: "Setting Up Jupyter Lab for Interactive Development", 
      description: "Configure Jupyter Lab as your primary development environment for experimental AI work and data analysis.",
      codeBlocks: [
        {
          language: "bash",
          filename: "jupyter_setup",
          code: `# Install JupyterLab (more advanced than Jupyter Notebook)
pip install jupyterlab

# Install useful extensions
pip install jupyterlab-lsp
pip install jupyterlab-git

# For better code completion
pip install jedi-language-server

# Start JupyterLab
jupyter lab

# This will open http://localhost:8888 in your browser`
        },
        {
          language: "python",
          filename: "test_notebook.ipynb", 
          code: `# Test your setup with this code in a new notebook
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Test basic functionality
print("AI Development Environment Setup Complete!")
print(f"NumPy version: {np.__version__}")
print(f"Pandas version: {pd.__version__}")

# Create a simple visualization
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, label='sin(x)')
plt.title('Test Visualization')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.legend()
plt.grid(True)
plt.show()`
        }
      ],
      tryItYourself: "Create a new Jupyter notebook and run the test code above. Experiment with creating a simple data visualization of your own."
    },
    {
      id: "step-4",
      title: "Configuring Your Code Editor for AI Development",
      description: "Set up Visual Studio Code with essential extensions for AI development, or configure your preferred editor with AI-specific tools.",
      codeBlocks: [
        {
          language: "json",
          filename: "vscode_extensions.json",
          code: `{
  "recommendations": [
    "ms-python.python",
    "ms-python.pylint", 
    "ms-python.black-formatter",
    "ms-toolsai.jupyter",
    "ms-toolsai.vscode-jupyter-cell-tags",
    "ms-toolsai.vscode-jupyter-slideshow",
    "charliermarsh.ruff",
    "ms-vscode.live-server",
    "github.copilot",
    "github.copilot-chat"
  ]
}`
        },
        {
          language: "json",
          filename: "vscode_settings.json",
          code: `{
  "python.defaultInterpreterPath": "./ai-env/bin/python",
  "python.formatting.provider": "black",
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "jupyter.askForKernelRestart": false,
  "jupyter.alwaysTrustNotebooks": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  }
}`
        }
      ],
      tryItYourself: "Install VS Code and the recommended extensions. Create a simple Python file and test the linting and formatting features."
    },
    {
      id: "step-5",
      title: "Setting Up Git and Version Control",
      description: "Configure Git for tracking your AI projects and learn best practices for versioning machine learning code and datasets.",
      codeBlocks: [
        {
          language: "bash", 
          filename: "git_setup",
          code: `# Configure Git (if first time)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize a new AI project repository
mkdir my-ai-project
cd my-ai-project
git init

# Create essential files
touch README.md
touch requirements.txt
touch .gitignore`
        },
        {
          language: "gitignore",
          filename: ".gitignore",
          code: `# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
env/
venv/
ai-env/
.venv
pip-log.txt
pip-delete-this-directory.txt

# Jupyter Notebook
.ipynb_checkpoints
*/.ipynb_checkpoints/*

# Data files (add specific extensions you use)
*.csv
*.xlsx
*.h5
*.hdf5
*.pkl
*.pickle

# Model files
*.model
*.weights
*.h5
models/
checkpoints/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log`
        }
      ],
      tryItYourself: "Initialize a Git repository for your AI project, create the .gitignore file above, and make your first commit."
    },
    {
      id: "step-6",
      title: "Installing and Configuring Docker for Reproducible Environments",
      description: "Set up Docker to create consistent, reproducible AI development environments that work across different systems.",
      codeBlocks: [
        {
          language: "dockerfile",
          filename: "Dockerfile",
          code: `# Use official Python runtime as base image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    gcc \\
    g++ \\
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Expose port for Jupyter
EXPOSE 8888

# Default command
CMD ["jupyter", "lab", "--ip=0.0.0.0", "--port=8888", "--allow-root", "--no-browser"]`
        },
        {
          language: "yaml",
          filename: "docker-compose.yml",
          code: `version: '3.8'

services:
  ai-dev:
    build: .
    ports:
      - "8888:8888"
    volumes:
      - .:/app
      - ai-data:/app/data
    environment:
      - JUPYTER_ENABLE_LAB=yes
    command: jupyter lab --ip=0.0.0.0 --port=8888 --allow-root --no-browser

volumes:
  ai-data:`
        },
        {
          language: "bash",
          filename: "docker_commands",
          code: `# Build and run your AI development environment
docker-compose up --build

# Or run individual commands:
# Build the image
docker build -t my-ai-env .

# Run the container
docker run -p 8888:8888 -v $(pwd):/app my-ai-env

# Access Jupyter Lab at http://localhost:8888`
        }
      ],
      tryItYourself: "Create the Dockerfile and docker-compose.yml files above, then build and run your containerized AI environment."
    },
    {
      id: "step-7",
      title: "Cloud Setup and GPU Configuration",
      description: "Configure cloud platforms and GPU access for computationally intensive AI workloads.",
      codeBlocks: [
        {
          language: "bash",
          filename: "gpu_setup",
          code: `# Check if CUDA is available (for NVIDIA GPUs)
python -c "import torch; print(f'CUDA available: {torch.cuda.is_available()}')"
python -c "import tensorflow as tf; print(f'GPU devices: {tf.config.list_physical_devices(\"GPU\")}')"

# Install CUDA-enabled versions
# For PyTorch (check pytorch.org for latest versions)
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# For TensorFlow
pip install tensorflow[and-cuda]

# Test GPU setup
python -c "
import torch
if torch.cuda.is_available():
    print(f'GPU: {torch.cuda.get_device_name(0)}')
    print(f'Memory: {torch.cuda.get_device_properties(0).total_memory / 1e9:.1f} GB')
else:
    print('GPU not available')
"`
        },
        {
          language: "bash",
          filename: "cloud_setup",
          code: `# Google Colab setup (run in Colab notebook)
# Mount Google Drive
from google.colab import drive
drive.mount('/content/drive')

# AWS CLI setup
pip install awscli boto3
aws configure

# Azure CLI setup  
pip install azure-cli azure-ml

# Weights & Biases for experiment tracking
pip install wandb
wandb login`
        }
      ],
      tryItYourself: "Test your GPU setup (if available) or explore Google Colab as a free GPU alternative for training models."
    },
    {
      id: "step-8",
      title: "Setting Up Experiment Tracking and MLOps Tools",
      description: "Configure tools for tracking experiments, managing models, and deploying AI applications.",
      codeBlocks: [
        {
          language: "python",
          filename: "experiment_tracking.py",
          code: `import wandb
import mlflow
from datetime import datetime

# Weights & Biases setup
def setup_wandb(project_name, experiment_name):
    wandb.init(
        project=project_name,
        name=experiment_name,
        config={
            "learning_rate": 0.001,
            "epochs": 100,
            "batch_size": 32,
            "model": "neural_network"
        }
    )
    return wandb

# MLflow setup
def setup_mlflow(experiment_name):
    mlflow.set_experiment(experiment_name)
    mlflow.start_run(run_name=f"run_{datetime.now().strftime('%Y%m%d_%H%M%S')}")
    return mlflow

# Example usage
if __name__ == "__main__":
    # Initialize experiment tracking
    wandb_run = setup_wandb("my-ai-project", "baseline_model")
    
    # Log metrics during training
    for epoch in range(10):
        loss = 1.0 / (epoch + 1)  # Dummy loss
        wandb.log({"epoch": epoch, "loss": loss})
    
    wandb.finish()`
        },
        {
          language: "bash",
          filename: "mlops_tools",
          code: `# Install MLOps and experiment tracking tools
pip install wandb mlflow tensorboard

# Data versioning with DVC
pip install dvc dvc[s3]  # or dvc[gs] for Google Cloud

# Model deployment tools
pip install streamlit gradio fastapi

# Initialize DVC for data versioning
dvc init
dvc add data/large_dataset.csv
git add data/large_dataset.csv.dvc .gitignore
git commit -m "Add dataset to DVC tracking"

# Start MLflow UI
mlflow ui

# Start TensorBoard
tensorboard --logdir=logs`
        }
      ],
      tryItYourself: "Set up experiment tracking with either Weights & Biases or MLflow. Run a simple training loop and track some metrics."
    }
  ];

  const prerequisites = [
    "Basic command line/terminal knowledge",
    "Python programming fundamentals",
    "Understanding of package management concepts",
    "Basic Git knowledge (helpful but not required)",
    "Computer with internet connection and admin privileges"
  ];

  const technologies = [
    "Python",
    "Jupyter Lab",
    "TensorFlow",
    "PyTorch", 
    "Docker",
    "Git",
    "VS Code",
    "MLflow",
    "Weights & Biases"
  ];

  const tags = [
    "Environment Setup",
    "Python",
    "Docker",
    "MLOps",
    "Development Tools",
    "GPU Setup",
    "Jupyter",
    "Git"
  ];

  const finalProject = {
    description: "You now have a complete AI development environment! You can create reproducible projects, track experiments, and scale your work from local development to cloud deployment.",
    githubUrl: "https://github.com/bixory/ai-dev-environment-template"
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Breadcrumb Navigation */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/knowledge-base" className="text-gray-400 hover:text-white transition-colors">
                    Knowledge Base
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage className="text-white">AI Development Environment Setup</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900">
          <img 
            src={aiDevHero} 
            alt="AI Development Environment" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="text-accent border-accent/50 bg-accent/10">
                <Terminal className="h-4 w-4 mr-2" />
                Development Tutorial
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Setting Up Your
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse block">
                AI Development Environment
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A comprehensive guide to setting up a professional AI development environment from scratch. 
              Learn to configure Python, essential libraries, development tools, version control, 
              containerization, and MLOps tools for productive AI development.
            </p>
            
            {/* Meta Information Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-primary/80 border-gray-700">
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Duration</p>
                  <p className="text-white font-semibold">120 minutes</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/80 border-gray-700">
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[1, 2].map((i) => (
                      <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                    ))}
                    {[3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-gray-600" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">Difficulty</p>
                  <p className="text-white font-semibold">Beginner</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/80 border-gray-700">
                <CardContent className="p-4 text-center">
                  <Code className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Steps</p>
                  <p className="text-white font-semibold">8 Steps</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/80 border-gray-700">
                <CardContent className="p-4 text-center">
                  <Download className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Resources</p>
                  <p className="text-white font-semibold">Included</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Technologies You'll Master
            </h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Python", icon: Code, color: "text-blue-400", bg: "bg-blue-500/10" },
                { name: "Jupyter Lab", icon: Terminal, color: "text-orange-400", bg: "bg-orange-500/10" },
                { name: "Docker", icon: Database, color: "text-cyan-400", bg: "bg-cyan-500/10" },
                { name: "Git", icon: GitBranch, color: "text-green-400", bg: "bg-green-500/10" },
                { name: "TensorFlow", icon: Zap, color: "text-purple-400", bg: "bg-purple-500/10" },
                { name: "PyTorch", icon: Zap, color: "text-red-400", bg: "bg-red-500/10" },
                { name: "Cloud Platforms", icon: Cloud, color: "text-indigo-400", bg: "bg-indigo-500/10" },
                { name: "MLOps Tools", icon: Settings, color: "text-yellow-400", bg: "bg-yellow-500/10" },
              ].map((tech) => (
                <Card key={tech.name} className="bg-primary/80 border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 ${tech.bg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <tech.icon className={`h-6 w-6 ${tech.color}`} />
                    </div>
                    <p className="text-white font-medium">{tech.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900/20 to-gray-800/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/80 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Settings className="h-6 w-6 text-accent" />
                  What You'll Need
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {prerequisites.map((prereq, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{prereq}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tutorial Content */}
      <div className="bg-gradient-to-br from-primary via-primary to-blue-900">
        <TutorialTemplate
          title="Setting Up Your AI Development Environment"
          description="A comprehensive guide to setting up a professional AI development environment from scratch. Learn to configure Python, essential libraries, development tools, version control, containerization, and MLOps tools for productive AI development."
          difficulty={2}
          estimatedTime={120}
          technologies={technologies}
          prerequisites={prerequisites}
          steps={steps}
          finalProject={finalProject}
          tags={tags}
        />
      </div>
      
      <GuideNavigation />
      <Footer />
    </div>
  );
};

export default AIDevEnvironmentTutorial;