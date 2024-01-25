import React from 'react';
import Nav from './Nav.js';
import './style.css';

function Header() {
    return (
        <div className="header" >
            <div className='logo'>
                <img src="logo.svg" />
            </div>
            <div className="navigation">
                <ul>
                    <li><a href="/home">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/menu">MENU</a></li>
                    <li><a href="/reservations">RESERVATIONS</a></li>
                    <li><a href="/order">ORDER ONLINE</a></li>
                    <li><a href="/login">LOGIN</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header