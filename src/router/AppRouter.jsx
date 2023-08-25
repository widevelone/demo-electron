import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { ProtectedAuth, ProtectedDashboard } from './Protected'
import { Login } from '../pages/login'
import { ErrorPage } from '../pages/error/errorPage'
import { Dashboard } from '../pages/dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { Setting } from '../pages/general/settings'
import { Home } from '../pages/home'
import { Rol } from '../pages/rol'
import { addCurrentRol } from '../store/slices/auth'

export const AppRouter = () => {
    const userDetail = useSelector(state => state.login.userDetail)
    const dispatch = useDispatch()
    useEffect(() => {
        if (sessionStorage.getItem("currentRol")) {
            if (userDetail?.rols?.find(r => r.nombre === sessionStorage.getItem("currentRol"))) {
                dispatch(addCurrentRol(userDetail?.rols?.find(r => r.nombre === sessionStorage.getItem("currentRol"))))
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userDetail]);
    return (
        <>
            <Routes>
                <Route element={<ProtectedAuth isAllowed={localStorage.getItem('token') ? true : false} />}>
                    <Route index path='login' element={<Login />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>

                <Route element={<ProtectedDashboard isAllowed={localStorage.getItem('token') ? true : false} />}>
                    <Route path='/' element={<Dashboard />} >
                        <Route index element={<Home />} />
                        <Route path='settings' element={<Setting />} />
                        {
                            userDetail?.rols?.map((rol, index) => (
                                <Route
                                    key={index}
                                    path={`rol/${rol?.nombre}/*`}
                                    element={<Rol />}
                                />
                            ))
                        }
                        {
                            sessionStorage.getItem("currentRol") &&
                            < Route
                                path={`rol/${sessionStorage.getItem("currentRol")}/*`}
                                element={<Rol />}
                            />
                        }
                        <Route path="/*" element={<ErrorPage />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}
