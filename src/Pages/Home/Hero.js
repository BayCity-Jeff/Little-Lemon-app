import React from 'react';
import './home.css';

function Hero({children}) {
    return (
        <div className="hero">
            <div className='box2'>
                <div className="hero_txt">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <br></br>
                    <p>We are a family owned Mediteranian restaurant,
                    focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <img src="restauranfood.jpg" />
            </div>
        </div>
    )
}

export default Hero