import React from 'react'
import { Link } from 'react-router-dom';
import useMenuHandling from '../../hooks/useMenuHandling';

export const ListMenus = ({ description }) => {

    const { menus, params } = useMenuHandling()

    return (
        <div>
            <h1 className='dark:text-gray-400 font-semibold text-md mb-4'>{description}</h1>
            <div>
                <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mb-4">
                    {
                        menus?.slice()
                            .sort((a, b) => a.orden - b.orden)
                            .map((menu, index) => (
                                <Link
                                    key={index}
                                    className={`flex justify-center transition ease-in-out border rounded-lg dark:border-gray-700 border-gray-200 ${menu.nombre === params.menuname ? 'dark:bg-gray-700 bg-gray-300' : 'bg-gray-50 dark:bg-gray-800'} dark:hover:bg-gray-700 hover:bg-gray-300`}
                                    to={`menu/${menu.nombre}`}
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
