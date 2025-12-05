import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/image/banner/banner1.png";
import bannerImg2 from "../../../assets/image/banner/banner2.png";
import bannerImg3 from "../../../assets/image/banner/banner3.png";
import { Carousel } from "react-responsive-carousel";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <Carousel
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      infiniteLoop={true}
      className="my-10"
    >
      <div>
        <img src={bannerImg1} />
      </div>
      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
