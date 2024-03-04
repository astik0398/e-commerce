import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='link-text' to={'/'}>HOME</Link>
        <Link className='link-text' to={'/add-product'}>ADD PRODUCT</Link>
        <Link className='link-text' to={'/products'}>PRODUCTS</Link>
    </div>
  )
}

export default Navbar