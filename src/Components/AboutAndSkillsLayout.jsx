import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import './AboutAndSkillsLayout.css';

export default function AboutAndSkillsLayout() {
  return (
    <div className="about-skills-row">
      <AboutMe />
      <Skills />
    </div>
  );
}
