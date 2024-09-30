import React from "react";
import * as Yup from "yup";
import { IRegister } from "../interface/IRegister";
import { useFormik } from "formik";
import axios, { AxiosResponse } from "axios";
import {
  Button,
  Container,
  Grid2,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const initialValues: IRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password do not match")
    .required("Confirm Password is required"),
});

const FormikWithMuiSignup = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        const { confirmPassword, ...dataToSend } = values;
        axios
          .post(
            "https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/register",
            dataToSend
          )
          .then((res: AxiosResponse) => {
            if (res.data) {
              action.resetForm();
            }
          })
          .catch((err) => console.log(err));
      },
    });

  const paperStyle = { padding: "30px 20px", width: 500 };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Paper elevation={20} square={false} style={paperStyle}>
          <Grid2 container justifyContent="center">
            <Typography
              variant="h4"
              component="h4"
              className="text-purple-600"
              sx={{ marginBottom: "20px" }}
            >
              Sign Up
            </Typography>
          </Grid2>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Grid2 container spacing={3}>
              <Grid2 size={12}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  color="primary"
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  fullWidth
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  color="primary"
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  fullWidth
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  color="primary"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  color="primary"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  color="primary"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter confirm password"
                  fullWidth
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </Grid2>
              <Grid2 size={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  size="medium"
                >
                  Register
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </Paper>
      </Grid2>
    </Container>
  );
};

export default FormikWithMuiSignup;
