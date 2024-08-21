import axios from "axios";
import Constants from "expo-constants";
const { apiUrl, apiKey } = Constants.expoConfig.extra;

const api = axios.create({
  baseURL: apiUrl, // Set the base URL for all requests
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
});

api.interceptors.request.use(
  (config) => {
    // Add custom logic here, like adding an auth token to headers
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default api;
