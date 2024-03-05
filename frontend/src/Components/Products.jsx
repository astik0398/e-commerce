import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/productReducer/action'
import { store } from '../Redux/store'
import ProductCard from './ProductCard'
import InputForm from './InputForm'
import Loading from './Loading'

const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector(store=> store.productReducer.products)
    const loading = useSelector(store=> store.productReducer.isLoading)

    useEffect(()=> {
        dispatch(getProducts())
    }, [])

  return (
    <>
    <div>
        <InputForm/>
    </div>
    {loading && <Loading/>}
    <div style={{ margin:'auto', display: 'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'50px', marginTop:'20px'}}>
        {products.map((item)=> {
            return <ProductCard item = {item}/>
        })}
    </div>
    </>
  )
}

export default Products