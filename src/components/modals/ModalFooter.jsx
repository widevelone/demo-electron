import React from 'react'

export const ModalFooter = ({
    buttonAccept,
    cancel,
    disabled
}) => {
    return (
        <div className="flex items-center justify-end p-3 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
                type="input"
                className="
                dark:text-white
                focus:ring-4
                focus:outline-none
                focus:ring-yellow-300
                font-medium
                rounded-lg
                text-sm
                px-5 py-2.5
                text-center
                bg-yellow-500 hover:bg-yellow-400
                dark:bg-yellow-700 dark:hover:bg-yellow-600 disabled:bg-gray-600 dark:disabled:bg-gray-600 disabled:opacity-50
                dark:focus:ring-yellow-800"
                disabled={disabled}
            >
                {buttonAccept}
            </button>
            <button
                type="button"
                className="
                text-white
                focus:ring-4
                focus:outline-none
                focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                px-5 py-2.5
                text-center
                bg-gray-500 hover:bg-gray-600
                dark:bg-gray-600 dark:hover:bg-gray-500
                dark:focus:ring-yellow-800"
                onClick={() => cancel(false)}
            >
                Cancelar
            </button>
        </div>
    )
}
