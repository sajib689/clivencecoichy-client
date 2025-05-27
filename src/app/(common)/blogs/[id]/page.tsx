import Image from "next/image";
import React from "react";
import blogImage from "@/assets/blogs/blog1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const BlogDetails = () => {
  return (
    <div>
      <div className="container py-20 pt-8 grid grid-cols-12 gap-12">
        {/* left  */}
        <div className="col-span-12 lg:col-span-5">
          <Image
            src={blogImage}
            className="border rounded-xl min-h-[300px] object-cover"
            alt="Image"
          />
          <div className="mt-6 bg-gray-100 p-5 rounded-xl">
            <h2 className="text-xl font-semibold text-title">
              Share This Article
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <div className="bg-white border rounded-md text-title hover:bg-gray-100 duration-300 p-2 inline-block">
                <FaFacebook size={25} />
              </div>
              <div className="bg-white border rounded-md text-title hover:bg-gray-100 duration-300 p-2 inline-block">
                <FaLinkedin size={25} />
              </div>
              <div className="bg-white border rounded-md text-title hover:bg-gray-100 duration-300 p-2 inline-block">
                <FaXTwitter size={25} />
              </div>
              <div className="bg-white border rounded-md text-title hover:bg-gray-100 duration-300 p-2 inline-block">
                <FaInstagram size={25} />
              </div>
            </div>
          </div>
        </div>
        {/* right  */}
        <div className="col-span-12 lg:col-span-7">
          {/* Author and Date */}
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center text-blue-gray-400">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-[15px]">James Charls</span>
            </div>

            <div className="flex items-center text-blue-gray-400">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 10H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[15px]">12 July, 2024</span>
            </div>
          </div>
          {/* title  */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-8">
            What Homeowners Need to Know After a Hailstorm
          </h1>
          <p className="mt-5">
            Don’t wait until you see a leak — here’s how to protect your home,
            your roof, and your wallet after a storm.
          </p>

          <h3 className="text-lg lg:text-xl mt-8 font-bold text-title">
            A hailstorm just hit — now what?
          </h3>
          <p className="mt-4">
            If you’ve just experienced a hailstorm, it’s completely normal to
            look outside and think, “Well… everything looks fine.” But the truth
            is, storm damage isn’t always obvious — and the longer it goes
            unaddressed, the more costly it can become. <br />
            <br />
            At ARC (Allied Restoration Contractors), we’ve seen it all: roofs
            that look perfectly fine from the street but are covered in hail
            bruises, damaged vents, and weakened shingles that lead to major
            leaks weeks or months later. <br />
            <br />
            So what should you do after a storm?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
