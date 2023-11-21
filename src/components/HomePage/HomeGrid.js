import { copyText } from "@/utils/copyText";
import Link from "next/link";
import { BiLogoGoogle } from "react-icons/bi";
import { FaHackerrank, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaGithub, FaSkype } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const HomeGrid = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-7 h-screen">
        {/* Title */}
        <div className="rounded-2xl shadow-2xl shadow-gray-700/20 p-44 md:p-6 text-center col-span-4 sm:col-span-1 row-span-2 bg-[url('https://i.ibb.co/mcZ4ggV/IMG-20220710-WA0003-Cropped.jpg')] bg-cover">
          <p className="text-white text-xl md:text-4xl font-semibold">
            Hello, I{`'m`} Tasin
          </p>
        </div>

        {/* Blogs */}
        <Link
          href={`/blogs`}
          className="bg-gray-200 text-gray-200 leading-relaxed flex items-end rounded-2xl shadow-2xl shadow-gray-700/20 pt-16 pb-4 px-4 md:p-6 col-span-4 sm:col-span-2 row-span-1 bg-[url('https://images.unsplash.com/photo-1584204559709-ca7d413229eb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover"
        >
          <div>
            <p className="text-4xl font-bold">Blogs</p>
            <p> Dive into my digital hub of insights and inspirations.</p>
          </div>
        </Link>

        {/* About */}
        <Link
          href={`/about`}
          className="rounded-2xl flex items-end text-white shadow-2xl shadow-gray-700/20 pt-16 pb-4 px-4 md:p-6 col-span-4 sm:col-span-1 row-span-1 bg-gradient-to-bl from-blue-100 to-blue-500"
        >
          <div>
            <p className="text-4xl font-bold">About Me</p>
            <p>
              {`I'm`} a passionate frontend developer with a flair for the
              backend world.
            </p>
          </div>
        </Link>

        {/* Social */}
        <div className="bg-gradient-to-tr from-blue-100 to-indigo-400 rounded-2xl shadow-2xl flex justify-center items-center shadow-gray-700/20 p-24 md:p-6 col-span-4 sm:col-span-1 row-span-1">
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <Link href={`https://github.com/tasinchowdhury26`} target="_blank">
              <FaGithub className="text-5xl col-span-1 row-span-1" />
            </Link>
            <Link
              href={`https://www.hackerrank.com/profile/tasinchowdhury26`}
              target="_blank"
            >
              <FaHackerrank className="text-5xl col-span-1 row-span-1" />
            </Link>
            <Link
              href={`https://leetcode.com/tasinchowdhury26/`}
              target="_blank"
            >
              <SiLeetcode className="text-5xl col-span-1 row-span-1" />
            </Link>
            <Link href={`https://medium.com/@tasinchowdhury26`} target="_blank">
              <FaMedium className="text-5xl col-span-1 row-span-1" />
            </Link>
          </div>
        </div>

        {/* Projects */}
        <Link
          href={`/projects`}
          className="text-white rounded-2xl shadow-2xl shadow-gray-700/20 pt-16 pb-4 px-4 md:p-6 col-span-4 sm:col-span-2 row-span-2 bg-[url('https://images.unsplash.com/photo-1673032413639-f2ebc0a82c3f?q=80&w=1823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover"
        >
          <div>
            <p className="text-4xl font-bold">Projects</p>
            <p>Showcase of passion in every endeavor.</p>
          </div>
        </Link>

        {/* Contact */}
        <div className="bg-gradient-to-tr from-[#C9D6FF] to-[#E2E2E2] flex items-center rounded-2xl shadow-2xl shadow-gray-700/20 py-16 px-4 md:p-6 col-span-4 sm:col-span-2 row-span-1">
          <div>
            <p className="text-gray-800 text-4xl font-bold mb-2">Reach Out</p>
            <div className="">
              <div className="flex gap-5 items-center">
                <Link
                  href={`https://www.linkedin.com/in/tasin-shahriar/`}
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl cursor-pointer" />
                </Link>
                <FaSkype
                  className="text-3xl cursor-pointer"
                  onClick={() =>
                    copyText("live:.cid.8c219c85bbf4aa16", "Skype Id")
                  }
                />
                <BiLogoGoogle
                  className="text-3xl cursor-pointer"
                  onClick={() =>
                    copyText("tasinchowdhury26@gmail.com", "Email")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
