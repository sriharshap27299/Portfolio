import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const contactInfo = {
    email: "harshap27299@gmail.com",
    phone: "(518) 417-7051",
    linkedin: "www.linkedin.com/in/harsha-p-6331a52a1",
    location: "Albany, New York Metropolitan Area"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! This form doesn't actually send data as it's just a demo.");
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <h1>Contact Me</h1>
          <Link to="/" className="back-button">Back to Home</Link>
        </div>
      </header>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out if you're looking for a dedicated and forward-thinking Full Stack Developer!</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">💼</div>
              <div>
                <h3>LinkedIn</h3>
                <p><a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>{contactInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;