import axios from "axios"

export const Axios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_BASE_URL}/api/`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PREVIEW_TOKEN}`,
  },
});