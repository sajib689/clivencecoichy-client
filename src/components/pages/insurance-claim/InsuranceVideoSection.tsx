import React from "react";

const InsuranceVideoSection = () => {
  return (
    <div>
      <div className="container py-20">
        <video
          className="w-full aspect-video object-cover rounded-xl"
          src="/insuranceClaimVideo.mov"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default InsuranceVideoSection;
