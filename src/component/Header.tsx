import { useState, useEffect } from "react";

import LogoWhite from "../assets/img/header/logo-white.png";
import { LuCircleEqual } from "react-icons/lu";
import Socials from "./Socials";
import Nav from "./Nav";

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsHeaderActive(true) : setIsHeaderActive(false);
    });
  }, []);

  const handleRotateButton = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <div
        className={` ${
          isHeaderActive ? "bg-black/80 py-6" : "bg-none py-16"
        }  max-w-[1800px] mx-auto  transition-all duration-500`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between relative">
            <button
              onClick={handleRotateButton}
              className={` ${
                isButtonClicked ? "rotate-[360deg]" : "rotate-[0deg]"
              } text-4xl  transition duration-500`}
            >
              <LuCircleEqual className="text-white hover:text-accent" />
            </button>
            <div
              className={` ${
                isButtonClicked ? "max-h-[380px]" : "max-h-[0px]"
              } overflow-hidden absolute z-40 left-0 top-full transition-all duration-500 `}
            >
              <Nav />
            </div>

            <a className="ml-48" href="#">
              <img className="w-[90px] lg:w-auto" src={LogoWhite} alt="" />
            </a>
            <div className="hidden md:block">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
