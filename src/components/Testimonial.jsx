import React from 'react'
import { testimonials } from '../assets/image-icons'
import '../css/Testimonial.css'

const Testimonial = () => {
  return (
    <section className='testimonial-section'>
        <div className="header">
            <span className='span-heading'>WHAT CLIENT SAY</span>
            <h1>Testimonials</h1>
        </div>
        <div className="testimonial-container">
            {testimonials.map((client, index) => (
            <div className="client" key={index}>
                <img src={client.image} alt={`client-${index}`} />

                <div className="message">
                    <span>{ client.name }</span>
                    <span>{ client.message }</span>
                </div>

            </div>
            ))}
        </div>
    </section>
  )
}

export default Testimonial
