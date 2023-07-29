import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {remove} from "../store/cartSlice"

const Cart = () => {
    const dispatch=useDispatch();
    const products = useSelector((state) => state.cart);
    const removeHandle=(productId)=>{
        dispatch(remove(productId));
    }

  return (
    <div>
      <div className="cartWrapper">
        <h2 className='cart-heading'>Your Selected Products</h2>
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn" onClick={()=>removeHandle(product.id)}
                            >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Cart
