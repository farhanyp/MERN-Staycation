import React from 'react';
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom';

const MostPicked = (props) => {
    const navigate = useNavigate()
    return (
        <section id='MostPicked' className='pt-16' ref={props.mostPickedSection}> 
            <div className='container'>
                <div className='text-2xl font-medium text-primary pb-3'>
                    Most Picked
                    
                </div>
                <div className='grid grid-cols-3 gap-6 '>
                    {
                            props.data.map((item, index) => {
                                return(
                                    <Fade bottom delay={500 * index} key={index}>
                                    <div className={`${index === 0 ? "row-span-2" : "col-span-1"} w-[364px] relative`} 
                                    onClick={()=> navigate(`/detail-page/${item._id}`)}>
                                        <div className='overflow-hidden rounded-xl flex justify-end'>
                                            <span className='w-[180px] h-10 flex items-center justify-center absolute z-30 bg-price text-white text-base font-medium rounded-tr-xl rounded-bl-xl'>$ {item.price} per night</span>
                                            <div className='scale-110 hover:scale-100 transition-all ease-in delay-75 cursor-pointer pt-1' >
                                                <div className=' h-fit bg-gradient-to-t from-black flex'>
                                                <img src={item.imageUrl} alt={item.title}  className='-z-[1]'/>
                                                </div>
                                                <div className='absolute bottom-8 left-8'>
                                                <p className='text-lg text-white font-normal'>{item.title}</p>
                                                <p className='text-sm text-white font-light'>{item.city}, {item.country}</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </Fade>
                                )
                            })
                    }
                </div>

            </div>
        </section>
    );
}

export default MostPicked;
