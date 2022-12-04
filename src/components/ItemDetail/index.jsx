import React from 'react';
import { useState } from 'react';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemDetail = ({character}) => {
 
  const [quantityItemCount,setQuantityItemcount] = useState(0);
  const confirmPurchase = (quantity)=>{
    console.log(quantity)
    setQuantityItemcount (quantity);

  }

  console.log(character);
  return (
    <div className='item-detail'>
      <img src={character.image} alt="character" width={450}/>
      <div className='item-detail-character'>
      <h2>Nombre: {character.name}</h2>
      <h2>Especie: {character.species}</h2>
      <h3>Precio: $ {10}</h3>
      <button className='item-detail-button'>Comprar</button>      
      </div>
      {quantityItemCount ? (
        <button>go caRRITO</button>
      ):(
        <ItemCount
      onAdd={confirmPurchase}
      initial = {1}
      stock = {20}
      />)}
     
    </div>
  )
}

export default ItemDetail