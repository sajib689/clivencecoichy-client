"use client";
import TestimonialCard from "@/components/cards/TestimonialCard";
import type { Testimonial } from "@/components/cards/TestimonialCard";
import { useGetAllReviewsQuery } from "@/redux/service/reviewsApi";
// const fakeTestimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     occupation: "Homeowner",
//     message:
//       "The team was professional and did an excellent job on our roof. Highly recommend!",
//     imageUrl: img,
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     occupation: "Business Owner",
//     message: "Great service and attention to detail. The roof looks amazing!",
//     imageUrl: img,
//   },
//   {
//     id: 3,
//     name: "Michael Lee",
//     occupation: "Property Manager",
//     message:
//       "Fast, reliable, and affordable. Couldn't ask for a better experience.",
//     imageUrl: img,
//   },
//   {
//     id: 4,
//     name: "Michael Lee",
//     occupation: "Property Manager",
//     message:
//       "Fast, reliable, and affordable. Couldn't ask for a better experience.",
//     imageUrl: img,
//   },
//   {
//     id: 5,
//     name: "Michael Lee",
//     occupation: "Property Manager",
//     message:
//       "Fast, reliable, and affordable. Couldn't ask for a better experience.",
//     imageUrl: img,
//   },
//   {
//     id: 6,
//     name: "Michael Lee",
//     occupation: "Property Manager",
//     message:
//       "Fast, reliable, and affordable. Couldn't ask for a better experience.",
//     imageUrl: img,
//   },
//   {
//     id: 7,
//     name: "Michael Lee",
//     occupation: "Property Manager",
//     message:
//       "Fast, reliable, and affordable. Couldn't ask for a better experience.",
//     imageUrl: img,
//   },
//   {
//     id: 8,
//     name: "Michael Lee",
//     occupation: "Property Manager",
//     message:
//       "Fast, reliable, and affordable. Couldn't ask for a better experience.",
//     imageUrl: img,
//   },
// ];

const Testimonial = () => {
  const { data } = useGetAllReviewsQuery({});
  console.log(data);
  return (
    <section className=" bg-[#01193605] py-20 min-h-screen">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 xl:px-0">
        {data?.map((item: Testimonial, index: number) => (
          <TestimonialCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
