import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const HowItWork = () => {
  return (
    <div className="my-28 sm:px-10 px-3">
      <h2 className="text-3xl font-bold mb-5">How it Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="bg-white p-10 rounded-2xl">
          <TbTruckDelivery className="text-6xl" />
          <h3 className="text-xl font-bold text-secondary my-2">
            Booking Pick & Drop
          </h3>
          <p className="text-secondary">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl">
          <TbTruckDelivery className="text-6xl" />
          <h3 className="text-xl font-bold text-secondary my-2">
            Cash On Delivery
          </h3>
          <p className="text-secondary">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl my-2">
          <TbTruckDelivery className="text-6xl" />
          <h3 className="text-xl font-bold text-secondary my-2">
            Delivery Hub
          </h3>
          <p className="text-secondary">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl">
          <TbTruckDelivery className="text-6xl" />
          <h3 className="text-xl font-bold text-secondary my-2">
            Booking SME & Corporate
          </h3>
          <p className="text-secondary">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
