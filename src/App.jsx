import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/shop/Home";
import About from './pages/shop/About';
import Service from './pages/shop/Service';
import Product from "./pages/shop/Product";
import Contact from "./pages/shop/Contact";
import './App.css'

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/service' element={<Service/>}/>
                <Route path='/products' element={<Product/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App
