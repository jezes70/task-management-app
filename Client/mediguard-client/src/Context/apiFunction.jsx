import { apiGet } from "./Api/Axios";


export const getUsers = async () => {
  try {
    const response = await apiGet("/admin/getUsers");
    return response.data.users;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPatients = async () => {
  try {
    const response = await apiGet("/admin/getPatients");
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
