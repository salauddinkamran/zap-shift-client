import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
  return (
    <div className="p-5 text-center">
      <h2 className="text-5xl font-bold text-red-500 text-center">
        Payment cancelled
      </h2>
      <Link className='btn btn-primary text-black mt-5' to="/dashboard/my-parcels">Go to dashbord</Link>
    </div>
  );
};

export default PaymentCancelled;