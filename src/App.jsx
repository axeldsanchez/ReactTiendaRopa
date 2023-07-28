import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Nav} from './Components/NavBar'
import {Greeting} from "../src/Components/Greeting"


function App() {

  return (
    <>
  <Nav/>
  <Greeting/>
    </>
  )
}

export default App
