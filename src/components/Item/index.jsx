import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'
//card
const Item = ({product}) => {


    const navigate = useNavigate()
    const navigateDetail = ()=>{
        //navegar hacia el detalle del producto
        navigate (`/detail/${product.id}`)
    }

  return (
    <div  className = "card-detail">
      <img src={product.image} alt="character" />
      <h4  key={product.id}>{product.name}, Especie: {product.species} </h4>
      <button onClick={navigateDetail}>Ver Detalles</button>

    </div>
    
    
  )
}

export default Item