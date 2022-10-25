import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./PrivateRoute.css";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div class="w-12 h-12 border-8 border-pink-600 rounded-full loader mx-auto my-56"></div>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }}></Navigate>

}

export default PrivateRoute;