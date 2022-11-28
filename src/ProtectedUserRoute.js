import { Navigate, Outlet } from "react-router-dom";
import { useJwt } from "react-jwt";

const useAuth = () => {
    const token = localStorage.getItem('token')

    const { isExpired, decodedToken } = useJwt(token);
    
    if(decodedToken){
        if(decodedToken.role !== "Inventor"){
            return true
        }
    }

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