import '../../App.js';
import './home.css';
import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from '././About.js';

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