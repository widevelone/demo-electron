import * as Yup from 'yup';

export const CreateValues = (almacen_producto_estado_id) => {
    return {
        initialValues: {
            almacen_producto_estado_id: almacen_producto_estado_id || '',
            nombre: '',
            fecha_inicio: '',
            fecha_fin: '',
            // ingreso: false,
        },
        fieldsValidation: Yup.object().shape({
            // user_id: Yup.number()
            // .required('Campo requerido'),
            // departamento_id: Yup.number()
            // .required('Campo requerido'),
            // cantidad: Yup.number()
            // .required('Campo requerido')
            // .positive('La cantidad debe ser mayor que 0')
            // .moreThan(0, 'La cantidad debe ser mayor que 0'),
        }),
        fields: [
            // {
            //     label: 'Buscar usuario por departamento',
            //     name: 'departamento_id',
            //     type: 'doubleSelectApi',
            //     required: false,
            //     optionDescription: 'nombre',
            //     urlApi: '/departamentos',
            //     sub_name: 'user_id',
            //     sub_label: 'Seleccionar usuario',
            //     sub_urlApi: '/departamento/{param}/users',
            //     sub_optionDescription: 'etiqueta',
            // },
            // {
            //     label: 'Cantidad',
            //     name: 'cantidad',
            //     type: 'number',
            //     required: false,
            // },
            // {
            //     label: '¿Ingreso?',
            //     name: 'ingreso',
            //     type: 'checkbox',
            // },
            {
                label: 'Nombre',
                name: 'nombre',
                type: 'text',
                required: true,
                placeholder: 'Nombre...',
                autoFocus: true
            },
            {
                label: 'Fecha de inicio',
                name: 'fecha_inicio',
                type: 'date',
                required: true,
                placeholder: 'Fecha de inicio...',
                autoFocus: true
            },
            // {
            //     label: 'Fecha de inicio',
            //     name: 'fecha_inicio',
            //     type: 'datetime-local',
            //     required: true,
            //     placeholder: 'Fecha de inicio...',
            //     autoFocus: true
            // },
            {
                label: 'Fecha fin',
                name: 'fecha_fin',
                type: 'date',
                required: true,
                placeholder: 'Fecha fin...',
                autoFocus: true
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