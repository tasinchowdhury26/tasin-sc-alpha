import Image from "next/image";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiHtml5,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";

const ProjectCard = ({
  id,
  image,
  title,
  devs,
  description,
  tech,
  status,
  server,
  client,
  live,
}) => {
  const logos = {
    javascript: <IoLogoJavascript className="text-yellow-400" />,
    nextjs: <TbBrandNextjs />,
    mongodb: <SiMongodb className="text-green-700" />,
    express: <SiExpress />,
    node: <TbBrandNodejs className="text-green-500" />,
    mui: <SiMui className="text-blue-500" />,
    redux: <SiRedux className="text-purple-600" />,
    tailwind: <SiTailwindcss className="text-cyan-400" />,
    html: <SiHtml5 className="text-orange-600" />,
    mongoose: <SiMongoose className="text-red-600" />,
  };
  return (
    <div className="text-white p-6 mb-6 shadow-2xl shadow-gray-700/20 rounded-xl bg-gradient-to-t from-[#232526] to-[#414345]">
      <div className="">
        <Image
          src={image}
          className="rounded-xl"
          height={1200}
          width={800}
          style={{ height: "300px", width: "100%" }}
          objectFit="cover"
          alt="projectImage"
        ></Image>
      </div>

      <div className="">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-3xl mt-4">{title}</p>
        </div>
        {devs.length > 1 ? (
          <p className="text-gray-300">Collaboration</p>
        ) : (
          <p className="text-gray-300">Solo</p>
        )}
        <div className="h-36 p-4 bg-gray-500 rounded-xl my-2">
          <p>{description}</p>
        </div>
        <div className="flex gap-2 items-center justify-start text-xl my-4">
          {tech.map((t, index) => {
            if (logos[t]) {
              return <div key={index}>{logos[t]}</div>;
            } else {
              return null;
            }
          })}
        </div>
        {status === "live" ? (
          <div className="px-5 py-3 flex justify-evenly items-center gap-3 text-center text-green-50 font-semibold rounded-xl bg-green-600">
            <Link target="_blank" href={live}>
              <div className="flex items-center gap-1">
                <FaPlay /> <p className="">Live</p>
              </div>
            </Link>
            {client ? (
              <div className="flex">
                <Link
                  href={client}
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <BiLogoGithub /> Client
                </Link>
              </div>
            ) : (
              <></>
            )}
            {server ? (
              <div className="flex">
                <Link
                  href={server}
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <BiLogoGithub /> Server
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="px-5 py-3 flex justify-center items-center gap-3 text-center text-gray-300 font-semibold rounded-xl bg-gray-500">
            <FaTools /> <p className="">In Progress</p>
            {client ? (
              <div className="flex">
                <Link
                  href={client}
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <BiLogoGithub /> Client
                </Link>
              </div>
            ) : (
              <></>
            )}
            {server ? (
              <div className="flex">
                <Link
                  href={server}
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <BiLogoGithub /> Server
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
