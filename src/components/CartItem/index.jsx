import React from 'react'
import { useContext } from 'react'
import { Cart } from '../../contexts/Cart'

import TrashCanIcon from '../TrashCanIcon'
import './styles.css'



const CartItem = ({item}) => {
  const {removeProduct} = useContext(Cart)
  const handleRemove = ()=>{
    removeProduct(item.id)
  }
  return (
    <div >
        <img src= {item.image} alt= 'cart-item'/>
              
        <h2>
            {item.name}
        </h2>
        <h2>{item.quantity}</h2>
        <h3>{item.precio}</h3>
        <div className='tash-icon' onClick={handleRemove} >
           <TrashCanIcon/>  
        </div>       
        

    </div>
  )
}

export default CartItem
