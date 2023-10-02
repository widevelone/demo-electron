import * as Yup from 'yup';

export const CreateValues = () => {
    return {
        initialValues: {
            nombre: '',
            descripcion: '',
        },
        fieldsValidation: Yup.object().shape({
            nombre: Yup.string()
                .min(4, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
        }),
        fields: [
            {
                label: "Nombre",
                name: "nombre",
                type: "text",
                required: true,
                placeholder: 'Nombre...',
                autoFocus: true
            },
            {
                label: "Descripción",
                name: "descripcion",
                type: "text",
                required: false,
                placeholder: 'Descripción...',
            },
        ]
    }
}

export const UpdateValues = (data) => {
    return {
        initialValues: {
            id: data?.id || '',
            nombre: data?.nombre || '',
            descripcion: data?.descripcion || '',
        },
        fieldsValidation: Yup.object().shape({
            nombre: Yup.string()
                .min(4, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
        }),
        fields: [
            {
                label: "Nombre",
                name: "nombre",
                type: "text",
                required: true,
                placeholder: 'Nombre...',
                autoFocus: true
            },
            {
                label: "Descripción",
                name: "descripcion",
                type: "text",
                required: false,
                placeholder: 'Descripción...',
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