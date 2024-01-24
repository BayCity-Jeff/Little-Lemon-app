import './style.css';
import React from 'react';
import BookingForm from './BookingForm.js';

function Booking() {
    return (
        <div className="booking">
            <div className="form">
                <BookingForm/>
            </div>
        </div>
    )
}

export default Booking;