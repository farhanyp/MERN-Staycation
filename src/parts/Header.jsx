import React, { useState }  from "react";
import Fade from 'react-reveal/Fade';
import Nav from "../elements/Nav";
import useMediaQuery from "../hooks/useMediaQuery";

const Header = (props) => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Fade bottom cascade>
      {
        isDesktop ? 
        (
          <header className="border-slate-100 border-b-[1px] border-gray py-4 text-center">
            <div className="container flex items-center justify-between">
              <a
                href="/"
                className="text-[26px] font-medium leading-[39px] text-secondary"
              >
                Stay<span className="text-primary">cation.</span>
              </a>
              <div className="font-medium text-primary">
                <Nav
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          </header>
        ) : (
          <header className="border-slate-100 border-b-[1px] border-gray py-4 text-center">
            <div className="px-6 flex items-center justify-between">
              <a
                href="/"
                className="text-[26px] font-medium leading-[39px] text-secondary"
              >
                Stay<span className="text-primary">cation.</span>
              </a>
              <div className="font-medium text-primary">
                <Nav
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          </header>
        )
      }
    
    </Fade>
  );
};

export default Header;
