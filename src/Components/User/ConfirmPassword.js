import { useState } from "react";
import React from "react";
import "./LoginStyle.css";
import { useNavigate } from "react-router-dom";

const ConfirmPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [user, setUser] = useState();
  function handleChange(e) {
    if (e.target.name === "newPassword") {
      setNewPassword(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      // Handle password mismatch
      return;
    }
    try {
      // Send updated password to backend
      const response = await fetch(
        "http://localhost:3000/auth/update-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ newPassword }) // Pass the data as the request body
        }
      );

      if (response.data.success) {
        // Password updated successfully, navigate to login or another page
        console.log(newPassword);
        navigate("/login");
      } else {
        // Handle update failure
      }
    } catch (error) {
      console.error("Error updating password:", error);
    }
  }

  return (
    <>
      <div className="loginContainer">
        <div className="registerContainer shadow rounded-lg relative">
          <form onSubmit={handleSubmit} className="px-5">
            <h1
              style={{ color: "rebeccapurple" }}
              className="text-center semibold text-lg font-semibold "
            >
              Reset Password
            </h1>
            <input
              className="px-3 py-1 my-1 border-2 border-rose-600 w-full mb-4 mt-4 "
              label="Enter New Password"
              name="newPassword"
              placeholder="Enter New Password"
              onChange={handleChange}
            />
            <input
              className="px-3 py-1 my-1 border-2 border-rose-600 w-full mb-4 "
              label="EmailPhone"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />

            <div className="btncont">
              <button
                className="w-full bg-blue-400 hover:bg-blue-600 rounded-lg mt-3"
                style={{ width: "100%", padding: "10px" }}
              >
                Submit
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
export default ConfirmPassword;
