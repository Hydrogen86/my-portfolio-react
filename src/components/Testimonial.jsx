import React from 'react'
import { testimonials } from '../assets/image-icons'
import '../css/Testimonial.css'
import ScrollAnimation from './ScrollAnimation'

const Testimonial = () => {
  return (
    <section className='testimonial-section'>
        <ScrollAnimation className='fade-up'>
            <div className="header">
                <span className='span-heading'>WHAT CLIENT SAY</span>
                <h1>Testimonials</h1>
            </div>
        </ScrollAnimation>
        <div className="testimonial-container">
            {testimonials.map((client, index) => (
                <ScrollAnimation className='zoom-in'>
                    <div className="client" key={index}>
                        <img src={client.image} alt={`client-${index}`} />

                        <div className="message">
                            <span>{ client.name }</span>
                            <span>{ client.message }</span>
                        </div>

                    </div>
                </ScrollAnimation>
            ))}
        </div>
    </section>
  )
}

export default Testimonial
