import React, { useState } from 'react'

//bootstrap 
import Modal from 'react-bootstrap/Modal'
import './../../sass/modal.scss'

//interfaces
import {pokemonDescription} from '../../interfaces/pokemonDescription'
import DisplayInfo from './displayInfo'

interface props{
    pokemon: pokemonDescription,
    onHide: () => void,
    isVisible: boolean

}
const PokemonModal = ({pokemon, onHide, isVisible}: props) => {
  const [isActive, setActive] = useState('Profile');
  
  if (pokemon) {
      const {name, id} = pokemon;
      const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
      

      return  (
      <Modal
          show={isVisible}
          onHide={onHide}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="pokemonModal"
      >
        
        <Modal.Body>
            <div className="cardContainer">
              <div className={isActive === 'Profile' ? 'active' : ''} onClick={() => setActive('Profile')}><h4>Profil</h4></div>
              <div className={isActive === 'Stats' ? 'active' : ''} onClick={() => setActive('Stats')}><h4>Statistiky</h4></div>
            </div>
            <div className="content">
              <div className="imageContainer">
                <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <div>
                  <img src={imgURL} alt="pokemon_image"/>
                </div>
              </div>
              <div className="textContainer">
                  <DisplayInfo isActive={isActive} pokemon={pokemon}/>
              </div>
            </div>
        </Modal.Body>
      
      </Modal>
      )
    }
    else
    {
      return (<div />)
    }
    
}

export default PokemonModal;