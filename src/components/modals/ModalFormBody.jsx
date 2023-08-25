import React from 'react'

export const ModalFormBody = ({children}) => {
    return (
        <div className="p-3 space-y-6">
            <div className="grid grid-cols-12 gap-4">
            {children}
            </div>
        </div>
    )
}
