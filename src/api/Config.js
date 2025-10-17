import axios from "axios";

const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
  baseURL: "http://98.80.120.96:8080/cartech/",
  // withCredentials: true, // optional if backend uses cookies
  headers: {
    Authorization: `Bearer ${token || ""}`,
    // REMOVE Origin
  },
});
