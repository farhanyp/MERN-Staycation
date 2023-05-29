import React from 'react';
import Fade from 'react-reveal/Fade';

const HeaderBooking = (props) => {
    return (
        <Fade bottom cascade>
            <header className="border-slate-100 border-b-[1px] border-gray py-4 text-center">
                <div className="container flex items-center justify-center">
                    <a href="/" className="text-[26px] font-medium leading-[39px] text-secondary">Stay<span className="text-primary">cation.</span></a>
                </div>
            </header>
        </Fade>
    );
}

export default HeaderBooking;
