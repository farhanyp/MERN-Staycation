import React from "react";
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <Fade bottom cascade>
    <header className="border-slate-100 border-b-[1px] border-gray py-4 text-center">
      <div className="container flex items-center justify-between">
        <a
          href="/"
          className="text-[26px] font-medium leading-[39px] text-secondary"
        >
          Stay<span className="text-primary">cation.</span>
        </a>
        <div className="font-medium text-primary">
          <ul className="flex justify-between">
            <li className="pl-7 sm:hidden xl:block">
              <a href="/" className="hover:text-secondary hover:underline">
                Home
              </a>
            </li>
            <li className="pl-7 sm:hidden xl:block">
              <a href="/" className="hover:text-secondary hover:underline">
                Browse by
              </a>
            </li>
            <li className="pl-7 sm:hidden xl:block">
              <a href="/" className="hover:text-secondary hover:underline">
                Stories
              </a>
            </li>
            <li className="pl-7 sm:hidden xl:block">
              <a href="/" className="hover:text-secondary hover:underline">
                Agents
              </a>
            </li>
            <li className="pl-7 sm:block xl:hidden">
              <div>
                Humberger
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </Fade>
  );
};

export default Header;
