import { Field } from 'formik'
import React from 'react'

export const InputSearch = ({ name }) => {
    return (
        <Field
            type="text"
            name={name}
            // className={`shadow-sm outline-none p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300  dark:bg-gray-700 dark:border-l-gray-700 w-${w} dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-yellow-600 focus:ring-0`}
            className={`shadow-sm outline-none py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300  dark:bg-gray-700 dark:border-l-gray-700 w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-yellow-600 focus:border-yellow-600 focus:ring-0`}
            placeholder="Buscar..."
            autoFocus
        />
    )
}

export const InputSelectSearch = ({
    name,
    options
}) => {
    return (
        <Field
            as="select"
            name={name}
            className="bg-gray-50 outline-none border rounded-l-lg border-gray-300 text-gray-900 text-[13px] focus:ring-yellow-600 focus:border-yellow-600 max-w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-600 dark:focus:border-yellow-600"
        >
            {
                options?.map((opt, index) => (
                    <option key={index} value={opt.value}>{opt.label}</option>

                ))
            }
        </Field>
    )
}
