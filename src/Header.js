import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header" >
            <div className='logo'>
                <img src="logo.svg" />
            </div>
            <div className="navigation">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/Placeholder">ABOUT</a></li>
                    <li><a href="/Placeholder">MENU</a></li>
                    <li><a href="/Booking">RESERVATIONS</a></li>
                    <li><a href="/Placeholder">ORDER ONLINE</a></li>
                    <li><a href="/Placeholder">LOGIN</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header