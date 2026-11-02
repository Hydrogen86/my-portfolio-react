import React from 'react'
import { projects } from '../data/user-data'
import '../css/Project.css'

const Projects = () => {
  return (
    <section className='project-section' id='project-section'>
      <span>MY WORK</span>
      <h1>Featured Project</h1>

      <div className="project-container">
        <div className="project">
            <img src={projects[0].img} alt="project-img" />
            <span>Project Name</span>
            <span>Programming Languages</span>
        </div>
      </div>
    </section>
  )
}

export default Projects
