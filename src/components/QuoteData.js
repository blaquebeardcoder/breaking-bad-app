import axios from 'axios';
import React, {useState, useEffect } from 'react'

const QuoteData = () => {
const [randomQuote, setRandomQuote] = useState([]);

const fetchQuote = async () => {
    const URL = "https://www.breakingbadapi.com/api/quote/random";
    const response = await axios.get(URL)

    setRandomQuote(response.data[0]);
}
    
useEffect(()=> {
    fetchQuote()
}, [])        
     
      
    
    return (
        <div>
            <h1>💭Random Quote Generator💭</h1>
            <button onClick={fetchQuote}>Get Quote</button>
            <div className="quote-container">
                <h1>"{randomQuote.quote}"</h1>
                <h3>- {randomQuote.author}</h3>
            </div>
        </div>
    )
}

export default QuoteData;

/**
 * author: "Jesse Pinkman"
quote: "How am I supposed to live here now, huh? My whole house smells like toe cheese and dry cleaning."
quote_id: 15
series: "Breaking Bad"
 */