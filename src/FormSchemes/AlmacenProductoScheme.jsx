import * as Yup from 'yup';

export const CreateValues = (almacen_id) => {
    return {
        initialValues: {
            almacen_id: almacen_id || '',
            producto_id: '',
            estado_id: '',
        },
        fieldsValidation: Yup.object().shape({
            producto_id: Yup.string()
                .required('Campo requerido'),
        }),
        fields: [
            {
                label: "Productos disponibles",
                name: "producto_id",
                type: "doubleSelectApi",
                required: false,
                urlApi: "/productos",
                sub_name: 'estado_id',
                sub_label: 'Seleccione estado',
                sub_urlApi: "/producto/{param}/estados",
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