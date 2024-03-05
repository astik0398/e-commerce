import React from 'react'

const InputForm = ({setOrder}) => {
  return (
    <div>
       <div style={{ margin:'auto', marginTop:'5px', display:'flex', justifyContent:'space-around', width:'35%', alignItems:'center'}}>
        <h3>Sort by:</h3>
        <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
        <input onChange={(e)=> setOrder(e.target.value)} value='asc' name='sort' type="radio" />
        <label>Low To High</label>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
        <input onChange={(e)=> setOrder(e.target.value)} name='sort' type="radio" value='desc'/>
        <label>High To Low</label>
        </div>
        <div>
        <select style={{height:'30px'}}>
            <option value="">Filter By Category</option>
            <option value="accessories">Accessories</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
        </select>
        </div>
       </div>
    </div>
  )
}

export default InputForm