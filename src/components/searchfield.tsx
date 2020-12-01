import React, { useRef } from 'react'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

//scss
import './../sass/searchfield.scss'

interface props {
    setSearchString: (newString: string) => void
}
const Searchfield = ({setSearchString}:props) => {

    const inputRef = useRef<HTMLInputElement |null>(null);
    
    

    const handleClear = () => {
        if (inputRef.current)
            inputRef.current.value = "";
        setSearchString('');
    }

    return(
        <div className="searchbar">
            <button><FontAwesomeIcon icon={faSearch} /></button>
            <input 
                type="text" 
                onChange={(e) => setSearchString(e.target.value)} 
                placeholder="Zadejte jméno pokémona"
                ref={inputRef}
            />
            <button onClick={handleClear}><FontAwesomeIcon icon={faTimes}/></button>
        </div>
    )
}

export default Searchfield