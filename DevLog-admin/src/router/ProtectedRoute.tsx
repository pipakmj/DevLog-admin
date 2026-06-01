import { Navigate, Outlet } from "react-router-dom";

const ACCESS_TOKEN_KEY = "admin-accessToken";
const ROLE_KEY = "admin-role";
const ADMIN_ROLE = "ROLE_ADMIN";

function ProtectedRoute() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    const role = localStorage.getItem(ROLE_KEY);

    if (!token || role !== ADMIN_ROLE) {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(ROLE_KEY);
        return <Navigate to="/login" replace/>
    }

  return <Outlet />
}

export default ProtectedRoute
