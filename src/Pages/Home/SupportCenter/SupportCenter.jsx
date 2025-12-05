import React from "react";
import live_tracking from "../../../assets/image/live-tracking.png";
import safe_delivery from "../../../assets/image/safe-delivery.png";

const SupportCenter = () => {
  return (
    <div className="my-28 flex flex-col gap-10">
      <div className="flex justify-between items-center gap-10 bg-white p-10 rounded-xl">
        <div>
          <img src={live_tracking} alt="" />
        </div>
        <div className="border-l border-dashed border-gray-300 mb-4 h-[150px] w-px"></div>
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-3">
            Live Parcel Tracking
          </h3>
          <p className="text-gray-500">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-10 bg-white p-10 rounded-xl">
        <div>
          <img src={safe_delivery} alt="" />
        </div>
        <div className="border-l border-dashed border-gray-300 mb-4 h-[150px] w-px"></div>
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-3">
            24/7 Call Center Support
          </h3>
          <p className="text-gray-500">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-10 bg-white p-10 rounded-xl">
        <div>
          <img src={live_tracking} alt="" />
        </div>
        <div className="border-l border-dashed border-gray-300 mb-4 h-[150px] w-px"></div>
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-3">
            Live Parcel Tracking
          </h3>
          <p className="text-gray-500">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;
