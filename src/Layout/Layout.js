import { useState } from "react";
import Navbar1 from "../Components/Navbar/Navbar1";

import Sidebar from "../Components/Sidebar/Sidebar";

function Layout1({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar1
        isMobileSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`${
            isSidebarOpen ? "w-250" : "w-0"
          } h-full bg-white text-white  overflow-hidden transition-all duration-300`}
        >
          <Sidebar isMobileSidebarOpen={isSidebarOpen} />
        </aside>
        <main
          className={`${
            isSidebarOpen ? "ml-250" : "ml-0" // Add left margin when open
          } flex-grow p-4 transition-all duration-300`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout1;
