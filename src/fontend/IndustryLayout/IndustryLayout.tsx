import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const IndustryLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#030008]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default IndustryLayout;
