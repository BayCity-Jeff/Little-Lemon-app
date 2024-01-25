import './style.css';
import React from 'react';
import { useState } from "react";
import Booking from './Booking';


function BookingForm({ list }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("Select Time");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("None");

    const availableSlots = [ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00' ];


    let option1 = availableSlots[0];
    let option2 = availableSlots[1];
    let option3 = availableSlots[2];
    let option4 = availableSlots[3];
    let option5 = availableSlots[4];
    let option6 = availableSlots[5];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        setDate("");
        setTime("00:00");
        setGuests("1");
        setOccasion("None");
    };

    return (
        <div className="bookingForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Choose date: {date}</label>
                <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
                <label htmlFor="time">Choose time: {time}</label>
                <select id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)}>
                    <option>{option1}</option>
                    <option>{option2}</option>
                    <option>{option3}</option>
                    <option>{option4}</option>
                    <option>{option5}</option>
                    <option>{option6}</option>
                </select>
                <label htmlFor="guests">Number of guests: {guests}</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    />
                <label htmlFor="occasion">Occasion: {occasion}</label>
                <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </form>
            <button disabled={!time} type="submit">
                Make Your reservation
            </button>
        </div>
    )
};

export default BookingForm