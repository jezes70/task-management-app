import axios from 'axios';


const baseUrl = "http://localhost:5000"

// Get Request
export const apiGet = (path) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.get(`${baseUrl}${path}`, config)
}

// Post Request
export const apiPost = (path, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.post(`${baseUrl}${path}`, data, config)
}

// Put Request
export const apiPut = (path, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.put(`${baseUrl}${path}`, data, config)
}

// Patch Request
export const apiPatch = (path, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.patch(`${baseUrl}${path}`, data, config)
}

// Delete Request
// Delete Request

export const apiDelete = (path, id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.delete(`${baseUrl}${path}/${id}`, config);
}