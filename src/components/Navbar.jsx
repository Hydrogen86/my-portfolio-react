import React from 'react'
import {userData} from '../data/user-data.js'
import '../css/NavBar.css'

const Navbar = () => {
  return (
    <header>
      <span className='developer-name'>{ userData.firstName }.</span>

      <div className="right-side__header">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button>LET'S WORK TOGETHER</button>
      </div>

    </header>
  )
}

export default Navbar
