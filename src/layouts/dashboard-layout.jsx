import { useRef, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '@/components/dashboard/shared/navbar';
import Sidebar from '@/components/dashboard/shared/sidebar';

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSidebarOpen &&
        !sidebarRef.current?.contains(event.target) &&
        !overlayRef.current?.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? 'ml-[2px]' : 'ml-[-280px]'
        } transition-all duration-300 w-[320px] fixed bottom-0 top-0 left-0 z-[2000] lg:ml-0`}
      >
        <Sidebar handleCloseSidebar={handleCloseSidebar} />
      </div>

      {/* Main Content */}
      <div
        className={`w-full h-full lg:w-[calc(100vw-320px)] ml-0 lg:ml-[320px] flex flex-col min-h-screen`}
      >
        <div className="basis-[10%] sticky top-0 z-[450] w-full">
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div className={`basis-[90%] flex-1 overflow-y-auto`}>
          <Outlet />
        </div>
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`bg-gray-500 bg-opacity-50 z-[490] transition-all duration-400 ease-in-out fixed inset-0 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={handleCloseSidebar}
      ></div>
    </div>
  );
}

export default DashboardLayout;
