import React from 'react';
import Nav from './Nav.js';
import './style.css';

function Footer({children}) {
    return (
        <div className="footer">
            <div classname="box1">
                <img src="f1.jpg" />
            </div>
            <Nav/>
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