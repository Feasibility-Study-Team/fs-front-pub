import { Navigate, Outlet } from "react-router-dom";

const useAuth = () =>{
    const isExpired = false;

    if(!isExpired){
        return true;
    }

    return false;
}

const ProtectedAdminRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/admin/login" replace />;
}

export default ProtectedAdminRoute