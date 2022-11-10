import React from 'react'
import Item from '../Item'
import './styles.css';
//se encarga de hacer el map con los productos
const ItemList = ({products}) => {
  return (
    <div className='item-list-container'>
    { products.map(product=>{
        return <Item product={product} />
    })
    }
    </div>
  )
}

export default ItemList