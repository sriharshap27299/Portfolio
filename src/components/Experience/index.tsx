import React from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Senior Software Programmer",
      company: "New York State - ITS Sector",
      period: "July 2023 - Present",
      location: "United States",
      color: "#4F46E5",
      responsibilities: [
        "Resolved security vulnerabilities in Linux servers",
        "Secured PII and PCI data using encryption frameworks",
        "Deployed and scaled Microservices on PCF and Kubernetes",
        "Improved application security working with product teams",
        "Developed classes using core Java concepts",
        "Used Spring Boot, Spring Security to build Microservices on AWS cloud"
      ]
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Amazon",
      period: "June 2022 - July 2023",
      location: "New York, United States",
      color: "#EC4899",
      responsibilities: [
        "Worked on Shopbop's shopping experience (SHOX) and personalization team",
        "Designed UI using HTML, CSS, TypeScript, and Angular7",
        "Implemented CI/CD pipelines using Jenkins",
        "Used MAVEN for build process and documentation",
        "Worked with RESTful Web services and secured with OAuth-2.0",
        "Developed unit tests using Mockito framework"
      ]
    },
    {
      id: 3,
      title: "Full-stack Developer",
      company: "MaveX",
      period: "August 2018 - December 2020",
      location: "India",
      color: "#10B981",
      responsibilities: [
        "Built an online event management platform using NodeJS and ReactJS",
        "Decreased bugs by 40% through writing end-to-end tests",
        "Implemented microservices for email and SMS marketing",
        "Worked with UI/UX designers to implement user-friendly features",
        "Used Java Collections, Generics, Exception Handling, and Design Patterns",
        "Implemented various modules using JMS, JDBC, and Hibernate"
      ]
    }
  ];

  return (
    <div className="experience-page">
      <header className="experience-header">
        <div className="header-content">
          <h1>Professional Experience</h1>
          <Link to="/" className="back-button">
            <span className="back-icon">←</span>
            <span>Home</span>
          </Link>
        </div>
      </header>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {experiences.map((job, index) => (
          <div className="timeline-item" key={job.id}>
            <div 
              className="timeline-dot" 
              style={{ backgroundColor: job.color }}
            ></div>
            
            <div className="timeline-content">
              <div className="timeline-card">
                <div className="timeline-period" style={{ backgroundColor: job.color }}>
                  {job.period}
                </div>
                
                <div className="timeline-role">
                  <h2>{job.title}</h2>
                  <div className="company-badge">
                    <h3>{job.company}</h3>
                    <span className="location">{job.location}</span>
                  </div>
                </div>
                
                <div className="timeline-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <div className="responsibility-grid">
                    {job.responsibilities.map((item, i) => (
                      <div className="responsibility-item" key={i}>
                        <div className="check-icon">✓</div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;