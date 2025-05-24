import logo from "@/assets/logo/aboutLogo.png";
import { Button } from "antd";
import Image from "next/image";

const WindowsDifferenceSection = () => {
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        {/* left */}
        <div className="flex flex-col items-center">
          <Image src={logo} alt="logo" />
          <Button
            size="large"
            className="bg-red-whtie border-red-primary mt-10 text-red-primary hover:!bg-red-primary  hover:!text-white p-6 text-lg"
          >
            Calculate Window Cost
          </Button>
        </div>
        {/* right  */}
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
            The ARC Difference
          </h3>
          <p className="text-md mt-5">
            At ARC, window replacement is about more than just glass — it’s
            about comfort, efficiency, and style. Our expert installers ensure
            every window is sealed tight and fitted right to boost energy
            efficiency, reduce outside noise, and elevate your home’s
            appearance.
          </p>
          <p className="text-md mt-5">
            We offer durable, high-performance windows that not only lower
            utility bills but also bring in more natural light and curb appeal.
            With ARC, you get windows that work hard, look great, and last for
            years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WindowsDifferenceSection;
