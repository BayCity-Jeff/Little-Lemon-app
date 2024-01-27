import './booking.css';
import ConfirmedBooking from '../../ConfirmedBooking';
import {Routes, Route, useNavigate} from 'react-router-dom';
import React from 'react';
import { useState } from "react";

const BookingForm = ({ availableTimes, submitData }) => {
    const sTime = availableTimes [0];
    const [date, setDate] = useState("");
    const [time, setTime] = useState(sTime);
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("None");

    const validD = () => date !== '';
    const validT = () => time !== '';
    const validG = () => guests !== '';
    const validO = () => occasion !== '';
    const validS = () => validD() && validT() && validG() && validO();



    let option1 = availableTimes[0];
    let option2 = availableTimes[1];
    let option3 = availableTimes[2];
    let option4 = availableTimes[3];
    let option5 = availableTimes[4];
    let option6 = availableTimes[5];
    let option7 = availableTimes[6];
    let option8 = availableTimes[7];

    const navigate = useNavigate();
    const navigateToConfirmed = () => {
        navigate('/ConfirmedBooking');
      };

    const handleSubmit = e => {
        e.preventDefault();
        onsubmit({date, time, guests, occasion})
        setDate("");
        setTime("00:00");
        setGuests("1");
        setOccasion("None");
      };

    return (
        <div className='BookingForm'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Choose date: {date}</label>
                <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
                <label htmlFor="time">Choose time: {time}</label>
                <select id="time" name="time" value={time} required={true} onChange={(e) => setTime(e.target.value)}>
                    <option>{option1}</option>
                    <option>{option2}</option>
                    <option>{option3}</option>
                    <option>{option4}</option>
                    <option>{option5}</option>
                    <option>{option6}</option>
                    <option>{option7}</option>
                    <option>{option8}</option>
                </select>
                <label htmlFor="guests">Number of guests: {guests}</label>
                <input
                    type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion: {occasion}</label>
                <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </form>
            <button type="submit" onClick={navigateToConfirmed}>Make Your reservation</button>
            <Routes>
                <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
            </Routes>
        </div>
    )
};

export default BookingForm