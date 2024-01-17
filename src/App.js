
import './style.css'
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './Homepage.js';
import Booking from './Booking.js';

function App() {
  return (
    <div className='app'>
      <nav className='nav'>
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/Booking" className='nav-item'>Booking</Link>
      </nav>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
