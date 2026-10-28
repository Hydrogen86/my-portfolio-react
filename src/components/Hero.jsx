import React from 'react'
import { userData } from '../data/user-data.js'
import { images } from '../assets/image-icons.js'
import '../css/Hero.css'

const Hero = () => {
  return (
    <section className='hero-section'>
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
                <button>VIEW MY PROJECTS</button>
                <button>DOWNLOAD CV</button>
            </div>
        </div>

        <div className="right">
            <img src={images.heroImage} alt="developer-img" />
            <div className="txt-area">
                <span className='signature'>
                    { userData.firstName } { userData.lastname }
                </span>
                <span>
                    <div className="cricle"></div>
                    AVAILABLE FOR FREELANCE
                </span>
            </div>
        </div>
    </section>
  )
}

export default Hero
