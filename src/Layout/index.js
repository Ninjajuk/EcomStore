import { useState } from "react";
import Navbar1 from "../Components/Navbar/Navbar1";
// import Navbar2 from "../Components/Navbar/Navbar2";

import SidebarMain from "../Components/Sidebar/SidebarMain";

import {
  FaHome,
  FaUsers,
  FaFolder,
  FaRegCalendarAlt,
  FaFileAlt,
  FaChartPie,
  FaArrowRight,
  FaArrowLeft
} from "react-icons/fa";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  const [sidebarWidth, setSidebarWidth] = useState("250px"); // Initial width
  const [mainMargin, setMainMargin] = useState("250px"); // Initial margin

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isSidebarOpen) {
      setSidebarWidth("10px");
      setMainMargin("10px");
    } else {
      setSidebarWidth("250px");
      setMainMargin("250px");
    }
  };

  const data = [
    { menu: "Dashboard", icon: <FaHome />, submenu: [], path: "/dashboard" },
    {
      menu: "Team",
      icon: <FaUsers />,
      submenu: ["Cricket", "Football", "Hockey"],
      path: "/team"
    },
    { menu: "Project", icon: <FaFolder />, submenu: [], path: "" },
    { menu: "Calender", icon: <FaRegCalendarAlt />, submenu: [], path: "" },
    { menu: "Documents", icon: <FaFileAlt />, submenu: [], path: "" },
    { menu: "Reports", icon: <FaChartPie />, submenu: [], path: "" }
  ];

  return (
    <>
      <Navbar1 />
      {/* <Navbar2 toggle={toggle} /> */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          style={{ width: sidebarWidth }}
          className="bg-gray-800 text-white p-4 overflow-hidden transition-all duration-300 fixed h-full top-16"
        >
          <div className="flex justify-center mb-4 ">
            <button
              onClick={toggleSidebar}
              className="text-gray-400  focus:outline-none focus:text-white"
            >
              {/* {isSidebarOpen ? "→" : "→"} */}
              {isSidebarOpen ? (
                <FaArrowLeft className="w-5 h-5 mr-2 bg-gray-900 text-white rounded-full" />
              ) : (
                <FaArrowRight className="w-5 h-5 mr-2 bg-gray-900 text-white rounded-full" />
              )}
            </button>
          </div>

          <div className=" justify-center mb-4 ">
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
          </div>
        </aside>

        {/* Main Content */}
        <main
          // className={`${
          //   isSidebarOpen ? "ml-250" : "ml-0"
          // } flex-grow p-4 overflow-y-auto transition-all duration-300`}
          style={{ marginLeft: mainMargin }}
          className="flex-grow p-4 overflow-y-auto transition-all duration-300"
        >
          {/* <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-800 p-2 focus:outline-none focus:bg-gray-300"
        >
          ☰
        </button> */}
          {/* Your main content goes here */}
          {children}
        </main>
      </div>
    </>
  );
}
export default Layout;
