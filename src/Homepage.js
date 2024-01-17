import './App.css';
import './style.css';
import React from 'react';
import Main from './Main.js';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

function Homepage() {
    return (
      <div className='main'>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </div>
    );
  }

  export default Homepage;