import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5003",
  timeout: 10000,
});

export const healthApi = () => api.get("/health");
export default api;
