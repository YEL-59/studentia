import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Bell, Moon, ChevronDown } from 'lucide-react';
// import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function Navbar() {
  const [notifications, setNotifications] = useState(6);

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 py-2 bg-[#1A1B1F] text-white shadow-md">
      {/* Search Input */}
      <div className="flex-1 max-w-md">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-3 flex items-center text-white">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z"
              />
            </svg>
          </span>
          <Input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gradient-to-r from-[#271a4d] to-[#1a1832] text-sm text-white border-none placeholder-white focus:outline-none"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4 sm:gap-6 ml-4">
        {/* Notification */}
        <div className="relative">
          <Bell className="w-5 h-5 text-white" />
          {notifications > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {notifications}
            </span>
          )}
        </div>

        {/* Language */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="https://flagcdn.com/gb.svg"
            alt="English"
            className="w-6 h-4 rounded-sm border"
          />
          <span className="text-sm">English</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        {/* Theme Toggle */}
        <Moon className="w-5 h-5 cursor-pointer" />

        {/* User Info */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Jane Cooper"
            />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar> */}
          <div className="text-sm text-left">
            <div className="font-medium leading-none">Jane Cooper</div>
            <div className="text-xs text-gray-400">Admin</div>
          </div>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </nav>
  );
}
