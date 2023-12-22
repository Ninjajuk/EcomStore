import React, { useState } from "react";
// import { userprofile } from "../../Sidebar/data";
import { userprofile } from "./profiledata";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";

const LeftProfileDiv = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [openMenu, setOpenMenu] = useState("");

  const handleSubMenuClick = (menu) => {
    if (openMenu === menu) {
      setOpenMenu("");
    } else {
      setOpenMenu(menu);
    }
  };

  const isActiveMenu = (menuPath) => {
    if (menuPath === "") {
      return userprofile.some((item) =>
        item.submenu.some(
          (subItem) => location.pathname === `${item.path}${subItem.path}`
        )
      );
    }
    return location.pathname.includes(menuPath);
  };

  const isActiveSubMenu = (submenuPath) => {
    if (location.pathname === submenuPath) {
      return location.pathname === submenuPath;
    }
    return null;
  };

  const isMenuWithActiveSubmenu = (menu) => {
    return (
      Array.isArray(menu.submenu) &&
      menu.submenu.some((subItem) => location.pathname.includes(subItem.path))
    );
  };

  return (
    <div className="h-full  px-4 py-8  flex flex-col overflow-hidden overflow-y-auto ">
      <div className="h-[60px] flex py-4 first:pt-0 last:pb-0 cursor-pointer items-center bg-white rounded-md shadow-md p-4 md:items-start">
        <div className="max-h-10 max-w-10 ">
          <img
            className="h-full w-full rounded-full"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt=""
          />
        </div>

        <div className="ml-3">
          <p className="text-sm font-medium text-slate-900">Samsu</p>
          <p className="text-sm text-slate-500 truncate">
            biosamsuddin@gmail.com
          </p>
        </div>
      </div>

      <div className=" bg-white rounded-md shadow-md p-4 mt-4 flex-grow">
        {userprofile.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => {
                handleSubMenuClick(item.menu);
                navigate(`${item.path}`);
              }}
              className={`flex items-center p-3 space-x-2 hover:bg-gray-400 cursor-pointer rounded-full ${
                isActiveMenu(item.path) && isActiveSubMenu(item.path)
                  ? "bg-gray-400"
                  : ""
              }`}
            >
              {item.icon}
              <span>{item.menu}</span>
              {item.submenu.length > 0 ? (
                openMenu === item.menu ? (
                  <span className="ml-auto text-2xl">
                    <FaAngleUp />
                  </span>
                ) : (
                  <span className="ml-auto text-2xl">
                    <FaAngleDown />
                  </span>
                )
              ) : null}
            </div>
            {Array.isArray(item.submenu) &&
              (item.submenu.length > 0 ||
                item.submenu.some((subItem) =>
                  isActiveSubMenu(`${item.path}${subItem.path}`)
                )) && (
                <div
                  className={`flex flex-col ${
                    openMenu === item.menu ||
                    item.submenu.some((subItem) =>
                      isActiveSubMenu(`${item.path}${subItem.path}`)
                    )
                      ? "block"
                      : "hidden"
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={`${item.path}${subItem.path}`}
                      className={`pl-10 py-2 hover:bg-gray-400 rounded-full ${
                        isActiveSubMenu(`${item.path}${subItem.path}`)
                          ? "bg-gray-400"
                          : ""
                      }`}
                    >
                      {subItem.title}
                    </NavLink>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftProfileDiv;
