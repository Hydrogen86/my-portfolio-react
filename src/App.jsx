import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Offer from './components/Offer'
import Skills from './components/Skills'
import Projects from './components/Projects'


const App = () => {
  return (
    <>
      <Navbar></Navbar>      
      <Hero></Hero>
      <About></About>
      <Offer></Offer>
      <Skills></Skills>
      <Projects></Projects>
    </>
  )
}

export default App
