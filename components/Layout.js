import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
    </>
  );
};

export default Layout;
