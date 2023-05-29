import React from 'react';
import BookingInformation from './BookingInformation';
import Payment from '../Booking-Page/Payment'

const BookingPage = (props) => {
    return (
        <section className='pt-[50px]'>
            <div className='container'>
                {
                    !props.isBookingFinish.Page1 &&(
                        <BookingInformation isBookingFinish={(value)=>props.isBookingFinish(value)} data={props.data}/>
                    )
                }

                {
                    props.isBookingFinish.Page1 &&(
                        <Payment />
                    )
                }

            </div>
        </section>  
    );
}

export default BookingPage;
