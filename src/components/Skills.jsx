import { useState } from 'react'
import { images, programLanguage, frameworksAndLabraries, databaseManagement, toolsAndPlatforms } from '../assets/image-icons.js'
import '../css/Skill.css'
import ScrollAnimation from './ScrollAnimation.jsx'

const Skills = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const userSkills = [ programLanguage, frameworksAndLabraries, databaseManagement, toolsAndPlatforms ]
    const skillCategories = [ "Languages", "Framework", "Database", "Tools" ];

  return (
    <section className='skill-section' id='skill-section'>
        <ScrollAnimation className='fade-up'>
            <span className='span-heading'>TECH STACK & SKILLS</span>
            <h1>Technologies I Work With</h1>
        </ScrollAnimation>

        <ScrollAnimation className='zoom-in'>
        <div className="skill-list__container">
            <img src={images.aboutImage} className="user-img" alt="user-img" />

            <div className="skill-section__right">
                <div className="skill-nav-bar">
                <div
                    className="nav-highlight"
                    style={{
                    transform: `translateX(${currentIndex * 100}%)`
                    }}
                />

                {skillCategories.map((category, index) => (
                    <span
                        key={category}
                        className={currentIndex === index ? "active" : ""}
                        onClick={() => setCurrentIndex(index)}
                    >
                        {category}
                    </span>
                ))}
            </div>

                <div className="skill-list">
                    {userSkills[currentIndex].map((skill, index) => (
                        <div className="skill" key={index}>
                            <img src={skill.icon} alt={skill.name + "-icon"} />
                            <span className='skill-name'>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </ScrollAnimation>
    </section>
  )
}

export default Skills
