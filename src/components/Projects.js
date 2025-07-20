import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Food Munch',
      description: 'A responsive food website with user-centric design showcasing food items, built with HTML, CSS, Bootstrap.',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      demo: 'https://vinyasfoodmunch.ccbp.tech',
      github: 'https://github.com/VinyasK/FoodMunch'
    },
    {
      title: 'Todos App',
      description: 'A CRUD-based task management app with dynamic UI updates and persistent local storage.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      demo: 'https://vinyastodosapp.ccbp.tech',
      github: 'https://github.com/VinyasK/TodosApp'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal developer portfolio showcasing projects, skills, and contact information with a clean, responsive layout.',
      tech: ['React', 'CSS'],
      demo: 'https://your-live-portfolio-link', // replace with your deployed URL later
      github: 'https://github.com/VinyasK/Portfolio'
    },
    {
      title: 'Smart Resume Builder with AI Suggestions',
      description: 'A full-stack resume builder that provides smart AI suggestions, PDF export, and a clean user interface.',
      tech: ['React', 'Node.js', 'MongoDB'],
      demo: 'https://your-live-resume-builder-link', // replace with your deployed URL later
      github: 'https://github.com/VinyasK/Smart-Resume-Builder-with-AI-Suggestions'
    }
  ];

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="skills-tags">
              {project.tech.map((techItem, idx) => (
                <span key={idx} className="skill-badge">{techItem}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.demo} target="_blank" rel="noreferrer">View Project →</a>
              <a href={project.github} target="_blank" rel="noreferrer">GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
