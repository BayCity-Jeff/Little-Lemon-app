import React from 'react';
import Testimonials from './Testimonials.js';
import About from './About.js';
import Hero from './Hero.js';
import Specials from './Specials.js';

function Main({children}) {
    return (
        <div className="main">
            <Hero></Hero>
            <Specials></Specials>
            <Testimonials>
            </Testimonials>
            <About>
            </About>
        </div>
    )
}

export default Main