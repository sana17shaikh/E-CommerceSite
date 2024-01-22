import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import PageNotFound from './Pages/PageNotFound'
import Product from './Pages/Product'
import Checkout from './Pages/Checkout'
import Cart from './Pages/Cart'
 
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/product/*' element={<PageNotFound/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
