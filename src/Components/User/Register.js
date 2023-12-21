import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "react-loader-spinner";

import "./LoginStyle.css";
const Register = () => {
  const [loading, setLoading] = useState(true); // Set initial loading state
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false); // Set loading to false after some time
    }, 2000); // Simulating a 2-second loading time
  }, []);

  const navigate = useNavigate();
  const initialFormDetails = {
    Name: "",
    Email: "",
    Phone: "",
    Password: "",
    ConfrimPassword: ""
  };
  const [user, setUsers] = useState(initialFormDetails);
  const handleChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const registrationData = {
        Name: user.Name,
        Email: user.Email,
        Phone: user.Phone,
        Password: user.Password
        // ConfirmPassword: user.ConfrimPassword // Fix typo here: ConfrimPassword -> ConfirmPassword
      };

      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(registrationData)
      });

      if (response.ok) {
        console.log("Registration successful!");
        setUsers(initialFormDetails);
        navigate("/login");
      } else {
        console.error("Registration failed:", response.status);
        // Display an appropriate error message to the user
      }
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error and display an appropriate message to the user
    }
  };
  return (
    <>
      {loading ? (
        // Show loading spinner while loading
        <div className="flex items-center justify-center h-screen">
          <Grid type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        <div className="loginContainer">
          <div className="registerContainer shadow rounded-lg relative">
            <form
              onSubmit={handlesubmit}
              style={{ height: "auto" }}
              className="px-4"
            >
              <h1
                style={{ color: "rebeccapurple" }}
                className="text-center semibold text-lg font-semibold "
              >
                Create New Account
              </h1>

              <label>
                <p>Name</p>
                <input
                  type="text"
                  className="px-3 py-1 my-1 border-2 border-rose-600 w-full mb-4 "
                  name="Name"
                  value={user.Name}
                  placeholder="Enter Your full Name"
                  onChange={handleChange}
                />
              </label>
              <label>
                <p>Email</p>
                <input
                  type="email"
                  className="px-3 py-1 my-1 border-2 border-rose-600 w-full mb-4 "
                  name="Email"
                  value={user.Email}
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                />
              </label>
              <label>
                <p>Phone</p>
                <input
                  type="text"
                  className="px-3 py-1 my-1 border-2 border-rose-600 w-full mb-4 "
                  name="Phone"
                  value={user.Phone}
                  placeholder="Enter Your Phone"
                  onChange={handleChange}
                />
              </label>
              <label>
                <p>Password</p>
                <input
                  type="text"
                  className="px-3 py-1 my-1 border-2 border-rose-600 w-full mb-4 "
                  name="Password"
                  value={user.Password}
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                />
              </label>
              <label>
                <p>Confirm Password</p>
                <input
                  type="text"
                  className="px-3 py-1 my-1 border-2 border-rose-600 w-full mb-4 "
                  name="ConfrimPassword"
                  value={user.ConfrimPassword}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
              </label>
              <div>
                <button
                  className="w-full bg-blue-400 hover:bg-blue-600 rounded-lg mt-3"
                  type="submit"
                  style={{ width: "100%", padding: "10px" }}
                >
                  Register
                </button>
              </div>
              <div className="mt-2">
                <p>
                  Already on App?
                  <span
                    onClick={() => navigate("/login")}
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      float: "right",
                      color: "blue"
                    }}
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Register;
