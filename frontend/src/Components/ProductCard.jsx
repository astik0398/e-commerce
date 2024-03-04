import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', textAlign:'left',borderRadius:'15px'}}>
        <img style={{width:'100%', borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}} src={item.image} alt="" />
        <div style={{paddingLeft:'15px'}}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
        <p>{item.category}</p>
        <p>{item.rating}</p>
        </div>
        <p><b>₹{item.price}</b></p>
        </div>
    </div>
  )
}

export default ProductCard