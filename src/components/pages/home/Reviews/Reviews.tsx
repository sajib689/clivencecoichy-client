import google from "@/assets/icons/google.png";
import userImage from "@/assets/userImage.png";
import ReviewCard from "@/components/cards/ReviewCard/ReviewCard";
import TitleAndDescription from "@/components/shared/TitleAndDescription/TitleAndDescription";

const cardData = [
  {
    icon: google,
    image: userImage,
    title: "Trusted Professionals",
    description:
      "Backed by over a decade of experience, we are a Which? Trusted Trader, ensuring quality you can rely on.",
  },
  {
    icon: google,
    image: userImage,
    title: "Exceptional Customer Satisfaction",
    description:
      "With hundreds of positive reviews, our commitment to excellence speaks for itself.",
  },
  {
    icon: google,image: userImage,
    title: "Comprehensive Services",
    description:
      "From gutter cleaning to high-rise solutions, we offer a one-stop shop for all your gutter needs.",
  },
  {
    icon: google, image: userImage,
    title: "Quick & Efficient Service",
    description:
      "We respect your time with prompt responses and swift service delivery.",
  },
];

const Reviews = () => {
  return (
    <div>
      <div className="bg-[#0F4262] py-10 md:py-20 ">
        <div className="container">
          <div className="mb-4 md:mb-12">
            <TitleAndDescription
              smallTitle="Reviews"

              mainTitle="See What Our Client Says About Us"
              mainTitleClassName="md:whitespace-nowrap"
              className="text-white"
              borderClassName="border-white"
              smallTitleClassName="text-white mb-1"
            />
          </div>{" "}
          <div className=" grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5">
            {cardData?.map((item, i) => (
              <ReviewCard
                key={i}
                icon={item?.icon}
                image={item?.image}
                title={item?.title}
                description={item?.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
