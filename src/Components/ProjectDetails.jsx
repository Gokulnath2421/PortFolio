import React, { useEffect, useState } from 'react';
import './ProjectDetails.css';

export default function ProjectDetails({ project, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // call the actual close after animation
    }, 300); // match transition duration
  };

  if (!project) return null;

  return (
    <div className={`project-details-container ${isClosing ? 'fade-out' : 'fade-in'}`}>
      <button className="close-button" onClick={handleClose}>Close</button>
      <h2>{project.title}</h2>
      <p className="intro">{project.details}</p>

      <section>
        <h3>Technologies Used</h3>
        <ul>{project.tech.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </section>

      <section>
        <h3>Key Features</h3>
        <ul>{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
      </section>

      <section>
        <h3>Development Journey</h3>
        <p>{project.journey}</p>
      </section>

      <section>
        <h3>What I Learned</h3>
        <p>{project.learned}</p>
      </section>

      <section>
        <h3>Future Plans</h3>
        <p>{project.future}</p>
      </section>
    </div>
  );
}
