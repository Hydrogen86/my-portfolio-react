import { useState } from 'react'
import { images, programLanguage, frameworksAndLabraries, databaseManagement, toolsAndPlatforms } from '../assets/image-icons.js'
import '../css/Skill.css'

const Skills = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const userSkills = [ programLanguage, frameworksAndLabraries, databaseManagement, toolsAndPlatforms ]
    const skillCategories = [ "Languages", "Framework", "Database", "Tools" ];

  return (
    <section className='skill-section'>
        <span className='top-span'>WHAT I DO</span>
        <h2>Technologies I Work With</h2>

        <div className="skill-list__container">

            <img src={images.aboutImage} alt="user-img" />

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
    </section>
  )
}

export default Skills
