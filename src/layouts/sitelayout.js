import { Outlet } from "react-router-dom";
import HeaderGroup from "../components/HeaderGroup";
import Footer from "../components/footer";
import Copyrights from "../components/copyrights";

export default function SiteLayout() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      {/* 🔹 Header (Topbar + Logo + Navbar) */}
      <HeaderGroup />

      {/* 🔹 Main Content Area */}
      {/* Padding prevents the sticky navbar from overlapping hero section */}
      <main className="flex-1 bg-white pt-[180px] md:pt-[210px] transition-all duration-500">
        <Outlet />
      </main>

      {/* 🔹 Footer Section */}
      <Footer />
      <Copyrights />
    </div>
  );
}
