import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import HeaderGroup from "../components/HeaderGroup";
import Footer from "../components/footer";
import FloatingSocial from "../components/FloatingSocial";
import PageLoader from "../layouts/PageLoader";

export default function SiteLayout() {
  const location = useLocation();
  const firstLoad = useRef(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    setLoading(true);

    const waitForImages = async () => {
      const images = Array.from(document.images);

      await Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();

          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      setTimeout(() => {
        setLoading(false);
      }, 300); // Smooth fade-out delay
    };

    // Wait until the new page is rendered
    requestAnimationFrame(() => {
      requestAnimationFrame(waitForImages);
    });

  }, [location.pathname]);

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">

      <PageLoader loading={loading} />

      <HeaderGroup />

      <FloatingSocial />

      <main className="flex-1 bg-white">
        <Outlet />
      </main>

      <Footer />



    </div>
  );
}