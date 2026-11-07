import React from 'react'
import { testimonials } from '../assets/image-icons'
import '../css/Testimonial.css'
import ScrollAnimation from './ScrollAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Testimonial = () => {
  return (
    <section className='testimonial-section'>
        <ScrollAnimation className='fade-up'>
            <div className="header">
                <span className='span-heading'>TESTIMONIALS</span>
                <h1>What Clients Say About My Work</h1>
            </div>
        </ScrollAnimation>
        <div className="testimonial-container">
            {testimonials.map((client, index) => (
                <ScrollAnimation className='zoom-in' key={index}>

                    <div className="client">
                        <div className="message">
                            <FontAwesomeIcon icon={faQuoteLeft} className='icon-qoute'></FontAwesomeIcon>
                            <span className='message'> { client.message } </span>
                        </div>

                        <div className="client-info">
                            <div className="client-info__inner">
                                <img src={client.image} alt={`client-${index}`} />
                                <div className="client-name">
                                    <span>{ client.name }</span>
                                    <span>{ client.position }</span>
                                </div>
                            </div>
                            
                            <div className="ratings">
                                {Array.from({ length: parseInt(client.rating) }, (_, i) => (
                                    <FontAwesomeIcon icon={faStar} className='ratings' key={`${client.name}-star-${i}`}></FontAwesomeIcon>
                                ))}
                            </div>
                        </div>

                    </div>
                </ScrollAnimation>
            ))}
        </div>
    </section>
  )
}

export default Testimonial
