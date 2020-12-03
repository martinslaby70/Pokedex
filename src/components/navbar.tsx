import React from 'react'

//scss
import './../sass/navbar.scss';

//logo
import logo from './../assets/background_Images/logo.webp';

const Navbar = () => {


    return(
        <header>
            <div className="navContainer">
                <div className="logo">
                    <img src={logo} alt="pokedex_logo"/>
                </div>
                <ul>
                    <li>
                        <div />
                        <a href="https://martinslaby.cz/" target="_blank" rel="noreferrer">Portfolio</a>
                    </li>
                    <li className="active">
                        <div />
                        <a href="#">Pokémoni</a>
                    </li>
                </ul>
            </div>   
        </header>
    )
}

export default Navbar;