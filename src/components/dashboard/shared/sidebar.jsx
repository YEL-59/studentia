import logo from "@/assets/dashboard-logo.png";
import accountIcon from "@/assets/icons/account-icon.svg";
import activeIcon from "@/assets/icons/active-icon.svg";
import adminPanelIcon from "@/assets/icons/admin-panel-icon.svg";
import aiTutorsIcon from "@/assets/icons/ai-tutors-icon.svg";
import dashboardIcon from "@/assets/icons/dashboard-icon.svg";
import documentIcon from "@/assets/icons/documents-icon.svg";
import unActiveIcon from "@/assets/icons/inactive-icon.svg";
import downArrowIcon from "@/assets/icons/lower-arrow-icon.svg";
import revisionToolsIcon from "@/assets/icons/revision-tools-icon.svg";
import subscriptionPanelIcon from "@/assets/icons/subscription-panel-icon.svg";
import writingToolsIcon from "@/assets/icons/writing-tools-icon.svg";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import whiteDashboardIcon from "@/assets/icons/dashboard-mobile-icon.svg";

function Sidebar() {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState("Ai Writer");
  const location = useLocation();
  const navigate = useNavigate();

  // Map sidebar items to their corresponding routes
  const routeMap = {
    "Writing tools": "/dashboard/writing-tools/ai-writers",
    "Revision Tools": "/dashboard/revision-tools",
    "Ai Tutor": "/dashboard/ai-tutors",
    'Documents': "/dashboard/documents",
    "Subscription Panel": "/dashboard/subscription-panel",
    'Account': "/dashboard/account",
    "Admin Panel": "/dashboard/admin-panel",
  };

  // Submenu items with their routes
  const subMenuItems = {
    "Writing tools": [
      { name: "Ai Writer", route: "/dashboard/writing-tools/ai-writers" },
      { name: "Article Writer", route: "/dashboard/writing-tools/article" },
      { name: "Ai Code", route: "/dashboard/writing-tools/ai-code" },
    ],
    "Revision Tools": [
      { name: "Pdf Scan", route: "/dashboard/revision-tools/pdf-scan" },
      { name: "Ai Quiz", route: "/dashboard/revision-tools/ai-quiz" },
      { name: "Ai Podcast", route: "/dashboard/revision-tools/podcast" },
    ],
    'Documents': [
      { name: "All documents", route: "/dashboard/documents/all" },
      { name: "All Codes", route: "/dashboard/documents/codes" },
      { name: "Workbooks", route: "/dashboard/documents/workbooks" },
    ],
  };

  const isSubmenuActive = (parentTitle) => {
    if (!subMenuItems[parentTitle]) return false;
    return subMenuItems[parentTitle].some((item) =>
      location.pathname.startsWith(item.route)
    );
  };

  useEffect(() => {
    Object.keys(subMenuItems).forEach((parentTitle) => {
      if (isSubmenuActive(parentTitle)) {
        setOpenSubmenu(parentTitle);
        const activeItem = subMenuItems[parentTitle].find((item) =>
          location.pathname.startsWith(item.route)
        );
        if (activeItem) {
          setActiveSubItem(activeItem.name);
        }
      }
    });
  }, [location.pathname]);

  const handleMenuItemClick = (title) => {
    const route = routeMap[title];
    if (route) {
      navigate(route);
      if (subMenuItems[title]) {
        setOpenSubmenu(openSubmenu === title ? null : title);
        if (subMenuItems[title][0]) {
          setActiveSubItem(subMenuItems[title][0].name);
        }
      }
    }
  };

  const handleSubItemClick = (itemName, route) => {
    setActiveSubItem(itemName);
    navigate(route);
  };

  const handleMenuOpen = (title, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const aiTools = [
    {
      icon: writingToolsIcon,
      title: "Writing tools",
      downArrow: downArrowIcon,
      hasSubmenu: true,
    },
    {
      icon: revisionToolsIcon,
      title: "Revision Tools",
      downArrow: downArrowIcon,
      hasSubmenu: true,
    },
    {
      icon: aiTutorsIcon,
      title: "Ai Tutor",
      hasSubmenu: false,
    },
    {
      icon: documentIcon,
      title: "Documents",
      downArrow: downArrowIcon,
      hasSubmenu: true,
    },
    {
      icon: subscriptionPanelIcon,
      title: "Subscription Panel",
      hasSubmenu: false,
    },
    {
      icon: accountIcon,
      title: "Account",
      hasSubmenu: false,
    },
    {
      icon: adminPanelIcon,
      title: "Admin Panel",
      hasSubmenu: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#1C202B]">
      <div className="h-[80px] p-[10px] bg-[#1C202B] bg-gradient-to-t from-[rgba(96,73,188,0.17)] to-[rgba(122,67,164,0.3)]">
        <img src={logo} alt="logo" />
      </div>
      <div className="h-[calc(100svh-80px)] flex flex-col font-['Space_Grotesk'] px-8">
        <Link
          to={`/dashboard`}
          className={`flex items-center gap-1 p-[10px] rounded-[6px] ${
            location.pathname === "/dashboard" ||
            location.pathname === "/dashboard/"
              ? "text-[#6A4690]"
              : "text-white"
          } transition-all duration-200`}
          onClick={() => {
            setOpenSubmenu(null);
            setActiveSubItem(null);
          }}
        >
          <img
            src={
              location.pathname === "/dashboard" ||
              location.pathname === "/dashboard/"
                ? dashboardIcon
                : whiteDashboardIcon
            }
            alt="dashboard-icon"
          />
          <p className="text-3xl font-bold leading-[132%] tracking-[-0.237px]">
            Dashboards
          </p>
        </Link>
        <div className="text-[#FFF]">
          <h2 className="text-base leading-[132%] tracking-[-0.158px] px-8 py-[10px] font-bold">
            Ai Panel
          </h2>
          <div className="flex flex-col gap-3 px-4">
            {aiTools.map((tool) => {
              const isActive =
                location.pathname.startsWith(routeMap[tool.title]) ||
                isSubmenuActive(tool.title);
              return (
                <div key={tool.title}>
                  <div
                    className={`flex items-center justify-between rounded-[6px] px-4 py-[10px] cursor-pointer ${
                      isActive
                        ? 'bg-[linear-gradient(180deg,#7A43A4_0%,#6049BC_100%)]'
                        : 'border border-[#E6A0E2] hover:bg-[#2D3240]'
                    } transition-all duration-300`}
                    onClick={() => handleMenuItemClick(tool.title)}
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <img src={tool.icon} alt="icon" />
                      <p
                        className={`text-base font-medium leading-[132%] tracking-[-0.316px] ${
                          isActive ? 'text-white' : 'text-[#E6A0E2]'
                        }`}
                      >
                        {tool.title}
                      </p>
                    </div>
                    {tool.downArrow && (
                      <img
                        src={tool.downArrow}
                        alt="icon"
                        onClick={(e) => handleMenuOpen(tool.title, e)}
                        className="hover:scale-110 transition-transform"
                      />
                    )}
                  </div>

                  {openSubmenu === tool.title && subMenuItems[tool.title] && (
                    <div className="flex flex-col gap-1 px-4 mt-2">
                      {subMenuItems[tool.title].map((item) => (
                        <div
                          key={item.name}
                          className={`flex items-center gap-4 pl-8 py-3 rounded trasition-all duration-300${
                            activeSubItem === item.name
                              ? 'bg-[#2D3240] border rounded-[16px] border-[#2D3240]'
                              : ''
                          }`}
                          onClick={() =>
                            handleSubItemClick(item.name, item.route)
                          }
                        >
                          <img
                            src={
                              activeSubItem === item.name
                                ? activeIcon
                                : unActiveIcon
                            }
                            alt="icon"
                          />
                          <p className="text-sm">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
