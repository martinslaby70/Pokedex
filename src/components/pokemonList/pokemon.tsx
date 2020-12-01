import React from 'react'

interface props{
    url: string,
    name: string,
    openModal: (pokemonId: string) => void;
}
const Pokemon = ({url, name, openModal}:props) => {

    const pokemonId = url.split('/')[url.split('/').length - 2];
    //console.log(pokemonId);
    
    const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
    return(
        <div className="pokemonCard" onClick={() => openModal(pokemonId)}>
            <div className="imgContainer">
                <img src={imgUrl} alt={name}/>
            </div>
            <div className="nameContainer">
                <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            </div>
            <br/>
        </div>
    )
}

export default Pokemon;