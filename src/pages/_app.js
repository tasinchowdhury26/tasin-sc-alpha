import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className={montserrat.className}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
