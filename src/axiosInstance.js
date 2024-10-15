// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Base URL from your .env file
  headers: {
    'Content-Type': 'application/json', // Default content type
  },
});

// Optional: Add a request interceptor to include authentication tokens, if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve token from localStorage (or any other storage)
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login page)
      console.error('Unauthorized - redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
