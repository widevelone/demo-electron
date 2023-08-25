import React from 'react'

export const ErrorPage = () => {
    return (
        <div className='font-bold text-gray-700 dark:text-gray-300 flex flex-col items-center justify-center px-6 py-8 mx-auto text-2xl text-center'>
            <div role="status" className="p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow-lg animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                        <div className="w-48 h-2 bg-gray-300 rounded-full dark:bg-gray-700" />
                        <br />
                        <i className="fa-solid fa-triangle-exclamation text-base dark:text-yellow-500 text-yellow-600" /> Error al cargar la página!
                        <br />
                        <br />
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
                    </div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}