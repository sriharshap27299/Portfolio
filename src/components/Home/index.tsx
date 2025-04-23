import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ scrolled }) {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="profile-container">
          {/* Replace with your actual image URL */}
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQFUFAKIB-Xafw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715627794210?e=1750896000&v=beta&t=eMYavDeEJFWql6lVYOny7wDSxJ-4e9A6-TDiAItJYRQ"
            alt="Harsha Podichenapally" 
            className="profile-image"
          />
          <h1 className="profile-name">Harsha Podichenapally</h1>
          <p className="profile-title">
            Full Stack Developer | Expert in Java, .NET, and Cloud Technologies
          </p>
        </div>
      </section>
      
      <div className={`cta-container ${scrolled ? 'visible' : ''}`}>
        <h2>Explore My Portfolio</h2>
        <div className="cta-buttons">
          <Link to="/projects" className="cta-button">
            Projects
          </Link>
          <Link to="/experience" className="cta-button">
            Experience
          </Link>
          <Link to="/education" className="cta-button">
            Education
          </Link>
          <Link to="/contact" className="cta-button">
            Contact
          </Link>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <p>Scroll Down</p>
        <div className="scroll-arrow">↓</div>
      </div>
    </div>
  );
}

export default Home;