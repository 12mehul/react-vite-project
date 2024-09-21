import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Login from "./Login";
import Register from "./Register";
import FormikRegister from "./FormikRegister";
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";
import FormikWithMuiSignup from "./FormikWithMuiSignup";
import Products from "./Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/formik-reg" element={<FormikRegister />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/mui-formik-reg" element={<FormikWithMuiSignup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
