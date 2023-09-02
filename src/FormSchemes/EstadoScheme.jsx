import * as Yup from 'yup';

export const UpdateValues = (data) => {
    return {
        initialValues: {
            id: data?.id || '',
            nombre: data?.nombre || '',
            descripcion: data?.descripcion || '',
            categoria_id: (data?.categoria_id+'') || ''
        },
        fieldsValidation: Yup.object().shape({
            nombre: Yup.string()
                .min(3, 'Mínimo 3 caracteres!')
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
                required: true,
                placeholder: 'Descripción...',
                autoFocus: true
            },
            {
                label: "Seleccione una categoría",
                name: "categoria_id",
                type: "radio",
                required: true,
                urlApi: "/categorias",
            },
        ]
    }
}

export const CreateValues = () => {
    return {
        initialValues: {
            id: '',
            nombre: '',
            descripcion: '',
            categoria_id: ''
        },
        fieldsValidation: Yup.object().shape({
            nombre: Yup.string()
                .min(3, 'Mínimo 3 caracteres!')
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
                required: true,
                placeholder: 'Descripción...',
                autoFocus: true
            },
            {
                label: "Seleccione una categoría",
                name: "categoria_id",
                type: "radio",
                required: true,
                urlApi: "/categorias",
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