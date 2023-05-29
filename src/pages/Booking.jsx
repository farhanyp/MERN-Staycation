import React, {useState,useEffect} from 'react';
import HeaderBooking from '../parts/Booking-Page/HeaderBooking';
import Strepper from '../elements/Strepper';
import BookingPage from '../parts/Booking-Page/BookingPage';
import datas from '../data/itemDetails.json'

const Booking = () => {
    const[page1, setPage1] = useState(false)
    const[page2, setPage2] = useState(false)

    const BookingFinish = {
        "Page1": page1,
        "Page2": page2,
    }

    const isBookingFinish = (value) => {
        if(value === "BookingPage1Finish") setPage1(true)
        if(value === "BookingPage2Finish") setPage2(true)
    }

    return (
        <div>
            <HeaderBooking isBookingFinish={(value)=>isBookingFinish(value)}/>
            <Strepper BookingFinish = {BookingFinish} isBookingFinish={(value)=>isBookingFinish(value)} data={datas}/>
        </div>
    );
}

export default Booking;
