import React, { useState } from "react";

function Header({ toggleMobileSidebar, isMobileSidebarOpen }) {
  return (
    <div
      className="sticky top-0 z-10  flex items-center justify-between p-4 bg-white"
      style={{ height: "4rem", backgroundColor: "rgba(128, 0, 128, 0.8)" }}
    >
      <div>
        {/* Menu icon */}

        <button
          className="md:hidden text-gray-600"
          onClick={toggleMobileSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button className="hidden md:block">
          <h1 className="text-white text-xl font-semibold leading-5 tracking-tight">
            NinjaKing
          </h1>
        </button>
      </div>

      <div>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1  "
        />
      </div>

      {/* User icon */}
      <div className="text-xl w-10 h-10  flex justify-end">
        {/* <h1 className='font-medium text-gray-600'>Hello User</h1> */}
        <img
          class="w-full h-full rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
