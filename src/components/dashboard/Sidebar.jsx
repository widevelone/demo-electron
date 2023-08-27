import React from 'react'
import { Link } from 'react-router-dom'
import useMenuHandling from '../../hooks/useMenuHandling'
import { iconByNameMenu } from '../../utils/iconByNameMenu'

const Sidebar = ({
    sidebar,
    setSidebar,
}) => {

    const { rols, menus, params } = useMenuHandling()

    const clicMenu = () => {
        if (window.innerWidth < 640) {
            setSidebar(false)
        }
    }
    return (
        <aside
            id="logo-sidebar"
            className={"fixed top-0 left-0 z-10 w-64 h-screen pt-16 overflow-auto transition-transform bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700" + (sidebar ? ' sm:translate-x-0' : " -translate-x-full")}
            aria-label="Sidebar"
        >
            {
                menus.length > 0 ?
                    <div className='dark:bg-gray-700 bg-gray-300 p-1 mb-1 text-sm'>
                        <ul className="space-y-2 mt-3 font-medium px-2 mb-2">
                            {
                                menus?.slice().sort((a, b) => a.orden - b.orden)?.map((menu, index) => (
                                    <li key={index}>
                                        <Link
                                            to={`rol/${params.rolname}/menu/${menu?.nombre}`}
                                            className={`flex items-center p-2 rounded-lg dark:text-gray-200 font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 justify-end ${params['*']?.includes(`menu/${menu?.nombre}`) ? 'dark:bg-gray-800 bg-gray-600 dark:text-white text-white' : ''}`}
                                            onClick={clicMenu}
                                        >
                                            <div>
                                                <span className="">{menu?.etiqueta} <i className={iconByNameMenu(menu.nombre)} /></span>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    :

                    <div className='dark:bg-gray-700 bg-indigo-200 p-2 mb-2 text-gray-500 text-center text-sm'>
                        (sin opciones)
                    </div>
            }
            {
                rols?.filter(r => r.nombre !== params.rolname)?.map((rol, index) => (
                    <div
                        key={index}
                        className='flex dark:hover:bg-gray-700 hover:bg-gray-200 justify-start'
                    >
                        <Link
                            to={`/rol/${rol?.nombre}`}
                            className="flex items-center justify-center text-gray-500 p-1 mb-1 dark:text-gray-400 text-sm font-bold"
                        >
                            <span className="flex-1 ml-2 whitespace-pre-wrap">{rol?.etiqueta}</span>
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