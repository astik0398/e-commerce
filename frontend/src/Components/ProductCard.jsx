import React from 'react'
import wishlistBefore from '../Assets/wishlist-before.svg'
import './ProductCard.css'

const ProductCard = ({item}) => {
  return (
    <div className='productcard-container'>
        <img className='product-image' src={item.image} alt="" />
        <div style={{paddingLeft:'15px'}}>
        <div style={{display:'flex', alignItems:'center', gap:'150px'}}>
        <h3>{item.title}</h3>
          <img className='wishlist' style={{width:'30px'}} src={wishlistBefore} alt="" />
        </div>
        <p>{item.description}</p>
        <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
        <p>{item.category}</p>
        <p>{item.rating}</p>
        <button className='cart-button' style={{marginLeft:'150px'}}>Add To Cart</button>
        </div>
        <p><b>₹{item.price}</b></p>
        </div>
    </div>
  )
}

export default ProductCard