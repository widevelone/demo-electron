import { validationDateParam } from "../utils/dateFormat"
import * as Yup from 'yup';


export const CreateValues = () => {
    return {
        initialValues: {
            etiqueta: '',
            menus: [],
        },
        fieldsValidation: Yup.object().shape({
            etiqueta: Yup.string()
                .min(5, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
        }),
        fields: [
            {
                label: "Nombre del rol",
                name: "etiqueta",
                type: "text",
                required: true,
                placeholder: 'Nombre...',
                autoFocus: true
            },
            {
                label: "Asignar menus",
                name: "menus",
                type: "checkboxes",
                required: false,
                urlApi: "/menus",
                indexLabel: 'etiqueta'
            },
        ]
    }
}

export const UpdateValues = (data) => {
    let menus = []
    data?.menus?.forEach(menu => {
        menus.push(menu.id + "")
    });

    return {
        initialValues: {
            id: data?.id,
            etiqueta: data?.etiqueta || '',
            createdAt: validationDateParam(data?.createdAt) || '',
            menus: menus,
        },
        fieldsValidation: Yup.object().shape({
            etiqueta: Yup.string()
                .min(5, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
        }),
        fields: [
            {
                label: "Nombre del rol",
                name: "etiqueta",
                type: "text",
                required: true,
                placeholder: 'Nombre...',
                autoFocus: true
            },
            {
                label: "Fecha de creación",
                name: "createdAt",
                type: "date",
                required: false,
                disabled: true
            },
            {
                label: "Asignar menus",
                name: "menus",
                type: "checkboxes",
                required: false,
                urlApi: "/menus",
                indexLabel: 'etiqueta'
            },
        ]
    }
}

export const DeleteValues = (data) => {
    return {
        initialValues: {
        },
        fieldsValidation: Yup.object().shape({
        }),
        fields: []
    }
}