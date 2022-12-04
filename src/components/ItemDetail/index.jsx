import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../../contexts/Cart';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemDetail = ({character}) => {
 
  const {addProduct} = useContext(Cart);
  const [quantityItemCount,setQuantityItemcount] = useState(0);

  const navigate = useNavigate();

  const confirmPurchase = (quantity)=>{
    console.log(quantity)
    addProduct({...character, quantity});
    setQuantityItemcount (quantity);

  }

  const handelNavigate = ()=>{
    navigate('/cart')
    
  }

  console.log(character);
  return (
    <div className='item-detail'>
      <img src={character.image} alt="character" width={450}/>
      <div className='item-detail-character'>
      <h2>Nombre: {character.name}</h2>
      <h2>Especie: {character.species}</h2>
      <h3>Precio: $ {character.precio}</h3>
         
      </div>
      {quantityItemCount ? (
        <button onClick={handelNavigate}>go caRRITO</button>
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