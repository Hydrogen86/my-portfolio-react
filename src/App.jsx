import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Offer from './components/Offer'
import Skills from './components/Skills'


const App = () => {
  return (
    <>
      <Navbar></Navbar>      
      <Hero></Hero>
      <About></About>
      <Offer></Offer>
      <Skills></Skills>
    </>
  )
}

export default App
