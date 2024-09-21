import axios from "axios";

let p = localStorage.getItem("token");

axios.defaults.headers.common["Authorization"] = `Bearer ${p}`;
axios.defaults.baseURL = "http://localhost:4000/";
