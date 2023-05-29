import React from 'react';
import { Fade } from 'react-reveal';
import Button from '../../elements/Button';
import { useNavigate } from 'react-router-dom';
import ilSuccess from '../../assets/img/il_Success 1.png'

const Completed = (props) => {
    const navigate = useNavigate()
    return (
        <Fade bottom cascade>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-primary'>Yeay! Completed</h1>
                </div>
                <img className='w-[475px] h-[305px]' src={ilSuccess} alt=''/>
                <p className='text-center text-lg text-gray pt-[55px]'>We will inform you via email later <br/> once the transaction has been accepted</p>
                <Button className="bg-secondary text-white w-[300px] h-[50px] font-medium text-[18px] leading-8 mt-10 mb-24 rounded drop-shadow-3xl" onClick={()=>navigate("/")}>Cancel</Button>
            </div>
        </Fade>
    );
}

export default Completed;
