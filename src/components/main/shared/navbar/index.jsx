import whiteModeLogo from "@/assets/white-mode-logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "../../../../assets/logo.png";
import navbg from "../../../../assets/Stars.png";
import LanguageSwitcher from "./languageswitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const list = [
    { label: "Home", to: "/", sectionId: "home" },
    { label: "Features", to: "#features", sectionId: "features" },
    { label: "Pricing", to: "#pricing", sectionId: "pricing" },
    { label: "FAQs", to: "#faq", sectionId: "faq" },
    { label: "Blogs", to: "#blogs", sectionId: "blogs" },
  ];

  const [isSticky, setIsSticky] = useState(false);

  // Track scroll position for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      let threshold = 172;
      const width = window.innerWidth;

      if (width < 768) {
        threshold = 83;
      } else if (width >= 768 && width < 1024) {
        threshold = 92;
      }

      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = list.map((item) => item.sectionId);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];

        if (sectionId === "home") continue; // Skip home as it's handled above

        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop - 50) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Handle navigation click
  const handleNavClick = (item) => {
    if (item.to.startsWith("#")) {
      const sectionId = item.sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <nav
      className={`w-full py-4 relative z-[1000] transition-all duration-300 ${
        isSticky ? "md:sticky md:top-0" : ""
      } shadow-[0px_25px_60px_-15px_rgba(180,195,229,0.20)] dark:bg-[#070622] bg-[#F9F9F9]`}
      style={{
        backgroundImage: `url(${navbg})`,
        backgroundSize: "cover",
      }}
    >
      {/* Gradient border-b */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7A43A4] to-[#6049BC]" />

      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={theme === "dark" ? logo : whiteModeLogo}
            alt="Logo"
            className="h-15"
          />
        </Link>

        <ul className="hidden lg:flex gap-8">
          {list.map((item, i) => {
            const isActive = activeSection === item.sectionId;

            return (
              <li key={i} className="relative">
                <a
                  href={item.to}
                  onClick={(e) => {
                    if (item.to.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(item);
                    }
                  }}
                  className={`text-[16px] not-italic font-semibold leading-[160%] transition-all duration-300 relative pb-2 ${
                    isActive
                      ? "text-[#7A43A4]"
                      : "text-[#A1A1A1] hover:text-[#7A43A4]"
                  }`}
                >
                  {item.label}
                  {/* Active indicator border */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#7A43A4] animate-in slide-in-from-left duration-300" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex gap-4">
          <div className="hidden md:block">
            <button
              className="rounded-[12px] cursor-pointer bg-transparent text-[16px] font-normal text-[#6049bc] dark:text-white border border-[#6049bc] px-5 py-2 font-['Space_Grotesk'] hover:bg-[#6049bc]/10 transition-all duration-300"
              style={{
                boxShadow: "0px 20px 30px -10px rgba(96, 73, 188, 0.6)",
              }}
            >
              Signin
            </button>
          </div>

          <div className="hidden md:block">
            <button
              className="relative rounded-[12px] bg-[#6049bc] hover:bg-[#7A43A4] duration-200 text-white border-0 text-[16px] px-5 py-2 font-['Space_Grotesk'] cursor-pointer transition-all"
              style={{
                boxShadow: "0px 20px 30px -10px rgba(96, 73, 188, 0.6)",
              }}
            >
              Signup
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <LanguageSwitcher />

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-[12px] border border-[#6049bc] dark:text-white text-[#070622] hover:bg-[#6049bc] hover:text-white transition-all duration-300"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-4 mt-[5rem]">
              <ul className="space-y-4">
                {list.map((item, i) => {
                  const isActiveMobile = activeSection === item.sectionId;

                  return (
                    <li key={i}>
                      <a
                        href={item.to}
                        onClick={(e) => {
                          if (item.to.startsWith("#")) {
                            e.preventDefault();
                            handleNavClick(item);
                          }
                          setIsOpen(false);
                        }}
                        className={`text-[14px] font-semibold leading-normal transition-all duration-300 block pb-1 border-b-2 ${
                          isActiveMobile
                            ? "text-[#7A43A4] border-[#7A43A4]"
                            : "text-foreground hover:text-[#7A43A4] border-transparent"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="rounded-md w-full text-[16px] px-5 py-5 hover:bg-[#7A43A4] hover:text-white hover:border-[#7A43A4] transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
