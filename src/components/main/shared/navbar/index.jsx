import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router";
import logo from "../../../../assets/logo.png";
import navbg from "../../../../assets/Stars.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const list = [
    { label: "Home", to: "/" },
    { label: "Features", to: "#features" },
    { label: "Pricing", to: "#pricing" },
    { label: "FAQs", to: "#faq" },
    { label: "Blogs", to: "#blogs" },
  ];

  return (
    <nav
      className="w-full py-4 relative z-[1000] sticky top-0 shadow-[0px_25px_60px_-15px_rgba(180,195,229,0.20)]"
      style={{
        backgroundColor: "#070622",
        backgroundImage: `url(${navbg})`,
        backgroundSize: "cover",
      }}
    >
      {/* Gradient border-b */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7A43A4] to-[#6049BC]" />

      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-15" />
        </Link>

        <ul className="hidden md:flex gap-8">
          {list.map((item, i) => (
            <li key={i}>
              <a
                href={item.to} // Using href for anchor links
                className={`text-[16px] not-italic font-semibold leading-[160%] transition relative ${
                  location.pathname === item.to
                    ? "gradient-text"
                    : "text-[#A1A1A1]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-4">
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="rounded-lg bg-transparent text-[16px] font-normal default-text  border-[#6049bc] px-5 py-5"
              style={{
                boxShadow: "0px 20px 30px -10px rgba(96, 73, 188, 0.6)",
              }}
            >
              Signin
            </Button>
          </div>
          <div className="hidden md:block">
            <Button
              className="relative rounded-lg bg-[#6049bc] hover:border-[#6049bc] text-white border-0 text-[16px] px-5 py-5"
              style={{
                boxShadow: "0px 20px 30px -10px rgba(96, 73, 188, 0.6)",
              }}
            >
              Signup
            </Button>
          </div>
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="rounded-lg text-[16px] px-5 py-5 border-0 text-white"
              style={{
                background:
                  "linear-gradient(180deg, rgba(122, 67, 164, 0.30) 0%, rgba(96, 73, 188, 0.17) 100%)",
              }}
            >
              En
            </Button>
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
            <SheetContent side="left" className="w-64 p-4">
              <ul className="space-y-4">
                {list.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`text-[14px] font-semibold leading-normal transition ${
                        location.pathname === item.to
                          ? "text-[#B3A162]"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="rounded-md w-full text-[16px] px-5 py-5"
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
