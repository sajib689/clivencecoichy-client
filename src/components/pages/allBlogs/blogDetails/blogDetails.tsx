import Image from "next/image";
import React from "react";
import blogDetailsMainImage from "@/assets/blogDetailsMainImage.png";
import ImageWithFallBackSystem from "@/components/ui/ImageWithFallBackSystem/ImageWithFallBackSystem";

const BlogDetails = () => {
  return (
    <div className="container">
      <div className="flex items-start gap-5">
        {/* left side start */}
        <div className="w-4/12">
          <div className="h-full max-h-96 w-full max-w-72 overflow-hidden mb-5">
            <Image
              src={blogDetailsMainImage}
              width={400}
              height={600}
              alt="image"
              className="object-contain"
            />
          </div>
          <h5 className="text-xl font-bold mb-4">Written by</h5>
          <div className="flex items-center gap-2">
            <div className="rounded-full overflow-hidden h-10 w-10">
              <ImageWithFallBackSystem
                imageSrc={blogDetailsMainImage}
                alt="Review Card Image"
              />
            </div>
            <div>
              <p className="text-base font-bold ">David London NW3</p>
              <p className="text-sm font-medium text-gray-light">
                September 12, 2022
              </p>
            </div>
          </div>
          <div className="w-full border my-6"></div>
          <h5 className="text-xl font-bold mb-4">Subscribe to our news feed</h5>
          <div className="w-full border my-6"></div>
        </div>
        {/* left side end */}
        {/* right side start */}
        <div className="w-8/12"></div>
      </div>
      {/* right side end */}
    </div>
  );
};

export default BlogDetails;
