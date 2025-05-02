import React, { useState } from 'react';
import './Home.css';
import Projects from '../Projects';
import Experience from '../Experience';
import Contact from '../Contact';
import Education from '../Education';

function Home({ scrolled }) {
  const [activeSection, setActiveSection] = useState('home');

 

  // Function to render the appropriate section based on activeSection
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

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
            Senior Software Engineer | New York State ITS | Ex-Amazon
          </p>
        </div>
      </section>
     
      <div className={`cta-container ${scrolled ? 'visible' : ''}`}>
        <h2>Explore My Portfolio</h2>
        <div className="cta-buttons">
          <button 
            className={`cta-button ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button 
            className={`cta-button ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button 
            className={`cta-button ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          <button 
            className={`cta-button ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </button>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="content-container">
        {renderActiveSection()}
      </div>
     
      {!activeSection || activeSection === 'home' ? (
        <div className="scroll-indicator">
          <p>Scroll Down</p>
          <div className="scroll-arrow">↓</div>
        </div>
      ) : null}
    </div>
  );
}

export default Home;