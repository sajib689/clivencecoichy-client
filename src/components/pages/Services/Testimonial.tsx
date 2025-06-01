import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import img from "@/assets/avatar/avarat1.png";
const fakeTestimonials = [
  {
    id: 1,
    name: "John Doe",
    occupation: "Homeowner",
    message:
      "The team was professional and did an excellent job on our roof. Highly recommend!",
    imageUrl: img,
  },
  {
    id: 2,
    name: "Jane Smith",
    occupation: "Business Owner",
    message: "Great service and attention to detail. The roof looks amazing!",
    imageUrl: img,
  },
  {
    id: 3,
    name: "Michael Lee",
    occupation: "Property Manager",
    message:
      "Fast, reliable, and affordable. Couldn't ask for a better experience.",
    imageUrl: img,
  },
  {
    id: 4,
    name: "Michael Lee",
    occupation: "Property Manager",
    message:
      "Fast, reliable, and affordable. Couldn't ask for a better experience.",
    imageUrl: img,
  },
  {
    id: 5,
    name: "Michael Lee",
    occupation: "Property Manager",
    message:
      "Fast, reliable, and affordable. Couldn't ask for a better experience.",
    imageUrl: img,
  },
  {
    id: 6,
    name: "Michael Lee",
    occupation: "Property Manager",
    message:
      "Fast, reliable, and affordable. Couldn't ask for a better experience.",
    imageUrl: img,
  },
  {
    id: 7,
    name: "Michael Lee",
    occupation: "Property Manager",
    message:
      "Fast, reliable, and affordable. Couldn't ask for a better experience.",
    imageUrl: img,
  },
  {
    id: 8,
    name: "Michael Lee",
    occupation: "Property Manager",
    message:
      "Fast, reliable, and affordable. Couldn't ask for a better experience.",
    imageUrl: img,
  },
];

const Testimonial = () => {
  return (
    <section className=" bg-[#01193605] py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 xl:px-0">
        {fakeTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6  rounded-lg bg-white space-y-3"
          >
            <p className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </p>
            <p className="text-sm text-gray-600">{testimonial.message}</p>
            <div className="mt-4 flex items-center gap-4">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={500}
                height={500}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-title">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">
                  {testimonial.occupation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
