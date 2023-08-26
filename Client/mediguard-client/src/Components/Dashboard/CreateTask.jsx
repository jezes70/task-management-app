import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert'

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [patientName, setPatientName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!title || !patientName || !description || !dueDate) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/task/createTask",
        {
          title,
          description,
          patientName,
          dueDate,
    
        },{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
       
      );

      if (response.status === 201) {
        swal("ALERT","Task created successfully!","success");
        setTitle("");
        setDescription("");
        setPatientName("");
        setDueDate("");
      } else {
        swal("ALERT",`Failed to create Task. Error: ${response.data.message}`,"error");
      }
      console.error(response.data);
      console.error(response.status);
    } catch (error) {
      console.error(error);
      swal("ALERT",error.response.data,"error");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white py-6 px-4 sm:px-6 lg:px-8 ">
      <div className="sm:max-w-lg w-full p-5 bg-white rounded-xl z-10 border-2 border-gray-400">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Create Task
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Title
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="location" className="sr-only">
                Description
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-indigo-500"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">
              Patient Name
              </label>
              <input
                id="patientName"
                name="patientName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Patient Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price" className="sr-only">
                Due Date
              </label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
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

export default CreateTask;