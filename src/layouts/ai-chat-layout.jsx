import Sidebar from '@/components/ai-chat/shared/sidebar';
import Navbar from '@/components/dashboard/shared/navbar';
import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router';

function AiChatLayout() {
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
    <div className="flex">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? 'ml-[2px]' : 'ml-[-280px]'
        } transition-all duration-300 w-[320px] fixed bottom-0 top-0 left-0 z-[2000] lg:ml-0`}
      >
        <Sidebar/>
      </div>

      {/* Main Content */}
      <div
        className={`w-full h-full lg:w-[calc(100dvw-320px)] ml-0 lg:ml-[320px] flex flex-col`}
      >
        <div className="h-[80px] sticky top-0 z-[450] w-full">
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div
          className={`flex-1 overflow-y-auto bg-[#1C202B] [box-shadow:inset_5px_5px_20px_rgba(122,67,164,0.3),inset_3px_3px_40px_rgba(96,73,188,0.17)] text-[#FFF] min-h-[calc(100svh-80px)] px-4 py-5`}
        >
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

export default AiChatLayout;
