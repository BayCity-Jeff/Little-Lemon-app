import "./style.css";
import React from 'react';
import { useState } from "react";


function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        setTime("");
    };

    return (
        <div className="BookingForm">
            <form style="display: grid; max-width: 200px; gap: 20px" onSubmit={handleSubmit}>
                <fieldset>
                    <div className="date">
                        <label htmlFor="date">Choose date: {date}
                            <input
                                id="date"
                                type="text"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="time">
                        <label htmlFor="time">Choose time: {time}
                            <select name="time" value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="17:00"></option>
                                <option value="18:00"></option>
                                <option value="19:00"></option>
                                <option value="20:00"></option>
                                <option value="21:00"></option>
                                <option value="22:00"></option>
                            </select>
                        </label>
                    </div>
                    <div className="guests">
                        <label htmlFor="guests">Number of guests: {guests} </label>
                        <input
                            id="guests"
                            type="number"
                            placeholder="1"
                            min={1}
                            max={10}
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />
                    </div>
                    <div className="Occasion">
                        <label htmlFor="occasion">Occasion:</label>
                            <input
                                id="occasion"
                                type="text"
                                placeholder="Occasion"
                                name="occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            />
                                <option>Birthday</option>
                                <option>Anniversary</option>
                    </div>
                    <button type="submit">
                        Make Your reservation
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default BookingForm;