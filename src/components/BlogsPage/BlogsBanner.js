import { FaBlog } from "react-icons/fa";

const BlogsBanner = () => {
  return (
    <div className="w-full text-center mx-auto my-4 rounded-xl shadow-2xl shadow-gray-700/20 px-12 md:px-32 pt-24 md:pt-32 pb-8 leading-relaxed bg-[url('https://images.unsplash.com/photo-1517200578024-62d131797ec8?q=80&w=1714&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
      <h2 className="text-6xl md:text-7xl text-gray-100 font-bold">Blogs</h2>
      <div className="text-gray-100 flex justify-center items-center gap-3 my-5 md:my-10">
        <p className="text-sm md:text-xl flex gap-2 items-center justify-center">
          <FaBlog /> Mixture of thoughts, experiences, and discoveries
        </p>
      </div>
    </div>
  );
};

export default BlogsBanner;
