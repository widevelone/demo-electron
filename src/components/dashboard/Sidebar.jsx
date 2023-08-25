import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCurrentRol } from '../../store/slices/auth'

const Sidebar = ({
    sidebar,
    setSidebar,
    children
}) => {
    const rols = useSelector(state => state?.login?.userDetail?.rols)
    const currentRol = useSelector(state => state?.login?.currentRol)
    const dispatch = useDispatch()
    return (
        <aside
            id="logo-sidebar"
            className={"fixed top-0 left-0 z-10 w-64 h-screen pt-16 overflow-auto transition-transform bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700" + (sidebar ? ' sm:translate-x-0' : " -translate-x-full")}
            aria-label="Sidebar"
        >
            {
                currentRol?.menus.length > 0 ?
                    <div className='dark:bg-gray-700 bg-gray-300 p-1 mb-1 text-sm'>
                        {children}
                    </div>
                    :
                    currentRol &&
                    <div className='dark:bg-gray-700 bg-indigo-200 p-2 mb-2 text-gray-500 text-center text-sm'>
                        (sin opciones)
                    </div>
            }
            {/* <hr className='border-gray-200 dark:border-gray-700' /> */}

            {
                rols?.filter(r => r.id !== currentRol?.id)?.map((rol, index) => (
                    <div
                        key={index}
                        className='flex dark:hover:bg-gray-700 hover:bg-gray-200 justify-start'
                    >
                        <Link
                            to={`/rol/${rol?.nombre}`}
                            className="flex items-center justify-center text-gray-500 p-1 mb-1 dark:text-gray-400 text-sm font-bold"
                            onClick={() => dispatch(addCurrentRol(rol))}
                        >
                            {/* <i className="fa-solid fa-user-circle w-8 text-center text-gray-500 transition text-lg duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i> */}
                            {/* <span className="flex-1 ml-2 whitespace-nowrap overflow-hidden">{rol?.etiqueta?.toUpperCase()}</span> */}
                            <span className="flex-1 ml-2 whitespace-pre-wrap">{rol?.etiqueta?.toUpperCase()}</span>
                        </Link>
                    </div>
                ))
            }
            <div className=" px-3 pb-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to="/settings" className="flex items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setSidebar(window.innerWidth < 640 ? false : sidebar)}>
                            <i className="fa-solid fa-gear text-gray-500 transition text-md duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span className="ml-3 text-sm">Configuración</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar