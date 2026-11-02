import { useState } from 'react'
import { projects } from '../data/user-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowLeftLong, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import '../css/Project.css'

const Projects = () => {

    const [showAll, setShowAll] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(faArrowRightLong)
    const handleClick = () => {
        setShowAll(prev => !prev)
        setCurrentIcon(prev => prev === faArrowRightLong ? faArrowLeftLong : faArrowRightLong)
    }

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className='project-section' id='project-section'>
        <div className="project-container__head">
            <div className="left">
                <span>MY WORK</span>
                <h1>Featured Project</h1>
            </div>
            <button
                className="see-all-btn"
                onClick={handleClick}
            >
                {showAll ? "Show Less" : "View All Projects"} <FontAwesomeIcon icon={currentIcon}/>
            </button>
      </div>

      <div className="project-container">

        {displayedProjects.map((project, index) => (
            <div className="project" key={index}>
                <img src={project.img} alt="project-img" />
                <div className="project-ds">
                    <div className="text-area">
                        <span className='project-name'>{project.projectName}</span>
                        <span>{project.development}</span>
                    </div>
                    <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare}/>
                </div>
                
            </div>
        ))}
    
      </div>
    </section>
  )
}

export default Projects
