import {useRef, useState} from 'react'
import '../css/Contact.css'
import ScrollAnimation from './ScrollAnimation'
import ShowAlert from './ShowAlert'
import emailjs from '@emailjs/browser'

const Contact = () => {

  // EmailJS
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)

  const handleSubmitForm = async(e) => {
      e.preventDefault()

      if (isSending) { return }

      setIsSending(true)

      try {
          await emailjs.sendForm(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
              formRef.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
              }
          )

          ShowAlert(
            "Message Sent!",
            "Thank you for reaching out. I appreciate your interest and will get back to you soon.",
            "success"
          )
          formRef.current.reset()
          
      } catch (error) {
          console.error('EmailJS error: ', error)
          ShowAlert(
            "Message Failed!",
            "Something went wrong while sending your message. Please try again.",
            "error"
          )
      } finally {
          setIsSending(false)
      }
  }

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
          <form ref={formRef} onSubmit={handleSubmitForm}>
            <h1>Contact Form</h1>
            <div className="input-group">
              <input type="text" name='from_name' id="from_name" placeholder=" " required />
              <label htmlFor="from_name">Full Name</label>
            </div>
            <div className="input-group">
              <input type="email" name='from_email' id="from_email" placeholder=" " required />
              <label htmlFor="from_email">Email Address</label>
            </div>
            <div className="input-group">
              <input type="text" name='subject' id="subject" placeholder=" " required />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="input-group">
              <textarea type="text" name='message' id="message" placeholder=" " required />
              <label htmlFor="message">Message</label>
            </div>

            <button
              type="submit"
              id="formSubmitBtn"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default Contact
