import React from 'react'
//interfaces
import {pokemonDescription} from '../../interfaces/pokemonDescription'
//bootstrap 
import ProgressBar from 'react-bootstrap/ProgressBar';


interface props{
    pokemon: pokemonDescription,
    isActive: string
}
const DisplayInfo = ({isActive, pokemon}: props) => {
    
    const {types, height, weight, abilities, stats} = pokemon;

    const displayTypes = types?.map((type, index) => {
        const comma = index === types.length-1 ? '' : ', ';
        return(
            <span key={index}>{type.type.name}{comma}</span>
        )
    })
    const displayAbilities = abilities?.map((ability, index) => {
        const br = index === abilities.length-1 ? '' : <br/>;
        return(
            <span key={index}>{ability.ability.name}{br}</span>
        )
    });

    const displayStats = stats?.map((stat, index) => {
        let text = '';
        switch (index) {
            case 0:
                text = "Životy"
                break;
            case 1:
                text = "Útok"
                break;
            case 2:
                text = "Obrana"
                break;
            case 3:
                text = "SÚ"
                break;
            case 4:
                text = "SO"
                break;
            case 5:
                text = "Rychlost"
                break;
            default:
                break;
        }
        return(
            <li key={index}>
                <h3>{text}</h3>
                <ProgressBar now={stat.base_stat / 2} label={stat.base_stat}/>
            </li>
        )
    });

    return isActive === 'Profile' ? (
        <div className="profile">
            <ul>
                <li>
                    <span className="atribute">Typ</span>
                    <span className="value">{displayTypes}</span>
                </li>
                <li>
                    <span className="atribute">Výška</span>
                    <span className="value">{(height / Math.pow(10,1)).toString() + ' m' }</span>
                </li>
                <li>
                    <span className="atribute">Váha</span>
                    <span className="value">{weight.toString() + ' Kg'}</span>
                </li>
            </ul>
            <ul>
                <li><span className="atribute">Dovednosti</span></li>
                <li><span className="value">{displayAbilities}</span></li>
            </ul>
        </div>
    ):(
        <div className="stats">
            <ul>
                {displayStats}
            </ul>
        </div>
    )
}

export default DisplayInfo