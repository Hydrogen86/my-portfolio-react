import React from 'react'
import '../css/Contact.css'
import ScrollAnimation from './ScrollAnimation'

const Contact = () => {
  return (
    <section className='contact-section' id='contact-section'>
      <ScrollAnimation className='fade-up'>
        <div className="contact-section__txt-area container">
          <span className='span-heading'>LET'S WORK TOGETHER</span>
          <h1>Have a Project in Mind?</h1>
          <span className='paragraph'>I'm always open to exploring new opportunities, collaborating on creative ideas, and bringing meaningful projects to life. Let's connect and create something great together!
          </span>
        </div>
      </ScrollAnimation>
      
      <div className="contact-overlay"></div>

      <ScrollAnimation className='fade-up'>
        <div className="container">
          <form>
            <h1>Contact Form</h1>
            <div className="input-group">
              <input type="text" id="fullName" placeholder=" " required />
              <label htmlFor="fullName">Full Name</label>
            </div>
            <div className="input-group">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-group">
              <input type="text" id="subject" placeholder=" " required />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="input-group">
              <textarea type="text" id="message" placeholder=" " required />
              <label htmlFor="message">Message</label>
            </div>

            <button>Send Message</button>
          </form>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default Contact
