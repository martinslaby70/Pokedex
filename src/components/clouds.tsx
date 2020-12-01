import React from 'react'

//clouds
import cloudBig from './../assets/background_Images/cloud-large.png'
import cloudMedium from './../assets/background_Images/cloud-medium.png'
//scss
import './../sass/clouds.scss';

const Clouds = () => {


    return(
        <div>
            <div className="cloud big c1"><img src={cloudBig} alt="cloud"/></div>
            <div className="cloud big c2"><img src={cloudBig} alt="cloud"/></div>
            <div className="cloud medium c3"><img src={cloudMedium} alt="cloud"/></div>
            <div className="cloud medium c4"><img src={cloudMedium} alt="cloud"/></div>
            <div className="cloud medium c5"><img src={cloudMedium} alt="cloud"/></div>
        </div>
    )
}

export default Clouds;