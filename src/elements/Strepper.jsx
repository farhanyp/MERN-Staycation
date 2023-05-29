import React from 'react';
import Success from '../assets/img/success.svg'
import Zoom from 'react-reveal/Zoom';
import BookingInformation from '../parts/Booking-Page/BookingInformation';
import Payment from '../parts/Booking-Page/Payment';
import { Fade } from 'react-reveal';
import Completed from '../parts/Booking-Page/Completed'
const Strepper = (props) => {
    console.log("page1: ", props.BookingFinish.Page1)
    console.log("page2: ", props.BookingFinish.Page2)
    return (
    <>
        <section className='pt-[50px]'>
        <Fade bottom cascade>
            <div className='container mx-auto relative'>
            
                <div className='flex justify-center gap-6 items-center text-2xl font-medium text-primary'>
                    <div className='w-[60px] h-[60px] bg-white border-gray border-[1px] inline-flex justify-center items-center rounded-full'>
                        {
                            props.BookingFinish.Page1 ? <Zoom><div className='w-[60px] h-[60px] bg-gray inline-flex justify-center items-center rounded-full'><img src={Success} alt=''/></div></Zoom> : 
                            <div className='w-[50px] h-[50px] bg-gray inline-flex justify-center items-center rounded-full'>1</div>
                        }
                    </div>
                    <div className='w-[60px] h-[60px] bg-white border-gray border-[1px] inline-flex justify-center items-center rounded-full'>
                        {
                            props.BookingFinish.Page2 ? <Zoom><div className='w-[60px] h-[60px] bg-gray inline-flex justify-center items-center rounded-full'><img src={Success} alt=''/></div></Zoom>  : 
                            <div className='w-[50px] h-[50px] bg-gray inline-flex justify-center items-center rounded-full'>2</div>
                        }
                    </div>
                    <div className='w-36 h-[1px] bg-gray absolute -z-10'></div>
                </div>
            </div>
        </Fade>
            <div className='pt-[50px]'>
                <div className='container'>
                    {
                        (!props.BookingFinish.Page1 && !props.BookingFinish.Page2) ? <BookingInformation isBookingFinish={(value)=>props.isBookingFinish(value)} data={props.data}/> : null
                    }

                    {
                        (props.BookingFinish.Page1 && !props.BookingFinish.Page2) ? <Payment isBookingFinish={(value)=>props.isBookingFinish(value)} data={props.data}/> : null
                    }

                    {
                        props.BookingFinish.Page2 ? <Completed/> : null
                    }

                </div>
            </div>  
        </section>
    </>
    );
}

export default Strepper;
