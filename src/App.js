import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components";
import { Login } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
