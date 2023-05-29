import React, {useState} from 'react';
import InputNumber from '../../elements/Form/InputNumber';
import Fade from 'react-reveal/Fade';

const DetailBody = (props) => {

    return (
        <Fade bottom>
        <section className='pt-[50px]'>
            <div className='container flex w-full g'>
                <div className='w-[600px] pr-[50px]'>
                    <h2 className='text-xl font-medium text-primary'>About the place</h2>
                    <div className='gap-[10px]'>
                        <div className='pt-[10px] text-base font-light text-gray' dangerouslySetInnerHTML={{ __html: props.data.description }}></div>
                    </div>
                    <div className='w-[590px] h-[162px] grid grid-cols-4'>
                        {
                        props.data.features.map((item,index)=>{
                            return(
                            <div key={index} className='col-span-1 pt-5 h-[73px]'>
                                <img className='w-[38px] h-[38px]' src={item.imageUrl} alt=''/>
                                <p className='pt-2'>{item.qty} {item.name}</p>
                            </div>
                            )
                        })
                        }
                    </div>
                </div>
                <div className='w-[485px] h-fit pl-[83px] py-[61px] border-[1px] border-gray rounded-[15px]'>
                    <h2 className='text-xl font-medium text-primary'>Start Booking</h2>
                    <h1 className='text-4xl text-gray font-light pt-[14px]'>$ <span className='font-medium'>{props.data.price}</span> per {props.data.unit}</h1>
                    <InputNumber value={props.value} price={props.data.price}/>
                </div>
            </div>
        </section>
        </Fade>
    );
}

export default DetailBody;
