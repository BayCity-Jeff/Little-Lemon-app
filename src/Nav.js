import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav'>
            <Link to="/" className='nav-item'>Homepage</Link>
            <Link to="/Booking" className='nav-item'>Booking</Link>
        </nav>
    )
}

export default Nav