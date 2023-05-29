import { differenceInDays } from 'date-fns';
import React, { useState, useEffect  } from 'react';
import { DateRangePicker } from 'react-date-range';
import Fade from 'react-reveal/Fade';
import Button from '../Button';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './dateStyle.css'

const InputCalendar = (props) => {

    const [start, setStartDate] = useState(new Date())
    const [end, setEndDate] = useState(new Date())
    
    const selectionRange = {
        startDate: start,
        endDate: end,
        key: 'selection',
      }

    const sendDate=(value)=>{
        var months = ["Januari","Februari","Maret","April","Mei","Juni","July","Agustus","September","Oktober","November","Desember",]
        // Get Start Date
        const startMonth = months[start.getMonth()]
        const starDay = start.getDate()

        // Get End Date
        const endMonth = months[end.getUTCMonth()]
        const endDay = end.getDate()

        value ? props.getInputCalendar(`${starDay} ${startMonth.substring(0,3)} - ${endDay} ${endMonth.substring(0,3)}`) : props.getInputCalendar("Invalid input date")

    }

    const validationNights = () => {
        const betweenDays = differenceInDays(end, start)
        if(props.nights === betweenDays){
            sendDate(true)
        }else{
            sendDate(false)
        }
        
    }
    
    const handleSelect = (ranges) => {
        setStartDate(new Date(ranges.selection.startDate.getTime()))
        setEndDate(new Date(ranges.selection.endDate.getTime()))
    }

    return (
        <Fade top cascade>
        <div className='flex flex-col w-full h-fit'>
            <DateRangePicker className='rdrDefinedRangesWrapper' showDateDisplay={false} showPreview={false} ranges={[selectionRange]} onChange={handleSelect}/>
            <div className='pb-5'>
                <Button className="bg-gray text-white w-28 h-[35px] text-sm leading-8 mt-7 rounded drop-shadow-3xl" onClick={()=>validationNights(props.night)}>Save Date</Button>
            </div>
        </div>
        </Fade>
    );
}

export default InputCalendar;
