import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function OtpVerification() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isGeneratingOTP, setIsGeneratingOTP] = useState(false);
  const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
  const navigate = useNavigate();
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
        setIsGeneratingOTP(true);
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
        setIsVerifyingOTP(false);
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
    <div className="App">
      <h1>OTP Verification</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {isGeneratingOTP ? (
        <button disabled>Generating OTP...</button>
      ) : (
        <button onClick={generateOTP}>Generate OTP</button>
      )}
      {isVerifyingOTP && (
        <div>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOTP}>Verify OTP</button>
        </div>
      )}
      <div>{message && <p>{message}</p>}</div>
    </div>
  );
}

export default OtpVerification;
