import React from 'react';
import image from "./images/meme.png"

function Header() {
    return(
        <header>
            <img 
                src={image} 
                alt="Problem?"
            />
            <h1>Meme Generator</h1>
        </header>

    )
}

export default Header;