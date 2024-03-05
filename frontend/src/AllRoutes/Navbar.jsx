import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import cart from '../Assets/cart.svg'
import shirt from '../Assets/shirt.svg'
import plus from '../Assets/plus.svg'
import home from '../Assets/home.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
        <div style={{display:'flex', gap:'5px', alignItems:'center'}}>
        <img style={{width:'25px'}} src={home} alt="" />
        <Link className='link-text' to={'/'}>HOME</Link>
        </div>
        <div style={{display:'flex', gap:'5px', alignItems:'center'}}>
          <img style={{width:'25px'}} src={plus} alt="" />
        <Link className='link-text' to={'/add-product'}>ADD PRODUCT</Link>
        </div>
        <div style={{display:'flex', gap:'5px', alignItems:'center'}}>
          <img style={{width:'25px'}} src={shirt} alt="" />
        <Link className='link-text' to={'/products'}>PRODUCTS</Link>
        </div>
        <img className='cart' style={{width:'25px', marginLeft:'1000px'}} src={cart} alt="" />
        </div>
    </div>
  )
}

export default Navbar