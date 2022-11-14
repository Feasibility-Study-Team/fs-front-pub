import {Outlet } from "react-router-dom";
import { Footer } from "../../../components";


function LayoutUser() {

    return (
        <>
            <Outlet />
            <Footer />
        </>

    )
}

export default LayoutUser