import { Routes, Route } from "react-router-dom";
import { LayoutUser, Login, Register } from "./pages/User";
import { DataPenguji, LayoutAdmin } from "./pages/Admin";
import ProtectedAdminRoute from "./ProtectedAdminRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<p>Homepage</p>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin/login" element={<p>admin Login</p>} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<p>Overview</p>} />
            <Route path="penguji" element={<DataPenguji />} />
            <Route path="inventor" element={<p>Inventor</p>} />
            <Route path="alat" element={<p>Alat</p>} />
          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
