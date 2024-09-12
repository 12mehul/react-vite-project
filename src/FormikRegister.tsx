import React from "react";
import { useFormik } from "formik";
import { IRegister } from "./interface/IRegister";
import * as Yup from "yup";

const initialValues: IRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validate = (values: IRegister) => {
  let errors: IRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  if (!values.firstName) {
    errors.firstName = "Please enter first name";
  }
  if (!values.lastName) {
    errors.lastName = "Please enter last name";
  }
  if (!values.email) {
    errors.email = "Please enter email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Please enter password";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please enter confirm password";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Confirm password do not match";
  }
  return errors;
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "First name must be at least 3 characters")
    .required("Please enter first name"),
  lastName: Yup.string()
    .min(3, "Last name must be at least 3 characters")
    .required("Please enter last name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Confirm password do not match")
    .required("Please enter confirm password"),
});

const FormikRegister = () => {
  const { handleChange, handleBlur, handleSubmit, touched, errors, values } =
    useFormik({
      initialValues,
      // validate,
      validationSchema,
      onSubmit: (values, action) => {
        const { confirmPassword, ...dataToSend } = values;
        fetch(
          "https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
          }
        )
          .then((res) => {
            if (res.ok) {
              action.resetForm();
            }
          })
          .catch((err) => console.log(err));
      },
    });

  return (
    <div className="flex items-center justify-center my-8">
      <div className="max-w-lg w-full mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h2 className="text-4xl font-semibold text-purple-600">Register</h2>
        <form className="my-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="firstName"
                className="text-base text-slate-500 font-medium"
              >
                First Name
              </label>
              <input
                className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
                type="text"
                name="firstName"
                placeholder="Enter first name"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName ? (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="lastName"
                className="text-base text-slate-500 font-medium"
              >
                Last Name
              </label>
              <input
                className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
                type="text"
                name="lastName"
                placeholder="Enter last name"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-base text-slate-500 font-medium"
              >
                Email
              </label>
              <input
                className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
                type="email"
                name="email"
                placeholder="Enter email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <span className="text-red-500 text-sm">{errors.email}</span>
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-base text-slate-500 font-medium"
              >
                Password
              </label>
              <input
                className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
                type="password"
                name="password"
                placeholder="Enter password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <span className="text-red-500 text-sm">{errors.password}</span>
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="confirmPassword"
                className="text-base text-slate-500 font-medium"
              >
                Confirm Password
              </label>
              <input
                className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
                type="password"
                name="confirmPassword"
                placeholder="Enter confirm password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </span>
              ) : null}
            </div>
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

export default FormikRegister;
