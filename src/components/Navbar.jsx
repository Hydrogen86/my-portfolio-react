import {useState, useEffect} from 'react'
import { userData } from '../data/user-data.js'
import { icons } from '../assets/image-icons.js'
import ShowAlert from './ShowAlert.jsx'
import '../css/NavBar.css'

const Navbar = () => {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header>
      <span className='developer-name'>{ userData.firstName }.</span>

      <nav className={ isMenuOpen ? "nav-open" : "" }>
        <ul>
          <li><a href="#" onClick={closeMenu}>Home</a></li>
          <li><a href="#" onClick={closeMenu}>About</a></li>
          <li><a href="#" onClick={closeMenu}>Services</a></li>
          <li><a href="#" onClick={closeMenu}>Skills</a></li>
          <li><a href="#" onClick={closeMenu}>Projects</a></li>
          <li><a href="#" onClick={closeMenu}>Contact</a></li>

          <button>LET'S WORK TOGETHER</button>
        </ul>
      </nav>


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
