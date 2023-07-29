import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Head = () => {
    const items=useSelector((state) =>state.cart);
  return (
    <div className='nav'>
           
        
            <span className="logo">Shopping store using Redux Toolkit</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
  )
}

export default Head
