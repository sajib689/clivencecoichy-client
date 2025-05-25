import React from 'react'
import Image, { StaticImageData } from 'next/image'
type TeamMember = {
    name: string;
    role: string;
    image: string | StaticImageData;
};

const CommonCard = ({member}:{member:TeamMember}) => {
  return (
    <div
            className="relative border border-gray-300 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={member.image}
              alt="logo"
              width={500}
              height={500}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          </div>
  )
}

export default CommonCard