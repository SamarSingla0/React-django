import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const token = localStorage.getItem(ACCESS_TOKEN);

                if (!token) {
                    setIsAuthorized(false);
                    return;
                }

                const decoded = jwtDecode(token);
                const now = Date.now() / 1000;

                if (decoded.exp < now) {
                    // token expired → refresh
                    const refresh = localStorage.getItem(REFRESH_TOKEN);

                    if (!refresh) {
                        setIsAuthorized(false);
                        return;
                    }

                    const res = await api.post("/api/token/refresh/", {
                        refresh: refresh,
                    });

                    localStorage.setItem(ACCESS_TOKEN, res.data.access);
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(true);
                }
            } catch (error) {
                console.error(error);
                setIsAuthorized(false);
            }
        };

        verifyAuth();
    }, []);

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
