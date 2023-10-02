import { Field } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toastOn } from '../../store/slices/toast'
import { requestAuth } from '../../http/httpRequest'

export const ModalFormField = ({ fields, errors, touched, values, setValues, handleChange }) => {

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
                    setValues={setValues}
                    handleChange={handleChange}
                />
            </React.Fragment>
        ))
    )
}


const FieldParam = ({ field, errors, touched, values, setValues, handleChange }) => {
    switch (field.type) {
        case "text":
        case "email":
        case "password":
        case "date":
        case "datetime-local":
        case "number":
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
                        className="shadow-sm outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold disabled:opacity-55 disabled:text-gray-500 dark:disabled:text-gray-400"
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
        case "groupnumber":
            return (
                <div className="col-span-6 sm:col-span-4 md:col-span-3" >
                    <label htmlFor={field.name} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        {field.label}
                        {field.required && <RequiredPick />}
                    </label>
                    <div className="flex">
                        <Field
                            type={'number'}
                            name={field.name}
                            id={field.name}
                            className="shadow-sm outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold disabled:opacity-55 disabled:text-gray-500 dark:disabled:text-gray-400"
                            placeholder={field.placeholder}
                            required={field.required}
                            autoFocus={field.autoFocus}
                            disabled={field.disabled}
                            autoComplete="new-password"
                        />
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded-r-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-500">
                            {field.subData}
                        </span>
                    </div>
                    <ErrorLabel
                        name={field.name}
                        errors={errors}
                        touched={touched}
                    />

                </div>
            )
        case "groupnumberCalculator":
            return (
                <div className="col-span-6 sm:col-span-4 md:col-span-3" >
                    <label htmlFor={field.name} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        {field.label}
                        {field.required && <RequiredPick />}
                    </label>
                    <div className="flex">
                        <Field
                            type={'number'}
                            name={field.name}
                            id={field.name}
                            step='0.1'
                            className="shadow-sm outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold disabled:opacity-55 disabled:text-gray-500 dark:disabled:text-gray-400"
                            placeholder={field.placeholder}
                            required={field.required}
                            autoFocus={field.autoFocus}
                            disabled={field.disabled}
                            autoComplete="new-password"
                            onChange={(e) => {
                                handleChange(e)
                                field.ChangeCalculator(values, setValues, e)
                            }}
                        />
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded-r-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-500">
                            {field.subData}
                        </span>
                    </div>
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
                        className="form-checkbox outline-none dark:accent-pink-500 accent-yellow-500 h-6 w-6 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 text-yellow-600"
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
                    handleChange={handleChange}
                    errors={errors}
                    touched={touched}
                />
            )
        case "doubleSelectApi":
            return (
                <DoubleSelectApi
                    field={field}
                    errors={errors}
                    touched={touched}
                    values={values}
                    setValues={setValues}
                    handleChange={handleChange}
                />
            )
        case "checkboxes":
            return (
                <Checkboxes field={field} />
            )
        case "radio":
            return (
                <RadioCheck field={field} />
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
                                    className="form-checkbox outline-none dark:accent-pink-500 accent-yellow-500 h-6 w-6 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 text-yellow-600"
                                    value={item.id + ""}
                                    disabled={item?.permanent}
                                />
                                <span className="m-2 text-sm font-semibold text-gray-900 dark:text-white">
                                    {item[field.indexLabel]}
                                </span>
                            </label>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

const RadioCheck = ({
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
                                    type='radio'
                                    name={field.name}
                                    id={item.nombre}
                                    className="form-checkbox outline-none dark:accent-pink-500 accent-yellow-500 h-6 w-6 rounded-full bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 text-yellow-600"
                                    value={item.id + ""}
                                    disabled={item?.permanent}
                                />
                                <span className="m-2 text-sm font-semibold text-gray-900 dark:text-white">
                                    {item.nombre}
                                </span>
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const SelectApi = ({ field, handleChange, errors, touched }) => {
    const dispatch = useDispatch()
    const [list, setList] = useState([]);
    const [extraData, setExtraData] = useState(null)
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
                className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold"
                onChange={(e) => {
                    handleChange(e)
                    setExtraData(list.find(l => (l.id + '') === e.target.value))
                }}
            >
                <option value=''>...</option>
                {
                    list?.map((option, index) => (
                        <option value={option?.id} key={index}>{option[field.optionDescription]}</option>
                    ))
                }
            </Field>
            <ErrorLabel
                name={field.name}
                errors={errors}
                touched={touched}
            />
            {
                field.infoTags && field.infoTags.length > 0 && extraData &&
                <div className='space-y-1 gap-x-1 text-xs dark:bg-gray-800 bg-gray-200 p-1 rounded-b-lg dark:text-gray-400 text-gray-700'>
                    {
                        field.infoTags?.map((info, index) => (
                            <div
                                key={index}
                                className="p-0 leading-none"
                            >
                                <span className='font-bold dark:text-gray-400 text-gray-600'>{info.label}:</span> <span className={`${info.mark ? 'dark:text-red-500 text-red-600 font-bold' : 'font-semibold dark:text-gray-300 text-gray-800'}`}>{extraData[info.data]}</span>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

const DoubleSelectApi = ({ field, errors, touched, values, setValues, handleChange }) => {
    const dispatch = useDispatch()
    const [list, setList] = useState([]);
    const [subList, setSubList] = useState([]);
    const [extraData, setExtraData] = useState(null)
    const [called, setCalled] = useState(false);
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
        if (values[field.name] !== null && values[field.name] !== '')
            definedSubList(values[field.name])

        setCalled(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const definedSubList = async (value) => {
        if (called) {
            setValues(field.sub_name, '')
            setSubList([])
        }
        if (value !== null && value !== '' && value !== undefined) {
            await requestAuth(
                'get',
                field?.sub_urlApi.replace('{param}', value),
                null
            )
                .then((response) => {
                    setSubList(response.data)
                }
                )
                .catch(error => {
                    dispatch(toastOn({ type: "danger", message: error?.response?.data?.message || "error a listar las opciones" }))
                })
        }
        else {
            values[field.sub_name] = ''
        }
    }
    return (
        <>
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
                    onChange={(e) => {
                        handleChange(e)
                        definedSubList(e.target.value)
                        setExtraData(null)
                    }}
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value=''>...</option>
                    {
                        list?.map((option, index) => (
                            <option value={option?.id} key={index}>{option[field.optionDescription]}</option>
                        ))
                    }
                </Field>
                <ErrorLabel
                    name={field.name}
                    errors={errors}
                    touched={touched}
                />
            </div>
            {
                // subList.length > 0 &&
                <>
                    < div className="col-span-6 sm:col-span-4 md:col-span-3" >
                        <label htmlFor={field.sub_name} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                            {field.sub_label}
                            {field.required && <RequiredPick />}
                        </label>
                        <Field
                            id={field.sub_name}
                            as="select"
                            name={field.sub_name}
                            required={field.required}
                            className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => {
                                handleChange(e)
                                setExtraData(subList.find(l => (l.id + '') === e.target.value))
                            }}
                        >
                            <option value=''>...</option>
                            {
                                subList?.map((option, index) => (
                                    <option value={option?.id} key={index}>{option[field.sub_optionDescription]}</option>
                                ))
                            }
                        </Field>
                        <ErrorLabel
                            name={field.sub_name}
                            errors={errors}
                            touched={touched}
                        />
                        {
                            field.sub_infoTags && field.sub_infoTags.length > 0 && extraData &&
                            <div className='space-y-1 gap-x-1 text-xs dark:bg-gray-800 bg-gray-200 p-1 rounded-b-lg dark:text-gray-400 text-gray-700'>
                                {
                                    field.sub_infoTags?.map((info, index) => (
                                        <div
                                            key={index}
                                            className="p-0 leading-none"
                                        >
                                            <span className='font-bold dark:text-gray-400 text-gray-600'>{info.label}:</span> <span className={`${info.mark ? 'dark:text-red-500 text-red-600 font-bold' : 'font-semibold dark:text-gray-300 text-gray-800'}`}>{extraData[info.data]}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div >
                </>
            }
        </>
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