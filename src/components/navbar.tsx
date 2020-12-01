import React from 'react'

//scss
import './../sass/navbar.scss';

const Navbar = () => {


    return(
        <header>
            <div className="navContainer">
                <div className="logo">
                    <img src="" alt="pokedex_logo"/>
                </div>
                <ul>
                    <li>
                        <div />
                        <p>O nás</p>
                    </li>
                    <li className="active">
                        <div />
                        <p>Pokémoni</p>
                    </li>
                </ul>
            </div>   
        </header>
    )
}

export default Navbar;