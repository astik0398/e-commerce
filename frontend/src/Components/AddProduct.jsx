import React from 'react'
import './AddProduct.css'

const AddProduct = () => {
  return (
    <div style={{margin:'auto',marginTop:'150px', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',  width:'30%', padding:'30px'}}>
      <form style={{ display:'flex', gap:'20px', flexDirection:'column'}}>
        <input type="text" placeholder='Enter Product Title' />
        <input type="text" placeholder='Enter Product Image Link' />
        <select style={{height:'30px'}}>
            <option value="">Filter By Category</option>
            <option value="accessories">Accessories</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
        </select>
        <input type="number" placeholder='Price'/>
        <input type="number" placeholder='Rate' min={1} max={5}/>
        <button style={{width:'150px', width:'150px', height:'35px', borderRadius:'15px', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', border:'none', margin:'auto'}} type='submit'>ADD PRODUCT</button>
      </form>
    </div>
  )
}

export default AddProduct