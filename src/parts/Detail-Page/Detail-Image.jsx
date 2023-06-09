import React from 'react';
import Fade from 'react-reveal/Fade';
import useMediaQuery from "../../hooks/useMediaQuery";

const DetailImage = (props) => {
    const isDesktop = useMediaQuery("(min-width: 1444px)");

    return (
        <>
        {
            isDesktop ? (
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
            ) : (
                <section className='pt-9'>
                    <div className='px-6'>
                        <Fade bottom cascade>
                            <div className='flex flex-col gap-[10px] items-center justify-end'>
                                {
                                props.data.imageUrls.map((image,index)=>{
                                    return <div key={index}><img className="rounded-[15px]" src={image.url} alt="" /></div>
                                })
                                }
                            </div>
                        </Fade>
                    </div>
                </section>
            )
        }
        </>
        
    );
}

export default DetailImage;
