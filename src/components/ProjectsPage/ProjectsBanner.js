import { GrProjects } from "react-icons/gr";

const ProjectsBanner = () => {
  return (
    <div className="w-full text-center mx-auto my-4 rounded-xl shadow-2xl shadow-gray-700/20 px-12 md:px-32 pt-24 md:pt-32 pb-8 leading-relaxed bg-[url('https://images.unsplash.com/photo-1673032413639-f2ebc0a82c3f?q=80&w=1823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
      <h2 className="text-6xl md:text-7xl text-gray-100 font-bold">Projects</h2>
      <div className="text-gray-100 flex justify-center items-center gap-3 my-5 md:my-10">
        <p className="text-md md:text-xl flex gap-2 items-center justify-center">
          <GrProjects /> Collaborative endeavors and solo projects
        </p>
      </div>
    </div>
  );
};

export default ProjectsBanner;
