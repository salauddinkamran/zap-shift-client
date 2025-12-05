import React from "react";
import iconImg from "../../../assets/image/service.png";

const Services = () => {
  return (
    <div className="bg-secondary py-10 px-5 md:p-20 rounded-2xl">
      <div className="text-center text-white mb-10">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white p-10 rounded-2xl hover:bg-primary duration-300">
          <div className="flex justify-center mb-5">
            <img src={iconImg} alt="" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-3">
            Express & Standard Delivery
          </h3>
          <p className="text-gray-600 text-center">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl hover:bg-primary duration-300">
          <div className="flex justify-center mb-5">
            <img src={iconImg} alt="" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-3">
            Nationwide Delivery
          </h3>
          <p className="text-gray-600 text-center">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl hover:bg-primary duration-300">
          <div className="flex justify-center mb-5">
            <img src={iconImg} alt="" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-3">
            Fulfillment Solution
          </h3>
          <p className="text-gray-600 text-center">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl hover:bg-primary duration-300">
          <div className="flex justify-center mb-5">
            <img src={iconImg} alt="" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-3">
            Cash on Home Delivery
          </h3>
          <p className="text-gray-600 text-center">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl hover:bg-primary duration-300">
          <div className="flex justify-center mb-5">
            <img src={iconImg} alt="" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-3">
            Corporate Service / Contract In Logistics
          </h3>
          <p className="text-gray-600 text-center">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl hover:bg-primary duration-300">
          <div className="flex justify-center mb-5">
            <img src={iconImg} alt="" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-3">Parcel Return</h3>
          <p className="text-gray-600 text-center">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
