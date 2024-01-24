import './App.css';
import './style.css';
import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

function Homepage() {
    return (
      <div className='main'>
        <h1>Original</h1>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </div>
    );
  }

  export default Homepage;