import React from 'react'
import { socialIcons } from '../assets/image-icons'
import { userData } from '../data/user-data'
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="dev-name">
          <span className='developer-name'>{ userData.firstName }.</span>
          <span>
            Designing and developing digital experiences that make an impact.
          </span>
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
              <img src={icon} alt={"icon-" + index} key={index}/>
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
