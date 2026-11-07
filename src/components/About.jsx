import React from 'react'
import { images, icons } from '../assets/image-icons.js'
import { userData, projects } from '../data/user-data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faDiagramProject, faTrophy, faSmile, faUser } from '@fortawesome/free-solid-svg-icons'
import '../css/About.css'
import ScrollAnimation from './ScrollAnimation.jsx'

const About = () => {
  return (
    <section className='about-section' id='about-section'>

        <ScrollAnimation className='fade-up'>
        <div className="about__right-side">

            <div className="card">
                <FontAwesomeIcon icon={faCalendar} />
                <div className="txt-area">
                    <span>{ userData.yearsOfExp }</span>
                    <span>Years Experience</span>
                </div>
            </div>
            <div className="card">
                <FontAwesomeIcon icon={faDiagramProject} />
                <div className="txt-area">
                    <span>{ projects.length }+</span>
                    <span>Projects Completed</span>
                </div>
            </div>
            <div className="card">
                <FontAwesomeIcon icon={faTrophy} />
                <div className="txt-area">
                    <span>100%</span>
                    <span>Client Satisfaction</span>
                </div>
            </div>
            <div className="card">
                <FontAwesomeIcon icon={faSmile} />
                <div className="txt-area">
                    <span>10+</span>
                    <span>Happy Client</span>
                </div>
            </div>

        </div>
        </ScrollAnimation>

        <ScrollAnimation className='zoom-in'>
        <div className="about__left-side">
            <span className='span-heading'>ABOUT ME</span>
            <span>
                I am passionate about creating digital solutions
            </span>
            <span>
                With {userData.yearsOfExp} years of experience in web development, 
                I enjoy helping businesses and individuals turn their ideas 
                into reality through clean, efficient, and user-friendly solutions. 
                I focus on creating websites and applications that are functional, 
                intuitive, and tailored to each project's needs.
            </span>
            <button>
                <a href="#contact-section">LET'S WORK TOGETHER</a>
            </button>
        </div>
        </ScrollAnimation>
    </section>
  )
}

export default About
