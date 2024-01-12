import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_APP_API_TIMEOUT || 3000),
});

export { api };