import React, { createContext } from "react";

import { toast } from "react-toastify";
import { apiPost } from "./Api/Axios";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext();

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  /**=================Registration =================================== */

  const registerConfig = async (formData) => {
    try {
      const registerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        userName: formData.userName,
        email: formData.email,
        password: formData.password,
        employeeId: formData.employeeId,
        confirm_password: formData.confirm_password,
      };

      const response = await apiPost("/user/register", registerData);
      const data = await response.data;
      console.log(data);
      toast.success(data.message);

      setTimeout(() => {
        const userId = data.user._id;
        console.log(userId);
        window.location.href = `/otpVerify?userId=${userId}`;
     
  
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  /**=================Admin Signup=================================== */
  const adminRegisterConfig = async (formData) => {
    try {
      const adminSignupData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      const response = await apiPost("/admin/register", adminSignupData);
      const data = await response.data;
      console.log(data.token);
      if (data.message === "Admin created successfully") {
        localStorage.setItem("token", data.token);
      }
      toast.success(data.message);

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  /**=================Admin Login =================================== */
  const adminLoginConfig = async (formData) => {
    try {
      const adminLoginData = {
        email: formData.email,
        password: formData.password,
      };

      const response = await apiPost("/admin/login", adminLoginData);
      const data = await response.data;
      if (data.message === "Login successful") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userid", JSON.stringify(data.admin._id));
      }
      console.log(data);
      console.log(data.message);
      toast.success(data.message);

      setTimeout(() => {
        window.location.href = "/adminDashboard";
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

    /**=================User Login =================================== */
    const userLoginConfig = async (formData) => {
      try {
        const userLoginData = {
          email: formData.email,
          password: formData.password,
        };
  
        const response = await apiPost("/user/login", userLoginData);
        const data = await response.data;
        if (data.message === "Login successful") {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userid", JSON.stringify(data.user._id));
        }
        console.log(data.token);
        console.log(data.user._id);
        
        toast.success(data.message);
  
        setTimeout(() => {
          window.location.href = "/userDashboard";
        }, 2000);
      } catch (error) {
        toast.error(error.response.data.error);
      }
    };
  /* ==================================== Verify Email with OTP ================================================*/
  const OTPConfig = async (enteredOTP, userId) => {
    try {
      const OTPData = {
        otp: enteredOTP,
      };
      
      const response = await apiPost(`/user/verify/${userId}`, OTPData);
      console.log(OTPData);
      console.log(OTPData.otp);
      const data = await response.data;
      if (data.message === "User verified successfully, proceed to Login") {
        localStorage.setItem("role", JSON.stringify(data.user.role));
        console.log(data.user.role);
      }
      toast.success(data.message);

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <dataContext.Provider
      value={{
        registerConfig,
        OTPConfig,
        adminRegisterConfig,
        adminLoginConfig,
        userLoginConfig
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = React.useContext(dataContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a DataProvider");
  }
  return context;
};

export default DataProvider;