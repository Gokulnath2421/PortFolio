// CertificationsHorizontal.jsx
import React from 'react';
import './Certificates.css';

const certifications = [
  {
    year: "2023 (June)",
    title: "Introduction to Python",
    org: "cognitiveai",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/c8f2d92a14514358a623ef095fb09cb7"
  },
  {
    year: "2023 (October)",
    title: "Java Fundamentals",
    org: "cognitiveai",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/c9253155bd994910a6859024899ad532"
  },
  {
    year: "2024 (March)",
    title: "Data Analysis with Python",
    org: "Cognitiveai",
    link: "https://courses.cognitiveclass.ai/certificates/4cac6fb0aa084175954277995420ed5d"
  },
  {
    year: "2024 (May)",
    title: "Cloud Application Developer",
    org: "Cognitiveai",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/9b24f948ea764383a44037d93308851d"
  },
  {
    year: "2024 (September)",
    title: "Programming in Python",
    org: "Coursera",
    link: "https://coursera.org/verify/XNI15BJ4JK56"
  },
  {
    year: "2024 (September)",
    title: "Version Control",
    org: "Coursera",
    link: "https://coursera.org/verify/2ZM5FPHMC453"
  },
  {
    year: "2024 (November)",
    title: "Django Web Framework",
    org: "Coursera",
    link: "https://coursera.org/verify/PY4E9FOKTQ9C"
  },
  {
    year: "2024 (November)",
    title: "The Full Stack",
    org: "Coursera",
    link: "https://coursera.org/verify/ST7Y1HX7O1DK"
  },
  {
    year: "2024 (December)",
    title: "Business Intelligence",
    org: "Cognitiveai",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/c3dfe4ee280e4b418167499481f3fccd"
  },
];

export default function CertificationsHorizontal() {
  return (
    <section className="certs-horizontal-section">
      <h2>📜 My Certification Timeline</h2>
      <div className="certs-timeline">
        {certifications.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <div className="cert-year">{cert.year}</div>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p>{cert.org}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">View Credential</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
