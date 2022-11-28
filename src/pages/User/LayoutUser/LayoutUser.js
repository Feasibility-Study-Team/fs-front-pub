import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../../components";

function LayoutUser() {
    return (
        <>
            <div className="w-full overflow-hidden">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>

    )
}

export default LayoutUser