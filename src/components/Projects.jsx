import { useState } from 'react'
import { projects } from '../data/user-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowLeftLong, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import '../css/Project.css'
import ShowAlert from './ShowAlert'
import ScrollAnimation from './ScrollAnimation'

const Projects = () => {

    const [showAll, setShowAll] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(faArrowRightLong)
    const handleClick = () => {
        setShowAll(prev => !prev)
        setCurrentIcon(prev => prev === faArrowRightLong ? faArrowLeftLong : faArrowRightLong)
    }

    const handleUrl = (pageURL) => {
        if (!pageURL || pageURL.trim() === "") {
            ShowAlert(
                "Sorry!",
                "This project is currently unavailable or its link has not been published yet.",
                "info"
            );
            return;
        }

        window.open(pageURL, "_blank", "noopener,noreferrer");
    };

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className='project-section' id='project-section'>
        <div className="project-container__head">

            <ScrollAnimation className='fade-up'>
            <div className="left">
                <span className='span-heading'>MY WORK</span>
                <h1>Featured Project</h1>
            </div>
            </ScrollAnimation>

            <ScrollAnimation className='slide-right'>
            <button
                className="see-all-btn"
                onClick={handleClick}
            >
                {showAll ? "Show Less" : "View All Projects"} <FontAwesomeIcon icon={currentIcon}/>
            </button>
            </ScrollAnimation>
      </div>

      <div className="project-container">

        {displayedProjects.map((project, index) => (
            <ScrollAnimation className='zoom-in'  key={index} >
                <div className="project"onClick={() => handleUrl(project.url)}>
                    
                    <img src={project.img} alt="project-img" />
                    
                    <div className="project-ds">
                        <div className="text-area">
                            <span className='project-name'>{project.projectName}</span>
                            <span>{project.development}</span>
                        </div>
                        <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare}/>
                    </div>
                    
                </div>
            </ScrollAnimation>
        ))}
    
      </div>
    </section>
  )
}

export default Projects
