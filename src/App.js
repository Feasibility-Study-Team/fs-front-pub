import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components";
import { Login, Register } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
