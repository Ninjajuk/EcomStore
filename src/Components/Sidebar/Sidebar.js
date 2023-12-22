import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const Sidebar = ({ isMobileSidebarOpen }) => {
  const [openMenu, setOpenMenu] = useState(""); // Keep track of opened submenu
  const [sidebarData, setSidebarData] = useState([
    {
      menu: "Dashboard",
      icon: "",
      path: "/dashboard",
      active: false
    },
    {
      menu: "My Shop",
      icon: "",
      submenu: [
        {
          title: "Add Products",
          path: "/addproducts",
          active: false
        },
        {
          title: "Details Product ",
          path: "#",
          active: false
        },
        { title: "Orders", path: "/orders", active: false },
        { title: "Customers", path: "/customers", active: false }
      ],
      path: "/shop",
      active: false
    },
    {
      menu: "Business analytics",
      icon: "",
      path: "#",
      active: false
    },
    {
      menu: "Team",
      icon: "",
      submenu: [
        { title: "Cricket", path: "#", active: false },
        { title: "Football", path: "#", active: false },
        { title: "Hockey", path: "#", active: false }
      ],
      path: "",
      active: false
    }
    // Add more menu items here
  ]);

  // Function to handle submenu click
  const handleSubMenuClick = (menu) => {
    setOpenMenu(menu); // Set the clicked menu as openMenu
    // Update the 'active' property of menu items and sub-items
    const updatedData = sidebarData.map((item) => {
      if (item.menu === menu) {
        // Set the parent menu as active
        item.active = true;
      } else {
        // Set other menu items as inactive
        item.active = false;
      }
      if (Array.isArray(item.submenu)) {
        item.submenu = item.submenu.map((subItem) => {
          subItem.active = false; // Set all submenu items as inactive
          return subItem;
        });
      }
      return item;
    });
    setSidebarData(updatedData);
  };

  // Function to handle submenu item click
  const handleSubMenuItemClick = (menu, subIndex) => {
    // Update the 'active' property of submenu items
    const updatedData = sidebarData.map((item) => {
      if (item.menu === menu && Array.isArray(item.submenu)) {
        item.submenu = item.submenu.map((subItem, index) => {
          subItem.active = index === subIndex; // Set submenu item as active
          return subItem;
        });
      }
      return item;
    });
    setSidebarData(updatedData);
  };

  // Rest of the component remains the same

  return (
    <div className="bg-gray-900 text-white w-64 h-screen">
      <div className="p-4">
        {sidebarData.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => handleSubMenuClick(item.menu)}
              className={`flex items-center p-3 space-x-2 hover:bg-gray-800 ${
                item.active ? "bg-gray-800" : ""
              }`}
            >
              {item.icon}
              <span>{item.menu}</span>
              {Array.isArray(item.submenu) && item.submenu.length > 0 ? (
                openMenu === item.menu ? (
                  <span className="ml-auto text-2xl">
                    <FaAngleDown />
                  </span>
                ) : (
                  <span className="ml-auto text-2xl">
                    <FaAngleRight />
                  </span>
                )
              ) : null}
            </div>
            {Array.isArray(item.submenu) && openMenu === item.menu && (
              <div className="flex flex-col">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={`${item.path}${subItem.path}`}
                    className={`pl-10 py-2 hover:bg-gray-800 ${
                      subItem.active ? "bg-gray-800" : ""
                    }`}
                    onClick={() => handleSubMenuItemClick(item.menu, subIndex)}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
