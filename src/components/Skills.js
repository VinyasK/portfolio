import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript']
    },
    {
      title: 'Web Development',
      skills: ['React', 'Node.js', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      title: 'Database',
      skills: ['SQL', 'MongoDB']
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Postman']
    },
    {
      title: 'Specializations',
      skills: ['Data Structures', 'Algorithms', 'Problem-Solving']
    }
  ];

  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <p>A comprehensive overview of my technical expertise and capabilities.</p>
      <div className="skills-category-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3>{category.title}</h3>
            <div className="skills-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
