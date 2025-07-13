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
          Hey there, I’m <strong>Gokul</strong> —  a passionate Computer Science student specializing in AI and ML. I enjoy building smart systems, exploring deep learning, and developing real-time applications.

 With experience in Python, JavaScript, and hands-on projects like ASL detection using YOLOv8, I’m focused on becoming a Machine Learning Developer.
        </p>
        <p>I also love creating meaningful tech solutions and continuously learning new tools to grow in the AI field.</p>
      </div>
    </section>
  );
}
