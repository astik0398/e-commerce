import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"

export const getProducts =()=> (dispatch)=> {
    dispatch({type: GET_PRODUCT_REQUEST})

    let response = fetch('https://e-commerce-backend-a02f.onrender.com/')
    response.then(function(res){
        return res.json()
    })
    .then(function(data){
        dispatch({type: GET_PRODUCT_SUCCESS, payload: data})
    })
    .catch(function(error){
        dispatch({type: GET_PRODUCT_FAILURE})
    })
}