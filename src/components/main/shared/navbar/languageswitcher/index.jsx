import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Enflag from "@/assets/svg/enflag";
import Ukflag from "@/assets/svg/ukflag";

const languages = [
  { code: "en", label: "English", icon: <Enflag className="w-5 h-5" /> },
  { code: "fr", label: "Français", icon: <Ukflag className="w-5 h-5" /> },
];

export default function LanguageSwitcher() {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border border-[#6049bc] rounded-md text-white text-sm hover:bg-[#6049bc] transition"
      >
        {selected.icon}
        {selected.code.toUpperCase()}
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-[#1e1b4b] text-white rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
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
