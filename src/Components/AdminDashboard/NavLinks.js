import React, { useState } from "react";
// import {data,team,sidebarBottom} from '../Sidebar/data'
import {
  FaHome,
  FaUsers,
  FaFolder,
  FaRegCalendarAlt,
  FaChartPie,
  FaFileAlt
} from "react-icons/fa";
import UserPanel from "./UserPanel";

function NavLinks() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };
  const data = [
    { menu: "Dashboard", icon: <FaHome />, submenu: "", path: "dashboard" },
    {
      menu: "Team",
      icon: <FaUsers />,
      submenu: ["Cricket", "Football", "Hockey"],
      path: ""
    },
    { menu: "Project", icon: <FaFolder />, submenu: "", path: "dashboard" },
    { menu: "Calender", icon: <FaRegCalendarAlt />, submenu: "", path: "" },
    { menu: "Documents", icon: <FaFileAlt />, submenu: "", path: "" },
    { menu: "Reports", icon: <FaChartPie />, submenu: "", path: "" }
  ];

  return (
    <>
      <ul className=" list-none">
        {data.map((item, index) => (
          <li className="py-1 rounded-full" key={index}>
            <a
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                // console.log(`clicked on ${item.path}`);
                handleMenuClick(index);
              }}
              // className="flex items-center gap-x-2"
              className={`flex items-center gap-x-2  ${
                activeSubmenu === index ? "bg-gray-200 text-blue-400" : ""
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.menu}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavLinks;
