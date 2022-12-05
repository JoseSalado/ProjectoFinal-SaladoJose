import React from 'react';
import { useState } from 'react';
import './styles.css';

const ItemCount = ({onAdd , stock , initial}) => {

    const [count, setCount]= useState(initial);

    const onPlus = ()=>{
        if(count < stock) setCount (count + 1)

    }

    const onDecrement = ()=>{
     if ( count > initial) setCount (count - 1) 
    }

  return (
    <div className='item-count'>
       <button onClick={onDecrement}>-</button>
       <span>{count}</span>
       <button onClick={onPlus}>+</button>
       <button onClick={()=>onAdd(count)}>confirmar compra</button>
    </div>
  )
}

export default ItemCount