import React from 'react'
import { InputSearch, InputSelectSearch } from './InputSearch'
import { Form, Formik } from 'formik'

export const Searcher = ({
    initialValues,
    selectedDay,
    setSelectedDay,
    paginate,
    setPaginate,
    call,
    options,
}) => {
    const clearSearch = () => {
        setPaginate({ ...paginate, filterParam: '', initial: '', final: '' })
        setSelectedDay(undefined)
    }
    return (
        <Formik
            initialValues={{ filterBy: paginate.filterBy, filterParam: '' }}
            onSubmit={(values) => {
                setPaginate({ ...paginate, filterBy: values.filterBy, filterParam: values.filterParam })
            }}
        >
            {({ resetForm }) => (
                <Form className={`flex flex-wrap`}>
                    <InputSelectSearch
                        name="filterBy"
                        options={options}
                    />
                    <div className={`relative w-2/4`}>
                        <InputSearch
                            name={"filterParam"}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                            onClick={() => {
                                resetForm();
                                clearSearch();
                            }}
                        >
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 hover:dark:bg-yellow-500 outline-none border-lg border-yellow-600 text-white text-sm rounded-r-lg focus:ring-yellow-500 focus:border-yellow-500 max-w-[150px] p-2.5 dark:bg-yellow-600 dark:border-yellow-600 dark:placeholder-gray-400 dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                    >
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <span className="sr-only">Search</span>
                    </button>

                </Form>
            )}
        </Formik>
    )
}
