import { Button } from "antd";
import React from "react";
import { FaPlay } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-108px)] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        src="/heroVideo.mov" // Replace with actual filename
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Optional: Overlay or content */}
      <div className="absolute bg-black/30 w-full z-10 flex items-center justify-center h-full">
        <div className="container">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Your Local Family <br /> Roofing & Exterior <br /> Experts
          </h2>
          <p className="text-white mt-8 text-lg">
            Our friendly, experienced team is ready to work with you.
          </p>
          <div className="mt-8 flex flex-wrap gap-8 items-center">
            <Button
              size="large"
              className="bg-red-primary border-none text-white hover:!text-red-primary p-6 text-lg"
            >
              Free Estimate
            </Button>
            <Button
              size="large"
              type="text"
              icon={
                <FaPlay
                  size={20}
                  className="bg-white group-hover:bg-red-primary group-hover:text-white duration-500 w-12 p-3 text-red-primary rounded-full flex items-center justify-center h-12"
                />
              }
              className=" border-none group hover:!text-red-primary text-white p-6 text-lg"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
