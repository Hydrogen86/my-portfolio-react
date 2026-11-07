import React from 'react'
import { socialIcons } from '../assets/image-icons'
import { userData } from '../data/user-data'
import ShowAlert from './ShowAlert'
import '../css/Footer.css'

const Footer = () => {

  const handleUrl = (pageURL, iconName) => {
    if (!pageURL || pageURL.trim() === "") {
      ShowAlert(
        "Sorry!",
        `The developer's ${iconName} link is currently unavailable or has not been updated.`,
        "info"
      );
      return;
    }

    window.open(pageURL, "_blank", "noopener,noreferrer");
  };

  return (
    <footer>
        <div className="dev-name">
          <span className='developer-name'>{ userData.firstName }.</span>
          <span>
            Designing and developing digital experiences that make an impact.
          </span>
          <span>{ userData.email }</span>
        </div>
        

        <div className="quik-link__container">
          <h3>QUICK LINKS</h3>
          <a href="#hero-section">Home</a>
          <a href="#about-section">About</a>
          <a href="#offer-section">Services</a>
          <a href="#skill-section">Skills</a>
          <a href="#project-section">Projects</a>
          <a href="#contact-section">Contact</a>
        </div>

        <div className="icon-container">
          <h3>LET'S CONNECT</h3>
          <div className="icons">
            { socialIcons.map((icon, index) => (
              <img src={icon.icon} alt={icon.name + "-icon"} key={index}  onClick={() => handleUrl(icon.url, icon.name)}/>
            )) }
          </div>
        </div>

        <p className='copy-rights'>
          © 2026 Robert Magno | Designed & Developed with Passion.
        </p>
    </footer>
  )
}

export default Footer
