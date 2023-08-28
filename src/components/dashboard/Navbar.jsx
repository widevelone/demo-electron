import React from 'react'
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dropdownOff, dropdownToggle } from '../../store/slices/dropdown';
import useThemeHandling from '../../hooks/useThemeHandling';

export const Navbar = ({
    showSidebar,
    setSidebar,
    sidebar,
    logout
}) => {
    const params = useParams()
    const dropdown = useSelector(state => state.dropdown.status)
    const user = useSelector(state => state.login.userDetail)

    const dispatch = useDispatch()

    const {
        // theme,
        toggleTheme
    } = useThemeHandling()
    return (
        <nav className="fixed top-0 z-20 w-full bg-yellow-500 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-2.5 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            onClick={showSidebar}
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                            </svg>
                        </button>
                        <Link to="/" className="flex ml-2 md:mr-24 items-center" onClick={() => setSidebar(window.innerWidth < 640 ? false : sidebar)}>
                            <img src={logo} className="self-center h-10 ml-2 mr-3" alt="widev" />
                            <div>
                                <div className="self-center font-bold text-xs whitespace-nowrap dark:text-white hidden sm:block p-0">SOYA SARI</div>
                                {
                                    params?.rolname &&
                                    <div className="self-center"><span className='font-bold text-xs dark:text-yellow-500 bg-gray-700 rounded-md px-2 py-[1.5px] text-gray-100'>{params?.rolname?.toUpperCase()}</span></div>
                                }
                            </div>
                        </Link>
                    </div>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <button
                            className="flex items-center dark:text-gray-200 hover:dark:text-gray-300 hover:text-gray-600 text-gray-700"
                            type="button"
                            onClick={() => {
                                dispatch(dropdownToggle())
                            }}
                        >
                            <i className='fa-solid fa-user-circle text-3xl'></i>
                        </button>
                        <div
                            className={`${dropdown ? '' : 'hidden'} absolute z-10 bg-white divide-y  divide-gray-300 rounded-lg shadow-xl w-44 dark:bg-gray-700 dark:divide-gray-600 right-3`}
                        >
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div className="font-semibold">{user?.nombres}</div>
                                <div className="text-gray-600 dark:text-gray-300">{user?.codigo}</div>
                            </div>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                                <li>
                                </li>
                                <li>
                                    <Link
                                        to="profile"
                                        className="block px-2 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={() => {
                                            dispatch(dropdownOff())
                                        }}
                                    >
                                        <i className='fa-solid fa-user ml-2'></i> Mi perfíl
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="settings"
                                        className="block px-2 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={() => {
                                            dispatch(dropdownOff())
                                        }}
                                    >
                                        <i className='fa-solid fa-gear ml-2'></i> Configuración
                                    </Link>
                                </li>
                            </ul>
                            <div className="">
                                <span
                                    className="flex px-2 py-2 justify-between"
                                >
                                    <button
                                        className="px-3 py-2 text-sm cursor-pointer rounded-md dark:bg-gray-800  dark:text-gray-200  dark:hover:bg-gray-900 bg-gray-200 hover:shadow-md dark:hover:shadow-gray-800 hover:shadow-gray-400"
                                        onClick={() => {
                                            toggleTheme()
                                        }}
                                    >
                                        <i className="fa-solid fa-moon"></i>
                                    </button>
                                    <button
                                        className="px-3 py-2 text-sm cursor-pointer rounded-md dark:bg-red-700  dark:text-gray-200  dark:hover:bg-red-800 bg-red-600  text-gray-100  hover:shadow-md dark:hover:shadow-gray-800 hover:shadow-gray-400"
                                        onClick={() => {
                                            logout()
                                            dispatch(dropdownOff())
                                        }}
                                    >
                                        Salir <i className="fa-solid fa-right-from-bracket"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
