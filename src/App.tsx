import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Login from "./Login";
import Register from "./Register";
import FormikRegister from "./FormikRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/formik-reg" element={<FormikRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
