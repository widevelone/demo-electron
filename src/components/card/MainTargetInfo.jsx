import React from 'react'

export const MainTargetInfo = ({
    title,
    subtitle,
    description,
    logo,
    children
}) => {
    return (
        <div href="#" className="flex flex-row bg-white border border-gray-200 rounded-md shadow dark:border-gray-700 dark:bg-gray-800">
            {/* <img className="object-cover w-full rounded-t-lg h-11 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" /> */}
            {
                logo &&
                <div className="flex p-4 items-center dark:text-gray-200 text-4xl">
                    <i className={`fa-solid ${logo}`}></i>
                </div>
            }
            <div className="flex flex-col md:justify-between p-4">
                <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100">{title}</h5>
                <h5 className="text-xl font-bold text-gray-800 dark:text-gray-100">{subtitle}</h5>
                <p className="font-semibold text-gray-700 dark:text-gray-400">{description}</p>
                {children}
            </div>
            {/* <div className="flex flex-col md:justify-between p-4">
            </div> */}
        </div>
    )
}
