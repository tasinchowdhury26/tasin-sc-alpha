import BlogsBanner from "@/components/BlogsPage/BlogsBanner";
import BlogsContainer from "@/components/BlogsPage/BlogsContainer";
import NotRootLayout from "@/components/Layouts/NotRootLayout";
import Head from "next/head";

const BlogsPage = () => {
  return (
    <div>
      <Head>
        <title>Tasin | Blogs</title>
      </Head>
      <BlogsBanner />
      <BlogsContainer />
    </div>
  );
};

export default BlogsPage;

BlogsPage.getLayout = function getLayout(page) {
  return <NotRootLayout>{page}</NotRootLayout>;
};
