import { Routes, Route } from "react-router-dom";
import { Footer } from "../../components";
import Login from '../Login/Login'
import Register from '../Register/Register'

function LayoutUser() {

    return (
        <>

            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>

            <Footer />
        </>

    )
}

export default LayoutUser