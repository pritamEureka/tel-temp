import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const UserLayout = () => {
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

export default UserLayout;
