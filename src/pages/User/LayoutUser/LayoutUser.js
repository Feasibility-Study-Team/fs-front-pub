import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../../components";
import { UserProvider } from "../../../context/User";

function LayoutUser() {
    return (
        <>
            <div className="w-full overflow-hidden">
                <UserProvider>
                    <Header />
                </UserProvider>
                <Outlet />
                <Footer />
            </div>
        </>

    )
}

export default LayoutUser