import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../testimonialSlider.css";

import { Navigation, Autoplay } from "swiper/modules";

type TestimonialProps = {
  slider: {
    message: string;
    image: string;
    name: string;
    occupation: string;
  }[];
};

const TestimonialSlider = ({ slider }: TestimonialProps) => {
  return (
    <Swiper
      className="testimonialSlider"
      autoplay={true}
      navigation={true}
      modules={[Navigation, Autoplay]}
    >
      {slider.map((item, idx) => {
        const { message, image, name, occupation } = item;
        return (
          <SwiperSlide key={idx}>
            <div className="text-center text-white">
              <p className=" mx-auto max-w-[220px] sm:max-w-[500px] md:max-w-[600px]">
                {message}
              </p>
              <div className="mt-5 mb-4">
                <img className="mx-auto" src={image} alt="" />
              </div>
              <h3 className="pretitle">{name}</h3>
              <p>{occupation}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
