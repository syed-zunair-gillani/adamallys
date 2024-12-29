import axios from "axios"

export const Axios = axios.create({
  baseURL: `http://localhost:1337/api/`,
  // timeout: 5000,
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_PREVIEW_TOKEN}`,
  // },
});