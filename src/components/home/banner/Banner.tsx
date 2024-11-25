import bannerImage from "@/assets/home/banner.jpg";
import whichTraderLogo from "@/assets/home/which-logo.png";
import Image from "next/image";

const Banner = () => {
  return (
    <main
      className={`md:pt-20 md:pb-[225px] bg-center bg-cover before:content-[""] before:block before:absolute before:z-[1] before:inset-0 relative before:bg-banner-gradient`}
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    >
      <div className="container relative z-10 text-white">
        <span className="py-1 px-2 rounded-[48px] bg-[rgba(255,255,255,0.16)] backdrop-blur-[10px] inline-flex items-center gap-2 mb-4">
          <Image
            src={whichTraderLogo}
            alt="Award Winning Service For London Gutter Cleaning, Repairs &
          Replacement."
            className="object-contain w-[41px] h-[32px]"
          />
          <p className="font-bold">Trusted Traders Code of Conduct</p>
        </span>
        <h1 className="mb-6 text-5xl font-extrabold tracking-[-0.576px] max-w-[752px]">
          Which? Award Winning Service For London Gutter Cleaning, Repairs &
          Replacement
        </h1>
        <p>
          Does your London property suffer from clogged gutters, leaving you
          worried about water damage? Look no further! Established in 2011,
          we&apos;re a trusted provider of domestic and commercial gutter
          cleaning, repair, and replacement services across London.
        </p>
      </div>
    </main>
  );
};

export default Banner;
