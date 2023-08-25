import { Field } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toastOn } from '../../store/slices/toast'
import { requestAuth } from '../../http/httpRequest'

export const ModalFormField = ({ fields, errors, touched, values, handleChange }) => {
    return (
        fields?.map((field, index) => (
            <React.Fragment
                key={index}
            >
                <FieldParam
                    field={field}
                    errors={errors}
                    touched={touched}
                    values={values}
                    handleChange={handleChange}
                />
            </React.Fragment>
        ))
    )
}


const FieldParam = ({ field, errors, touched, values, handleChange }) => {
    switch (field.type) {
        case "text":
        case "email":
        case "password":
        case "date":
            return (
                <div className="col-span-6 sm:col-span-4 md:col-span-3" >
                    <label htmlFor={field.name} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        {field.label}
                        {field.required && <RequiredPick />}
                    </label>
                    <Field
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        className="shadow-sm outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold disabled:opacity-55 disabled:text-gray-500 dark:disabled:text-gray-400"
                        placeholder={field.placeholder}
                        required={field.required}
                        autoFocus={field.autoFocus}
                        disabled={field.disabled}
                        autoComplete="new-password"
                    />
                    <ErrorLabel
                        name={field.name}
                        errors={errors}
                        touched={touched}
                    />
                </div>
            )
        case "textArea":
            return (
                <div className="col-span-6 sm:col-span-4 md:col-span-3" >
                    <label htmlFor={field.name} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        {field.label}
                        {field.required && <RequiredPick />}
                    </label>
                    <textarea
                        rows={field.rows}
                        name={field.name}
                        id={field.name}
                        className="block p-2.5 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={field.placeholder}
                        required={field.required}
                        autoFocus={field.autoFocus}
                        value={values[field?.name]}
                        onChange={handleChange}
                    />
                    <ErrorLabel
                        name={field.name}
                        errors={errors}
                        touched={touched}
                    />
                </div>
            )
        case "checkbox":
            return (
                <label
                    htmlFor={field.name}
                    className="col-span-6 sm:col-span-4 md:col-span-3 p-2 rounded-lg dark:bg-gray-600 bg-gray-200 flex items-center border border-gray-300 dark:border-gray-500 select-none"
                >
                    <Field
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        className="form-checkbox outline-none h-6 w-6 rounded dark:accent-pink-500 accent-indigo-500 bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                    <span className="m-2 text-sm font-semibold text-gray-900 dark:text-white">
                        {field.label}
                    </span>
                </label>
            )
        case "select":
            return (
                <div className="col-span-6 sm:col-span-4 md:col-span-3" >
                    <label htmlFor={field.name} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        {field.label}
                        {field.required && <RequiredPick />}
                    </label>
                    <Field
                        id={field.name}
                        as="select"
                        name={field.name}
                        required={field.required}
                        className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value=''>...</option>
                        {
                            field?.options?.map((option, index) => (
                                <option value={option?.value} key={index}>{option?.label}</option>
                            ))
                        }
                    </Field>
                    <ErrorLabel
                        name={field.name}
                        errors={errors}
                        touched={touched}
                    />
                </div>
            )
        case "selectApi":
            return (
                <SelectApi
                    field={field}
                    errors={errors}
                    touched={touched}
                />
            )
        case "checkboxes":
            return (
                <Checkboxes field={field} />
            )
        default:
            break;
    }
}

const Checkboxes = ({
    field
}) => {
    const dispatch = useDispatch()
    const [list, setList] = useState([]);
    const getData = async () => {
        await requestAuth(
            'get',
            field?.urlApi,
            null
        )
            .then((response) => {
                setList(response.data)
            }
            )
            .catch(error => {
                dispatch(toastOn({ type: "danger", message: error?.response?.data?.message || "error a listar las casillas." }))
            })
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="col-start-1 col-end-13 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-500 rounded p-3" >
            <div className='text-center text-sm font-bold pb-2'>{field.label}</div>
            <div className="grid sm:grid-cols-3 gap-3">
                {
                    list?.map((item, index) => (
                        <div key={index} className='select-none'>
                            <label htmlFor={item.nombre} className="col-span-6 sm:col-span-2 p-2 rounded-lg dark:bg-gray-600 bg-gray-200 flex items-center border border-gray-300 dark:border-gray-500" >
                                <Field
                                    type='checkbox'
                                    name={field.name}
                                    id={item.nombre}
                                    className="form-checkbox outline-none dark:accent-pink-500 accent-indigo-500 h-6 w-6 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 text-yellow-600"
                                    value={item.id + ""}
                                    disabled={item?.permanent}
                                />
                                <span className="m-2 text-sm font-semibold text-gray-900 dark:text-white">
                                    {item.etiqueta}
                                </span>
                            </label>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

const SelectApi = ({ field, errors, touched }) => {
    const dispatch = useDispatch()
    const [list, setList] = useState([]);
    const getData = async () => {
        await requestAuth(
            'get',
            field?.urlApi,
            null
        )
            .then((response) => {
                setList(response.data)
            }
            )
            .catch(error => {
                dispatch(toastOn({ type: "danger", message: error?.response?.data?.message || "error a listar las opciones" }))
            })
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="col-span-6 sm:col-span-4 md:col-span-3" >
            <label htmlFor={field.name} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                {field.label}
                {field.required && <RequiredPick />}
            </label>
            <Field
                id={field.name}
                as="select"
                name={field.name}
                required={field.required}
                className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value=''>...</option>
                {
                    list?.map((option, index) => (
                        <option value={option?.id} key={index}>{option?.nombre}</option>
                    ))
                }
            </Field>
            <ErrorLabel
                name={field.name}
                errors={errors}
                touched={touched}
            />
        </div>
    )
}

const RequiredPick = () => {
    return (
        <span className='dark:text-red-500 text-red-600 font-extrabold'>
            *
        </span>
    )
}

const ErrorLabel = ({ name, errors, touched }) => {
    return (
        errors[name] && touched[name] ? (
            <span className='text-xs text-red-600 dark:text-red-500 font-semibold absolute'>{errors[name]}</span>
        ) : null

    )
}