import React from 'react'
import '../css/Offer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt'
import { faFigma } from '@fortawesome/free-brands-svg-icons/faFigma'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Offer = () => {
  return (
    <section className='offer-section'>
        <span className='top-txt'>CORE SERVICES</span>
        <h1>What I can Help You With</h1>

        <div className="offer-container">

            <div className="offer-card">
                <FontAwesomeIcon icon={faReact} className='icon'></FontAwesomeIcon>

                <h2>FRONTEND DEVELOPMENT</h2>
                <p>
                    I develop modern web interfaces using clean, maintainable code and contemporary frontend technologies, focusing on performance, accessibility, and responsiveness.
                </p>
            </div>
            <div className="offer-card">
                <FontAwesomeIcon icon={faCode} className='icon'></FontAwesomeIcon>

                <h2>BACK DEVELOPMENT</h2>
                <p>
                    I build scalable backend systems using modern technologies, focusing on secure data management, efficient APIs, and reliable application performance.
                </p>
            </div>

            <div className="offer-card">
                <FontAwesomeIcon icon={faMobileAlt} className='icon'></FontAwesomeIcon>

                <h2>MOBILE DEVELOPMENT</h2>
                <p>
                I focus on creating user-friendly mobile experiences with clean designs, smooth functionality, and modern development practices.
                </p>
            </div>
            
            <div className="offer-card">
                <FontAwesomeIcon icon={faFigma} className='icon'></FontAwesomeIcon>

                <h2>UI/UX DESIGN</h2>
                <p>
                I create clean and engaging designs that balance visual appeal with usability, making digital experiences simple, enjoyable, and accessible.
                </p>
            </div>

        </div>
        
    </section>
  )
}

export default Offer
