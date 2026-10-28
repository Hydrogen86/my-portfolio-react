import React from 'react'
import { userData } from '../data/user-data.js'
import { images, icons } from '../assets/image-icons.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../css/Hero.css'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className="overlay"></div>
        <div className="left">
            <div className="user-name">
                <span>HELLO, I'M</span>
                <span>{ userData.firstName } { userData.lastname }</span>
                <span>{ userData.speciality }</span>
            </div>
            <div className="description">
                <p>I designs and builds modern, responsive, and user-friendly web experiences that help businesses grow and connect with their audience.</p>
            </div>
            <div className="hero__btn">
                <button>VIEW MY PROJECTS <FontAwesomeIcon icon={faArrowRightLong} /></button>
                <button>DOWNLOAD CV <FontAwesomeIcon icon={faArrowDown} /></button>
            </div>
        </div>

        <div className="right">
            <img src={images.heroImage} alt="developer-img" />
        </div>
    </section>
  )
}

export default Hero
