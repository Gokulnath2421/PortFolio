import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Download } from 'lucide-react';
import './Contacts.css';
import Resume from '../Assets/Resume.pdf';

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <Mail className="contact-icon" />
          <span>gokulnath2421@gmail.com</span>
        </div>
        <div className="contact-item">
          <Phone className="contact-icon" />
          <span>+91 9385937546</span>
        </div>
        <div className="contact-item">
          <MapPin className="contact-icon" />
          <span>Chennai, Tamil Nadu, India</span>
        </div>
        <div className="resume-download">
        <a href={Resume} download>
        <button className="download-btn">
        <Download size={18} style={{ marginRight: '8px' }} />Download Resume</button>
        </a>
        </div>
        <div className="contact-item">
          <Linkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/gokul-nath-sn" target="_blank" rel="noreferrer">
            Linkedin Profile
          </a>
        </div>
        
        <div className="contact-item">
          <Github className="contact-icon" />
          <a href="https://github.com/Gokulnath2421" target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>
      
    </section>
  );
}
