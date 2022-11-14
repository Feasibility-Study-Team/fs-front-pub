import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register } from "./pages";
import { Dashboard } from "./pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
