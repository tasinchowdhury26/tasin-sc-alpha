import HomeGrid from "@/components/HomePage/HomeGrid";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Tasin Chowdhury</title>
      </Head>
      <HomeGrid />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
