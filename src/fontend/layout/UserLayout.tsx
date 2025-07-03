import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./header";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
