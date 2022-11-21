import { Routes, Route } from "react-router-dom";
import { About, Homepage, Inventor, InventorFeasibilityItem, InventorFeasibilityStatus, InventorProfile, InventorProject, InventorProjectData, LayoutUser, Login, Product, Products, Register } from "./pages/User";
import { DataPenguji, LayoutAdmin, AdminLogin, DataInventor, DataAlat, EditInventor, EditPenguji, DetailAlat, DetailDataAlat, FeasibilityAlat } from "./pages/Admin";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import ProtectedUserRoute from "./ProtectedUserRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Products />}/>
          <Route path="product/:id" element={<Product />}/>

          <Route element={<ProtectedUserRoute />}>
            <Route path="/inventor/project/:id" element={<InventorProject />}>

            </Route>
            <Route path="inventor" element={<Inventor />}>
              <Route path="profile" element={<InventorProfile />} />
              <Route path="feasibility">
                <Route index element={<InventorFeasibilityStatus />} />
                <Route path=":id" element={<InventorFeasibilityItem />} />
              </Route>
              <Route path="project">
                <Route index element={<InventorProjectData />} />
              </Route>
            </Route>
          </Route>
        </Route>


        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<p>Overview</p>} />
            <Route path="penguji" element={<DataPenguji />} />
            <Route path="penguji/:id" element={<EditPenguji />} />
            <Route path="inventor" element={<DataInventor />} />
            <Route path="inventor/:id" element={<EditInventor />} />
            <Route path="alat" element={<DataAlat />} />
            <Route path="alat/:id" element={<DetailAlat />}>
              <Route index element={<DetailDataAlat />} />
              <Route path="feasibility" element={<FeasibilityAlat />} />
            </Route>
          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
