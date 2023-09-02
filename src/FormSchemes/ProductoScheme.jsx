import * as Yup from 'yup';

export const UpdateValues = (data) => {
    let estados = []
    data?.estados?.forEach(estado => {
        estados.push(estado.id + "")
    });
    return {
        initialValues: {
            id: data?.id || '',
            nombre: data?.nombre || '',
            descripcion: data?.descripcion || '',
            precio: data?.precio || 0,
            retornable: data?.retornable || false,
            capacidad: data?.capacidad || '',
            estados: estados,
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
                label: "¿Envase Retornable?",
                name: "retornable",
                type: "checkbox",
            },
            {
                label: "Asignar estados para el producto",
                name: "estados",
                type: "checkboxes",
                required: false,
                urlApi: "/estados/categoria/estado-de-productos",
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
            estados:[]
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
                label: "¿Envase Retornable?",
                name: "retornable",
                type: "checkbox",
            },
            {
                label: "Asignar estados para el producto",
                name: "estados",
                type: "checkboxes",
                required: false,
                urlApi: "/estados/categoria/estado-de-productos",
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