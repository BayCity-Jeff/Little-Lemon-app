import React from 'react';
import { useReducer } from 'react';
import './booking.css';
import { fetchAPI, submitAPI } from '././fetchAPI';
import BookingForm from './BookingForm';
import { Link } from 'react-router-dom';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];

function Booking() {
    const [
        availableTimes,
        dispatchOnDateChange
      ] = useReducer(updateTimes, [], initializeTimes);

      const submitData = <Link to="/Booking" className='nav-item'>Booking</Link>;

    return (
        <div className="booking">
            <div className="form">
                <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitData={submitData} />
            </div>
        </div>
    );
};

export default Booking
