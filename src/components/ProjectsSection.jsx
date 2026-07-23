import React from 'react';
import { Code, ExternalLink, Bot, Database, Navigation, MessageSquare, Terminal } from 'lucide-react';
import './ProjectsSection.css';

const projects = [
  {
    title: 'AI-Powered Code Review Bot',
    description: 'A multi-tenant SaaS platform that reviews GitHub PRs using AI and posts inline comments, with a React dashboard for monitoring reviews and subscription metrics.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ', 'OpenAI'],
    features: 'Supports multi-tenant orgs with role-based access across N+ teams.',
    githubUrl: 'https://github.com/Deepakram007/AI-Powered-Code-Review-Bot',
    liveUrl: '#',
    icon: Bot,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'Code Review Bot - Automation Testing Suite',
    description: 'Comprehensive automation testing suite designed to validate the end-to-end functionality, webhook delivery, AI sentiment feedback, and API reliability of the Code Review Bot.',
    stack: ['Playwright', 'TypeScript', 'Node.js', 'GitHub Actions', 'Docker'],
    features: 'Enforces system stability with E2E integration tests, verifying webhook responses in <10ms and automated GitHub PR commentary.',
    githubUrl: 'https://github.com/Deepakram007/My-Automation-testing-on-Code-Review_Bot',
    liveUrl: '#',
    icon: Terminal,
    gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
  },
  {
    title: 'RAG Chatbot',
    description: 'A FastAPI and Chroma-based retrieval-augmented chatbot that answers questions grounded in user-provided documents using NVIDIA NIM APIs.',
    stack: ['FastAPI', 'Python', 'Chroma DB', 'NVIDIA NIM', 'Llama 3', 'Streamlit'],
    features: 'Features text/file ingestion with automatic timestamping to prevent source collisions, plus a streamlined Streamlit demo.',
    githubUrl: 'https://github.com/Deepakram007/Chat-bot',
    liveUrl: '#',
    icon: MessageSquare,
    gradient: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)'
  },
  {
    title: 'Scalable CSV Processing & Job Queue System',
    description: 'Distributed CSV processing system using BullMQ + Redis with streaming parsing for memory-efficient handling of arbitrarily large files.',
    stack: ['Node.js', 'Redis', 'React', 'BullMQ'],
    features: 'Real-time job progress tracking (0-100%) via a live React dashboard, automated file cleanup, and sub-second polling latency.',
    githubUrl: '#',
    liveUrl: '#',
    icon: Database,
    gradient: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)'
  },
  {
    title: 'Smart Mall Navigation System',
    description: 'Full-stack AI mall concierge with a RAG pipeline using Gemini embeddings + MongoDB Atlas Vector Search for natural language store/product queries. Built during a 24-hour hackathon.',
    stack: ['React', 'Django', 'Three.js', 'React Three Fiber', 'MongoDB', 'Gemini'],
    features: 'Multimodal visual fashion search via CLIP ViT-B/32 + cosine similarity, plus an interactive 3D mall map.',
    githubUrl: '#',
    liveUrl: '#',
    icon: Navigation,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="container projects-section">
      <h2 className="section-title text-gradient">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-panel">
            
            {/* MEDIA CONTAINER WITH THEME GRADIENTS AND ICONS */}
            <div className="project-media placeholder-media" style={{ background: project.gradient }}>
              <div className="project-media-icon-wrapper">
                <project.icon className="project-media-icon" size={48} />
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-features"><strong>Highlight:</strong> {project.features}</p>
              
              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i} className="stack-item">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                  <Code size={20} />
                  <span>Code</span>
                </a>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
