import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'


const App = () => {
  return (
    <>
      <Navbar></Navbar>      
      <Hero></Hero>
      <About></About>
    </>
  )
}

export default App
