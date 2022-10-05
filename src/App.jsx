import { useState } from 'react'
import React from 'react'

import './App.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Card from './components/cards/Cards'

function App() {


  return (
    <>
    <Navbar/>
    <Hero />
    <Card />
    </>
  )
}

export default App
