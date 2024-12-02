import Banner from "@/components/pages/home/banner/Banner";
import OurService from "@/components/pages/home/OurService/OurService";
import Reviews from "@/components/pages/home/Reviews/Reviews";
import TrustedByHundreds from "@/components/pages/home/TrustedByHundreds/TrustedByHundreds";
import YourTrustedPartner from "@/components/pages/home/YourTrustedPartner/YourTrustedPartner";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "London Gutter Cleaning | Professional Gutter & Exterior Services",
  description: "Keep your gutters clean and functional with London Gutter Cleaning. Offering professional services for residential and commercial properties across London.",
  keywords: "gutter cleaning, London gutter services, professional gutter cleaning, residential gutter cleaning, commercial gutter cleaning, fascia soffit repairs",
};



const Home = () => {

  return (
    <>
      <Banner />
      <TrustedByHundreds />
      <YourTrustedPartner />
      <OurService />
      <Reviews />
      <TrustedTrader/>
      <BlogComponent  smallTitle="Blog" mainTitle="Insights & Inspiration: The LondonGutterClean Blog" />
      <ImproveProperty/>
    </>
  );
};

export default Home;
