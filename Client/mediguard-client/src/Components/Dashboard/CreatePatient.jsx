import  { useState } from "react";
import {apiPost } from "../../Context/Api/Axios"
import swal from "sweetalert";


const genderOptions = ["male", "female"];

const CreatePatient = () => {
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    height: "",
    weight: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(patientData)

    try {
      const response = await apiPost("/patient/createPatient", patientData);

      if (response.status === 201) {
        swal("ALERT","Patient created successfully!","success");
        clearInputs();
      } else {
        alert(`Failed to create patient. Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error(error);
      swal("ALERT",error.response.data.message,"error");
    }
  };

  const clearInputs = () => {
    setPatientData({
      firstName: "",
      lastName: "",
      gender: "",
      height: "",
      weight: "",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="sm:max-w-lg w-full p-5 bg-white rounded-xl z-10 border-2 border-gray-400">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Create a Patient
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              id="firstName"
              name="firstName"
              type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"

              placeholder="First Name"
              value={patientData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"

              placeholder="Last Name"
              value={patientData.lastName}
              onChange={handleInputChange}
              required
            />
            <select
              id="gender"
              name="gender"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={patientData.gender}
              onChange={handleInputChange}
            >
              <option>Choose Gender</option>
              {genderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              id="height"
              name="height"
              type="number"
              placeholder="Height"
              value={patientData.height}
              onChange={handleInputChange}
              required
            />
            <input
              id="weight"
              name="weight"
              type="number"
              placeholder="Weight"
              value={patientData.weight}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Patient Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePatient;