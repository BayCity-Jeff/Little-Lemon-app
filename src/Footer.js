import React from 'react';
import Nav from './Nav.js';
import './style.css';

function Footer({children}) {
    return (
        <div className="footer">
            <div classname="box1">
                <img src="f1.jpg" />
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
            <p>
                contact
            </p>
            <p>
                social media links
            </p>
        </div>
    )
}

export default Footer