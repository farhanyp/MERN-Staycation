import React from 'react';
import Star from '../elements/Star';
import Button from '../elements/Button';
import Fade from 'react-reveal/Fade';

const Testimonials = (props) => {
    return (
        <section className='pt-16'>
            <div className='container w-full flex'>
                <div className='relative mr-[60px]'>
                <Fade left cascade>
                    <div className='  flex justify-center'>
                        <img src={props.data.imageUrl} alt="" className=' rounded-br-[100px] rounded-2xl pl-8'/>
                        <div className='text-third rounded-br-[100px] w-[374px] h-[458px] border-2 absolute -top-[30px] left-0 -z-[1] rounded-2xl'>
                        </div> 
                    </div>
                </Fade>
                </div>
                <div className='w-1/2 flex justify-start items-center'>
                <Fade right cascade>
                    <div className='w-full'>
                        <h1 className='text-2xl text-primary font-medium'>{props.data.name}</h1>
                        <div className='pt-[40px] w-[600px]'>
                            <Star value={props.data.rate} width={45} height={45} spacing={45}/>
                            <h4 className='text-[32px] text-primary font-normal pt-2'>{props.data.content}</h4>
                            <p className='text-gray text-lg font-normal pt-2'>{props.data.familyName}, {props.data.familyOccupation}</p>
                            <Button className="bg-secondary font-medium text-white px-9 py-3 text-lg mt-[40px] rounded drop-shadow-3xl"> Read Their Story</Button>
                        </div>
                    </div>
                </Fade>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
