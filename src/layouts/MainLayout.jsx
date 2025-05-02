import Footer from "@/components/main/shared/footer";
import Navbar from "@/components/main/shared/navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
