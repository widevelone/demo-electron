import React from 'react'

export const DefaultBackground = ({ children }) => {
    return (
        // <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
            {children}
        </div>
    )
}
