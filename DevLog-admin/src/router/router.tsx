import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import AdminLayout from "../AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../page/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace/>
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/dashboard",
                element: <AdminLayout />,
                children: [
                    {
                        index: true,
                        element: <App />
                    }
                ]
            }
        ]
    }
])