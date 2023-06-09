import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import useMediaQuery from "../../hooks/useMediaQuery";

const DetailTitle = (props) => {
    const { id } = useParams();
    const isDesktop = useMediaQuery("(min-width: 1444px)");

    return (
        <>
        {
            isDesktop ? (
                <Fade bottom cascade>
                    <section className='pt-[50px] container'>
                        <div className='flex justify-start items-center'>
                            <div className='w-[223px] flex justify-between text-lg'>
                                <Link to="/" className='font-light text-gray'>Home</Link>
                                <p className='font-medium text-primary'>/</p>
                                <Link to={`/detail-page/${id}`} className='font-medium text-primary'>House Details</Link>
                            </div>
                            <div className='mx-[20%] flex flex-col justify-center items-center'>
                                <h1 className='text-4xl font-bold text-primary'>{props.data.name}</h1>
                                <h2 className='text-lg text-gray pt-1'>{props.data.city}, {props.data.country}</h2>
                            </div>
                        </div>
                    </section>
                </Fade>
            ) : (
                <Fade bottom cascade>
                    <section className='pt-9 px-6'>
                        <div className='flex flex-col justify-start items-start'>
                            <div className='w-[223px] flex justify-start text-lg'>
                                <Link to="/" className='font-light text-gray text-sm pr-2'>Home</Link>
                                <p className='font-medium text-primary text-sm pr-2'>/</p>
                                <Link to={`/detail-page/${id}`} className='font-medium text-primary text-sm'>House Details</Link>
                            </div>
                        </div>
                            <div className='mx-[20%] flex flex-col justify-center items-center pt-7'>
                                <h1 className='text-2xl font-bold text-primary'>{props.data.name}</h1>
                                <h2 className='text-lg text-gray pt-1'>{props.data.city}, {props.data.country}</h2>
                            </div>
                    </section>
                </Fade>
            )
        }
        </>
    );
}

export default DetailTitle;
