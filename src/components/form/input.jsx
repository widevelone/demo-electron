import { Field } from 'formik'
import React from 'react'

export const Input = ({
    type = 'text',
    name,
    id,
    className = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder,
    required = false,
    label,
    errorMessage = null,
    requiredLabel = false,
    autoFocus
}) => {
    switch (type) {
        case 'checkbox':
            return (
                <>
                    <div className="flex items-center h-5">
                        <Field
                            id={id}
                            aria-describedby={id}
                            type={type}
                            className="form-checkbox h-6 w-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor={id} className="text-gray-500 dark:text-gray-300">{label}</label>
                    </div>
                </>
            )
        default:
            return (
                <div>
                    <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{label}{requiredLabel && <span className='font-bold text-red-500'> *</span>}</label>
                    <Field
                        type={type}
                        name={name}
                        id={id}
                        className={className}
                        placeholder={placeholder}
                        required={required}
                        autoFocus={autoFocus}
                    />
                    {errorMessage}
                </div>
            )
    }
}

