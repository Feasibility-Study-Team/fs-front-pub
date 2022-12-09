import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext} from "./context/User";


const ProtectedUserRoute = () => {
    const { isAuth } = useContext(UserContext)
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedUserRoute