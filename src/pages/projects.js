import NotRootLayout from "@/components/Layouts/NotRootLayout";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import ProjectsBanner from "@/components/ProjectsPage/ProjectsBanner";
import Head from "next/head";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      image: "https://i.ibb.co/hWqCjKq/20231121-005406.jpg",
      title: "OneDemic",
      devs: ["Tasin", "Fozlol"],
      description:
        "This is a platform to serve both teachers and students for assessments. It has features like arranging online exams, a chat system, and a payment gateway.",
      tech: ["nextjs", "mongodb", "redux", "express", "mui"],
      status: "live",
      server: "https://github.com/A-K-M-Fozlol-Hoq/onedemic-V2-server",
      client: "https://github.com/A-K-M-Fozlol-Hoq/onedemic-V2-client",
      live: "https://onedemic.netlify.app/?fbclid=IwAR2e_weaSIjIP4Cp0g6YIdClD4CcsJkuw96N6xK_EDhHLyjWPkyczKSeKog",
    },
    {
      id: 2,
      image: "https://i.ibb.co/zZpf4nb/maya-maceka-y-W-Qgw-IJXg-unsplash.jpg",
      title: "PC Builder",
      devs: ["Tasin"],
      description:
        "This application lets users build custom PCs by choosing each component on their own.",
      tech: ["nextjs", "redux", "mongodb"],
      status: "construction",
      server: "",
      client: "",
      live: null,
    },
  ];
  return (
    <div>
      <Head>
        <title>Tasin | Projects</title>
      </Head>
      <ProjectsBanner />
      <div className="block sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ProjectCard
            className="col-span-1"
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            devs={project.devs}
            description={project.description}
            tech={project.tech}
            status={project.status}
            server={project.server}
            client={project.client}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

ProjectsPage.getLayout = function getLayout(page) {
  return <NotRootLayout>{page}</NotRootLayout>;
};
