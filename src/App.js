import { Routes, Route } from "react-router-dom";
import { LayoutUser, Login, Register } from "./pages/User";
import { DataPenguji, LayoutAdmin, AdminLogin, DataInventor } from "./pages/Admin";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import EditPenguji from "./pages/Admin/DataPenguji/EditPenguji";
import EditInventor from "./pages/Admin/DataInventor/EditInventor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<p>Homepage</p>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<p>Overview</p>} />
            <Route path="penguji" element={<DataPenguji />} />
            <Route path="penguji/:id" element={<EditPenguji />} />
            <Route path="inventor" element={<DataInventor />} />
            <Route path="inventor/:id" element={<EditInventor />} />
            <Route path="alat" element={<p>Alat</p>} />
          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
