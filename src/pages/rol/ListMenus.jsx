import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentMenu } from '../../store/slices/auth';
import { Link } from 'react-router-dom';

export const ListMenus = ({ description }) => {
    const dispatch = useDispatch()
    const menus = useSelector(state => state.login.currentRol)
    const currentMenu = useSelector(state => state.login.currentMenu)
    useEffect(() => {
        // dispatch(addCurrentMenu(null))
        // dispatch(addCurrentMenu(menu))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const clicMenu = (menu) => {
        dispatch(addCurrentMenu(menu))
    }
    return (
        <div>
            <h1 className='dark:text-gray-400 font-semibold text-md mb-4'>{description}</h1>
            <div>
                <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mb-4">
                    {
                        menus?.menus?.map((menu, index) => (
                            <Link
                                key={index}
                                className={`flex justify-center transition ease-in-out border rounded-lg dark:border-gray-700 border-gray-200 ${menu.nombre === currentMenu?.nombre ? 'dark:bg-gray-700 bg-gray-300' : 'bg-gray-50 dark:bg-gray-800'} dark:hover:bg-gray-700 hover:bg-gray-300`}
                                to={menu.nombre}
                                onClick={() => clicMenu(menu)}
                            >
                                <div className="flex flex-col items-center py-4 px-3 gap-2 text-center">
                                    <i className="fa-solid fa-table-cells text-[40px] text-gray-400" />
                                    <span className="mb-1 text-md font-medium text-gray-900 dark:text-white">{menu.etiqueta}</span>
                                </div>
                            </Link>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
