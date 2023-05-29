import React from 'react';
import Fade from 'react-reveal/Fade';

const DetailImage = (props) => {
    return (
        <section className='pt-[50px]'>
            <div className='container'>
            <Fade bottom cascade>
                <div className='grid grid-cols-2 gap-[10px] items-center justify-end'>
                    {
                    props.data.imageUrls.map((image,index)=>{
                        return <div key={index} className={`${(index === 0) ? `row-span-2` : `col-span-1`}`}><img className={` ${(index !== 0) ? `` : `h-[580px]`} rounded-[15px]`} src={image.url} alt="" /></div>
                    })
                    }
                </div>
            </Fade>
            </div>
        </section>
    );
}

export default DetailImage;
