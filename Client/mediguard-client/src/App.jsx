
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import SignupPage from './Pages/Signup/UserSignupPage';
import AdminSignupPage from './Pages/Signup/AdminSignupPage';
import LoginPage from './Pages/LoginPage';
import AccountVerificationPage from './Pages/AccountVerificationPage';
import SuccessPage from './Pages/SuccessPage';
import UserDashboard from './Pages/UserDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import DataProvider from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <DataProvider>
       <ToastContainer />
     <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/adminSignup" element={<AdminSignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otpVerify" element={<AccountVerificationPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/verifyPassword" element={<SuccessPage />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
      </DataProvider>
  )
}

export default App
