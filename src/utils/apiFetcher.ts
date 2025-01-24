// src/utils/apiFetcher.js
import axios from "axios";
// Create an Axios instance
const apiFetcher = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://127.0.0.1:8001/api/", // Base URL from environment or default
  // timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
apiFetcher.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const token = localStorage.getItem("auth0Token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Request:", config); // For debugging (optional)
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
apiFetcher.interceptors.response.use(
  (response) => {
    console.log("User data fetched successfully0:", response); // For debugging (optional)
    return response.data; // Return only the data from the response
  },
  (error) => {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Response error:", error.response);
      // Custom error handling (e.g., token expiration, 404, etc.)
      if (error.response.status === 401) {
        // Handle unauthorized access
        console.warn("Unauthorized access. Redirecting to login...");
        window.location.href = "/login"; // Redirect to login
      }
    } else if (error.request) {
      // No response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiFetcher;
