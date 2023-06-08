import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import img from '../assets/img/Hero.png'
import Button from '../elements/Button';
import IconTravel from '../assets/img/ic_traveler 2.png'
import IconTreasure from '../assets/img/ic_treasure 1.png'
import IconCities from '../assets/img/ic_citiies 1.png'
import { numberFormat } from '../utils/LandingPage';
import { toMostPicked } from '../utils/LandingPage';
import Fade from 'react-reveal/Fade';

const Hero = (props) => {

    return (
        <Fade bottom cascade>
        <section className='pt-[63px]'>
            <div className='container w-full flex '>
                <div className='w-1/2'>
                    <h1 className='w-[422px] text-primary text-[42px] leading-[63px] font-bold mb-3'>Forget Busy Work, Start Next Vacation
                    </h1>
                    <p className='text-gray'>We provide what you need to enjoy your <br/>holiday with family. Time to make another<br/>memorable moments. </p>
                    <Button className="bg-secondary text-white px-10 py-3 font-medium text-[18px] leading-8 mt-7 rounded drop-shadow-3xl" onClick= {() => toMostPicked(props.mostPickedSection.current.offsetTop)}>Show Me Now</Button>
                    <div className='flex pt-16'>
                        <div >
                            <img src={IconTravel} alt="Travel" />
                            <p className='font-medium text-primary text-base pt-[10px]'>{props.data.Travelers} <span className='text-gray'>Travelers </span></p>
                        </div>
                        <div className='pl-[50px]'>
                            <img src={IconTreasure} alt="Travel" />
                            <p className='font-medium text-primary text-base pt-[10px]'>{numberFormat(props.data.Treasure)} <span className='text-gray'>Treasure </span></p>
                        </div>
                        <div className='pl-[50px]'>
                            <img src={IconCities} alt="Travel" />
                            <p className='font-medium text-primary text-base pt-[10px]'>{numberFormat(props.data.City)} <span className='text-gray'>Cities </span></p>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 relative'>
                    <div className=' flex justify-end'>
                        <img src={img} alt="" className='rounded-tl-[100px] rounded-2xl w-[500px] h-[400px]'/>
                        <div className='text-third rounded-tl-[100px] w-[485px] h-[370px] border-2 absolute top-[60px] -right-[30px] -z-[1] rounded-2xl'>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        </Fade>
    );
}

export default Hero;
