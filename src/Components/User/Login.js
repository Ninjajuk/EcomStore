import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

import "./LoginStyle.css";
import { useDispatch } from "react-redux";
import { login, logout } from "../../Redux/authSlice"; // Import login action from authSlice
import { Grid } from "react-loader-spinner";

const Login = () => {
  const [loading, setLoading] = useState(true); // Set initial loading state
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false); // Set loading to false after some time
    }, 2000); // Simulating a 2-second loading time
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    Email: "",
    Password: ""
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Attempting login...");
    try {
      await dispatch(login(user));
      console.log("Login successful, navigating to /");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <>
      {loading ? (
        // Show loading spinner while loading
        <div className="flex items-center justify-center h-screen">
          <Grid type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        <div className="loginContainer ">
          <div className="formContainer shadow rounded-lg relative">
            <h1
              style={{ color: "rebeccapurple" }}
              className="text-center semibold text-lg font-semibold"
            >
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center "
            >
              <input
                className="px-3 py-1 my-4 border-2 border-rose-600 w-full mb-4  "
                label="Username"
                name="Email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                className="w-full px-3 py-1 my-4 border-2 border-rose-600  "
                label="Password"
                name="Password"
                placeholder="Password"
                onChange={handleChange}
              />
              <p className="w-full flex gap-x-2 mt-2 mb-4">
                <span>Remember me</span>
                <span
                  onClick={() => navigate("/reset")}
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    paddingLeft: "20px",
                    color: "blue"
                  }}
                >
                  Forgot Password?
                </span>
              </p>
              <div className=" w-full flex items-center justify-center gap-x-6 mt-2 ">
                <button className="w-32 bg-gray-400 hover:bg-gray-600  py-2 px-2 rounded-lg">
                  Login
                </button>

                <button
                  onClick={() => {
                    navigate("/verify-otp");
                  }}
                  className=" w-3/4 bg-gray-400 hover:bg-gray-600 py-2 px-2 rounded-lg"
                >
                  Login with OTP
                </button>
              </div>
      
   
              <p className=" w-full flex items-center justify-center gap-x-1  absolute bottom-0 mb-3   ">
                Don't have an account?
                <span
                  onClick={() => navigate("/register")}
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "blue",
                    paddingLeft: "10px"
                  }}
                >
                  Register
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
