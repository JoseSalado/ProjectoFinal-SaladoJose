import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Item = ({product}) => {


    const navigate = useNavigate()
    const navigateDetail = ()=>{
      
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