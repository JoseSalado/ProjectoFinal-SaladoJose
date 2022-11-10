import React, {useEffect, useState} from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer ({greeting}) {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

   

   

    useEffect(()=> {
        ( async ()=> {
            try {
               
                let response;
                if (categoryId) {
                    response = await fetch(`https://rickandmortyapi.com/api/character/?species=${categoryId}`);
                } else {
                    response = await fetch(`https://rickandmortyapi.com/api/character`);
                }
                
                const data = await response.json();
                
                if (data.results) setProducts(data.results)
               
            } catch (error) {
               
            }
        })()
    }, [categoryId])

    return (
                    
             products.length ? <ItemList products={products}/> : <h2>Loading...</h2>
        
    )
}