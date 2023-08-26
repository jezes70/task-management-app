import { useEffect, useState } from "react";
import { getUsers,getPatients } from "../../Context/apiFunction";
import { apiDelete } from "../../Context/Api/Axios";
import swal from "sweetalert";

function UserTable() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState({});

  useEffect(() => {
    async function fetchData() {
      const usersData = await getUsers();
      setData(usersData);

      const patientsData = await getPatients();
      setData2(patientsData);
    }

    fetchData();
  }, []);


  const deleteUser = async (e)=>{
    // alert(event.target.id)
    const id = e.target.id
    try {
      const response = await apiDelete(`/admin/deleteUser`,id);
      const responseData = response; 
      console.log(responseData);
      swal("ALERT",responseData.data.message,"success")
   
    
  
  
  } catch (error) {
    console.log(error)
    swal("ALERT",error.response.data.message,"error")
  
  }
  }

  console.log(data2)
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
                 ID
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                Firstname
              </th>
                     <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                Lastname
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
              Email
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 ">
              EmployeeId
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
              status
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 ">
                Role
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 ">
                Date
              </th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 ">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-100">
            {(data.map((val,index)=>{
              return (

                <tr key={index}>
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
                    {index+1}
                  </div>
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center">{val.firstName}</div>
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center">{val.lastName}</div>
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center">{val.email}</div>
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                  {val.employeeId}
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  {val.status}
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  {val.role.toUpperCase()}
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="sm:flex hidden flex-col">
                      24.12.2020
                      <div className="text-gray-400 text-xs">07:16 AM</div>
                    </div>
                    </div>
                    </td>
                    <td>
                      <div>
                    <button onClick={deleteUser} className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                      <svg
                      id={val._id}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 svg-icon"
                        style={{ margin: "0.25rem" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>

              )
            }))}
      
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
  
  export default UserTable;