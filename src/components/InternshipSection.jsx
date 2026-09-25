import React from 'react';
import { Calendar, MapPin, Briefcase, ExternalLink, ShieldCheck } from 'lucide-react';
import './InternshipSection.css';

const internships = [
  {
    role: 'Software Engineer Intern',
    company: 'GenoSpark',
    location: 'Remote',
    period: 'May 2026 – Sept 2026',
    description: 'Worked on production Next.js SEO architecture, question engine upload pipelines, and document generation hardening.',
    highlights: [
      'Optimized Next.js metadata, canonical URL slugs, and JSON-LD structured schemas (FAQ & Question/Answer), significantly improving search visibility and social preview rendering.',
      'Debugged and refactored the bulk question upload, validation, and activation pipelines, resolving CSV misrouting and deduplication issues across certification sets.',
      'Hardened the offer/relieving letter document generation pipeline (OpenXML/Docx), fixing digital signature injection and cross-user file leakage vulnerabilities.',
      'Modularized appointment management into reusable React hooks and maintained a 100% pass rate across 474 unit and integration tests.'
    ]
  },
  {
    role: 'Backend Developer Intern — AI-CareerOS',
    company: 'XTRAGRAD Technologies Pvt. Ltd.',
    location: 'Tiruchirappalli, India',
    period: 'Jul 2026',
    certificateId: 'XG-INT-762167',
    certificateUrl: 'https://xtragrad.in/verify',
    description: 'Owned backend engineering for AI-CareerOS, a unified career platform integrating learning, skill development, interview prep, and recruitment.',
    highlights: [
      'Owned backend development for core microservices and integrated REST APIs with frontend and AI/ML teams, resolving cross-team data contracts and timing issues.',
      'Improved error handling, latency, and response consistency across API endpoints following full-system load and integration testing.',
      'Independently designed and built a RAG (Retrieval-Augmented Generation) chatbot using FastAPI, ChromaDB vector store, sentence-transformers, and NVIDIA NIM (Llama 3) for grounded, source-cited document answers.'
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
              
              {internship.certificateId && (
                <div className="internship-certificate">
                  <span className="certificate-badge">
                    <ShieldCheck size={16} />
                    <span>Certificate: {internship.certificateId}</span>
                  </span>
                  {internship.certificateUrl && (
                    <a
                      href={internship.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternshipSection;
