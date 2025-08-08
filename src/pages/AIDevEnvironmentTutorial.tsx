import { VisualArticleLayout } from "@/components/VisualArticleLayout";
import { TutorialTemplate } from "@/components/knowledge-base/templates/TutorialTemplate";
import GuideNavigation from "@/components/navigation/GuideNavigation";

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
    <VisualArticleLayout>
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
      <GuideNavigation />
    </VisualArticleLayout>
  );
};

export default AIDevEnvironmentTutorial;