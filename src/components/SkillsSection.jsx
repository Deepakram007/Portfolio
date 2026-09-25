import React from 'react';
import './SkillsSection.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python']
  },
  {
    title: 'Frontend & Mobile',
    skills: ['React.js', 'Next.js', 'React Native', 'Three.js', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend Systems',
    skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'BullMQ', 'WebSockets']
  },
  {
    title: 'Databases & Vector Stores',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'ChromaDB', 'Vector Search']
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Terraform', 'AWS ECS Fargate', 'Docker', 'GitHub Actions', 'CI/CD', 'Git']
  },
  {
    title: 'AI / ML & GenAI',
    skills: ['OpenAI APIs', 'NVIDIA NIM (Llama 3)', 'Gemini', 'CLIP', 'RAG Pipelines', 'Embeddings']
  },
  {
    title: 'Architecture & Concepts',
    skills: ['System Design', 'Distributed Queues', 'Stream Processing', 'DSA', 'OOP']
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="container skills-section">
      <h2 className="section-title text-gradient">My Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card glass-panel">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
