import "./dropdown.css";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/authSlice";
function DropUserMenu() {
  const list = ["Your profile", "Order", "Wish List", "Sign out"];
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  return (
    <>
      <div className="  absolute sm:-ml-2 h-auto  drop  text-black bg-white shadow rounder-lg ">
        <ul>
          {list.map((item, index) => (
            <li key={index} className="px-5 py-1 hover:bg-blue-400 shadow ">
              {item === "Sign out" ? (
                <button onClick={handleLogout}>{item}</button>
              ) : (
                <a href="/">{item}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default DropUserMenu;
