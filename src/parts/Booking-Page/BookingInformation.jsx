import React from 'react';
import Button from '../../elements/Button';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

const BookingInformation = (props) => {
    const navigate = useNavigate()
    const sendIsFinish = (value) => {
        props.isBookingFinish(value)
    }
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <Fade bottom cascade>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold text-primary'>Booking Information</h1>
                <h2 className='text-lg font-light text-gray'>Kindly follow the instructions below</h2>
            </div>
            </Fade>
            <div className='flex justify-center'>
                <div className='w-[450px] pt-20 pr-[20px]'>
                    <Fade left cascade>
                    <div>
                        <img className='w-[450px] h-[270px] rounded-[15px]' src={props.data.imageUrls[0].url} alt=''/>
                        <div className='pt-4 flex justify-between items-center'>
                            <div className=''>
                                <h1 className='text-xl font-normal text-primary'>{props.data.name}</h1>
                                <p className='text-[15px] font-light text-gray'>{props.data.city},{props.data.country}</p>
                            </div>
                            <p className='text-base font-normal text-gray'> <span className='font-medium text-primary'>$280 USD</span> per <span className='font-medium text-primary'> 1 nights </span></p>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className='h-[447px] border-[1px] mx-[50px] border-gray mt-[50px]'></div>
                <Fade right cascade>
                <div className='w-1/2 pt-20 pl-[20px]'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstname">First Name</label>
                        <input placeholder='Insert Firstname' className='w-80 h-[45px] bg-input mt-2 text-black py-3 px-2 rounded-[4px]'/>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="firstname">Last Name</label>
                        <input placeholder='Last Name' className='w-80 h-[45px] bg-input mt-2 text-black py-3 px-2 rounded-[4px]'/>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="firstname">Email Address</label>
                        <input placeholder='Email Address' className='w-80 h-[45px] bg-input mt-2 text-black py-3 px-2 rounded-[4px]'/>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="firstname">Phone Number</label>
                        <input placeholder='Phone Number' className='w-80 h-[45px] bg-input mt-2 text-black py-3 px-2 rounded-[4px]'/>
                    </div>
                </div>
                </Fade>
            </div>
            <Button className="bg-secondary text-white w-[300px] h-[50px] font-medium text-[18px] leading-8 mt-7 rounded drop-shadow-3xl" onClick={()=>sendIsFinish("BookingPage1Finish")}>Continue to Book</Button>
            <Button className="bg-gray text-white w-[300px] h-[50px] font-medium text-[18px] leading-8 mt-5 mb-14 rounded drop-shadow-3xl" onClick={()=>navigate("/")}>Cancel</Button>
        </div>
    );
}

export default BookingInformation;
