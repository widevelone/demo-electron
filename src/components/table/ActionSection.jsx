import React from 'react'

export const ActionSection = ({ children }) => {
    return (
        <div className='grid mb-2 gap-2 overflow-auto'>
            {children}
        </div>
    )
}
