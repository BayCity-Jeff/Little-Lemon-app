import React from 'react';
import './style.css';

function About({children}) {
    return (
        <div className="about">
            <div className='box1'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <br></br>
                <p>We are a family owned Mediteranian restaurant,
                    focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className='box2'>
                <div className='box3'>
                    <img src="a2.jpg" />
                </div>
                <div className='box4'>
                    <img src="a1.jpg" />
                </div>
            </div>
        </div>
    )
}

export default About