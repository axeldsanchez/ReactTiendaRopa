import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Nav} from "./Components/NavBar.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from './Components/ItemListContainer.jsx'
import {ItemDetailContainer} from "./Components/ItemDetailContainer.jsx"
import {Cart} from "./Components/Cart.jsx"
import { CartProvider } from './context/CartContext.jsx'
import {Checkout} from "./Components/Checkout.jsx";
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App />} />
    <Route path="/category/:id" element={<> <Nav /> <ItemListContainer/> </>} />
    <Route path="/item/:id" element={<> <Nav /> <ItemDetailContainer/> </>} />
    <Route path="/cart" element={<> <Nav /> <Cart /> </>} />
    <Route path="/checkout" element={<> <Nav /> <Checkout/> </>} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
