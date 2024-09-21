import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

let p = localStorage.getItem("token");

const authFetch = axios.create({
  baseURL: "http://localhost:4000/",
});

authFetch.interceptors.request.use(
  (request: InternalAxiosRequestConfig<any>) => {
    request.headers.Authorization = `Bearer ${p}`;
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    if (response.status == 401) {
      //code for genererating new token
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    Promise.reject(error);
  }
);

export default authFetch;
