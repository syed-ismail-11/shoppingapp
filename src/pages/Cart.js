import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';


const Cart = () => {
  const items = useSelector((state)=> state.cart)
  const dispatch = useDispatch()

  const handleRemove = (product) =>{
    dispatch(remove(product))
  }


  return (
    <div>
      <h2>Cart</h2>
      <div className='cartWrapper'>
        {
          items.map((product,index) =>(
            <div className='cartCard' key={index}>
            <h4>{product.category}</h4>
              <img id='cartImg' src={product.image} alt="" />
              <h3>{product.title}</h3>
              <h4>{"$"+product.price}</h4>
              <h4>{"Rating"+product.rating.rate}</h4>
              <h5>{product.description}</h5>
              <button className='btn' onClick={()=> handleRemove(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart