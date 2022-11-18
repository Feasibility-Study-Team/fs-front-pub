import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const isExpired = false;

    if (!isExpired) {
        return true;
    }

    return false;
}

const ProtectedUserRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedUserRoute