import Image from "next/image";
import React from "react";
import avatar from "@/assets/avatar/avarat1.png";

const TestimonialCard = () => {
  return (
    <div className="max-w-md p-6 bg-white border rounded-lg mr-5">
      {/* Star Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="mb-6 text-[15px] leading-relaxed text-blue-gray-500">
        &quote;George is great! His service was phenomenal and the job was done
        very well. Very clean and fast efficient work. I would highly suggest
        going with this company.&quote;
      </p>

      {/* Profile Section */}
      <div className="flex items-center">
        {/* Profile Image */}
        <div className="flex-shrink-0 mr-3">
          <Image
            src={avatar}
            width={60}
            height={60}
            alt="Mike S"
            className="w-10 h-10 rounded-full object-cover border-2 border-pink-200"
          />
        </div>

        {/* Name and Title */}
        <div>
          <h4 className="text-[15px] font-bold text-gray-900">Mike S</h4>
          <p className="text-[13px] text-blue-gray-500">Teacher</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
