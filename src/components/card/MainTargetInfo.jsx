import React from 'react'

export const MainTargetInfo = ({ extraClassName, children }) => {
    return (
        <div className={`grid ${extraClassName} overflow-hidden`}>
            {children}
        </div>
    )
}
export const LogoTargetInfo = ({ logo }) => {
    return (
        <div className='flex p-4 items-center text-gray-700 dark:text-gray-300 text-6xl'>
            <i className={`fa-solid ${logo}`}></i>
        </div>
    )
}

export const TitleTargetInfo = ({ label, data }) => {
    return (
        <>
            <h5 className='font-semibold text-gray-800 dark:text-gray-400'>{label} <span className='font-bold text-lg bg-green-500 text-white dark:text-gray-800 px-1'>{data}</span></h5>
        </>
    )
}

export const SubTitleTargetInfo = ({ label, data }) => {
    return (
        <h5 className='font-semibold text-gray-800 dark:text-gray-400'>{label} <span className='font-bold text-lg bg-orange-500 text-white dark:text-gray-800 px-1'>{data}</span></h5>
    )
}

export const DescriptionTargetInfo = ({ label, data }) => {
    return (
        <h5 className='font-semibold text-gray-700 dark:text-gray-400'>{label} <span className='text-green-600 dark:text-green-500'>{data}</span></h5>
    )
}

export const NumberTargetInfo = ({ label, data }) => {
    return (
        <h5 className='font-semibold text-gray-700 dark:text-gray-400'>{label} <span className='text-red-500 dark:text-red-400'>{data || 0}</span></h5>
    )
}

export const ValueTargetInfo = ({ label, data, icon }) => {
    return (
        <h5 className='font-semibold text-gray-800 dark:dark:text-gray-400'>{label} <span className='text-red-400'>{data || '-'} </span>{icon ? <i className='fa-solid fa-lock text-gray-500' /> : ''}</h5>
    )
}

export const ItemCardTargetInfo = ({ logo, children }) => {
    return (
        <div className='flex flex-grow bg-white border border-gray-200 rounded-md shadow dark:border-gray-700 dark:bg-gray-800'>
            {logo}
            <div className='flex flex-col md:justify-start p-4'>
                {children}
            </div>
        </div>
    )
}