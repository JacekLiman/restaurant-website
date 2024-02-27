import { heroData } from "../data";

const Hero = () => {
  const { pretitle, title, subtitle, btnText } = heroData;

  return (
    <section className="h-screen bg-hero bg-no-repeat bg-cover bg-right lg:bg-center">
      <div className="flex justify-center items-center h-full">
        <div className="text-center mt-20">
          <h4 className="h4">{pretitle}</h4>
          <h1 className="h1 mt-5">{title}</h1>
          <p className="max-w-[600px] my-8 text-white">{subtitle}</p>
          <button className="btn mx-auto">{btnText}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
