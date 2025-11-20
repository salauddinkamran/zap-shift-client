import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const HowItWork = () => {
  return (
    <div className="my-28 mx-5 lg:mx-0">
      <h3 className="text-3xl font-bold text-secondary">How it Work</h3>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl">
          <CiDeliveryTruck className="text-5xl" />
          <h4 className="text-xl font-bold my-3">Booking Pick & Drop</h4>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl">
          <CiDeliveryTruck className="text-5xl" />
          <h4 className="text-xl font-bold my-3">Cash On Delivery</h4>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl">
          <CiDeliveryTruck className="text-5xl" />
          <h4 className="text-xl font-bold my-3">Delivery Hub</h4>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl">
          <CiDeliveryTruck className="text-5xl" />
          <h4 className="text-xl font-bold my-3">Booking SME & Corporate</h4>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
