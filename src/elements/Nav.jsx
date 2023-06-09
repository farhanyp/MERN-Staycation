import React, {useState} from "react";
import { TiThMenu } from "@react-icons/all-files/ti/TiThMenu";
import { AiOutlineCloseSquare } from "@react-icons/all-files/ai/AiOutlineCloseSquare";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase()
  
    return (
      <AnchorLink
      className="hover:text-secondary hover:underline"
      href={`#${lowerCasePage}`}
      onClick={()=> setSelectedPage(lowerCasePage)}>
        {page}
      </AnchorLink>
    )
  }

  const Nav = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
        <>
                {
                    isDesktop ? 
                    (
                        <div className="flex justify-between gap-7">
                            <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />

                            <Link
                            page="MostPicked"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />

                            <Link
                            page="Categories"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />

                            <Link
                            page="Testimonials"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        </div>
                    ) : (
                        <button
                          className="rounded-full bg-red p-2"
                          onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                          <TiThMenu className="w-8 h-8 "/>
                        </button>
                      )}

                      {/* MOBILE MENU POPUP */}
                        {!isDesktop && isMenuToggled && (
                          // <div className="relative">
                        <div className="static right-0 bottom-0 top-0 h-screen bg-primary w-[300px] ">
                            {/* CLOSE ICON */}
                            <div className="flex justify-start pl-1">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <AiOutlineCloseSquare className="w-11 h-11 text-white"/>
                            </button>
                            </div>

                            {/* MENU ITEMS */}
                            <div className="flex flex-col gap-10 ml-[10%] text-2xl text-white absolute p-12">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="MostPicked"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Categories"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            </div>
                        </div>
                        // </div>
                        )}

        </>
  )
}

export default Nav