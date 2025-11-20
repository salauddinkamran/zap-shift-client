import React from "react";
import serviceImg from "../../../assets/service.png";

const Services = () => {
  return (
    <div className="bg-secondary text-white py-20 px-5 md:px-20 rounded-2xl">
      <div className="text-center md:w-1/2 mx-auto mb-10">
        <h3 className="text-3xl font-bold">Our Services</h3>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-5 text-secondary flex flex-col justify-center items-center rounded-2xl hover:bg-primary hover:text-secondary duration-300">
          <div className="bg-gradient-to-b from-[#EEEDFC] to-[#EEEDFC/10] h-20 w-20 flex justify-center items-center rounded-full">
            <img src={serviceImg} alt="" />
          </div>
          <h3 className="text-center text-2xl font-semibold my-3">Express & Standard Delivery</h3>
          <p>
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-white p-5 text-secondary flex flex-col justify-center items-center rounded-2xl hover:bg-primary hover:text-secondary duration-300">
          <div className="bg-gradient-to-b from-[#EEEDFC] to-[#EEEDFC/10] h-20 w-20 flex justify-center items-center rounded-full">
            <img src={serviceImg} alt="" />
          </div>
          <h3 className="text-center text-2xl font-semibold my-3">Nationwide Delivery</h3>
          <p>
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-white p-5 text-secondary flex flex-col justify-center items-center rounded-2xl hover:bg-primary hover:text-secondary duration-300">
          <div className="bg-gradient-to-b from-[#EEEDFC] to-[#EEEDFC/10] h-20 w-20 flex justify-center items-center rounded-full">
            <img src={serviceImg} alt="" />
          </div>
          <h3 className="text-center text-2xl font-semibold my-3">Fulfillment Solution</h3>
          <p>
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-white p-5 text-secondary flex flex-col justify-center items-center rounded-2xl hover:bg-primary hover:text-secondary duration-300">
          <div className="bg-gradient-to-b from-[#EEEDFC] to-[#EEEDFC/10] h-20 w-20 flex justify-center items-center rounded-full">
            <img src={serviceImg} alt="" />
          </div>
          <h3 className="text-center text-2xl font-semibold my-3">Cash on Home Delivery</h3>
          <p>
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-white p-5 text-secondary flex flex-col justify-center items-center rounded-2xl hover:bg-primary hover:text-secondary duration-300">
          <div className="bg-gradient-to-b from-[#EEEDFC] to-[#EEEDFC/10] h-20 w-20 flex justify-center items-center rounded-full">
            <img src={serviceImg} alt="" />
          </div>
          <h3 className="text-center text-2xl font-semibold my-3">Corporate Service / Contract In Logistics</h3>
          <p>
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-white p-5 text-secondary flex flex-col justify-center items-center rounded-2xl hover:bg-primary hover:text-secondary duration-300">
          <div className="bg-gradient-to-b from-[#EEEDFC] to-[#EEEDFC/10] h-20 w-20 flex justify-center items-center rounded-full">
            <img src={serviceImg} alt="" />
          </div>
          <h3 className="text-center text-2xl font-semibold my-3">Parcel Return</h3>
          <p>
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
