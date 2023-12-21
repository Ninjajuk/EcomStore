import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropUserMenu from "./DropUserMenu";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, loginFailure, logout } from "../../Redux/userSlice";

import { useNavigate } from "react-router-dom";

function UserMenu() {
  const [dropuser, setDropuser] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedLoginData = JSON.parse(localStorage.getItem("user"));

    if (storedLoginData) {
      // Dispatch the login action with the user data
      dispatch(loginSuccess(storedLoginData));
    }
  }, []);

  // const handleLogin = () => {
  //   if (isAuthenticated) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // };

  const handleLogin = () => {
    // Assuming the login data is stored in local storage
    const storedLoginData = JSON.parse(localStorage.getItem("user"));

    if (storedLoginData && isAuthenticated) {
      console.log(user.Email);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div
        className=" relative inline-block"
        onClick={() => setDropuser(!dropuser)}
      >
        {isAuthenticated ? (
          <button className="sm:float-right flex px-2 items-center">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Update with the user avatar property
              alt=""
            />
            <span className="hidden md:block pl-2">
              <span className="font-medium text-black" aria-hidden="true">
                {user.username} {/* Update with the user username property */}
              </span>
            </span>
            <span className="hidden md:block text-red pl-2">
              <FaChevronDown />
            </span>
          </button>
        ) : (
          <button
            className="sm:float-right flex px-2 items-center"
            onClick={handleLogin}
          >
            <span className="t"> new User Login</span>
          </button>
        )}
        {dropuser && <DropUserMenu />}
      </div>
    </>
  );
}
export default UserMenu;
