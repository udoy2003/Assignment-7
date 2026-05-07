import { Outlet } from "react-router-dom";
import Navbar from "../components/SharedComponent/navbar";
import Footer from "../components/SharedComponent/footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
};

export default RootLayout;