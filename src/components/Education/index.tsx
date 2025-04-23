import React from 'react';
import { Link } from 'react-router-dom';
import './Education.css';

function Education() {
  const educations = [
    {
      id: 1,
      institution: "University at Albany, SUNY",
      degree: "Master's degree, Computer Science",
      period: "January 2021 - May 2022"
    },
    {
      id: 2,
      institution: "INSTITUTE OF AERONAUTICAL ENGINEERING",
      degree: "Bachelor's degree, Computer Science",
      period: "August 2016 - May 2020"
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <h1>Education</h1>
          <Link to="/" className="back-button">Back to Home</Link>
        </div>
      </header>
      
      <div className="education-container">
        {educations.map(edu => (
          <div className="education-card" key={edu.id}>
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-details">
              <h2>{edu.institution}</h2>
              <p className="degree">{edu.degree}</p>
              <p className="period">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;