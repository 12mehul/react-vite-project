import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Register from "./components/Register";
import FormikRegister from "./components/FormikRegister";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import FormikWithMuiSignup from "./components/FormikWithMuiSignup";
import Products from "./components/Products";
import DataGridDisplayComments from "./components/DataGridDisplayComments";
import DataGridDisplayPhotos from "./components/DataGridDisplayPhotos";
import ParentCrud from "./components/crud/ParentCrud";
import GithubUsersCard from "./components/GithubUsersCard";
import GithubFollowersCard from "./components/GithubFollowersCard";

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
        <Route path="/comments" element={<DataGridDisplayComments />} />
        <Route path="/photos" element={<DataGridDisplayPhotos />} />
        <Route path="/crud-form" element={<ParentCrud />} />
        <Route path="/github-card" element={<GithubUsersCard />} />
        <Route
          path="/github-card/:username/followers"
          element={<GithubFollowersCard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
