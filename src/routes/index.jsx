import AiAssistantLayout from '@/layouts/ai-assistant-layout';
import AiChatLayout from '@/layouts/ai-chat-layout';
import DashboardLayout from '@/layouts/dashboard-layout';
import MainLayout from '@/layouts/MainLayout';
import AiAssistant from '@/pages/ai-assistant/ai-assistant';
import AiChat from '@/pages/ai-assistant/chat-with-ai-assistant/ai-chat';
import Account from '@/pages/dashboard/account';
import AiTutors from '@/pages/dashboard/ai-tutors';
import Articles from '@/pages/dashboard/articles';
import Codes from '@/pages/dashboard/codes';
import Dashboard from '@/pages/dashboard/dashboard';
import Documents from '@/pages/dashboard/documents';
import Humanizer from '@/pages/dashboard/humanizer';
import ImageGenerator from '@/pages/dashboard/image-generator';
import RevisionTools from '@/pages/dashboard/revision-tools';
import SubscriptionPanel from '@/pages/dashboard/subscription-panel';
import Workbooks from '@/pages/dashboard/workbooks';
import WritingTools from '@/pages/dashboard/writing-tools';
import Signin from '@/pages/main/auth/signin';
import Signup from '@/pages/main/auth/signup';
import Home from '@/pages/main/Home';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      //   {
      //     path: "about",
      //     element: <About />,
      //   },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'writing-tools/ai-writers',
        element: <WritingTools />,
      },
      {
        path: 'writing-tools/article',
        element: <Articles />,
      },
      {
        path: 'revision-tools',
        element: <RevisionTools />,
      },
      {
        path: 'ai-tutors',
        element: <AiTutors />,
      },
      {
        path: 'documents',
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
        path: 'account',
        element: <Account />,
      },
      {
        path: 'image-generator',
        element: <ImageGenerator />,
      },
      {
        path: 'humanizer',
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
  },
  {
    path: '/ai-chat/:id',
    element: <AiChatLayout/>,
    children: [
        {
            index: true,
            element: <AiChat/>,
        },
    ],
  },
  {
    path: 'sign-up',
    element: <Signup />,
  },
  {
    path: 'sign-in',
    element: <Signin />,
  },
]);
