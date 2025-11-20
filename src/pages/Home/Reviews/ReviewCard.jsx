import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({review}) => {
  const {userName, user_photoURL, review: testimonial} = review;
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="card w-full max-w-lg bg-white rounded-2xl p-6 relative">
        {/* Quote icon */}
        <FaQuoteLeft className="text-4xl text-teal-300 absolute top-6 left-6" />

        {/* Quote text */}
        <p className="mt-4 ml-2 mr-6">
        {testimonial}
        </p>

        {/* dashed divider */}
        <div className="w-full my-6">
          <hr className="border-dashed border-t-2 border-gray-200" />
        </div>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full">
              <img src={user_photoURL} alt={name} />
            </div>
          </div>

          <div>
            <div className="text-teal-800 font-semibold text-sm">{userName}</div>
            <div className="text-gray-400 text-xs">Senior Product Desiginer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
