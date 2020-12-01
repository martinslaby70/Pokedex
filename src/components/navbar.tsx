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