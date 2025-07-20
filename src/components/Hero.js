import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeLink = 'https://drive.google.com/uc?export=download&id=YOUR_RESUME_FILE_ID';
    window.open(resumeLink, '_blank');
  };

  const handleViewWork = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
      <img 
        src="/images/vinyas.jpg" 
        alt="Vinyas K" 
        className="hero-image" 
      />
      <h1>
        <ReactTyped
          strings={["Hi, I'm Vinyas"]}
          typeSpeed={50}
          backSpeed={30}
          loop={false}
          showCursor={false}
        />
      </h1>
      <h2>Aspiring Full Stack Developer & Problem Solver</h2>
      <p>
        Passionate about building clean, user-friendly web experiences while continuously expanding my knowledge in web technologies and data structures.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px', flexWrap: 'wrap' }}>
        <button onClick={handleViewWork}>View My Work</button>
        <button onClick={handleDownloadResume}>Download Resume</button>
      </div>
    </section>
  );
};

export default Hero;
