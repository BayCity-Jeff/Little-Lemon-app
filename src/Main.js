import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from './Pages/Home/Homepage.js';
import Booking from './Pages/Booking/Booking.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import Placeholder from './Placeholder.js';

function Main() {

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Placeholder" element={<Placeholder />} />
            <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
    )
};

export default Main