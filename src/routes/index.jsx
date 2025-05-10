import Academicessay from "@/components/dashboard/academicessay";
import Articelgenerate from "@/components/dashboard/articelgenerate";
import Contentrewrite from "@/components/dashboard/contentrewrite";
import Correcteur from "@/components/dashboard/correcteur";
import Correcteurdexercice from "@/components/dashboard/correcteurdexercice";
import Dictionary from "@/components/dashboard/dictionary";
import Grammarchecker from "@/components/dashboard/grammarchecker";
import Paragraphgenerator from "@/components/dashboard/paragraphgenerator";
import Summarizefor2Grader from "@/components/dashboard/summarizefor2Grader";
import Summarizetext from "@/components/dashboard/summarizetext";
import TextExtender from "@/components/dashboard/textextander";
import TextExtenderForm from "@/components/dashboard/textextanderForm";
import ToneChanger from "@/components/dashboard/tonechanger";
import AiAssistantLayout from "@/layouts/ai-assistant-layout";
import AiChatLayout from "@/layouts/ai-chat-layout";
import DashboardLayout from "@/layouts/dashboard-layout";
import MainLayout from "@/layouts/MainLayout";
import AiAssistant from "@/pages/ai-assistant/ai-assistant";
import AiChat from "@/pages/ai-assistant/chat-with-ai-assistant/ai-chat";
import AiQuiz from "@/pages/ai-assistant/revision-tools/ai-quiz";
import Account from "@/pages/dashboard/account";
import AiTutors from "@/pages/dashboard/ai-tutors";
import Aicode from "@/pages/dashboard/aicode";
import Articles from "@/pages/dashboard/articles";
import Codes from "@/pages/dashboard/codes";
import Dashboard from "@/pages/dashboard/dashboard";
import Documents from "@/pages/dashboard/documents";
import Humanizer from "@/pages/dashboard/humanizer";
import ImageGenerator from "@/pages/dashboard/image-generator";
import RevisionTools from "@/pages/dashboard/revision-tools";
import SubscriptionPanel from "@/pages/dashboard/subscription-panel";
import Workbooks from "@/pages/dashboard/workbooks";
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
        path: "revision-tools/:activeTab",
        element: <RevisionTools />,
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
        path: "documents/:activeTab",
        element: <Documents />,
      },
      {
        path: "subscription-panel",

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
    path: "/ai-assistant",
    element: <AiAssistantLayout />,
    children: [
      {
        index: true,
        element: <AiAssistant />,
      },
      {
        path: "quiz",
        element: <AiQuiz />,
      },
      {
        path: "podcast",
        element: <AiQuiz />,
      },
      {
        path: "pdf-scan",
        element: <AiQuiz />,
      },
      {
        path: "articelgenerate",
        element: <Articelgenerate />,
      },
      {
        path: "contentrewrite",
        element: <Contentrewrite />,
      },
      {
        path: "summarizetext",
        element: <Summarizetext />,
      },
      {
        path: "dictionary",
        element: <Dictionary />,
      },
      {
        path: "correcteur",
        element: <Correcteur />,
      },
      {
        path: "tonechanger",
        element: <ToneChanger />,
      },
      {
        path: "summarizefor2Grader",
        element: <Summarizefor2Grader />,
      },
      {
        path: "grammarchecker",
        element: <Grammarchecker />,
      },
      {
        path: "Paragraphgenerator",
        element: <Paragraphgenerator />,
      },
      {
        path: "academicessay",
        element: <Academicessay />,
      },
      {
        path: "textextenderForm",
        element: <TextExtender />,
      },
      {
        path: "correcteurdexercice",
        element: <Correcteurdexercice />,
      },
    ],
  },

  {
    path: "/ai-chat/:id",
    element: <AiChatLayout />,
    children: [
      {
        index: true,
        element: <AiChat />,
      },
      {
        index: true,
        element: <AiChat />,
      },
    ],
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "sign-in",
    element: <Signin />,
  },
]);
