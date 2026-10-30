import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Offer from './components/Offer'


const App = () => {
  return (
    <>
      <Navbar></Navbar>      
      <Hero></Hero>
      <About></About>
      <Offer></Offer>
    </>
  )
}

export default App
