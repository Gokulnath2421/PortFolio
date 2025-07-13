import React from 'react';
import './Skills.css';

export default function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript',
    'Node.js', 'REST API',
    'MongoDB', 'Git', 'Figma', 'Blender', 'mySQL', 'Python',
    'Php', 'C++'
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
}
