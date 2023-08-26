import { useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { useAuth } from "../../Context/AuthContext";

const AccountVerification = () => {
  const { OTPConfig } = useAuth();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('userId');
  
  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    } else if (index < 5 && e.target.value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerification = async () => {
    const enteredOTP = parseInt(otp.join(""));
    console.log(enteredOTP);
    OTPConfig(enteredOTP, userId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Check your email</h1>
        <p className="text-sm mb-6 text-center">
          We sent a token to your email. Please click the link to activate
          your account.
        </p>
        <div className="flex justify-center space-x-2">
        {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="w-12 h-12 text-center rounded-md border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <p className="text-sm mt-4 text-center">
          Didnt receive the email?{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Click to Resend Token
          </a>
        </p>
        <div className="mt-6">
          <button
            type="submit"
            className="block w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-offset-2"
            onClick={handleVerification}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountVerification;
