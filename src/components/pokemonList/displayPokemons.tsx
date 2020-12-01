import React from 'react'

//components
import Pokemon from './pokemon';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faSortAmountDown, faTimes } from '@fortawesome/free-solid-svg-icons'

interface pokemon{
    name: string,
    url: string
}
interface props {
    searchString: string,
    pokemonSearch: pokemon[],
    page: number,
    pokemonsPerPage: number,
    openModal: (pokemonId: string) => void
}

const DisplayPokemons = ({searchString, pokemonSearch, page, pokemonsPerPage, openModal}:props) => {
    if (searchString === '')
    {
        const selectedPokemons = pokemonSearch.slice((page*pokemonsPerPage) - pokemonsPerPage , page*pokemonsPerPage);
        const pokemonsToDisplay = selectedPokemons.map((pokemon, index) => <Pokemon name={pokemon.name} url={pokemon.url} openModal={openModal} key={index} />);    
       
        return(
            <div className="pokemonContainer">
                <div className="settings">
                    <h3><FontAwesomeIcon icon={faTh} />Přehled pokémonů</h3>
                </div>
                
            
                <div className="pokemons">
                    {pokemonsToDisplay}
                    <div className="placeholder" />
                    <div className="placeholder" />
                    <div className="placeholder" />
                    <div className="placeholder" />
                    <div className="placeholder" />
                    <div className="placeholder" />
                    <div className="placeholder" />
                </div>

            </div>
        )
    }
    else
    {

        const pokemonsToDisplay = pokemonSearch.map((pokemon, index) => <Pokemon name={pokemon.name} url={pokemon.url} key={index} openModal={openModal}/>);
        
        return(
            <div className="pokemonContainer">
                <div className="settings">
                    <h3><FontAwesomeIcon icon={faSortAmountDown} />Výsledky hledání</h3>
                    <p><FontAwesomeIcon icon={faTimes} /><span>Smazat filtry</span></p> 
                </div>  
                
            
                <div className="pokemons">
                    {pokemonsToDisplay}
                    <div className="placeholder" />
                    <div className="placeholder" />
                    <div className="placeholder" />
                    <div className="placeholder" />
                    <div className="placeholder" />
                    <div className="placeholder" />
                    <div className="placeholder" />
                </div>

            </div>
        )
    }
}

export default DisplayPokemons;