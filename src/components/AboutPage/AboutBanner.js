import { IoLocation } from "react-icons/io5";

const AboutBanner = () => {
  return (
    <div className="w-full text-center mx-auto my-4 rounded-xl shadow-2xl shadow-gray-700/20 px-12 md:px-32 pt-24 md:pt-32 pb-8 leading-relaxed bg-gradient-to-bl from-blue-100 to-blue-500">
      <h2 className="text-6xl md:text-7xl text-gray-100 font-bold">
        Hi again, {`I'm`} Tasin
      </h2>
      <div className="text-md md:text-xl text-gray-100 flex justify-center items-center gap-2 my-5 md:my-10">
        <IoLocation />
        <p className="text-xl">Dhaka, Bangladesh</p>
      </div>
    </div>
  );
};

export default AboutBanner;
