import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactLenis from "lenis/react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

function AppInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppInitializer />
  </StrictMode>
);
