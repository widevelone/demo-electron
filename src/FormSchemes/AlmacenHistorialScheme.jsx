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
                label: 'Nombre del almacen',
                name: 'nombre',
                type: 'text',
                required: true,
                placeholder: 'Nombre...',
                autoFocus: true
            },
            {
                label: 'Buscar usuario por departamento',
                name: 'departamento_id',
                type: 'doubleSelectApi',
                required: false,
                optionDescription: 'nombre',
                urlApi: '/departamentos',
                sub_name: 'encargado_id',
                sub_label: 'Seleccionar usuario',
                sub_urlApi: '/departamento/{param}/users',
                sub_optionDescription: 'etiqueta',
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
                label: 'Buscar usuario por departamento',
                name: 'departamento_id',
                type: 'doubleSelectApi',
                required: false,
                optionDescription: 'nombre',
                urlApi: '/departamentos',
                sub_name: 'user_id',
                sub_label: 'Seleccionar usuario',
                sub_urlApi: '/departamento/{param}/users',
                sub_optionDescription: 'etiqueta',
            },
            {
                label: 'Cantidad',
                name: 'cantidad',
                type: 'number',
                required: false,
            },
            {
                label: '¿Ingreso?',
                name: 'ingreso',
                type: 'checkbox',
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

// traspaso
export const CreateValuesTraspaso = (almacen_producto_estado_id) => {
    return {
        initialValues: {
            almacen_producto_estado_id: almacen_producto_estado_id || '',
            destino_almacen_producto_estado_id: '',
            cantidad: 0,
            // user_id: '',
            ingreso: false,
        },
        fieldsValidation: Yup.object().shape({
            // user_id: Yup.number()
            // .required('Campo requerido'),
            // departamento_id: Yup.number()
            // .required('Campo requerido'),
            cantidad: Yup.number()
            .required('Campo requerido')
            .positive('La cantidad debe ser mayor que 0')
            .moreThan(0, 'La cantidad debe ser mayor que 0'),
        }),
        fields: [
            // {
            //     label: 'Buscar usuario por departamento',
            //     name: 'departamento_id',
            //     type: 'doubleSelectApi',
            //     required: false,
            //     urlApi: '/departamentos',
            //     sub_name: 'user_id',
            //     sub_label: 'Seleccionar usuario',
            //     sub_urlApi: '/almacen_producto_estados/{param}/users',
            // },
            {
                label: 'Seleccionar un producto',
                name: 'destino_almacen_producto_estado_id',
                type: 'selectApi',
                required: true,
                urlApi: `/almacen_producto_estados/${almacen_producto_estado_id}/traspaso`,
                optionDescription: 'almacen_estado_producto_nombre',
                infoTags:[
                    {
                        label: 'Producto',
                        data: 'producto_nombre'
                    },
                    {
                        label: 'Estado',
                        data: 'estado_nombre'
                    },
                    {
                        label: 'Cantidad total',
                        data: 'cantidad_total',
                        mark: true
                    },
                ]
            },
            {
                label: 'Cantidad',
                name: 'cantidad',
                type: 'number',
                required: false,
            },
            {
                label: '¿Ingreso?',
                name: 'ingreso',
                type: 'checkbox',
            },
        ],
        
    }
}

export const CreateValuesTraspasoExterno = (almacen_producto_estado_id) => {
    return {
        initialValues: {
            almacen_producto_estado_id: almacen_producto_estado_id || '',
            almacen_id: '',
            cantidad: 0,
            // user_id: '',
            ingreso: false,
        },
        fieldsValidation: Yup.object().shape({
            // user_id: Yup.number()
            // .required('Campo requerido'),
            // departamento_id: Yup.number()
            // .required('Campo requerido'),
            cantidad: Yup.number()
            .required('Campo requerido')
            .positive('La cantidad debe ser mayor que 0')
            .moreThan(0, 'La cantidad debe ser mayor que 0'),
        }),
        fields: [
            {
                label: 'Seleccionar un almacén',
                name: 'almacen_id',
                type: 'doubleSelectApi',
                required: true,
                urlApi: `/almacen_producto_estados/${almacen_producto_estado_id}/almacenes`,
                optionDescription: 'nombre',
                sub_name:'destino_almacen_producto_estado_id',
                sub_label: 'Seleccionar un producto',
                sub_urlApi: `/almacen/{param}/producto_estado/${almacen_producto_estado_id}`,
                sub_optionDescription: 'almacen_estado_producto_nombre',
                sub_infoTags:[
                    {
                        label: 'Producto',
                        data: 'producto_nombre'
                    },
                    {
                        label: 'Estado',
                        data: 'estado_nombre'
                    },
                    {
                        label: 'Cantidad total',
                        data: 'cantidad_total',
                        mark: true
                    },
                ]
            },
            {
                label: 'Cantidad',
                name: 'cantidad',
                type: 'number',
                required: false,
            },
            {
                label: '¿Ingreso?',
                name: 'ingreso',
                type: 'checkbox',
            },
        ],
        
    }
}