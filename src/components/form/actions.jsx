import React from 'react'

export const Actions = ({ buttons }) => {
    return (
        <div className='flex gap-1 flex-wrap'>
            {
                buttons.map(({ icon, label, action, className }, index) => (
                    <button
                        key={index}
                        type='button'
                        className={`${className != null ? className : 'bg-yellow-500 dark:bg-yellow-600'}  shadow-md dark:hover:bg-gray-700 hover:bg-gray-300 text-black dark:text-white font-bold py-2 px-4 text-xs rounded`}
                        onClick={action}
                    >
                        <i className={`fa fa-${icon}`} /> {label}
                    </button>
                ))
            }
        </div>
    )
}