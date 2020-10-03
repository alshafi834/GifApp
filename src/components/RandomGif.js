import React from 'react'
import './RandomGif.css'
import useGif from '../common/hooks/useGif'


const RandomGif = () => {
    const {gif, fetchGif} = useGif();
    const handleAnother = () => {
        fetchGif();
    }

    return (
        <div className="random-gif">
            <h2>Random Gifs</h2>
            <img width="500" src={gif} alt="Random Gif"/>
            <button onClick={handleAnother}>Another one</button>
        </div>
    )
}

export default RandomGif
