import { createContext } from "react";
import React from 'react'
import { useState } from "react";


export const Cart = createContext({});



const CartProvider = ({children}) => {

    const [products , setProducts] = useState([])

    const addProduct = (productToAdd) => {
        const flagRepeat = isInCArt (productToAdd.id)
        if (flagRepeat){
          

            const productRepeated = products.find(productInCart=> productInCart.id === productToAdd.id)
             productRepeated.quantity += productToAdd.quantity

             const productNotRepeated = products.filter(productsInCart=> productsInCart.id !== productToAdd.id)
             setProducts([...productNotRepeated,productRepeated])
        }
        else{
            setProducts([...products, productToAdd])
        }
        

    }
    
    const isInCArt = (id)=>{
        return products.some(product=> product.id === id)
    }

   

    const removeProduct = (id)=>{

        const productosCart = products.find(productInCart=> productInCart.id === id)
        setProducts(productosCart)
    }

 

    const emptyCart = ()=>{
        setProducts([])
    }

   

    const calculeTotal = ()=>{

        
        const total = products.reduce(
            (acc, currentValue) =>
                (acc += currentValue.quantity * currentValue.price),
            0
        );
        return total;
    } 

    

    const totalItemsCart = ()=>{

        let total = 0
        products.forEach(product => total += product.quantity)
        return total
    }

  return (
    <Cart.Provider value = {{products,
                             addProduct,
                             removeProduct,
                             emptyCart,
                            calculeTotal,
                            totalItemsCart}} >
        {children}
    </Cart.Provider>
  )
}

export default CartProvider