import React from "react";
import { useState } from "react";
import BookingForm from './BookingForm';

function TList() {

    const list = [ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00' ]

    return (
        <div className="TList">
            <BookingForm list={list} />
        </div>
    )
}

export default TList