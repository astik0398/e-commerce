import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from '../Components/Homepage'
import AddProduct from '../Components/AddProduct'
import Products from '../Components/Products'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/add-product' element={<AddProduct/>}/>
            <Route path='/products' element={<Products/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute