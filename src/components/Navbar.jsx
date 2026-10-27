import React from 'react'
import {userData} from '../data/user-data.js'
import '../css/NavBar.css'

const Navbar = () => {
  return (
    <header>
      <span className='developer-name'>{ userData.firstName }.</span>

      <div className="right-side__header">
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
        <button>LET'S WORK TOGETHER</button>
      </div>

    </header>
  )
}

export default Navbar
