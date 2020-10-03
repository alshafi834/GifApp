import React, { useState} from 'react'
import './TagGif.css'
import useGif from '../common/hooks/useGif'


const TagGif = () => {
    const [tag, setTag] = useState('cat');
    const {gif, fetchGif} = useGif(tag)

    

    const handleAnother = () => {
        fetchGif(tag);
    }

    return (
        <div className="tag-gif">
            <h2>{tag} Gifs</h2>
            <img width="100%" src={gif} alt="Tagged gif"/>
            <input type="text" value={tag} onChange={(e) => {setTag(e.target.value)}} />
            <button onClick={handleAnother}>Find Gif</button>
        </div>
    )
}

export default TagGif
