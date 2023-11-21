import Footer from "../Footer";
import Navbar from "../Navbar";

const NotRootLayout = ({ children }) => {
  return (
    <div className="relative m-6 md:m-7 gap-7">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default NotRootLayout;
