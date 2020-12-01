import React, { useEffect, useState } from 'react'
import Axios from 'axios';

//components
import Pagination from './pagination'
import DisplayPokemons from './displayPokemons'
//scss
import './../../sass/pokemonContainer.scss'



const pokemonsPerPage = 12;

interface props {
    searchString: string,
    setSearchString: (newString: string) => void,
    openModal: (pokemonId: string) => void
}
interface pokemon{
    name: string,
    url: string,
}
const PokemonContainer = ({searchString, setSearchString, openModal}:props) => {

    const [pokemons, setPokemons] = useState<pokemon[]>([]);
    const [pokemonSearch, setPokemonSearch] = useState<pokemon[]>([]);
    const [page, setPage] = useState(1);

    
    useEffect(() => {
        Axios.get('https://pokeapi.co/api/v2/generation/1/')
        .then((res) => {
            setPokemons(res.data.pokemon_species);
            setPokemonSearch(res.data.pokemon_species);
            console.log(res.data);
        })
    }, [])

    useEffect(() => {
        if (searchString === '')
            setPokemonSearch(pokemons);
        else 
        {
            let pokemonsTemp: pokemon[] = [];

            pokemons.forEach(pokemon => {
                if (pokemon.name.includes(searchString))
                    pokemonsTemp.push(pokemon);
            })
            
            setPokemonSearch(pokemonsTemp);
           
            
        }
    },[searchString, pokemons])

    

    return(
        <>
            <DisplayPokemons 
                page={page} 
                pokemonSearch={pokemonSearch} 
                pokemonsPerPage={pokemonsPerPage} 
                searchString={searchString}
                openModal={openModal}
            />
            
            <Pagination 
                currentPage={page} 
                setCurrentPage={setPage} 
                totalItems={pokemonSearch.length} 
                itemsPerPage={pokemonsPerPage} 
                setSearchString={setSearchString}
            />
        </> 
    )
}

export default PokemonContainer;