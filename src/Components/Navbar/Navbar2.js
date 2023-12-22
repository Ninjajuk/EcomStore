import { FaCartPlus } from "react-icons/fa";
import { FaBell, FaAlignJustify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../actions/userActions";

const Navbar2 = ({ toggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, isAuthenticated, user } = useSelector((state) => state);

  const handleLogin = () => {
    // Assuming the login data is stored in local storage
    const storedLoginData = JSON.parse(localStorage.getItem("user"));

    dispatch(login(storedLoginData));

    console.log(user); // Add this line

    navigate("/"); // Redirect to the home page after login
  };

  const handleLogout = () => {
    // Assuming you have a logout action defined and imported from your userActions file
    dispatch(logout());

    // Redirect to the login page after logout
    navigate("/login");
  };

  return (
    <>
      <nav
        style={{ width: "100%", height: "56px" }}
        className="fixed top-0 left-0 right-0 "
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 0px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* <MenuBar /> */}
            <div>
              {/* <p onClick={toggle}>NinjaKing</p> */}
              <FaAlignJustify
                onClick={toggle}
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "10px",
                  paddingBottom: "5px",
                  cursor: "pointer"
                }}
              />
            </div>
          </div>
          <div
            className="sm:w-full sm:pr-2"
            style={{
              display: "flex",
              flex: "1 1 0%",
              alignItems: "center",
              justifyContent: "center",
              width: "25%",
              padding: "0px 20px"
            }}
          >
            <input
              type="text"
              className="px-4 py-1 mb-2 w-full text-black w-72 rounded-lg"
              placeholder="Search for products, brands and more"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div className="md:relative md:inline-block">
              <UserMenu />
            </div>
            <div
              className="hidden md:block"
              style={{ position: "relative", paddingLeft: "5px" }}
            >
              <FaBell
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
              />
              <span
                className="cart-item-count"
                style={{
                  backgroundColor: "yellow",
                  color: "black",
                  position: "absolute"
                }}
              >
                1
              </span>
            </div>

            <div
              style={{ padding: "0px 15px", display: "block" }}
              className=" hover:cursor-pointer"
            >
              <div
                style={{ position: "relative" }}
                className="hidden md:block cart-con mr-2.5"
              >
                <FaCartPlus
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                  onClick={() => navigate("/cart1")}
                />
                <span className="cart-item-count">{cart.length}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar2;
