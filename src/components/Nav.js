import React, { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/character'>
                    <li>Character</li>
                </Link>
                <Link to='/quote'>
                    <li>Quote</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link> 
                <Link to='/contact'>
                    <li>Contact</li>
                </Link> 
            </ul>
        </div>
    )
}

export default Nav;
