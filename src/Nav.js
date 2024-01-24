import React from 'react';
import './style.css';

function Nav() {
    return (
        <header className="navigation">
            <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/menu">MENU</a></li>
                <li><a href="/reservations">RESERVATIONS</a></li>
                <li><a href="/order">ORDER ONLINE</a></li>
                <li><a href="/login">LOGIN</a></li>
            </ul>
        </header>
    )
}

export default Nav