import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage.js';
import Booking from './Booking.js';

function Main() {

    const list = [ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00' ]
    
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Booking" element={<Booking />} />
        </Routes>
    )
};

export default Main