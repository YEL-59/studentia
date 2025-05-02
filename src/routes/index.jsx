import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/main/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      //   {
      //     path: "about",
      //     element: <About />,
      //   },
    ],
  },
]);
