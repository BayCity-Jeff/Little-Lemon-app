import React from 'react';
import Nav from './Nav.js';
import './style.css';

function Header({children}) {
    return (
        <div className="header" >
            
                <div className='logo'>
                    <img src="logo.svg" />
                </div>
                <div className="navigation">
                    <Nav/>
                </div>
                {children}
    
        </div>
    )
}

export default Header