import React from 'react'
//card
const Item = ({product}) => {
  return (
    <p key={product.id}>{product.name}, stock: {product.stock}</p>
  )
}

export default Item