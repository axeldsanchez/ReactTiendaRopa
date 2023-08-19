import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from './Components/ItemListContainer.jsx'
import {Nav} from "./Components/NavBar.jsx"
import {ItemDetailContainer} from "./Components/ItemDetailContainer.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App />} />
    <Route path="/category/:id" element={<> <Nav /> <ItemListContainer/> </>} />
    <Route path="/item/:id" element={<> <Nav /> <ItemDetailContainer/> </>} />
    </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
)
