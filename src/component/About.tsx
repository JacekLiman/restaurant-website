import { useState, useEffect } from "react";
import { aboutData } from "../data";

const About = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300 && window.scrollY < 1100) {
        setStartAnimation(true);
      } else {
        setStartAnimation(false);
      }
    });
  }, []);

  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section className="bg-white">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[620px]">
          <div className="flex flex-col justify-center items-center md:items-start">
            <p className="uppercase text-accent text-base font-semibold mb-2">
              {pretitle}
            </p>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-8 max-w-[500px] text-center md:text-left">
              {subtitle}
            </p>
            <button className="btn  mx-auto md:mx-0 capitalize">
              {btnText}
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img
              className={`${
                startAnimation
                  ? "translate-x-0 rotate-[360deg]"
                  : "translate-x-[1000px] rotate-[0deg]"
              } transition-all duration-[2000ms]`}
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
