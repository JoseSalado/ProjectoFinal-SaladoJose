import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './styles.css'
import RawProductos from "../../data/product";
import ItemList from "../../components/ItemList";

function ItemListContainer ({greeting}){
    const [products, setProductos] = useState([])
useEffect(()=>{
    (async()=>{
        const obtenerProductos = ()=>{
            return new Promise((accept,reject)=>{
                setTimeout(()=>{
                    accept(RawProductos)

                }, 3000)
            })
        }
        const response = await obtenerProductos();
        console.log(response);
        setProductos(response)
    })()
},[])
   




   // const [nombre, setNombre] = useState("Oscar")
   // const [fecha , setFecha] = useState("")
    

    //const handleChangeName = ()=>{
     //   if(nombre === "Oscar")setNombre('Raul')
    //    else setNombre("Oscar")
      //  console.log(nombre);
//}
  //Montaje 
 // useEffect(()=>{
    //dentro de esta funcion haremos todo lo que es obtencion de datos desde una API
    //o por ejemplo settear el carrioto utilizando el LocalStorage
     //console.log("Se ejecuta solamnete al montaeje");
 // }, [])

   //useEffect(()=>{
    //este eefcto se ejecuta al cambiarse el valor del state "nombre" y tambien a la hora del montaje.
     //console.log("Se cambia el nombre y/o se monta el componente");
   //},[nombre, fecha])


   //const cambiarFecha = ()=>{
     // setFecha(new Date().toLocaleString())
   //}

     return(
        <>
        {}
        <ItemList products={products}/>
        </>

        
     ) 
       

    }

export default ItemListContainer