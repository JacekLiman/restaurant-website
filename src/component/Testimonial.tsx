import { testimonialData } from "../data";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData;
  return (
    <section className="bg-white bg-testimonial bg-no-repeat bg-cover py-20 -mt-7">
      <div className="mx-auto container">
        <div>
          <div className="text-center">
            <h2 className="h2 text-white capitalize">{title}</h2>
            <p className="text-white mt-2 mb-4 capitalize">{subtitle}</p>
            <div><img className="mx-auto" src={modelImg} alt="" /></div>
          </div>
          <div className="mt-16">
            <TestimonialSlider slider={slider}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
