import React from 'react'
import '../../index.css'

export const ModalContainer = ({ setModal, children, width }) => {
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center max-h-screen`}
                onClick={() => {
                    setModal(false);
                }}
            >
                <div
                    className={`fixed z-20 inset-0 flex items-center justify-center`}
                >
                    <div
                        className={`w-full ${width} max-h-full overflow-auto dark:bg-gray-700 rounded-md`}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
