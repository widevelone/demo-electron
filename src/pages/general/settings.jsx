import React, { useEffect, useState } from 'react'

export const Setting = () => {
    const [theme, setTheme] = useState(localStorage?.getItem("theme"));
    const element = document.documentElement

    useEffect(() => {
        if (localStorage?.getItem("theme") !== "dark") {
            element.classList.remove('dark')
            localStorage.removeItem("theme")
        }
        else {
            element.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }
        switch (theme) {
            case "dark":
                element.classList.add('dark')
                localStorage.setItem("theme", "dark")
                break;
            case "light":
                element.classList.remove('dark')
                localStorage.removeItem("theme")
                break;
            default:
                break
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    const toggleTheme = () => {
        switch (theme) {
            case "dark":
                setTheme("light")
                break;
            default:
                setTheme("dark")
                break;
        }
    }
    return (
        <>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <h1 className='dark:text-white font-semibold text-xl'>Configuración</h1>
                </div>
            </div>
            <div className="mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <div className="grid grid-cols-3 gap-4 p-2">
                    <h1 className='text-gray-600 dark:text-gray-400 text-sm'>Aspecto del sistema</h1>
                </div>
                <hr className='dark:border-gray-600 border-gray-300' />
                <div className="grid grid-cols-5 gap-4 mb-4">
                    <div className="flex col-span-4 items-center justify-between rounded bg-gray-50 dark:bg-gray-800 px-2">
                        <p className="text-sm text-gray-700 font-semibold dark:text-gray-300">Modo oscuro</p>
                    </div>
                    <div className="flex col-span-1 items-center justify-end rounded bg-gray-50 dark:bg-gray-800">
                        <button
                            onClick={toggleTheme}
                            className=" dark:hover:bg-gray-600 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                        >
                            <i className={`text-lg dark:text-gray-200 text-gray-700 fa-solid fa-toggle-${theme === "dark" ? 'on' : 'off'}`} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}