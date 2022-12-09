import { Routes, Route } from "react-router-dom";
import { About, Homepage, Inventor, InventorAspek, InventorFeasibilityItem, InventorFeasibilityStatus, InventorNewProject, InventorProfile, InventorProject, InventorProjectData, LayoutProject, LayoutUser, Login, PengujiAspek, PengujiDetailAlat, PengujiMenu, PengujiReview, Product, Products, Register } from "./pages/User";
import { DataPenguji, LayoutAdmin, AdminLogin, DataInventor, DataAlat, EditInventor, EditPenguji, DetailAlat, DetailDataAlat, FeasibilityAlat, OverviewAdmin, MenuFeasibility, TambahAspek, TambahParameter, TambahData, TambahLayout, TambahInstitusi, DataInstitusi, Pengujian } from "./pages/Admin";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import ProtectedUserRoute from "./ProtectedUserRoute";
import { UserProvider } from "./context/User";
import { UjiProvider } from "./context/Uji";
import { LayoutPenguji } from "./components";
import { HomeProvider } from "./context/Home";
import { AdminProvider } from "./context/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:id" element={
            <HomeProvider>
              <Product />
            </HomeProvider>
          } />

          <Route element={
            <UserProvider>
              <ProtectedUserRoute />
            </UserProvider>
          }>
            <Route path="/inventor/project/:alat" element={<LayoutProject title="Project Data" />}>
              <Route index element={<InventorProject />} />
              <Route path=":aspek" element={<InventorAspek />} />
            </Route>
            <Route path="/inventor/project/new-project" element={<LayoutProject title="New Project" />}>
              <Route index element={<InventorNewProject />} />
            </Route>
            <Route path="inventor" element={
              <Inventor />
            }>
              <Route path="profile" element={<InventorProfile />} />
              <Route path="feasibility">
                <Route index element={<InventorFeasibilityStatus />} />
                <Route path=":id" element={<InventorFeasibilityItem />} />
              </Route>
              <Route path="project">
                <Route index element={<InventorProjectData />} />
              </Route>
              <Route path="investor" element={<p>Cooming Soon</p>} />
              <Route path="penguji">
                <Route index element={
                  <UjiProvider>
                    <PengujiMenu />
                  </UjiProvider>
                } />
              </Route>
            </Route>
            <Route path="/inventor/penguji/:id" element={
              <UjiProvider>
                <LayoutPenguji />
              </UjiProvider>
            }>
              <Route index element={<PengujiDetailAlat />} />
              <Route path=":aspekP" element={<PengujiAspek />} />
              <Route path="review" element={<PengujiReview />} />
            </Route>
          </Route>
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin"
            element={
              <AdminProvider>
                <LayoutAdmin />
              </AdminProvider>
            }>
            <Route index element={<OverviewAdmin />} />
            <Route path="penguji" element={<DataPenguji />}></Route>
            <Route path="penguji/:id" element={<EditPenguji />} />
            <Route path="inventor" element={<DataInventor />} />
            <Route path="inventor/:id" element={<EditInventor />} />
            <Route path="alat" element={<DataAlat />} />
            <Route path="feasibility">
              <Route index element={<MenuFeasibility />} />
              <Route path="tambah" element={<TambahLayout />}>
                <Route path="aspek" element={<TambahAspek />} />
                <Route path="parameter" element={<TambahParameter />} />
                <Route path="data" element={<TambahData />} />
              </Route>
            </Route>
            <Route path="alat/:id" element={<DetailAlat />}>
              <Route index element={<DetailDataAlat />} />
              <Route path="feasibility" element={<FeasibilityAlat />} />
            </Route>
            <Route path="institusi">
              <Route index element={<DataInstitusi />} />
              <Route path="tambah" element={<TambahInstitusi />} />
            </Route>
            <Route path="pengujian" element={<Pengujian />} />
          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
