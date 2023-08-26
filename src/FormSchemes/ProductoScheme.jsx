import * as Yup from 'yup';

export const UpdateValues = (data) => {
    return {
        initialValues: {
            id: data?.id || '',
            nombre: data?.nombre || '',
            descripcion: data?.descripcion || '',
            precio: data?.precio || 0,
            retornable: data?.retornable || false,
            capacidad: data?.capacidad || '',
            estado: data?.estado || '',
        },
        fieldsValidation: Yup.object().shape({
            nombre: Yup.string()
                .min(5, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
            estado: Yup.string()
                .required('Campo requerido!'),
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
            {
                label: "Precio estandar",
                name: "precio",
                type: "groupnumber",
                subData: 'Bs.',
                required: false,
                placeholder: 'Nombre...',
            },
            {
                label: "Capacidad",
                name: "capacidad",
                type: "text",
                required: false,
                placeholder: 'Capacidad...',
            },
            {
                label: "Estado",
                name: "estado",
                type: "select",
                required: true,
                options: [
                    {
                        label: "Activo",
                        value: "activo"
                    },
                    {
                        label: "Inactivo",
                        value: "inactivo"
                    },
                ]
            },
            {
                label: "¿Envase Retornable?",
                name: "retornable",
                type: "checkbox",
            },
        ]
    }
}

export const CreateValues = () => {
    return {
        initialValues: {
            nombre: '',
            descripcion: '',
            precio: 0,
            retornable: false,
            capacidad: '',
            estado: ''
        },
        fieldsValidation: Yup.object().shape({
            nombre: Yup.string()
                .min(5, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
            estado: Yup.string()
                .required('Campo requerido!'),
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
            {
                label: "Precio estandar",
                name: "precio",
                type: "groupnumber",
                subData: 'Bs.',
                required: false,
                placeholder: 'Nombre...',
            },
            {
                label: "Capacidad",
                name: "capacidad",
                type: "text",
                required: false,
                placeholder: 'Capacidad...',
            },
            {
                label: "Estado",
                name: "estado",
                type: "select",
                required: true,
                options: [
                    {
                        label: "Activo",
                        value: "activo"
                    },
                    {
                        label: "Inactivo",
                        value: "inactivo"
                    },
                ]
            },
            {
                label: "¿Envase Retornable?",
                name: "retornable",
                type: "checkbox",
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