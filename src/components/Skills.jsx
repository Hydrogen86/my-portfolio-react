import React from 'react'
import { images, icons } from '../assets/image-icons.js'
import '../css/Skill.css'

const Skills = () => {



  return (
    <section className='skill-section'>
        <span>WHAT I DO</span>
        <h2>Technologies I Work With</h2>

        <div className="skill-list__container">

            <img src={images.aboutImage} alt="user-img" />

            <div className="skill-section__right">
                <div className="skill-nav-bar">
                    <span>Languages</span>
                    <span>Framework & Libraries</span>
                    <span>Tools & Platforms</span>
                </div>
                <div className="skill-list">
                    <img src="{icons.html}" alt="html" />
                    <span className='skill-name'>HTML</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
