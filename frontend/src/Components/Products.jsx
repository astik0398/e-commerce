import React, { useEffect, useState } from 'react'
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
    const [order, setOrder] = useState("")
    const [filter, setFilter] = useState("")

    useEffect(()=> {
        dispatch(getProducts())
    }, [])

    const sortedData = products.sort((a,b)=> {
        if(order == 'asc'){
            return a.price - b.price
        }
        else if(order=='desc'){
            return b.price - a.price
        }
    }).filter(item=> filter == "" ? item : item.category == filter)

    console.log(sortedData);

    console.log(filter);

  return (
    <>
    <div>
        <InputForm order = {order} setOrder={setOrder} setFilter={setFilter}/>
    </div>
    {loading && <Loading/>}
    <div style={{ margin:'auto', display: 'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'50px', marginTop:'20px'}}>
        {sortedData.map((item)=> {
            return <ProductCard item = {item}/>
        })}
    </div>
    </>
  )
}

export default Products