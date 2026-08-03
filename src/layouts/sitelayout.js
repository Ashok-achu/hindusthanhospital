import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import HeaderGroup from "../components/HeaderGroup";
import Footer from "../components/footer";
import FloatingSocial from "../components/FloatingSocial";
import PageLoader from "../layouts/PageLoader";

export default function SiteLayout() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let fallbackTimer = null;
    let loadHandler = null;

    const finishLoading = (delay = 250) => {
      if (!isMounted) return;
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
      }
      window.setTimeout(() => {
        if (isMounted) {
          setLoading(false);
        }
      }, delay);
    };

    const waitForCriticalResources = async () => {
      const criticalImages = Array.from(document.images).filter((img) => {
        const loadingMode = img.getAttribute("loading");
        return loadingMode !== "lazy";
      });

      await Promise.all(
        criticalImages.map((img) => {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();

          return new Promise((resolve) => {
            const done = () => resolve();
            img.addEventListener("load", done, { once: true });
            img.addEventListener("error", done, { once: true });
          });
        })
      );
    };

    const startLoader = async () => {
      if (!isMounted) return;
      setLoading(true);

      fallbackTimer = window.setTimeout(() => {
        finishLoading(0);
      }, 3000);

      const handleLoad = () => {
        window.clearTimeout(fallbackTimer);
        waitForCriticalResources().finally(() => {
          finishLoading(250);
        });
      };

      loadHandler = handleLoad;

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad, { once: true });
        requestAnimationFrame(() => {
          if (document.readyState === "complete") {
            handleLoad();
          } else {
            waitForCriticalResources().finally(() => {
              finishLoading(250);
            });
          }
        });
      }
    };

    startLoader();

    return () => {
      isMounted = false;
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
      }
      if (loadHandler) {
        window.removeEventListener("load", loadHandler);
      }
    };
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