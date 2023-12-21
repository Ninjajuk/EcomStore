import { useState } from "react";
import React from "react";
import "./LoginStyle.css";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isValidUser, setIsValidUser] = useState(false);

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Make a GET request to check if the user is valid
      // const response = await axios.get(
      //   `http://localhost:3000/auth/check-user?value=${inputValue}`
      // );
      const response = await fetch(
        `http://localhost:3000/auth/check-user?value=${inputValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await response.json();
      console.log(data.Email); // Parse the response JSON

      if (data.Email) {
        setIsValidUser(true);
        // Navigate to the ConfirmPassword component
        navigate("/confirm");
      } else {
        setIsValidUser(false);
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  }

  return (
    <>
      <div className="loginContainer">
        <div className="registerContainer shadow rounded-lg relative">
          <form onSubmit={handleSubmit} className="px-4">
            <h1
              style={{ color: "rebeccapurple" }}
              className="text-center semibold text-lg font-semibold "
            >
              Reset Password
            </h1>
            <label>
              <p className="pb-4 pt-4 ">Email or Phone</p>
              <input
                className="px-3 py-1 my-1 border-2 border-rose-600 w-full mb-4 "
                label="EmailPhone"
                name="Email"
                value={inputValue}
                placeholder="Email or Phone"
                onChange={handleChange}
              />
            </label>
            <div className="btncont">
              <button
                className="w-full bg-blue-400 hover:bg-blue-600 rounded-lg mt-3"
                style={{ width: "100%", padding: "10px" }}
                type="submit"
              >
                Continue
              </button>
            </div>
            <div
              onClick={() => navigate("/login")}
              style={{
                textAlign: "center",
                paddingTop: "5px",
                textDecoration: "underline",
                color: "blue",
                cursor: "pointer"
              }}
            >
              back
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
