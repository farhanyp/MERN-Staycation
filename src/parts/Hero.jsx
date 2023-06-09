import img from '../assets/img/Hero.png'
import Button from '../elements/Button';
import IconTravel from '../assets/img/ic_traveler 2.png'
import IconTravelSM from '../assets/img/ic_traveler_sm.png'
import IconTreasure from '../assets/img/ic_treasure 1.png'
import IconTreasureSM from '../assets/img/ic_treasure_sm.png'
import IconCities from '../assets/img/ic_citiies 1.png'
import IconCitiesSM from '../assets/img/ic_citiies_sm.png'
import { numberFormat } from '../utils/LandingPage';
import { toMostPicked } from '../utils/LandingPage';
import Fade from 'react-reveal/Fade';
import useMediaQuery from "../hooks/useMediaQuery";

const Hero = (props) => {
    const isDesktop = useMediaQuery("(min-width: 1444px)");

    return (
        <Fade bottom cascade>
            {
                isDesktop ? 
                (
                    <section className='pt-[63px]' id='home'>
                        <div className='container w-full flex'>
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
                ) : (
                    <section className='pt-10 static' id='home'>
                        <div className='px-6 w-full flex flex-col justify-center items-center z-10'>
                            <div className='w-full'>
                                <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-primary font-bold mb-3 text-3xl text-center'>Forget Busy Work, <br/> Start Next Vacation</h1>
                                <p className='text-gray text-center text-base'>We provide what you need to enjoy your holiday with family. Time to make another memorable moments. </p>
                                <Button className="bg-secondary text-white px-5 py-2 font-medium text-base leading-8 mt-5 rounded drop-shadow-3xl" onClick= {() => toMostPicked(props.mostPickedSection.current.offsetTop)}>Show Me Now</Button>
                                </div>
                                <div className='flex pt-8 justify-evenly items-center gap-10'>
                                    <div className='flex flex-col w-9 justify-center items-center'>
                                        <img src={IconTravelSM} alt="Travel" className='w-7'/>
                                        <p className='font-medium text-primary text-sm pt-[10px]'>{props.data.Travelers} </p>
                                        <p className='text-gray'>Travelers</p>
                                    </div>
                                    <div className='flex flex-col w-9 justify-center items-center'>
                                        <img src={IconTreasureSM} alt="Travel" className='w-7'/>
                                        <p className='font-medium text-primary text-sm pt-[10px]'>{numberFormat(props.data.Treasure)} </p>
                                        <p className='text-gray'>Treasure</p>
                                    </div>
                                    <div className='flex flex-col w-9 justify-center items-center'>
                                        <img src={IconCitiesSM} alt="Travel" className='w-7'/>
                                        <p className='font-medium text-primary text-sm pt-[10px]'>{numberFormat(props.data.City)} </p>
                                        <p className='text-gray'>Cities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        
        </Fade>
    );
}

export default Hero;
