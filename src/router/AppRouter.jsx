import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedAuth, ProtectedDashboard } from './Protected';
import { Login } from '../pages/login';
import { ErrorPage } from '../pages/error/errorPage';
import { Dashboard } from '../pages/dashboard';
import { Setting } from '../pages/general/settings';
import { Home } from '../pages/home';
import { Rol } from '../pages/rol';

export const AppRouter = () => {

    const isTokenAvailable = !!localStorage.getItem('token');

    return (
        <Routes>
            <Route element={<ProtectedAuth isAllowed={isTokenAvailable} />}>
                <Route index path='login' element={<Login />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>

            <Route element={<ProtectedDashboard isAllowed={isTokenAvailable} />}>
                <Route path='/' element={<Dashboard />}>
                    <Route index element={<Home />} />
                    <Route path='settings' element={<Setting />} />
                    <Route path={`rol/:rolname/*`} element={<Rol />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};
