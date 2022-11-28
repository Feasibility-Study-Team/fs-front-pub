import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../../components";
import { useJwt } from "react-jwt";

const useAuth = () => {
    const token = localStorage.getItem('token')

    const { isExpired, decodedToken } = useJwt(token);

    if (decodedToken) {
        if (decodedToken.role !== "Inventor") {
            return true
        }
    }

    if (!isExpired) {
        return true;
    }

    return false;
}

function LayoutUser() {
    const isAuth = useAuth()
    return (
        <>
            <div className="w-full overflow-hidden">
                <Header isAuth={isAuth}/>
                <Outlet />
                <Footer />
            </div>
        </>

    )
}

export default LayoutUser