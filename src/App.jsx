import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Nav} from './Components/NavBar'
import {Greeting} from "../src/Components/Greeting"
import {ItemListContainer} from "../src/Components/ItemListContainer"
import { ItemDetailContainer } from './Components/ItemDetailContainer'
import {ItemCount} from "../src/Components/ItemCount"
import { CartProvider } from '../src/context/CartContext'

function App() {

  return (
    <>

  <Nav/>
  <Greeting saludo ="BIENVENIDOS A LA TIENDA"/>
  <ItemListContainer/>

     </>
  )
}

export default App
