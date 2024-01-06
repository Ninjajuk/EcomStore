import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MainContent from "./AdminMainContent";
import Sidebar1 from "../Sidebar/Sidebar1";

import Header from "./Header";

function AdminLayout({ children }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const MobileSidebarOpen = false; // Set this to true to open the sidebar by default on mobile

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  return (
    <div className="max-h-screen bg-red-100">
      <Header
        toggleMobileSidebar={toggleMobileSidebar}
        isMobileSidebarOpen={isMobileSidebarOpen}
      />
      <div className="flex md:flex-row ">
        <Sidebar1
          isMobileSidebarOpen={isMobileSidebarOpen}
          toggleMobileSidebar={toggleMobileSidebar}
          style={{ height: "calc(100vh -4rem)" }}
        />
        {/* <MainContent
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          style={{height:'calc(100% -4rem)'}}
          
        /> */}
        <main
          className={`md:w-4/5 flex-grow bg-gray-400 overflow-hidden  ${
            isMobile && MobileSidebarOpen ? "ml-0" : "ml-1/5"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
