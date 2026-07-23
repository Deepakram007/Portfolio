import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import './InternshipSection.css';

const internships = [
  {
    role: 'Software Engineering Intern',
    company: 'Company Name',
    location: 'City, Country (or Remote)',
    period: 'Month YYYY - Month YYYY',
    description: 'Provide a brief summary of your role and responsibilities during the internship.',
    highlights: [
      'Successfully delivered a feature or resolved a bottleneck.',
      'Collaborated with cross-functional teams in an agile environment.',
      'Leveraged modern technologies such as React, Node.js, and TypeScript.'
    ]
  }
];

const InternshipSection = () => {
  return (
    <section id="internship" className="container internship-section">
      <h2 className="section-title text-gradient">Internship Experience</h2>
      <div className="internship-timeline">
        {internships.map((internship, index) => (
          <div key={index} className="internship-card glass-panel">
            <div className="internship-header">
              <div className="internship-title-area">
                <div className="internship-icon-wrapper">
                  <Briefcase size={24} className="internship-icon" />
                </div>
                <div>
                  <h3 className="internship-role">{internship.role}</h3>
                  <h4 className="internship-company">{internship.company}</h4>
                </div>
              </div>
              <div className="internship-meta">
                <span className="internship-meta-item">
                  <Calendar size={16} />
                  <span>{internship.period}</span>
                </span>
                <span className="internship-meta-item">
                  <MapPin size={16} />
                  <span>{internship.location}</span>
                </span>
              </div>
            </div>
            <div className="internship-body">
              <p className="internship-description">{internship.description}</p>
              <ul className="internship-highlights">
                {internship.highlights.map((highlight, idx) => (
                  <li key={idx} className="internship-highlight-item">{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternshipSection;
