import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { addCurrentMenu, addCurrentRol, loginOn } from '../store/slices/auth'


export const Home = () => {
    const userDetail = useSelector(state => state.login.userDetail)
    const currentRol = useSelector(state => state.login.currentRol)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const element = document.documentElement

    useEffect(() => {
        // console.log("as")
        if (localStorage?.getItem("token")) {
          dispatch(loginOn())
          navigate("/")
        }
        if (localStorage?.getItem("theme") !== "dark") {
          element.classList.remove('dark')
          localStorage.removeItem("theme")
        }
        else {
          element.classList.add('dark')
          localStorage.setItem("theme", "dark")
        }
        dispatch(addCurrentMenu(null))
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return (
        <>
            <div className="mb-4">
                <h1 className='dark:text-white font-semibold text-md'>Elige un rol <span className='dark:text-indigo-400 text-indigo-500'>{userDetail?.username}</span></h1>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
                {
                    userDetail?.rols &&
                    userDetail.rols.map((rol, index) => (
                        <Link
                            key={index}
                            className={`flex justify-center transition ease-in-out border rounded-lg dark:border-gray-700 border-gray-200 ${rol.nombre === currentRol?.nombre ? 'dark:bg-yellow-700 bg-yellow-200' : 'bg-gray-50 dark:bg-gray-800'} dark:hover:bg-yellow-700 hover:bg-yellow-300 dark:hover:border-yellow-700 hover:border-yellow-200`}
                            to={`rol/${rol.nombre}`}
                            onClick={() => dispatch(addCurrentRol(rol))}
                        >
                            <div className="flex flex-col items-center py-4 px-3 gap-2 text-center">
                                <i className="fa-solid fa-user-tag text-[80px] text-gray-400"></i>
                                <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">{rol.etiqueta}</h5>
                                {/* <span className="text-sm text-gray-500 dark:text-gray-400">{rol.description}</span> */}
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
        </>
    )
}
