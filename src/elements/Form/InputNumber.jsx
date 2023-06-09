import React, {useState, useRef, useEffect} from 'react';
import iconCalendar from '../../assets/img/ic-calender 1.png'
import InputCalendar from './InputCalendar';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from "../../hooks/useMediaQuery";

const InputNumber = (props) => {
    const refData = useRef(null)
    const [value, setValue] = useState(props.value)
    const [modal, setModal] = useState(false)
    const [price, setPrice] = useState(0)
    const [valueCalendar, setvalueCalendar] = useState("Choose Date for Vacation")
    const navigate = useNavigate()
    const isDesktop = useMediaQuery("(min-width: 1444px)");


    const minus = (number) => {
        if(number !== 1){
            setValue(number-1)
        }
    }

    const plus = (number) => {
        setValue(number+1)
    }


    const checkModal = () =>{
        setModal(!modal)
    }

    const getInputCalendar = (date) =>{
        setvalueCalendar(date)
    }

    useEffect(() => {
            setPrice(props.price * value)
    }, [value]); 

    return (
        <>
        {
            isDesktop ? (
                <>
        <div className='pt-[14px]'>
            <p className='text-base font-normal pt-[14px] pb-2'>How long you will stay ?</p>
            <div className='flex justify-start items-center' ref={refData}>
                <button className='w-11 h-11 inline-flex justify-center items-center text-2xl font-bold text-white bg-minus rounded-[4px] cursor-pointer' onClick={() => minus(value)}>-</button>
                <input readOnly className='w-60 h-11 text-center bg-input' name='inputNumber' value={`${(value >1) ? `${value} per nights` :`${value} per night`}`}/>
                <button className='w-11 h-11 inline-flex justify-center items-center text-2xl font-bold text-white bg-plus rounded-[4px] cursor-pointer' onClick={() => plus(value)}>+</button> 
            </div>
        </div>
        

        <div className='pt-[14px]'>
            <p className='text-base font-normal pt-[14px] pb-2'>Pick a Date</p>
            <div className='flex justify-start items-center' ref={refData}>
                <button className='w-11 h-11 inline-flex justify-center items-center text-2xl font-bold text-white bg-primary rounded-[4px] cursor-pointer' onClick={checkModal}><img className='w-8 h-8' src={iconCalendar} alt=''/></button>
                <input readOnly className='w-[280px] h-11 text-center bg-input' name='inputNumber' value={valueCalendar}/>
            </div>
                {
                    modal && (
                        <InputCalendar nights={value} getInputCalendar={(value) => getInputCalendar(value)}/>
                    )
                }
                <div className='text-gray pt-[15px] text-base font-normal'>
                    <span >You will pay </span>
                    <span className='font-medium text-primary'>{`$ ${price} USD `}</span>
                    per
                    <span className='font-medium text-primary'>{`  ${value} nights`}</span>
                </div>
                <Button className="mt-[30px] bg-secondary text-white w-[320px] h-[50px] font-medium text-[18px] leading-8 rounded drop-shadow-3xl" onClick={() => navigate("/booking")} >Continue Book</Button>
        </div>
        </>
            ) : (
                <>
        <div className='pt-[14px]'>
            <p className='text-base font-normal pt-[14px] pb-2'>How long you will stay ?</p>
            <div className='flex justify-start items-center' ref={refData}>
                <button className='w-11 h-11 inline-flex justify-center items-center text-2xl font-bold text-white bg-minus rounded-[4px] cursor-pointer' onClick={() => minus(value)}>-</button>
                <input readOnly className='w-60 h-11 text-center bg-input' name='inputNumber' value={`${(value >1) ? `${value} per nights` :`${value} per night`}`}/>
                <button className='w-11 h-11 inline-flex justify-center items-center text-2xl font-bold text-white bg-plus rounded-[4px] cursor-pointer' onClick={() => plus(value)}>+</button> 
            </div>
        </div>
        

        <div className='pt-[14px]'>
            <p className='text-base font-normal pt-[14px] pb-2'>Pick a Date</p>
            <div className='flex justify-start items-center' ref={refData}>
                <button className='w-11 h-11 inline-flex justify-center items-center text-2xl font-bold text-white bg-primary rounded-[4px] cursor-pointer' onClick={checkModal}><img className='w-8 h-8' src={iconCalendar} alt=''/></button>
                <input readOnly className='w-[280px] h-11 text-center bg-input' name='inputNumber' value={valueCalendar}/>
            </div>
                {
                    modal && (
                        <InputCalendar nights={value} getInputCalendar={(value) => getInputCalendar(value)}/>
                    )
                }
                <div className='text-gray pt-[15px] text-base font-normal'>
                    <span >You will pay </span>
                    <span className='font-medium text-primary'>{`$ ${price} USD `}</span>
                    per
                    <span className='font-medium text-primary'>{`  ${value} nights`}</span>
                </div>
                <Button className="mt-[30px] bg-secondary text-white w-full h-[50px] font-medium text-[18px] leading-8 rounded drop-shadow-3xl" onClick={() => navigate("/booking")} >Continue Book</Button>
        </div>
        </>
            )
        }
        </>
        
    );
}


export default InputNumber;
