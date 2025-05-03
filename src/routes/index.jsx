import DashboardLayout from '@/layouts/dashboard-layout';
import MainLayout from '@/layouts/MainLayout';
import Dashboard from '@/pages/dashboard/dashboard';
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
    ],
  },
]);
