import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon_Img from "../../../assets/image/brands/amazon.png";
import amazon_vector_Img from "../../../assets/image/brands/amazon_vector.png";
import casio_Img from "../../../assets/image/brands/casio.png";
import moonsterImg from "../../../assets/image/brands/moonstar.png";
import randstad_Img from "../../../assets/image/brands/randstad.png";
import star_Img from "../../../assets/image/brands/star.png";
import star_people_Img from "../../../assets/image/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogo = [
  amazon_Img,
  amazon_vector_Img,
  casio_Img,
  moonsterImg,
  randstad_Img,
  star_Img,
  star_people_Img,
];
const Brands = () => {
  return (
    <div className="my-28">
      <h3 className="text-2xl font-bold text-secondary text-center">We've helped thousands of sales teams</h3>
    <Swiper
      className="mt-10"
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {brandLogo.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>

  );
};

export default Brands;
