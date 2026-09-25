import React, { useState } from 'react';
import { Code, ExternalLink, Bot, Database, Navigation, MessageSquare, Terminal, Zap, Shield, Layers } from 'lucide-react';
import './ProjectsSection.css';

const projects = [
  {
    title: 'Enterprise-Grade AI Code Review Bot',
    category: 'ai-rag',
    description: 'A multi-tenant GitHub App acting as an automated Senior Engineer by analyzing PRs via OpenAI to post inline comments on bugs, security flaws, and performance issues.',
    stack: ['Node.js', 'TypeScript', 'Express', 'Terraform', 'AWS ECS Fargate', 'PostgreSQL', 'Redis', 'BullMQ', 'OpenAI'],
    features: 'Multi-tenant architecture with sub-second webhook processing and Prisma PostgreSQL usage & billing analytics.',
    metrics: ['⚡ Sub-second Webhook Processing', '☁️ 100% Terraform IaC on AWS ECS Fargate', '🛡️ Multi-Tenant VPC'],
    githubUrl: 'https://github.com/Deepakram007/AI-Powered-Code-Review-Bot',
    liveUrl: '#',
    icon: Bot,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '',
    video: '',
    details: [
      'Engineered a multi-tenant GitHub App that inspects git diffs and posts inline code reviews on bugs and vulnerabilities.',
      'Built 100% Infrastructure-as-Code (Terraform) on AWS ECS Fargate within a private VPC with Express.js, Redis, and BullMQ.',
      'Integrated PostgreSQL with Prisma ORM for usage tracking and billing analytics.'
    ]
  },
  {
    title: 'Scalable CSV Processing & Job Queue System',
    category: 'backend',
    description: 'Distributed CSV processing pipeline built with BullMQ and Redis using streaming parsing to handle arbitrarily large datasets with zero memory leaks.',
    stack: ['Node.js', 'Redis', 'BullMQ', 'React', 'Express', 'Streams API'],
    features: 'Memory-efficient chunked streaming via fs.createReadStream, automated file cleanup, and real-time dashboard.',
    metrics: ['🚀 Zero-Memory Leak Stream Parsing', '📊 0–100% Real-Time Live Dashboard', '⚡ Sub-second Polling Latency'],
    githubUrl: 'https://github.com/Deepakram007/CSV-Queue-Processing-System',
    liveUrl: '#',
    icon: Database,
    gradient: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)',
    image: '',
    video: '',
    details: [
      'Engineered streaming parser using fs.createReadStream and BullMQ worker queues to process massive CSVs efficiently.',
      'Constructed a live React dashboard tracking job status (0–100%) with automated file lifecycle cleanup and email notifications upon completion.'
    ]
  },
  {
    title: 'RAG Chatbot with Document Grounding',
    category: 'ai-rag',
    description: 'A FastAPI and ChromaDB-based retrieval-augmented chatbot that answers queries strictly grounded in user-provided documents using NVIDIA NIM and Llama 3.',
    stack: ['FastAPI', 'Python', 'ChromaDB', 'NVIDIA NIM', 'Llama 3', 'Streamlit', 'Sentence-Transformers'],
    features: 'Document ingestion with automatic timestamping to prevent source collisions, top-k vector search, and citation grounding.',
    metrics: ['🤖 NVIDIA NIM (Llama 3)', '📚 ChromaDB Vector Search', '🔍 Source-Cited Grounded Answers'],
    githubUrl: 'https://github.com/Deepakram007/Chat-bot',
    liveUrl: '#',
    icon: MessageSquare,
    gradient: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
    image: '',
    video: '',
    details: [
      'Built a custom FastAPI backend utilizing ChromaDB for semantic vector searches with local sentence-transformers embeddings.',
      'Integrated NVIDIA NIM (Llama 3) for grounded, source-cited document answers over uploaded PDFs and text files.'
    ]
  },
  {
    title: 'Code Review Bot - Automation Testing Suite',
    category: 'backend',
    description: 'Comprehensive automation testing suite validating end-to-end webhook delivery, PR comment posting, AI sentiment feedback, and API reliability.',
    stack: ['Playwright', 'TypeScript', 'Node.js', 'GitHub Actions', 'Docker'],
    features: 'Mock GitHub API environment simulating PR updates, review webhooks, and sentiment checks in containerized CI/CD.',
    metrics: ['🛡️ 100% Pass Rate in CI/CD', '⚡ <10ms Webhook Latency Check', '🐳 Dockerized Test Environment'],
    githubUrl: 'https://github.com/Deepakram007/My-Automation-testing-on-Code-Review_Bot',
    liveUrl: '#',
    icon: Terminal,
    gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    image: '',
    video: '',
    details: [
      'Developed end-to-end testing suite with Playwright verifying webhook delivery in <10ms and automated GitHub PR commentary.',
      'Configured automated CI/CD workflows using GitHub Actions and containerized Docker test suites.'
    ]
  },
  {
    title: 'Smart Mall Navigation & Fashion Search',
    category: 'ai-rag',
    description: 'Full-stack AI mall concierge featuring an interactive 3D map, RAG store assistant, and multimodal visual fashion search. Built during a 24-hour hackathon.',
    stack: ['React', 'Django', 'Three.js', 'React Three Fiber', 'MongoDB Atlas', 'Gemini', 'CLIP'],
    features: 'Multimodal visual search via CLIP ViT-B/32 cosine similarity + Gemini embeddings for natural language store queries.',
    metrics: ['🏆 24-Hr Hackathon Award Winner', '👁️ CLIP ViT-B/32 Visual Search', '🗺️ Interactive 3D Mall Map'],
    githubUrl: 'https://github.com/ajaykumar246/Smart-Mall-Assistant',
    liveUrl: '#',
    icon: Navigation,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '',
    video: '',
    details: [
      'Constructed a 3D mall map using Three.js and React Three Fiber for store pathfinding and orientation.',
      'Integrated MongoDB Atlas Vector Search and Gemini embeddings for natural language queries and CLIP for visual search.'
    ]
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-rag', label: 'AI & RAG Systems' },
  { id: 'backend', label: 'Distributed Backend & Cloud' }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="container projects-section">
      <h2 className="section-title text-gradient">Featured Projects</h2>
      
      {/* Category Filter Tabs */}
      <div className="project-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card glass-panel">
            
            {/* MEDIA CONTAINER */}
            <div className="project-media">
              {project.video ? (
                <video src={project.video} autoPlay loop muted playsInline className="project-media-file" />
              ) : project.image ? (
                <img src={project.image} alt={project.title} className="project-media-file" />
              ) : (
                <div className="placeholder-media" style={{ background: project.gradient }}>
                  <div className="project-media-icon-wrapper">
                    <project.icon className="project-media-icon" size={48} />
                  </div>
                </div>
              )}
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              {/* Engineering Metric Badges */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="project-metrics">
                  {project.metrics.map((metric, mIdx) => (
                    <span key={mIdx} className="metric-badge">{metric}</span>
                  ))}
                </div>
              )}

              {/* Detailed bullet explanation */}
              {project.details && project.details.length > 0 && (
                <ul className="project-details-list">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="project-detail-item">{detail}</li>
                  ))}
                </ul>
              )}

              <p className="project-features"><strong>Highlight:</strong> {project.features}</p>
              
              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i} className="stack-item">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                  <Code size={20} />
                  <span>Source Code</span>
                </a>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
