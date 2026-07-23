import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="container about-section">
      <h2 className="section-title text-gradient">About Me</h2>
      <div className="about-content glass-panel">
        <p>
          I'm a Computer Science undergraduate who genuinely enjoys building things from distributed systems to AI-powered tools to full-stack platforms. What draws me to any project isn't the tech stack or the title on the role; it's the problem itself, and I'll dig in and learn whatever it takes to solve it. 
        </p>
        <p>
          I've picked up skills across backend systems, frontend development, databases, and AI/ML simply because each project demanded something new, and I wanted to meet it. That curiosity has carried me through hackathons, internships, and late nights debugging things nobody asked me to fix. 
        </p>
        <p>
          I care about doing the work properly, not just quickly — writing code I'd be comfortable handing to a teammate and showing up consistently, not just when it's convenient. I'm early in my career, but I bring real effort, real curiosity, and a willingness to be useful wherever I'm needed.
        </p>
        
        <div className="education-box">
          <h3>Education</h3>
          <div className="edu-item">
            <h4>Saranathan College of Engineering</h4>
            <p>Bachelor of Engineering in Computer Science (GPA: 8.024) | Expected May 2027</p>
          </div>
          <div className="edu-item">
            <h4>Campion Anglo Indian Higher Secondary School</h4>
            <p>Class XII (83.5%) | Jun 2022 - May 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
