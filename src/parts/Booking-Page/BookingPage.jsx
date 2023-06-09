import React from 'react';
import BookingInformation from './BookingInformation';
import Payment from '../Booking-Page/Payment'
import useMediaQuery from "../../hooks/useMediaQuery";

const BookingPage = (props) => {
    const isDesktop = useMediaQuery("(min-width: 1444px)");


    return (
        <>
        {
            isDesktop ? (
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
            ) : (
                <>

                        <h1>ada</h1>
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
                </>
            )
        }
        </>
          
    );
}

export default BookingPage;
