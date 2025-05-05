import axios from "axios";
import { getLocalStorage } from "../utils/utils";

export const http = axios.create({
  baseURL: "https://shopquanao-f7yd.onrender.com",
  timeout: 30000,
});

// Interceptor cho request
http.interceptors.request.use(
  (config) => {
    const accessToken = getLocalStorage("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    console.log("Request Headers:", config.headers);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho response
http.interceptors.response.use(
  (response) => {
    console.log("Response Data:", response.data);
    return response;
  },
  (error) => {
    console.error("Response Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);