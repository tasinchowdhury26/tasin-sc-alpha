import AboutBanner from "@/components/AboutPage/AboutBanner";
import NotRootLayout from "@/components/Layouts/NotRootLayout";
import Head from "next/head";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>Tasin | About Me</title>
      </Head>
      <AboutBanner />
      <p className="w-full text-left bg-gradient-to-br from-gray-100 to-gray-50 text-gray-800 leading-7 mx-auto rounded-xl p-12 md:p-32 my-4 shadow-2xl shadow-gray-700/20">
        Residing in the vibrant city of Dhaka, Bangladesh, I embarked on an
        academic journey in Computer Science and Engineering at Stamford
        University Bangladesh. Graduating with a BSc degree, I{`'ve`} honed my
        passion for frontend web development through collaborative ventures. My
        journey, while a blend of challenges and growth, fuels my unwavering
        passion for creating engaging digital landscapes. I{`'m`} eager to
        engage with teams, share ideas, and collectively drive impactful
        outcomes.
      </p>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <NotRootLayout>{page}</NotRootLayout>;
};
