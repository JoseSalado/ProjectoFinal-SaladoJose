import React, {useEffect, useState} from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"

export default function ItemListContainer ({greeting}) {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

   

   

    useEffect(()=> {
        ( async ()=> {
            try {
               
                let response;
               /* if (categoryId) {
                    response = await fetch(`https://rickandmortyapi.com/api/character/?species=${categoryId}`);
                } else {
                    response = await fetch(`https://rickandmortyapi.com/api/character`);
                }*/
              
                
              let q ;

              if (categoryId){
                q = query(collection(db, "products"), where("species","==",categoryId))
              }else{
                q = query(collection(db, "products"));
              }

             

             const querySnapshot = await getDocs(q);

             const productosfirebase = [];

             querySnapshot.forEach((doc) => {
             // doc.data() is never undefined for query doc snapshots
             console.log(doc.id, " => ", doc.data());
              productosfirebase.push({...doc.data(), id:doc.id})
            });

         
               // const data = await response.json();
                
                setProducts(productosfirebase)
               
            } catch (error) {
               
            }
        })()
    }, [categoryId])

    return (
                    
             products.length ? <ItemList products={products}/> : <h2>Loading...</h2>
        
    )
}