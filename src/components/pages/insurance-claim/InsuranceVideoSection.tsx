import React from "react";

const InsuranceVideoSection = () => {
  return (
    <div id="insurance-video-section">
      <div className="container py-20 ">
        <video
          className="w-full aspect-video object-cover rounded-xl"
          src="/insuranceClaimVideo2.mp4" // Replace with actual filename
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default InsuranceVideoSection;
