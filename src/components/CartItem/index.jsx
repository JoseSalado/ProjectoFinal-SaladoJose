import React from 'react'

const CartItem = ({item}) => {
  return (
    <div>
        <img src= {item.image} alt= 'cart-item'/>
        <h2>
            {item.name}
        </h2>

    </div>
  )
}

export default CartItem
