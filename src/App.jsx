import React from 'react'
import Background from './Components/Background'
import Navbar from './Components/Navbar'
import AboutAndSkillsLayout from './Components/AboutAndSkillsLayout'
import Projects from './Components/Projects'
import CertificationsHorizontal from './Components/Certificates'
import Contact from './Components/Contacts'

function App() {
  return (
    <>
    <Background />  
    <Navbar />
    <AboutAndSkillsLayout />
    <Projects />
    <CertificationsHorizontal />
    <Contact />
    </>
)}

export default App
