import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-left">
          <p>
            I'm a Computer Science & Engineering student at MITE, passionate about web development, problem-solving, and building clean, user-friendly web experiences. I continuously explore new technologies while strengthening my foundations in data structures and algorithms.
          </p>
          <p>
            My current focus is on mastering full-stack development, including React, Node.js, and MongoDB, while actively solving DSA problems to improve logical thinking. I aim to contribute to impactful projects that align with my values of clean code, scalability, and user-centric design.
          </p>
        </div>

        <div className="about-right">
          <h3>Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <h4>Bachelor of Engineering - Computer Science & Engineering</h4>
              <p className="timeline-school">
                <span className="nowrap">Mangalore Institute of Technology & Engineering • 2022–Present</span>
              </p>
              <p>CGPA: 8.45</p>
            </div>
            <div className="timeline-item">
              <h4>Industry Ready Certification in Full-stack Development</h4>
              <p className="timeline-school">
                <span className="nowrap">NxtWave Disruptive Technologies • Jan 2024–Ongoing</span>
              </p>
            </div>
            <div className="timeline-item">
              <h4>Senior Secondary (12th) - KSEEB</h4>
              <p className="timeline-school">
                <span className="nowrap">Nehru Memorial PU College, Sullia • 2020–2022</span>
              </p>
              <p>Percentage: 90.83%</p>
            </div>
            <div className="timeline-item">
              <h4>Secondary School (SSLC) – KSEEB</h4>
              <p className="timeline-school">
                <span className="nowrap">St. Joseph English Medium School, Sullia • 2019–2020</span>
              </p>
              <p>Percentage: 90.4%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
