import { useState } from "react";
import CreatePatient from "../Components/Dashboard/CreatePatient";
import TaskTable from "../Components/Dashboard/TaskTable";
import CreateTask from "../Components/Dashboard/CreateTask";
import PatientTable from "../Components/Dashboard/PatientTable";


console.log(localStorage.getItem("token"))
function UserDashboard() {
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [showUserTable, setShowUserTable] = useState(true);
  const [showPatientTable,setShowPatientTable] = useState(true)
  const [showTaskTable, setShowTaskTable] = useState(true);
  // Define state to manage the active link
  const [activeLink, setActiveLink] = useState("Patients");

  // Function to handle click event for Patients
  const handlePatientsClick = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowFileUpload(false);
    setShowUserTable(true);
    setShowTaskTable(false)
    setShowPatientTable(false)
    // Update the active link
    setActiveLink("Patients");
  };

  // Function to handle click event for Upload Hotel
  const handleUploadClick = () => {
    // Update the state to show FileUpload and hide UserTable
    setShowFileUpload(true);
    setShowUserTable(false);
    setShowTaskTable(false)
    setShowPatientTable(false)
    // Update the active link
    setActiveLink("Upload Hotel");
  };

  const handleTaskUploadClick = () => {
    // Update the state to show FileUpload and hide UserTable
    setShowFileUpload(false);
    setShowUserTable(false);
    setShowTaskTable(true)
    // Update the active link
    setShowPatientTable(false)
    setActiveLink("task");
  };
 // Function to handle click event for Upload Hotel
  const handleShowPatient = () => {
    // Update the state to show FileUpload and hide UserTable
    setShowFileUpload(false);
    setShowUserTable(false);
    setShowTaskTable(false)
    setShowPatientTable(true)
    // Update the active link
    setActiveLink("patient");
   
  };

  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
      <div className="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
        <div className="h-16 text-white-500 flex items-center justify-center">
        MediGuard
        </div>
        <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
          <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
            <a href="/">
              <svg
                viewBox="0 0 24 24"
                className="h-5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </a>
          </button>
          <button className="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center bg-blue-100 text-blue-500">
            <svg
              viewBox="0 0 24 24"
              className="h-5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-hidden h-full flex flex-col">
        <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
          <div className="flex h-full text-gray-600 dark:text-gray-400">
            <a
              href="/"
              className="cursor-pointer h-full border-b-2 border-transparent hover:text-white inline-flex items-center mr-8"
            >
              Home
            </a>
            <a
              href="#"
              className="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center"
            >
              Dashboard
            </a>
          </div>
          <div className="ml-auto flex items-center space-x-7">
            <a
             onClick={handleLogout}
              className="inline-flex items-center justify-center h-8 px-4 py-2 text-base font-medium leading-6 rounded-md shadow text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
            >
              Logout
            </a>

            <button className="flex items-center">
              <span className="ml-2">User</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-grow flex overflow-x-hidden">
          <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
            <div className="text-xs text-gray-400 tracking-wider">Patients</div>
            <div className="relative mt-2">
              <input
                type="text"
                className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm"
                placeholder="Search"
              />
              <svg
                viewBox="0 0 24 24"
                className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div className="space-y-4 mt-3">
              <h2>Patients</h2>
              <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                  Mr. Paul Peter
                </div>
                <div className="flex items-center w-full">
                  <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">
                    BMI Index
                  </div>
                  <div className="ml-auto text-xs text-gray-500">20.45</div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
            <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
              <div className="flex w-full items-center">
                <div className="flex items-center text-3xl text-gray-900 dark:text-white">
                  Welcome User
                </div>
                <div className="ml-auto sm:flex hidden items-center justify-end">
                  <div className="flex flex-row">
                    <div className="text-right">
                    </div>
                    <div className="text-right mx-3">
                      <div className="text-xs text-gray-400 dark:text-gray-400">
                        Total Patients:
                      </div>
                      <div className="text-gray-900 text-lg dark:text-white">
                        100
                      </div>
                    </div>
                  </div>

                  <button className="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:mt-7 mt-4">
              <a
                  href="#"
                  className={`px-3 border-b-2 border-transparent pb-1.5 dark:text-gray-400 ${
                    activeLink === "Patients"
                      ? "dark:border-white dark:text-white"
                      : "no-underline"
                  }`}
                  onClick={handlePatientsClick}
                >
                  View Task
                </a>

                <a
                  href="#"
                  className={`px-3 border-b-2 border-transparent pb-1.5 dark:text-gray-400 ${
                    activeLink === "patient"
                      ? "dark:border-white dark:text-white"
                      : "no-underline"
                  }`}
                  onClick={handleShowPatient}
                >
                  View Patient
                </a>
                <a
                  href="#"
                  className={`px-3 border-b-2 border-transparent pb-1.5 dark:text-gray-400 ${
                    activeLink === "task"
                      ? "dark:border-white dark:text-white"
                      : "no-underline"
                  }`}
                  onClick={handleTaskUploadClick}
                >
                  Create Task
                </a>
                <a
                  href="#"
                  className={`px-3 border-b-2 border-transparent pb-1.5 dark:text-gray-400 ${
                    activeLink === "Upload Hotel"
                      ? "dark:border-white dark:text-white"
                      : "no-underline"
                  }`}
                  onClick={handleUploadClick}
                >
                  Create Patient
                </a>
              </div>
            </div>
            {/* Here is the toggle */}
            {showFileUpload && <CreatePatient />}
            {showTaskTable && <CreateTask />}
            {showUserTable && <TaskTable />}
            {showPatientTable && <PatientTable />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;