import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaFolder,
  FaRegCalendarAlt,
  FaFileAlt,
  FaChartPie
} from "react-icons/fa";

const SidebarMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const data = [
    { menu: "Dashboard", icon: <FaHome />, submenu: [], path: "" },
    {
      menu: "Team",
      icon: <FaUsers />,
      submenu: ["Cricket", "Football", "Hockey"],
      path: ""
    },
    { menu: "Project", icon: <FaFolder />, submenu: [], path: "" },
    { menu: "Calender", icon: <FaRegCalendarAlt />, submenu: [], path: "" },
    { menu: "Documents", icon: <FaFileAlt />, submenu: [], path: "" },
    { menu: "Reports", icon: <FaChartPie />, submenu: [], path: "" }
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-250" : "w-10"
        } max-h-screen bg-gray-800 text-white p-4 overflow-hidden transition-all duration-300`}
      >
        <div className="flex justify-center mb-4 ">
          <button
            onClick={toggleSidebar}
            className="text-gray-400  focus:outline-none focus:text-white"
          >
            ☰
          </button>
        </div>

        <ul className="flex flex-col justify-start h-full  space-y-4">
          {data.map((item, index) => (
            <li key={index} className="mb-4">
              <a href={item.path} className="flex items-center">
                <span className="flex items-center justify-center w-10 h-10 mr-2 bg-gray-900 text-white rounded-full">
                  {item.icon}
                </span>
                {item.menu}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main
        className={`${
          isSidebarOpen ? "ml-250" : "ml-0"
        } flex-grow p-4 transition-all duration-300`}
      >
        {/* <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-800 p-2 focus:outline-none focus:bg-gray-300"
        >
          ☰
        </button> */}
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default SidebarMain;
