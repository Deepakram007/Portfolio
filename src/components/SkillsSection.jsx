import React from 'react';
import './SkillsSection.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python']
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Three.js', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'REST APIs', 'BullMQ', 'WebSockets']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'Git']
  },
  {
    title: 'AI / ML',
    skills: ['OpenAI APIs', 'Gemini', 'CLIP', 'RAG pipelines', 'Vector Search']
  },
  {
    title: 'Design & Concepts',
    skills: ['Figma', 'Blender', 'DSA', 'OOP', 'System Design']
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
