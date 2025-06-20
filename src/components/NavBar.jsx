import React from 'react'
import { useNavigate } from 'react-router-dom'
function NavBar() {
    const navigation = useNavigate();
  return (
    <div>
       store
       <button onClick={()=>navigation("/")}>Home</button>
       <button onClick={()=>navigation("/cart")}>Cart</button>
       <button onClick={()=>navigation("/wishlist")}>Wishlist</button>
    </div>
  )
}

export default NavBar