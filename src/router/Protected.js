import { Navigate, Outlet } from "react-router-dom";
import React from 'react';

export const ProtectedDashboard = ({
    isAllowed,
    children,
}) => {
    if (isAllowed) {
        return children ? children : <Outlet />;
    }
    else {
        return <Navigate to={'/login'} replace />;
    }

};

export const ProtectedAuth = ({
    isAllowed,
    children,
}) => {
    if (isAllowed) {
        return <Navigate to={'/'} replace />;
    }
    else {
        return children ? children : <Outlet />;
    }
};