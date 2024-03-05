import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import cart from '../Assets/cart.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
        <Link className='link-text' to={'/'}>HOME</Link>
        <Link className='link-text' to={'/add-product'}>ADD PRODUCT</Link>
        <Link className='link-text' to={'/products'}>PRODUCTS</Link>
        <img className='cart' style={{width:'25px', marginLeft:'1080px'}} src={cart} alt="" />
        </div>
    </div>
  )
}

export default Navbar