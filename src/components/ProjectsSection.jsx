import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import './ProjectsSection.css';

const projects = [
  {
    title: 'AI-Powered Code Review Bot',
    description: 'A multi-tenant SaaS platform that reviews GitHub PRs using AI and posts inline comments, with a React dashboard for monitoring reviews and subscription metrics.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ', 'OpenAI'],
    features: 'Supports multi-tenant orgs with role-based access across N+ teams.',
    githubUrl: '#', // Add real URL later
    liveUrl: '#' // Add real URL later
  },
  {
    title: 'Scalable CSV Processing & Job Queue System',
    description: 'Distributed CSV processing system using BullMQ + Redis with streaming parsing for memory-efficient handling of arbitrarily large files.',
    stack: ['Node.js', 'Redis', 'React', 'BullMQ'],
    features: 'Real-time job progress tracking (0-100%) via a live React dashboard, automated file cleanup, and sub-second polling latency.',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Smart Mall Navigation System',
    description: 'Full-stack AI mall concierge with a RAG pipeline using Gemini embeddings + MongoDB Atlas Vector Search for natural language store/product queries. Built during a 24-hour hackathon.',
    stack: ['React', 'Django', 'Three.js', 'React Three Fiber', 'MongoDB', 'Gemini'],
    features: 'Multimodal visual fashion search via CLIP ViT-B/32 + cosine similarity, plus an interactive 3D mall map.',
    githubUrl: '#',
    liveUrl: '#'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="container projects-section">
      <h2 className="section-title text-gradient">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-panel">
            
            {/* MEDIA PLACEHOLDER - INSERT YOUR IMAGE OR VIDEO HERE */}
            <div className="project-media placeholder-media">
              <span>[Insert Project Image/Video Here]</span>
              {/* Example for image: <img src="/your-image.png" alt="Project" /> */}
              {/* Example for video: <video src="/your-video.mp4" autoPlay loop muted /> */}
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
