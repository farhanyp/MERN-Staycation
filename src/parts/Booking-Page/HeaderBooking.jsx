import React from 'react';
import Fade from 'react-reveal/Fade';
import useMediaQuery from "../../hooks/useMediaQuery";

const HeaderBooking = (props) => {
    const isDesktop = useMediaQuery("(min-width: 1444px)");


    return (
        <>
        {
            isDesktop ? (
                <Fade bottom cascade>
                    <header className="border-slate-100 border-b-[1px] border-gray py-4 text-center">
                        <div className="container flex items-center justify-center">
                            <a href="/" className="text-[26px] font-medium leading-[39px] text-secondary">Stay<span className="text-primary">cation.</span></a>
                        </div>
                    </header>
                </Fade>
            ) : (
                <Fade bottom cascade>
                    <header className="border-slate-100 border-b-[1px] border-gray py-4 text-center">
                        <div className="px-6 flex items-center justify-center">
                            <a href="/" className="text-[26px] font-medium leading-[39px] text-secondary">Stay<span className="text-primary">cation.</span></a>
                        </div>
                    </header>
                </Fade>
            )
        }
        </>
        
    );
}

export default HeaderBooking;
