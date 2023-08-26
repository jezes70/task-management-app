import {apiGet } from "../../Context/Api/Axios"
import { useState , useEffect} from "react";
import { toast } from "react-toastify";

function PatientTable() {
  const [data, setData] = useState([]);  // Initialize as an empty array

  const getPatientsUser = async () => {
    try {
      const response = await apiGet("/patient/getPatients");
      const responseData = response.data; 
      setData(responseData); 

    } catch (error) {
      toast.error("Try again");
    }
  };
  useEffect(() => {
    getPatientsUser();
  }, []);
  

    return (
      <div className="sm:p-7 p-4">
        <div className="flex w-full items-center mb-7">
          <button className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
            <svg
              viewBox="0 0 24 24"
              className="w-4 mr-2 text-gray-400 dark:text-gray-600"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Last 30 days
            <svg
              viewBox="0 0 24 24"
              className="w-4 ml-1.5 text-gray-400 dark:text-gray-600"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
            Filter by
            <svg
              viewBox="0 0 24 24"
              className="w-4 ml-1.5 text-gray-400 dark:text-gray-600"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
            <span className="mr-3">Page 1 of 4</span>
            <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
              <svg
                className="w-4"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
              <svg
                className="w-4"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-white-400 ">
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                Patient ID
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                Full Name
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
              Gender
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 ">
               Height
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                Weight
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 ">
                BMI Index
              </th>
            </tr>
            </thead>
        <tbody className="text-gray-600 dark:text-gray-100">
        { data?.map((val, index) => {
      return (
        <tr key={val._id}>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M14.916 2.404a.75.75 0 01-.32 1.012l-.596.31V17a1 1 0 01-1 1h-2.26a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H2V9.957a.75.75 0 01-.596-1.372L2 8.275V5.75a.75.75 0 011.5 0v1.745l10.404-5.41a.75.75 0 011.012.32zM15.861 8.57a.75.75 0 01.736-.025l1.999 1.04A.75.75 0 0118 10.957V16.5h.25a.75.75 0 110 1.5h-2a.75.75 0 01-.75-.75V9.21a.75.75 0 01.361-.64z" />
              </svg>
              {index + 1}
            </div>
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center">{`${val.firstName} ${val.lastName}` }</div>
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
            {val.gender}
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
            {val.height}
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
            {val.weight}
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
              <div className="sm:flex hidden flex-col">{val.bmiIndex}</div>
              
            </div>
          </td>
        </tr>
      );
    })}
        </tbody>
      </table>
        <div className="flex w-full mt-5 space-x-2 justify-end">
          <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
            <svg
              className="w-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none">
            1
          </button>
          <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
            2
          </button>
          <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
            3
          </button>
          <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
            4
          </button>
          <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
            <svg
              className="w-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    );
  }

  export default PatientTable;
  