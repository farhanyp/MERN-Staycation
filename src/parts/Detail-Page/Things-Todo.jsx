import React from 'react';
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom';

const ThingsTodo = ({data}) => {
    const navigate = useNavigate()
    return(
        <div className='pt-[70px]' >
            <div className='container'>
                <h1 className='text-2xl font-medium text-primary'>Things to do</h1>
                <div className='grid grid-cols-4 gap-6'>
                    {
                        data.map((item, index2) => {
                            return(
                                <Fade bottom delay={300 * index2} key={index2}>
                                <div className='col-span-1 pt-3' onClick={()=> navigate(`/detail-page/${item._id}`)}>
                                    <div className='w-[267px] h-fit cursor-pointer' onClick={() => console.log("hai")}>
                                        {
                                            (item.isPopular) ? 
                                            <div className='flex justify-end'>
                                                <h4 className='w-[180px] h-10 flex items-center justify-center absolute z-30 bg-price text-white text-base font-normal rounded-tr-xl rounded-bl-xl'>Popular Choice</h4>
                                            </div> : ""
                                        }
                                        <img src={item.imageUrl} alt={item.name} className='rounded-xl'/>
                                        <div className='pt-4'>
                                            <h1 className='text-primary text-[20px] leading-[30px] font-normal'>{item.name}</h1>
                                            <p className='text-gray font-light text-base'>{item.city}, {item.country}</p>
                                        </div>
                                    </div>
                                </div>
                                </Fade>
                            )
                        })
                    }
                </div>
            </div>
        </div>    
    )
}

export default ThingsTodo;
