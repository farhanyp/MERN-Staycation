import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const Star = ({value, width, height, spacing}) => {
    const isDesktop = useMediaQuery("(min-width: 1444px)");
    const desimal =  Number(value) % 1
    const starPlaceholder = []
    const star = []
    let leftPositionPlaceholder = 0
    let leftPositionStar = 0

    for(let i= 0; i <5; i++){
        starPlaceholder.push(
            <div key={i} className={`star placeholder w-[${width}px] h-[${height}px] absolute left-[${leftPositionPlaceholder}px] bg-gray`}></div>
        )
        leftPositionPlaceholder = leftPositionPlaceholder + spacing
    }

    for(let i= 0; i < value-desimal; i++){
        star.push(
            <div key={i}  className={`star w-[${width}px] h-[${height}px] absolute left-[${leftPositionStar}px] bg-star`}></div>
        )
        leftPositionStar = leftPositionStar + spacing
    }

    if( desimal > 0 && desimal <= 5){
        star.push(
            <div key={"Decimal"} style={{ width: desimal * width - 5 }} className={`star h-[${height}px] absolute left-[${leftPositionStar}px] bg-star`}></div>
        )
    }

    return (
        <>
        {
            isDesktop ? (
                <div className='inline-flex relative w-full h-[35px]'>
            {starPlaceholder}
            {star}
            {/* <div className='star placeholder w-[45px] h-[45px] absolute left-[0px] bg-gray'></div>
            <div className='star placeholder w-[45px] h-[45px] absolute left-[45px] bg-gray'></div>
            <div className='star placeholder w-[45px] h-[45px] absolute left-[90px] bg-gray'></div>
            <div className='star placeholder w-[45px] h-[45px] absolute left-[135px] bg-gray'></div>
            <div className='star placeholder w-[45px] h-[45px] absolute left-[180px] bg-gray'></div> */}

            {/* <div className='star w-[45px] h-[45px] absolute left-[0px] bg-primary'></div>
            <div className='star w-[45px] h-[45px] absolute left-[45px] bg-primary'></div>
            <div className='star w-[45px] h-[45px] absolute left-[90px] bg-primary'></div>
            <div className='star w-[45px] h-[45px] absolute left-[135px] bg-primary'></div>
            <div className='star w-[24.3px] h-[45px] absolute left-[180px] bg-primary'></div> */}
        </div>
            ) : (
                <div className='inline-flex relative w-full ml-[28%] h-[35px]'>
            {starPlaceholder}
            {star}
            {/* <div className='star placeholder w-[45px] h-[45px] absolute left-[0px] bg-gray'></div>
            <div className='star placeholder w-[45px] h-[45px] absolute left-[45px] bg-gray'></div>
            <div className='star placeholder w-[45px] h-[45px] absolute left-[90px] bg-gray'></div>
            <div className='star placeholder w-[45px] h-[45px] absolute left-[135px] bg-gray'></div>
            <div className='star placeholder w-[45px] h-[45px] absolute left-[180px] bg-gray'></div> */}

            {/* <div className='star w-[45px] h-[45px] absolute left-[0px] bg-primary'></div>
            <div className='star w-[45px] h-[45px] absolute left-[45px] bg-primary'></div>
            <div className='star w-[45px] h-[45px] absolute left-[90px] bg-primary'></div>
            <div className='star w-[45px] h-[45px] absolute left-[135px] bg-primary'></div>
            <div className='star w-[24.3px] h-[45px] absolute left-[180px] bg-primary'></div> */}
        </div>
            )
        }
        </>
        
        
    );
}

export default Star;
