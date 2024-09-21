import axios from "axios";

let p = localStorage.getItem("token");

const authFetch = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    Authorization: `Bearer ${p}`,
  },
});

export default authFetch;
