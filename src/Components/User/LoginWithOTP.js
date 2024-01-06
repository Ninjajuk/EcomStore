// import React, { useState } from "react";
// import axios from "axios";

// const LoginWithOTP = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");

//   const handleSendOTP = async () => {
//     try {
//       await axios.post("/auth/send-otp", { phoneNumber });
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       await axios.post("/auth/verify-otp", { phoneNumber, otp });
//       // Successful verification, redirect to the dashboard
//       // Or generate JWT token and perform necessary actions
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Phone number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//       />
//       <button onClick={handleSendOTP}>Send OTP</button>

//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginWithOTP;

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginWithOTP() {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [otp, setOtp] = useState("");
  // const [verificationMessage, setVerificationMessage] = useState("");
  // const [isOTPVerified, setIsOTPVerified] = useState(false);

  // const handleSendOTP = async (req, resp) => {
  //   setIsOTPVerified(!isOTPVerified);
  // };
  // function verifyOTp() {
  //   navigate("/dashboard");
  // }

  // const handleLogin = async () => {

  // };

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isGeneratingOTP, setIsGeneratingOTP] = useState(false);
  const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);

  const generateOTP = async () => {
    setIsGeneratingOTP(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/generate-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage("OTP sent successfully");
        setIsGeneratingOTP(false);
        setIsVerifyingOTP(true);
      } else {
        const data = await response.json();
        setMessage(data.error);
        setIsGeneratingOTP(false);
      }
    } catch (error) {
      console.error("Error generating OTP:", error);
      setMessage("Failed to generate OTP");
      setIsGeneratingOTP(false);
    }
  };

  const verifyOTP = async () => {
    setIsVerifyingOTP(true);
    navigate("/dashboard");
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, otp })
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        navigate("/dashboard");
      } else {
        const data = await response.json();
        setMessage(data.error);
        setIsVerifyingOTP(false);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage("Failed to verify OTP");
      setIsVerifyingOTP(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in with OTP
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address or Phone
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full bg-gray-300 py-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* {isOTPGenerated ? (
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 "
                  >
                    OTP
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full bg-gray-300 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-2 text-green-500">OTP send Successfully</p>
              </div>
            ) : null}
            <div>
              {isOTPVerified ? (
                <button
                  type="submit"
                  onClick={verifyOTP}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Verify OTP
                </button>
              ) : (
                <button
                  onClick={handleSendOTP}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send OTP
                </button>
              )}
            </div> */}

            {isGeneratingOTP ? (
              <button
                disabled
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Generating OTP...
              </button>
            ) : (
              <button
                onClick={generateOTP}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Generate OTP
              </button>
            )}
            {isVerifyingOTP && (
              <div className="mt-2">
                <label className="block text-sm font-medium leading-6 text-gray-900 ">
                  OTP:
                </label>
                <input
                  type="text"
                  value={otp}
                  className="block w-full bg-gray-300 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  onClick={verifyOTP}
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-2 mt-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Verify OTP
                </button>
              </div>
            )}
            <div>{message && <p>{message}</p>}</div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
