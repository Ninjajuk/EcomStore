import React from "react";
import NavLinks from "./NavLinks";
import UserPanel from "./UserPanel";

function AdminSidebar({ isMobileSidebarOpen }) {
  return (
    <div
      className={`md:w-1/5 max-h-screen bg-gray-800 text-white p-4 flex flex-col ${
        isMobileSidebarOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col justify-between px-2 h-full">
        <div className="">
          <div className="text-xl font-bold mb-4">NinjaKing</div>
        </div>
        <div className="flex-grow">
          <NavLinks />
        </div>
        <div>
          <UserPanel />
        </div>
      </div>
    </div>
  );
}
export default AdminSidebar;
