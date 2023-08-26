import React from 'react'

export const ModalFormBody = ({children}) => {
    return (
        <div className="p-3 space-y-6">
            <div className="grid grid-cols-12 gap-x-3 gap-y-5">
            {children}
            </div>
        </div>
    )
}
