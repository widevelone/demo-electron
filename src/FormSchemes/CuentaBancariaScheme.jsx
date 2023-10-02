import * as Yup from 'yup';

export const CreateValues = () => {
    return {
        initialValues: {
            nombre_banco: '',
            numero_cuenta: '',
        },
        fieldsValidation: Yup.object().shape({
            nombre_banco: Yup.string()
                .min(4, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
            numero_cuenta: Yup.string()
                .min(4, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
        }),
        fields: [
            {
                label: "Nombre del Banco",
                name: "nombre_banco",
                type: "text",
                required: true,
                placeholder: 'Nombre del Banco...',
                autoFocus: true
            },
            {
                label: "Número de cuenta",
                name: "numero_cuenta",
                type: "text",
                required: false,
                placeholder: 'Numero de cuenta...',
            },
        ]
    }
}

export const UpdateValues = (data) => {
    return {
        initialValues: {
            id: data.id || '',
            nombre_banco: data.nombre_banco || '',
            numero_cuenta: data.numero_cuenta || '',
        },
        fieldsValidation: Yup.object().shape({
            nombre_banco: Yup.string()
                .min(4, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
            numero_cuenta: Yup.string()
                .min(4, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
        }),
        fields: [
            {
                label: "Nombre del Banco",
                name: "nombre_banco",
                type: "text",
                required: true,
                placeholder: 'Nombre del Banco...',
                autoFocus: true
            },
            {
                label: "Número de cuenta",
                name: "numero_cuenta",
                type: "text",
                required: false,
                placeholder: 'Numero de cuenta...',
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