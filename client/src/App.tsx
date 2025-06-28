import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Welcome from './Welcome'

function App() {

  return (
    <>
      <Navbar />
      <Welcome isLoggedIn={true} />
      <Footer />
    </>
  )
}

export default App
