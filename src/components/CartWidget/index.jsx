import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Cart } from '../../contexts/Cart';
import './styles.css'

const CartWidget = () => {

  const navigate = useNavigate();

  const {totalItemsCart} = useContext(Cart);
  return (
    <div>
      
        <ion-icon onClick ={()=> navigate("/cart")} name="cart"></ion-icon>
        <span>{totalItemsCart() === 0 ? null : `(${totalItemsCart()})`}</span>
    </div>
  )
}

export default CartWidget