import { Outlet } from "react-router-dom";
import HeaderGroup from "../components/HeaderGroup";
import Footer from "../components/footer";
import Copyrights from "../components/copyrights";
import FloatingSocial from "../components/FloatingSocial";

export default function SiteLayout() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">

      {/* 🔹 Header */}
      <HeaderGroup />

      {/* 🔹 Floating Social Buttons (Left Side Fixed) */}
      <FloatingSocial />

      {/* 🔹 Main Content */}
      <main className="flex-1 bg-white pt-[1px] md:pt-[10px] transition-all duration-500">
        <Outlet />
      </main>

      {/* 🔹 Footer */}
      <Footer />

      {/* 🔹 Copyright */}
      <Copyrights />

    </div>
  );
}