import searchIcon from "@/assets/icons/search-icon.svg";
import profileIcon from "@/assets/profile.png";
import ukFlagIcon from "@/assets/uk-flag.png";
import { Input } from "@/components/ui/input";
import { Bell, ChevronDown, Moon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [notifications] = useState(6);

  return (
    <nav className="h-full flex items-center justify-between px-4 sm:px-6 py-2 bg-[#1C202B] text-white">
      {/* Search Input */}
      <div className="flex-1 flex items-center gap-3  w-full placeholder-white focus:outline-none max-w-md rounded-[19px] border border-[rgba(207,207,207,0.11)] bg-gradient-to-t from-[rgba(122,67,164,0.3)] to-[rgba(96,73,188,0.17)] px-4 py-1 cursor-pointer">
        <img src={searchIcon} alt="icon" />
        <Input
          type="text"
          placeholder="Search"
          className="w-full rounded-full text-sm text-white border-none outline-none focus-visible:ring-0"
        />
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
        {/* <div className="flex items-center gap-1 cursor-pointer">
          <img src={ukFlagIcon} alt="English" className="w-12 h-8 rounded-sm" />
          <span className="text-sm">English</span>
          <ChevronDown className="w-4 h-4" />
        </div> */}

        {/* Theme Toggle */}
        {/* <Moon className="w-5 h-5 cursor-pointer" /> */}

        {/* User Info */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={profileIcon}
            alt="icon"
            className="rounded-full w-12 h-12"
          />
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
