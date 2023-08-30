import * as Yup from 'yup';

export const UpdateValues = (data) => {
    return {
        initialValues: {
            id: data?.id || '',
            nombre: data?.nombre || '',
            departamento_id: data?.departamento_id || '',
            encargado_id: data?.encargado_id || '',
        },
        fieldsValidation: Yup.object().shape({
            nombre: Yup.string()
                .min(5, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
        }),
        fields: [
            {
                label: "Nombre del almacen",
                name: "nombre",
                type: "text",
                required: true,
                placeholder: 'Nombre...',
                autoFocus: true
            },
            {
                label: "Buscar usuario por departamento",
                name: "departamento_id",
                type: "doubleSelectApi",
                required: false,
                urlApi: "/departamentos",
                sub_name: 'encargado_id',
                sub_label: 'Seleccionar usuario',
                sub_urlApi: "/departamento/{param}/users",
            },
        ]
    }
}

export const CreateValues = (almacen_producto_estado_id) => {
    return {
        initialValues: {
            almacen_producto_estado_id: almacen_producto_estado_id || '',
            cantidad: 0,
            user_id: '',
            ingreso: false,
        },
        fieldsValidation: Yup.object().shape({
            user_id: Yup.number()
            .required('Campo requerido'),
            departamento_id: Yup.number()
            .required('Campo requerido'),
            cantidad: Yup.number()
            .required('Campo requerido')
            .positive('La cantidad debe ser mayor que 0')
            .moreThan(0, 'La cantidad debe ser mayor que 0'),
        }),
        fields: [
            {
                label: "Buscar usuario por departamento",
                name: "departamento_id",
                type: "doubleSelectApi",
                required: false,
                urlApi: "/departamentos",
                sub_name: 'user_id',
                sub_label: 'Seleccionar usuario',
                sub_urlApi: "/departamento/{param}/users",
            },
            {
                label: "Cantidad",
                name: "cantidad",
                type: "number",
                required: false,
            },
            {
                label: "¿Ingreso?",
                name: "ingreso",
                type: "checkbox",
            },
        ],
        
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