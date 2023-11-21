import { copyText } from "@/utils/copyText";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiLogoGoogle } from "react-icons/bi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaLinkedin, FaSkype } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  console.log(currentPath);
  return (
    <div className="fixed top-4 md:top-10 left-0 right-0 w-96 mx-auto text-md md:text-lg flex backdrop-blur-md bg-white/70 shadow-2xl shadow-gray-700/20 rounded-full justify-evenly items-center gap-4 p-1 md:p-3">
      <Link href={`/`} className={`text-lg`}>
        <span>
          <BsFillGrid1X2Fill />
        </span>
      </Link>
      <Link href={`/projects`}>
        <span
          className={`${
            currentPath === "/projects" ? `text-gray-950` : `text-gray-600`
          }`}
        >
          Projects
        </span>
      </Link>
      <Link href={`/blogs`}>
        <span
          className={`${
            currentPath === "/blogs" ? `text-gray-950` : `text-gray-600`
          }`}
        >
          Blogs
        </span>
      </Link>
      <Link href={`/about`}>
        <span
          className={`${
            currentPath === "/about" ? `text-gray-950` : `text-gray-600`
          }`}
        >
          About
        </span>
      </Link>
      <div className="">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn rounded-full text-lg bg-transparent border-none"
          >
            <MdOutlineAlternateEmail />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow bg-white rounded-3xl w-52"
          >
            <li>
              <div className="flex gap-5 justify-center items-center">
                <Link
                  href={`https://www.linkedin.com/in/tasin-shahriar/`}
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl text-cyan-900 cursor-pointer" />
                </Link>
                <FaSkype
                  className="text-3xl text-blue-700 cursor-pointer"
                  onClick={() =>
                    copyText("live:.cid.8c219c85bbf4aa16", "Skype Id")
                  }
                />
                <BiLogoGoogle
                  className="text-3xl text-red-600 cursor-pointer"
                  onClick={() =>
                    copyText("tasinchowdhury26@gmail.com", "Email")
                  }
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
