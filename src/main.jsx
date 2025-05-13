import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactLenis from 'lenis/react';
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';
import { ThemeProvider } from './lib/ThemeProvider';
import { router } from './routes';

import './i18n';

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AppInitializer />
    </ThemeProvider>
  </StrictMode>
);
