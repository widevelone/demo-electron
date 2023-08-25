import React from 'react'

export const Actions = ({ buttons }) => {
    return (
        <div className='flex gap-1 flex-wrap'>
            {
                buttons.map(({ icon, label, action }, index) => (
                    <button
                        key={index}
                        type='button'
                        className="bg-yellow-500 dark:bg-yellow-600 dark:hover:bg-gray-500 hover:bg-gray-300 text-black dark:text-white font-bold py-2 px-4 text-xs rounded"
                        onClick={action}
                    >
                        <i className={`fa fa-${icon}`} /> {label}
                    </button>
                ))
            }
        </div>
    )
}