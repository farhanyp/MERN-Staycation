import React from 'react';
import Button from '../../elements/Button';
import { Fade } from 'react-reveal';
import BCA from '../../assets/img/BCA.png'
import BRI from '../../assets/img/BRI.png'
import useMediaQuery from "../../hooks/useMediaQuery";

const Payment = (props) => {
    const sendIsFinish = (value) => {
        props.isBookingFinish(value)
    }
    const isDesktop = useMediaQuery("(min-width: 1444px)");


    return (
        <>
        {
            isDesktop ? (
                <div className='w-full flex flex-col justify-center items-center'>
            <Fade bottom cascade>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold text-primary'>Payment</h1>
                <h2 className='text-lg font-light text-gray'>Kindly follow the instructions below</h2>
            </div>
            </Fade>
            <div className='flex justify-center'>
                <div className='w-[450px] pt-20 pr-[20px]'>
                    <Fade left cascade>
                    <div>
                        <div className='text-base font-normal'>
                            <p>Transfer Pembayaran</p>
                            <p className='pt-[10px]'>Tax: <span className='font-medium'>10%</span></p>
                            <p className='pt-[10px]'>Sub total: <span className='font-medium'>$280 USD</span></p>
                            <p className='pt-[10px]'>Total: <span className='font-medium'>$300 USD</span></p>
                        </div>
                        <div className='flex pt-[26px]'>
                            <img className='w-[60px] h-9 mr-6' src={BCA} alt='' />
                            <div className='text-base font-normal'>
                                <p>Bank Central Asia</p>
                                <p className='pt-[10px]'>1236 9876</p>
                                <p className='pt-[10px]'>Farhan Yp</p>
                            </div>
                        </div>
                        <div className='flex pt-[26px]'>
                            <img className='w-[60px] h-9 mr-6' src={BRI} alt='' />
                            <div className='text-base font-normal'>
                                <p>Bank Rakyat Indonesia</p>
                                <p className='pt-[10px]'>1236 9876</p>
                                <p className='pt-[10px]'>Farhan Yp</p>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className='h-[447px] border-[1px] mx-[50px] border-gray mt-[50px]'></div>
                <Fade right cascade>
                <div className='w-1/2 pt-20 pl-[20px]'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstname">Upload Bukti Transfer</label>
                        <input required type='file' placeholder='Insert Firstname' className='w-80 h-[45px] bg-input mt-2 text-black py-3 px-2 rounded-[4px]'/>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="firstname">Asal Bank</label>
                        <input required placeholder='Asal Bank' className='w-80 h-[45px] bg-input mt-2 text-black py-3 px-2 rounded-[4px]'/>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="firstname">Nama Pengirim</label>
                        <input required placeholder='Nama Pengirim' className='w-80 h-[45px] bg-input mt-2 text-black py-3 px-2 rounded-[4px]'/>
                    </div>
                </div>
                </Fade>
            </div>
            <Button className="bg-secondary text-white w-[300px] h-[50px] font-medium text-[18px] leading-8 mt-7 rounded drop-shadow-3xl" onClick={()=>sendIsFinish("BookingPage2Finish")}>Continue to Book</Button>
            <Button className="bg-gray text-white w-[300px] h-[50px] font-medium text-[18px] leading-8 mt-5 mb-14 rounded drop-shadow-3xl">Cancel</Button>
        </div>
            ) : (
                <div className='w-full flex flex-col justify-center items-center'>
            <Fade bottom cascade>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-primary'>Payment</h1>
                <h2 className='text-base font-light text-gray text-center'>Kindly follow the instructions below</h2>
            </div>
            </Fade>
            <div className='flex flex-col justify-center'>
                
                <Fade right cascade>
                <div className='w-full pt-10'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstname">Upload Bukti Transfer</label>
                        <input required type='file' placeholder='Insert Firstname' className='w-80 h-[45px] bg-input mt-2 text-black py-3 px-2 rounded-[4px]'/>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="firstname">Asal Bank</label>
                        <input required placeholder='Asal Bank' className='w-80 h-[45px] bg-input mt-2 text-black py-3 px-2 rounded-[4px]'/>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="firstname">Nama Pengirim</label>
                        <input required placeholder='Nama Pengirim' className='w-80 h-[45px] bg-input mt-2 text-black py-3 px-2 rounded-[4px]'/>
                    </div>
                </div>
                </Fade>
                <div className='h-[1px] border-[2px] mx-[50px] border-gray mt-[50px]'></div>
                <div className='pt-10 pr-[20px]'>
                    <Fade left cascade>
                    <div>
                        <div className='text-base font-normal'>
                            <p>Transfer Pembayaran</p>
                            <p className='pt-[10px]'>Tax: <span className='font-medium'>10%</span></p>
                            <p className='pt-[10px]'>Sub total: <span className='font-medium'>$280 USD</span></p>
                            <p className='pt-[10px]'>Total: <span className='font-medium'>$300 USD</span></p>
                        </div>
                        <div className='flex pt-[26px]'>
                            <img className='w-[60px] h-9 mr-6' src={BCA} alt='' />
                            <div className='text-base font-normal'>
                                <p>Bank Central Asia</p>
                                <p className='pt-[10px]'>1236 9876</p>
                                <p className='pt-[10px]'>Farhan Yp</p>
                            </div>
                        </div>
                        <div className='flex pt-[26px]'>
                            <img className='w-[60px] h-9 mr-6' src={BRI} alt='' />
                            <div className='text-base font-normal'>
                                <p>Bank Rakyat Indonesia</p>
                                <p className='pt-[10px]'>1236 9876</p>
                                <p className='pt-[10px]'>Farhan Yp</p>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
            <Button className="bg-secondary text-white w-[300px] h-[50px] font-medium text-[18px] leading-8 mt-7 rounded drop-shadow-3xl" onClick={()=>sendIsFinish("BookingPage2Finish")}>Continue to Book</Button>
            <Button className="bg-gray text-white w-[300px] h-[50px] font-medium text-[18px] leading-8 mt-5 mb-14 rounded drop-shadow-3xl">Cancel</Button>
        </div>
            )
        }
        </>
        
    );
}

export default Payment;
