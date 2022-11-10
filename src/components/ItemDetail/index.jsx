import React from 'react';
import './styles.css';

const ItemDetail = ({character}) => {
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
      
     
    </div>
  )
}

export default ItemDetail