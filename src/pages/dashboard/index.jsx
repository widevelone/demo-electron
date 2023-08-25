import React, { useState } from 'react'
import { Navbar } from '../../components/dashboard/Navbar'
import Sidebar from '../../components/dashboard/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentMenu, addCurrentRol, loginOut, saveUserDetail } from '../../store/slices/auth';
import { useNavigate } from 'react-router-dom';
import { DefaultBackground } from '../../components/dashboard/DefaultBackground';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { requestAuth } from '../../http/httpRequest';
import { toastOn } from '../../store/slices/toast/toastSlice';
import { iconByNameMenu } from '../../utils/iconByNameMenu';

export const Dashboard = () => {
    const currentRol = useSelector(state => state.login.currentRol)
    const currentMenu = useSelector(state => state.login.currentMenu)
    const navigate = useNavigate()
    const [sidebar, setSidebar] = useState(window.innerWidth < 640 ? false : true);

    const dispatch = useDispatch()

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    const logout = async () => {
        // dispatch(toastOn({ type: "success", message: "Cierre de sesión exitoso!" }))
        await requestAuth(
            'post',
            `/auth/logout`,
        )
            .then(() => {
                dispatch(loginOut())
                navigate("/")
                dispatch(loginOut())
                navigate("/login")
                localStorage?.removeItem("token")
                dispatch(addCurrentRol(null))
                dispatch(addCurrentMenu(null))
                dispatch(saveUserDetail(null))
            }
            )
            .catch(error => {
                console.log(error.response.data.message)
                dispatch(toastOn({ type: "danger", message: (`Error: ${error.response.data.message}`) }))
            })
    }

    const clicMenu = (menu) => {
        if (window.innerWidth < 640) {
            setSidebar(false)
        }
        dispatch(addCurrentMenu(menu))
    }

    return (
        <>
            <Navbar
                showSidebar={showSidebar}
                setSidebar={setSidebar}
                sidebar={sidebar}
                logout={logout}
                currentRol={currentRol}
            />
            <Sidebar
                sidebar={sidebar}
                setSidebar={setSidebar}
            >
                {
                    currentRol?.menus && currentRol.menus.length > 0 &&
                    <ul className="space-y-2 mt-3 font-medium px-2 mb-2">
                        {
                            currentRol?.menus?.slice().sort((a, b) => a.orden - b.orden)?.map((menu, index) => (
                                <li key={index}>
                                    <Link
                                        to={`rol/${currentRol?.nombre}/${menu?.nombre}`}
                                        className={`flex items-center p-2 rounded-lg dark:text-gray-200 font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 justify-end ${currentMenu?.nombre === menu?.nombre ? 'dark:bg-gray-800 bg-gray-600 dark:text-white text-white' : ''}`}
                                        onClick={() => clicMenu(menu)}
                                    >
                                        {/* <div>
                                            <i className="fa-solid fa-table-cells-large w-3 h-3 text-md"></i>
                                        </div> */}
                                        <div>
                                            <span className="">{menu?.etiqueta} <i className={iconByNameMenu(menu.nombre)} /></span>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                }
            </Sidebar>
            <div className={`p-0 ${sidebar ? 'sm:ml-64' : ''}`}>
                <DefaultBackground>
                    <Outlet />
                </DefaultBackground>
            </div>
        </>
    )
}
