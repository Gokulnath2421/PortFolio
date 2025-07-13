import React from 'react';
import './AboutMe.css';
import profileImage from '../Assets/MyPhoto.jpg' // Replace with your image path

export default function AboutMe() {
  return (
    <section id="about" className="about-container">
      <div className="about-image">
        <img src={profileImage} alt="Gokul Nath S N" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hey there, I’m <strong>Gokul</strong> — a full-stack web developer who loves building clean, responsive, and scalable web apps. I work with React, Vite, and JavaScript on the front end, and Django or Node.js on the back.

From crafting smooth UIs to designing robust backends, I enjoy bringing ideas to life with code that’s fast, functional, and user-focused. Always building, always learning.
        </p>
        <p>And..I'm a 3D enthusiast who brings ideas to life through Blender. From modeling immersive environments to animating sleek visual stories, I blend form and function with creativity. Whether it’s for games, websites, or cinematic scenes, I craft visuals that don’t just look good — they move you. So.. Yeah thats it. You can go exploring below now!</p>
      </div>
    </section>
  );
}
