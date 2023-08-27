import React, { useState } from 'react'
import { Navbar } from '../../components/dashboard/Navbar'
import Sidebar from '../../components/dashboard/Sidebar'
import { useDispatch } from 'react-redux';
import { loginOut, saveUserDetail } from '../../store/slices/auth';
import { useNavigate } from 'react-router-dom';
import { DefaultBackground } from '../../components/dashboard/DefaultBackground';
import { Outlet } from 'react-router-dom';
import { requestAuth } from '../../http/httpRequest';
import { toastOn } from '../../store/slices/toast/toastSlice';

export const Dashboard = () => {

    const navigate = useNavigate()
    const [sidebar, setSidebar] = useState(window.innerWidth < 640 ? false : true);

    const dispatch = useDispatch()

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    const logout = async () => {
        await requestAuth(
            'post',
            `/auth/logout`,
        )
            .then(() => {
                dispatch(loginOut())
                navigate("/login")
                localStorage?.removeItem("token")
                dispatch(saveUserDetail(null))
            }
            )
            .catch(error => {
                dispatch(loginOut())
                navigate("/login")
                localStorage?.removeItem("token")
                dispatch(saveUserDetail(null))
                dispatch(toastOn({ type: "danger", message: (`Error: ${error.response.data.message}`) }))
            })
    }



    return (
        <>
            <Navbar
                showSidebar={showSidebar}
                setSidebar={setSidebar}
                sidebar={sidebar}
                logout={logout}
            />
            <Sidebar
                sidebar={sidebar}
                setSidebar={setSidebar}
            />
            <div className={`p-0 ${sidebar ? 'sm:ml-64' : ''}`}>
                <DefaultBackground>
                    <Outlet />
                </DefaultBackground>
            </div>
        </>
    )
}
