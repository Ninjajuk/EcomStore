import React, { useState } from "react";
import Sidebar from "./AdminSidebar";
import MainContent from "./AdminMainContent";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Layout2() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex md:flex-row">
        <div className="hidden md:block w-1/5 h-screen bg-gray-600">
          {/* <Sidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          toggleMobileSidebar={toggleMobileSidebar}
        /> */}
          <p> Sidebar</p>
        </div>

        {/* main content */}

        <div className="bg-green-400 w-full md:w-4/5 min-h-screen">
          <nav className="container mx-auto flex justify-between items-center">
            {/* Menu Toggle (visible in mobile view) */}
            <button
              className="md:hidden text-white mx-2"
              onClick={setIsMobileSidebarOpen}
            >
              {isMobileSidebarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>

            {/* Search Input */}
            <div className="flex-grow md:w-1/2 mx-4 my-2 md:mx-0">
              <input
                type="text"
                className="w-full rounded-full px-4 py-2 bg-gray-700 text-white focus:outline-none"
                placeholder="Search..."
              />
            </div>
            {/* User icon */}
            <div className="text-xl w-10 h-10 mx-2">
              <img
                class="w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
            </div>
          </nav>

          <p> Main Content</p>
        </div>
      </div>
    </div>
  );
}

export default Layout2;
