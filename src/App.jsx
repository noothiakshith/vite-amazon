import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import NavBar from './components/NavBar'
import Home from './pages/Home'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
    </Routes>
    </>

  )
}

export default App