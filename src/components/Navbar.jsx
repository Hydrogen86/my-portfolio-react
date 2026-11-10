import {useState, useEffect} from 'react'
import { userData } from '../data/user-data.js'
import { icons } from '../assets/image-icons.js'
import Button from './Button.jsx'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import '../css/NavBar.css'

const Navbar = () => {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Set the initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <span className='developer-name'>{ userData.firstName }.</span>

      <nav className={ isMenuOpen ? "nav-open" : "" }>
        <ul>
          <li><a href="#hero-section" className='nav-link' onClick={closeMenu}>Home</a></li>
          <li><a href="#about-section" className='nav-link' onClick={closeMenu}>About</a></li>
          <li><a href="#offer-section" className='nav-link' onClick={closeMenu}>Services</a></li>
          <li><a href="#skill-section" className='nav-link' onClick={closeMenu}>Skills</a></li>
          <li><a href="#project-section" className='nav-link' onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact-section" className='nav-link' onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      <Button
        className="navBar_button"
        hRef="#contact-section"
        textContent="LET'S WORK TOGETHER"
        icon={faHandshake}
      />

      <button 
        className='icon__header'
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded= {isMenuOpen}
      >
        <img  
          src={ isMenuOpen ? icons.exit :icons.menu } 
          alt="icons" 
        />
      </button>

    </header>
  )
}

export default Navbar
