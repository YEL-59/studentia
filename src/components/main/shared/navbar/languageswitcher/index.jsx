import Enflag from "@/assets/svg/enflag";
import Ukflag from "@/assets/svg/ukflag";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", icon: <Ukflag className="w-5 h-5" /> },
  { code: "fr", label: "Français", icon: <Enflag className="w-5 h-5" /> },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left " ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border border-[#6049bc] rounded-[12px] dark:text-white text-[#070622] text-sm hover:bg-[#6049bc] transition roiunded"
      >
        {languages.find((lang) => lang.code === i18n.language).icon}
        {languages
          .find((lang) => lang.code === i18n.language)
          .code.toUpperCase()}
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-[#1e1b4b] text-white shadow-lg z-50 rounded-[12px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setOpen(false);
                i18n.changeLanguage(lang.code);
              }}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-[#2a2550]"
            >
              {lang.icon}
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
