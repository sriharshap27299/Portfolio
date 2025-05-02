import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Image to Text Using Pyhton",
      technologies: ["Optical Character Recognition (OCR)" , "Python (Programming Language)", "Computer Vision" , "Image Processing" , "Machine Learning"],
      description: "This is a project focused on image-to-text conversion (also known as Optical Character Recognition or OCR).The core functionality would involve taking images containing text as input and outputting the recognized text in a digital, editable format. This is a common application in document digitization, data extraction from scanned materials, and accessibility tools.",
      achievements: [
        "Successful throughput from image to text",
        "Decreased bugs by 40% through writing extensive end-to-end tests",
        "Implemented email and SMS marketing microservices"
      ],
      color: "#4F46E5" // Indigo - matching Experience page gradient
    },
    {
      id: 2,
      title: "Water Monitoring Dashboard",
      technologies: ["Data Analysis", "Pyhton (Programming Language)", "Machine Learning", "Data Visualization"], 
      description: "This is focused on water quality analysis and monitoring, likely involving data collection, processing, and visualization related to water quality metrics. The project likely implements systems or models to analyze water quality parameters, possibly for environmental monitoring, public health considerations, or research purposes.",
      achievements: [
        "Analyzed and improved code feasibility and optimized memory",
        "Implemented encryption frameworks for sensitive data",
        "Improved overall work output through security optimizations"
      ],
      color: "#7C3AED" // Purple - matching Experience page gradient
    },
    {
      id: 3,
      title: "Microservice Deployment System",
      technologies: ["PCF", "Kubernetes", "Spring Boot", "AWS"],
      description: "Created a robust system for deploying access logs and scaling microservices on cloud platforms.",
      achievements: [
        "Successfully deployed microservices to AWS cloud",
        "Implemented Spring Security for application protection",
        "Utilized cloud technologies for optimal performance"
      ],
      color: "#10B981" // Emerald - adding variety
    }
  ];

  const handleProjectClick = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <div className="projects-page">

      <div className="projects-grid">
        {projects.map(project => (
          <div 
            className={`project-item ${activeProject === project.id ? 'active' : ''}`}
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            style={{'--accent-color': project.color}}
          >
            <div className="project-header">
              <h2>{project.title}</h2>
              <div className="project-expand">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={activeProject === project.id ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
                </svg>
              </div>
            </div>
            
            <div className="project-tech-wrapper">
              <div className="tech-pills">
                {project.technologies.map((tech, index) => (
                  <span className="tech-pill" key={index}>{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              
              <div className="project-achievements">
                <h3>Key Achievements</h3>
                <ul>
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>
                      <div className="check-icon">✓</div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;