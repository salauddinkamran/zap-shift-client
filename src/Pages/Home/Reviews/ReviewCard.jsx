import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: reviewText, user_photoURL } = review;
  return (
    <div className="card w-full max-w-sm bg-white shadow-md p-6 rounded-2xl">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-teal-200 text-3xl mb-4" />

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">{reviewText}</p>

      {/* Divider (like in screenshot) */}
      <div className="border-t border-dashed border-gray-300 mb-4"></div>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full">
          <img className="rounded-full" src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
