import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const navigation = [
  { name: "Dashboard", href: "dashboard", current: true },
  { name: "Team", href: "team", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false }
];

export default function Navbar3() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="flex flex-shrink-0 items-center">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search"
                className="block w-full h-8 px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-800 lg:w-auto"
              />
            </div>
            {/* Render navigation links on desktop */}
            <div className="hidden sm:flex space-x-4 ml-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-white ${
                    item.current ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/* Render menu button and cart icon */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* ... (other code) */}
          </div>
          <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <FaCartPlus className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Slide-in navigation menu on mobile */}
        <Transition
          show={isMobileMenuOpen}
          enter="transition-transform duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          {(ref) => (
            <div
              ref={ref}
              className={`sm:hidden bg-gray-800 absolute top-0 left-0 w-full h-full transform ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex flex-col items-start p-4 space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-white ${
                      item.current ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  );
}
