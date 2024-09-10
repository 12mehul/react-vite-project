import React, { FormEvent, useState } from "react";
import { ILogin } from "./interface/ILogin";
import axios, { AxiosResponse } from "axios";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState<ILogin>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      alert("Please fill all the fields");
      return;
    }

    const response: AxiosResponse = await axios.post(
      "https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/login",
      data
    );
    if (response.status === 200) {
      setData(initialValues);
      alert("User logged in successfully");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-lg w-full mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h2 className="text-4xl font-semibold text-purple-600">Login</h2>
        <form className="my-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <label
              htmlFor="email"
              className="text-base text-slate-500 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
            />
            <label
              htmlFor="password"
              className="text-base text-slate-500 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-500"
            >
              Submit
            </button>
            <div className="flex gap-2 items-center justify-center">
              <p className="text-base text-slate-500 font-medium">
                Not Registered Yet?
              </p>
              <a
                className="text-base font-medium text-purple-800 hover:text-cyan-400"
                href="/register"
              >
                Register
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
