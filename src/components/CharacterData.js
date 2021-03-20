import axios from 'axios';
import React, {useState, useEffect } from 'react'

const CharacterData = () => {
const [randomChar, setRandomChar] = useState([]);

const fetchChar = async () => {
    const URL = "https://www.breakingbadapi.com/api/character/random";
    const response = await axios.get(URL)

    setRandomChar(response.data[0]);

}

useEffect (()=> {
    fetchChar()
}, [])



    return (
        <div>
            <h1> 🧪Breaking Bad Randomizer </h1>
            <div className="button">
                <button onClick={fetchChar}> 🔁 New Character </button>
            </div>
            <img src={randomChar.img} />
            <h2>{randomChar.name}</h2>
            <h3>"{randomChar.nickname}"</h3>
            <div className="info-container">
                <h4>Occupation: {randomChar.occupation}</h4>
                <h4>Portrayed By: {randomChar.portrayed}</h4>
                <h4># of Appearances: {randomChar.appearance}</h4>
                <h4>Status: {randomChar.status}</h4>
            </div>
        </div>
    )
}

export default CharacterData;