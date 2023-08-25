import React from 'react'
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

export const Navbar = ({
    showSidebar,
    setSidebar,
    sidebar,
    logout,
    currentRol
}) => {
    return (
        <nav className="fixed top-0 z-20 w-full bg-yellow-500 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
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
                                <div className="self-center font-semibold text-sm whitespace-nowrap dark:text-white hidden sm:block">WiDevel</div>
                                {
                                    currentRol?.nombre &&
                                    <div className="self-center"><span className='font-bold text-xs dark:text-yellow-500 bg-gray-700 rounded-md px-2 py-[2px] text-gray-100'>{currentRol?.etiqueta?.toUpperCase()}</span></div>
                                    // <i className="fa-solid fa-pen-to-square dark:text-gray-500 text-gray-400"></i>
                                }
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ml-3">
                            <div>
                                <button
                                    onClick={logout}
                                    className="bg-gray-700 hover:bg-yellow-700 text-gray-100 font-bold py-2 px-3 rounded"
                                >
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
