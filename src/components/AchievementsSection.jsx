import React from 'react';
import { Award, Trophy, ExternalLink } from 'lucide-react';
import './AchievementsSection.css';

const achievements = [
  {
    title: 'Best Performer Award',
    description: 'Smart Innovators Hackathon, JJ College of Engineering and Technology, in association with T-Hub.',
    icon: <Trophy size={24} className="achievement-icon" />
  },
  {
    title: '3rd Place in DEVSPARK\'25',
    description: 'DevForge (24-hour Hackathon), KPR Institute of Engineering and Technology.',
    icon: <Award size={24} className="achievement-icon" />
  },
  {
    title: 'Claude 101 Certificate',
    description: 'Anthropic (2026).',
    link: 'https://anthropic.com',
    icon: <Award size={24} className="achievement-icon" />
  },
  {
    title: 'GenAI-Powered Data Analytics Job Simulation',
    description: 'TATA - Forage (2025).',
    link: 'https://www.theforage.com',
    icon: <Award size={24} className="achievement-icon" />
  },
  {
    title: 'Java Programming Masterclass',
    description: 'Udemy Comprehensive Certification.',
    icon: <Award size={24} className="achievement-icon" />
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="container achievements-section">
      <h2 className="section-title text-gradient">Achievements & Certifications</h2>
      <div className="achievements-list">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card glass-panel">
            <div className="icon-wrapper">
              {item.icon}
            </div>
            <div className="achievement-content">
              <div className="achievement-header-row">
                <h3 className="achievement-title">{item.title}</h3>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-link"
                    aria-label={`Verify ${item.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="achievement-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
