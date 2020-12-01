import React, { useState } from 'react';
import Axios from 'axios';

//components
import Navbar from './components/navbar';
import PokemonContainer from './components/pokemonList/pokemonContainer';
import PokemonModal from './components/pokemonModal/modal';
import Searchfield from './components/searchfield';
import Clouds from './components/clouds';

//interfaces
import {pokemonDescription} from './interfaces/pokemonDescription';

const App = () => {

  const [searchString, setSearchString] = useState('');
  
  //modal setup
  const [modalShow, setModalShow] = React.useState(false);
  const [pokemon, loadPokemon] = useState<pokemonDescription | null>(null);
  
  const openModal = (pokemonId: string) => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((res) => { 
      loadPokemon(res.data);
      setModalShow(true);
    })
    .catch(err => {
      console.log(err);
    })
    
  }
  const closeModal = () => {
    setModalShow(false);
  }
  

  return(
    <div className="body">
        
        <Navbar />
        <Clouds />

        <Searchfield setSearchString={setSearchString} />
        <PokemonContainer searchString={searchString} setSearchString={setSearchString} openModal={openModal}/>
        
        <PokemonModal pokemon={pokemon!} onHide={closeModal} isVisible={modalShow}/>
    </div>
  )
}

export default App;
