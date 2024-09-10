import React, { FormEvent, useState } from "react";
import { IRegister } from "./interface/IRegister";
import axios, { AxiosResponse } from "axios";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [data, setData] = useState<IRegister>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      alert("Please fill all the fields");
      return;
    }

    const response: AxiosResponse = await axios.post(
      "https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/register",
      data
    );
    if (response.status === 201) {
      setData(initialValues);
      alert("User registered successfully");
    }
  };

  return (
    <div className="flex items-center justify-center my-8">
      <div className="max-w-lg w-full mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h2 className="text-4xl font-semibold text-purple-600">Register</h2>
        <form className="my-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <label
              htmlFor="firstName"
              className="text-base text-slate-500 font-medium"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              onChange={handleChange}
              className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
            />
            <label
              htmlFor="lastName"
              className="text-base text-slate-500 font-medium"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              onChange={handleChange}
              className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
            />
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
                Registered Yet?
              </p>
              <a
                className="text-base font-medium text-purple-800 hover:text-cyan-400"
                href="/"
              >
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
