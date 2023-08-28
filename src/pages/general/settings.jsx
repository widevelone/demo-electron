import React from 'react'
import useThemeHandling from '../../hooks/useThemeHandling'

export const Setting = () => {
    const {
        theme,
        toggleTheme
    } = useThemeHandling()
    return (
        <>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <h1 className='dark:text-white font-semibold text-md'>Configuración</h1>
                </div>
            </div>
            <div className='grid grid-cols-6'>
                <div className="col-span-6 xl:col-span-2 grid grid-cols-6 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <div className="col-span-6 gap-4 p-2">
                        <h1 className='text-gray-600 dark:text-gray-400 text-sm'>Aspecto del sistema</h1>
                    </div>
                    <hr className='col-span-6 dark:border-gray-600 border-gray-300' />
                    <div className="col-span-6 grid grid-cols-6 gap-4">
                        <div className="flex col-span-4 items-center justify-between rounded bg-gray-50 dark:bg-gray-800 px-2">
                            <p className="text-sm text-gray-700 font-semibold dark:text-gray-300">Modo oscuro</p>
                        </div>
                        <div className="flex col-span-2 items-center justify-end rounded bg-gray-50 dark:bg-gray-800">
                            <button
                                onClick={toggleTheme}
                                className=" dark:hover:bg-gray-600 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                            >
                                <i className={`text-lg dark:text-gray-200 text-gray-700 fa-solid fa-toggle-${theme === "dark" ? 'on' : 'off'}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}