import { createContext } from "react";
import React from 'react'
import { useState } from "react";


export const Cart = createContext({});



const CartProvider = ({children}) => {

    const [products , setProducts] = useState([])

    const addProduct = (productToAdd) => {
        const flagRepeat = productRepeat (productToAdd.id)
        if (flagRepeat){
            //falta la logica

        }
        else{
            setProducts([...products, productToAdd])
        }
        

    }

    const productRepeat = (id)=>{
        return products.some(product=> product.id === id)
    }

  return (
    <Cart.Provider value = {{products, addProduct}} >
        {children}
    </Cart.Provider>
  )
}

export default CartProvider