import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';
import horizonx from '../Assets/horizonx.png';
import safeHouse from '../Assets/safehouse.png';
import emotion from '../Assets/emotion.png';
import career from '../Assets/career.png';
import ProjectDetails from './ProjectDetails';

// Full project data for detailed view
const projectDetailsData = [
  {
    title: 'SafeHouse',
    description: 'A cyber awareness site with interactive content and videos.',
    image: safeHouse,
    details: 'Cybersecurity awareness site with React, video modals, and an interactive game.',
    tech: ['React', 'JavaScript', 'CSS3', 'VideoJS', 'Modals'],
    features: [
      'Interactive cyber awareness game',
      'Pop-up modal video library',
      'Responsive layout',
    ],
    journey: 'We brainstormed a way to make cybersecurity engaging for all. I handled the video modals and interactivity.',
    learned: 'State management in React, modal UI, component reuse.',
    future: 'Add quiz certification and user login system.',
  },
  {
    title: 'HorizonX',
    description: 'A weather app with 3D globe and real-time news carousel.',
    image: horizonx,
    details: 'A futuristic weather platform integrating CesiumJS and news APIs.',
    tech: ['CesiumJS', 'React', 'REST API', 'OpenWeather'],
    features: [
      '3D Earth with live weather overlays',
      'Scrolling news banner',
      'Responsive interactions',
    ],
    journey: 'From building globe terrain to layering real-time data, it was all about syncing UI and UX.',
    learned: '3D rendering basics, real-time data flow, layered React composition.',
    future: 'Improve performance with lazy loading and WebGL optimization.',
  },
  {
    title: 'Emotion Detector',
    description: 'ML-based voice emotion recognition using MFCCs and tone analysis.',
    image: emotion,
    details: 'An emotion recognition system using audio features like MFCCs, chroma and pitch to detect emotional tone.',
    tech: ['Python', 'Librosa', 'Scikit-learn', 'Machine Learning'],
    features: [
      'Real-time voice capture',
      'Emotion prediction using MFCC and chroma',
      'Multilingual dataset support',
    ],
    journey: 'We avoided speech-to-text and focused on raw acoustic features for fast processing.',
    learned: 'Voice signal processing, feature extraction, ML pipeline tuning.',
    future: 'Add emotion-based feedback system or chatbot integration.',
  },
  {
    title: 'Career Guidance',
    description: 'Django + BERT-powered recommendation system for students.',
    image: career,
    details: 'A smart backend system built on Django with BERT model to recommend careers based on user interests.',
    tech: ['Python', 'Django', 'Transformers', 'BERT', 'React'],
    features: [
      'BERT-based question understanding',
      'Smart recommendations',
      'Admin panel for student insights',
    ],
    journey: 'I built the API endpoints and integrated BERT for NLP predictions.',
    learned: 'BERT fine-tuning, API design, full-stack coordination.',
    future: 'Deploy as a SaaS platform with user authentication and dashboards.',
  },
];



const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

const handleMouseMove = (e, index) => {
  if (isTouchDevice()) return;
  const card = document.getElementById(`project-${index}`);
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / 10).toFixed(2);
  const rotateY = ((centerX - x) / 10).toFixed(2);
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};


const handleMouseLeave = (index) => {
  const card = document.getElementById(`project-${index}`);
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const detailsRef = useRef(null);

  const handleViewProject = (index) => {
    setActiveProject(projectDetailsData[index]);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

const handleCloseDetails = () => {
  setActiveProject(null);
};

  return (
    <section className="projects-section">
      <h2 className="projects-title">So, My Projects Are:</h2>
      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      breakpoints={{
      0: {
      slidesPerView: 1, // 👈 1 project on small screens
      },
      768: {
      slidesPerView: 2,
      },
      1024: {
      slidesPerView: 3,
      },
      }}
    >

        {projectDetailsData.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              id={`project-${index}`}
              className="project-card"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button onClick={() => handleViewProject(index)}>View Project</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      

      {/* Render ProjectDetails below the Swiper */}
      {activeProject && (
        <div ref={detailsRef}>
          <ProjectDetails project={activeProject} onClose={handleCloseDetails} />
        </div>
      )}
    </section>
  );
}
