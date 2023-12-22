import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar4 = ({ toggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, isAuthenticated, user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart);
  // const { cart, isAuthenticated, user } = useSelector((state) => state);
  useEffect(() => {}, [cart]);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigationLinks = [
    // { name: "Dashboard", href: "/dashboard", current: true },
    { name: "Wishlist", href: "team", current: false },
    { name: "Orders", href: "#", current: false }
    // { name: "Login", href: "#", current: false }
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <nav className="bg-gray-800 py-4 overflow-y-auto">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo (visible in desktop view) */}
          <div className="hidden md:block">
            <Bars3Icon
              onClick={toggleSidebar}
              className="h-6 w-6 text-blue-600 font-medium"
            />
          </div>

          {/* Menu Toggle (visible in mobile view) */}
          <button className="md:hidden text-blue-500 ml-2" onClick={toggleMenu}>
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-500" />
            )}
          </button>

          {/* Search Input */}
          <div className="flex-grow md:w-1/2 mx-4 md:mx-0">
            <input
              type="text"
              className="w-full rounded-full px-4 py-2 bg-gray-700 text-white focus:outline-none"
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            className=" hidden md:flex rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            {isAuthenticated ? (
              <span className="text-xl  font-medium flex items-center ">
                Welcome, {user.Email}
              </span>
            ) : (
              <button className="rounded-md  p-1 text-gray-300 hover:bg-gray-700 hover:text-white">
                Login
              </button>
            )}
          </button>

          {/* Navigation Links (visible in desktop view) */}
          <div className="hidden md:flex space-x-4 px-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={classNames(
                  link.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Cart Icon */}
          <div className="relative px-2">
            <FaCartPlus className="h-8 w-8 text-white " aria-hidden="true" />
            <span className="absolute font-medium top-0 right-0 -mt-4  bg-red-600 text-white rounded-full text-xxs px-1 py-0.5">
              {/* {cart && Array.isArray(cart) ? cart.length : 0} */}
              {cartItems.length}
            </span>
          </div>
        </div>
      </nav>

      {/* Navigation Links (visible in mobile view) */}
      <div
        className={`md:hidden bg-gray-700  transition-all ease-in-out duration-300 ${
          menuOpen ? "h-auto " : "h-0 overflow-hidden mt-0"
        }`}
      >
        {navigationLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`block px-4 py-2 text-white hover:bg-green-800 ${
              link.current ? "bg-gray-600" : ""
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
      {/* Navigation Links (visible in mobile view) */}
    </>
  );
};

export default Navbar4;
