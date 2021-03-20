import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
            <div>
                <h1>💨What kind of BAD do you want to get into today?</h1>
                <Link to='/character'>
                    <div className="button">
                        <button>👨‍🦰Random Character👩🏾!</button>
                    </div>
                </Link>
                <Link to='/quote'>
                <div className="button">
                    <button>💬Random Quote💬!</button>
                </div>
                </Link>
            </div>
    )
}

export default Home
