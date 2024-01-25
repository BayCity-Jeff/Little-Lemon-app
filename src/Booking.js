import './style.css';
import React from 'react';
import { useState } from "react";
import BookingForm from './BookingForm';

function Booking() {

    const [list, setList] = useState([ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00' ]);

    return (
        <div className="booking">
            <div className="form">
                <BookingForm list={list}/>
            </div>
        </div>
    )
}

export default Booking;