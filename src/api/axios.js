import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/', // Change to your backend API URL
});

export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('auth/login', credentials);
    localStorage.setItem('authToken', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default axiosInstance;
