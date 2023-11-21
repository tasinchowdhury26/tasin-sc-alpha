import { copyText } from "@/utils/copyText";
import Link from "next/link";
import { BiLogoGoogle } from "react-icons/bi";
import { FaLinkedin, FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center rounded-2xl mt-6 py-24 bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3]">
      <div className="text-center">
        <p className="font-semibold text-gray-800 mb-2">Get in touch</p>
        <div className="flex gap-5 justify-center items-center">
          <Link
            href={`https://www.linkedin.com/in/tasin-shahriar/`}
            target="_blank"
          >
            <FaLinkedin className="text-3xl text-cyan-900 cursor-pointer" />
          </Link>
          <FaSkype
            className="text-3xl text-blue-700 cursor-pointer"
            onClick={() => copyText("live:.cid.8c219c85bbf4aa16", "Skype Id")}
          />
          <BiLogoGoogle
            className="text-3xl text-red-600 cursor-pointer"
            onClick={() => copyText("tasinchowdhury26@gmail.com", "Email")}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
