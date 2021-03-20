import React from 'react'

const About = () => {
    return (
        <div>
           <h1>About Us</h1> 
           <h2>Who</h2>
           <h3>Hi, I'm Jahaziel, and I'm a web developer in the Bronx, NY.  Checkout this Breaking Bad project for my web development fellowship.</h3>
           <p>
           The Breaking Bad API is a collection of information on the Vince Gilligan series Breaking Bad, as well as his incredible spin-off Better Call Saul. This site is designed to make it easy on the developer to see what HTTP requests are possible, and what information is available.
           </p>
           <ul className="about-ul">
               <li>Random Characters</li>
               <li>Random Quotes</li>
           </ul>
           <h2>Why</h2>

           <p>
           Breaking Bad is regarded as one of the greatest television series of all time, and with 16 Primetime Emmy Awards, it is worthy of it's own API. In my search, I was unable to find an API that contained the amount of information I wanted, so I created one.
           </p>
           <h2>Copyright</h2>
           <p>
           I do not own the rights to any material provided in this API. Breaking Bad was created by Vince Gilligan, and originally aired on AMC. The majority of this data collected was from a Wikipedia.com and Wikia.com.

           </p>
        </div>
    )
}

export default About