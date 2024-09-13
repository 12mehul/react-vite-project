import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Login from "./Login";
import Register from "./Register";
import FormikRegister from "./FormikRegister";
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
