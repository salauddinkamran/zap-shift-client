import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { LuArrowUpRight } from "react-icons/lu";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={3000} className="mt-10 mb-20">
      <div className="relative">
        <img src={bannerImg1} />
        <div className="absolute left-5 bottom-5 flex items-center gap-5">
          <div>
            <button className="bg-primary py-3 px-7 text-lg font-bold rounded-full cursor-pointer">
              Track Your Parcel
            </button>
            <button className="bg-secondary p-3 rounded-full text-primary text-lg font-bold cursor-pointer">
              <LuArrowUpRight />
            </button>
          </div>
          <button className="py-3 px-7 text-secondary border border-gray-300 rounded-2xl text-lg font-bold cursor-pointer">Be A Rider</button>
        </div>
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
