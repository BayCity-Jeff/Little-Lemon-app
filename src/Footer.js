import React from 'react';
import Nav from './Nav.js';
import './style.css';

function Footer({children}) {
    return (
        <div className="footer">
            <p>
                Image Placeholder
            </p>
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