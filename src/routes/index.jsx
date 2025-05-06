import DashboardLayout from "@/layouts/dashboard-layout";
import MainLayout from "@/layouts/MainLayout";
import Account from "@/pages/dashboard/account";
import AiTutors from "@/pages/dashboard/ai-tutors";
import Aicode from "@/pages/dashboard/aicode";
import Articles from "@/pages/dashboard/articles";
import Dashboard from "@/pages/dashboard/dashboard";
import Documents from "@/pages/dashboard/documents";
import Humanizer from "@/pages/dashboard/humanizer";
import ImageGenerator from "@/pages/dashboard/image-generator";
import RevisionTools from "@/pages/dashboard/revision-tools";
import SubscriptionPanel from "@/pages/dashboard/subscription-panel";
import WritingTools from "@/pages/dashboard/writing-tools";
import Signin from "@/pages/main/auth/signin";
import Signup from "@/pages/main/auth/signup";
import Home from "@/pages/main/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "writing-tools/ai-writers",
        element: <WritingTools />,
      },
      {
        path: "writing-tools/ai-code",
        element: <Aicode />,
      },
      {
        path: "writing-tools/article",
        element: <Articles />,
      },
      {
        path: "revision-tools",
        element: <RevisionTools />,
      },
      {
        path: "ai-tutors",
        element: <AiTutors />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {

        path: 'codes',
        element: <Codes />,
      },
      {
        path: 'workbooks',
        element: <Workbooks />,
      },
      {
        path: 'subscription-panel',

        element: <SubscriptionPanel />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "image-generator",
        element: <ImageGenerator />,
      },
      {
        path: "humanizer",
        element: <Humanizer />,
      },
    ],
  },
  {

    path: '/ai-assistant',
    element: <AiAssistantLayout />,
    children: [
      {
        index: true,
        element: <AiAssistant />,
      },
    ],
}

    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "sign-in",
    element: <Signin />,
  },

]);
