import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import {STATUSES} from '../store/productSlice';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch()
  const {data:products, status} = useSelector((state)=> state.product)

  useEffect(()=>{
      dispatch(fetchProducts())
  },[]);

  const handleAdd =(product) =>{
      dispatch(add(product))
  }

  if (status === STATUSES.LOADING){
    return <h1>Loading ... </h1>
  }
  if (status === STATUSES.ERROR){
    return <>
    <h1>ERROR</h1>
    <h2>Page Not Found</h2>
    </>
  }
  const handleView =(product)=>{
    <Link className='navLink' to='/view'>View</Link>
    
  }

  return <div className='productsWrapper'>
    {
      products.map((product,index)=>(
        <div className='card' key={index}>
        <img id='productImg'  src={product.image} alt="" />  
        <h6 id='category'>{product.category}</h6>
        <h4>{product.title}</h4>
        <h5>{"$"+product.price}</h5>
        <h5 id='category'>{"Rating:"+product.rating.rate}</h5>
        <button onClick={()=>handleAdd(product)} className='btn'>Add to Cart</button>
        </div>
      ))
    }
  </div>
}

export default Products