import React from 'react';
import supportImg1 from "../../../assets/live-tracking.png"
import supportImg2 from "../../../assets/safe-delivery.png"
import supportImg3 from "../../../assets/safe-delivery.png"

const Support = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex justify-between items-center bg-white p-10 rounded-2xl'>
        <div>
          <img className='w-64' src={supportImg1} alt="" />
        </div>
        <div className="w-px h-32 border-l border-dotted border-gray-400 mx-10"></div>
        <div>
          <h3 className='text-3xl font-bold mb-3'>Live Parcel Tracking</h3>
          <p className='text-gray-500'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
        </div>
      </div>
      <div className='flex justify-between items-center bg-white p-10 rounded-2xl'>
        <div>
          <img className='w-64' src={supportImg2} alt="" />
        </div>
        <div className="w-px h-32 border-l border-dotted border-gray-400 mx-10"></div>
        <div>
          <h3 className='text-3xl font-bold mb-3'>Live Parcel Tracking</h3>
          <p className='text-gray-500'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
        </div>
      </div>
      <div className='flex justify-between items-center bg-white p-10 rounded-2xl'>
        <div>
          <img className='w-64' src={supportImg3} alt="" />
        </div>
        <div className="w-px h-32 border-l border-dotted border-gray-400 mx-10"></div>
        <div>
          <h3 className='text-3xl font-bold mb-3'>Live Parcel Tracking</h3>
          <p className='text-gray-500'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;