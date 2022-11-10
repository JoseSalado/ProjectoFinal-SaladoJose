import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {
    //hacer el fetch del detalle del producto
    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    useEffect(() => {

        const getCharacterDetail = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const character = await response.json();
          
            setCharacter(character)
        }

        getCharacterDetail()
        
    }, [id])

    return (character ? <ItemDetail character={character}/> : <h2>Loading...</h2> )
};

export default ItemDetailContainer;
