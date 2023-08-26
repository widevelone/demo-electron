import React from 'react'
// import { useOnKeyDown } from '../../hooks/useOnKeyDown';
import { ModalContainer } from './ModalContainer';
import { Form, Formik } from 'formik';

import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import { ModalFormBody } from './ModalFormBody';
import { ModalFormField } from './ModalFormField';
import { useDispatch } from 'react-redux';
import { toastOn } from '../../store/slices/toast';
import { requestAuth } from '../../http/httpRequest';

export const ModalForm = ({
    setModal,
    label,
    dataValues,
    urlApi,
    method,
    call,
    buttonLabel,
    disabled
}) => {
    const dispatch = useDispatch()
    // useOnKeyDown(setModal);
    // if (!noUseKeyDown) {
    // }
    return (
        <ModalContainer
            setModal={setModal}
            width={dataValues.fields != null && dataValues.fields.length > 0 ? 'md:max-w-5xl' : 'md:max-w-min'}
        >
            <Formik
                initialValues={dataValues.initialValues}

                validationSchema={dataValues.fieldsValidation}

                onSubmit={async (values) => {
                    await requestAuth(
                        method,
                        urlApi,
                        values
                    )
                        .then((response) => {
                            setModal(false)
                            call()
                            dispatch(toastOn({ type: "success", message: response.data.message }))
                        }
                        )
                        .catch(error => {
                            dispatch(toastOn({ type: "danger", message: error.response.data.message }))
                        })
                }}
            >
                {({ errors, isSubmitting, touched, values, handleChange, setFieldValue }) => (
                    <Form className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <ModalHeader
                            setModal={setModal}
                            label={label}
                        />
                        {dataValues.fields != null && dataValues.fields.length > 0 &&
                            <ModalFormBody>
                                <ModalFormField
                                    fields={dataValues.fields}
                                    errors={errors}
                                    touched={touched}
                                    values={values}
                                    setValues={setFieldValue}
                                    handleChange={handleChange}
                                />
                            </ModalFormBody>
                        }
                        <ModalFooter
                            buttonAccept={buttonLabel}
                            cancel={setModal}
                            disabled={disabled}
                            isSubmitting={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
        </ModalContainer>
    )
}
