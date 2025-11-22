import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-white p-20 rounded-2xl mt-10 mb-20'>
      <h1 className='text-7xl font-bold text-secondary'>Error 404!</h1>
      <h2 className='text-5xl font-semibold text-secondary mt-5'>Page Is Not Found</h2>
      <Link to="/" className='bg-primary text-secondary font-bold text-lg py-2 px-6 rounded-lg mt-5'>Go Home</Link>
    </div>
  );
};

export default Error;