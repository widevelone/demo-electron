import { validationDateParam } from "../utils/dateFormat"
import * as Yup from 'yup';

export const UpdateValues = (data) => {
    let rols = []
    data?.rols?.forEach(rol => {
        rols.push(rol.id + "")
    });

    return {
        initialValues: {
            id: data.id || '',
            codigo: data.codigo || '',
            nombres: data.nombres || '',
            apellido_paterno: data.apellido_paterno || '',
            apellido_materno: data.apellido_materno || '',
            email: data.email || '',
            ci: data.ci || '',
            estado: data.estado || '',
            direccion: data.direccion || '',
            rols: rols,
            departamento_id: data.departamento_id !== null && data.departamento_id !== 0 ? data.departamento_id : '',
            password: '',
            createdAt: validationDateParam(data?.createdAt) || "",
        },
        fieldsValidation: Yup.object().shape({
            codigo: Yup.string()
                .min(4, 'Mínimo 4 caracteres!')
                .max(10, 'Máximo 10 caracteres!')
                .required('Campo requerido'),
            nombres: Yup.string()
                .min(3, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
            estado: Yup.string()
                .required('Campo requerido'),
            departamento_id: Yup.string()
                .required('Campo requerido'),
            password: Yup.string()
                .min(4, 'Mínimo 4 caracteres!')
            // .required('Campo requerido'),
        }),
        fields: [
            {
                label: "Código de empleado",
                name: "codigo",
                type: "text",
                required: true,
                disabled: true
            },
            {
                label: "Nombres",
                name: "nombres",
                type: "text",
                required: true,
                placeholder: 'Nombre...',
                autoFocus: true
            },
            {
                label: "Apellido paterno",
                name: "apellido_paterno",
                type: "text",
                placeholder: 'Apellido paterno...',
                required: false
            },
            {
                label: "Apellido materno",
                name: "apellido_materno",
                type: "text",
                placeholder: 'Apellido materno...',
                required: false
            },
            {
                label: "Correo electrónico",
                name: "email",
                type: "email",
                placeholder: 'name@mail.com...',
                required: false
            },
            {
                label: "Carnet",
                name: "ci",
                type: "text",
                placeholder: '123456lp...',
                required: false
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
                label: "Dirección",
                name: "direccion",
                type: "text",
                required: false
            },
            {
                label: "Fecha de creación",
                name: "createdAt",
                type: "date",
                required: false,
                disabled: true
            },
            {
                label: "Asignar departamento",
                name: "departamento_id",
                type: "selectApi",
                required: true,
                urlApi: "/departamentos",
            },
            {
                label: "Contraseña",
                name: "password",
                type: "password",
                required: false
            },
            {
                label: "Asignar roles",
                name: "rols",
                type: "checkboxes",
                required: false,
                urlApi: "/roles",
            },
        ]
    }
}

export const CreateValues = () => {
    return {
        initialValues: {
            // codigo: '',
            nombres: '',
            apellido_paterno: '',
            apellido_materno: '',
            email: '',
            ci: '',
            estado: '',
            direccion: '',
            departamento_id: '',
            password: '1234',
            rols: [],
        },
        fieldsValidation: Yup.object().shape({
            // codigo: Yup.string()
            //     .min(4, 'Mínimo 4 caracteres!')
            //     .max(10, 'Máximo 10 caracteres!')
            //     .required('Campo requerido'),
            nombres: Yup.string()
                .min(3, 'Mínimo 4 caracteres!')
                .max(50, 'Máximo 40 caracteres!')
                .required('Campo requerido'),
            estado: Yup.string()
                .required('Campo requerido'),
            departamento_id: Yup.string()
                .required('Campo requerido'),
            password: Yup.string()
                .min(4, 'Mínimo 4 caracteres!')
                .required('Campo requerido'),
        }),
        fields: [
            // {
            //     label: "Código de empleado",
            //     name: "codigo",
            //     type: "text",
            //     required: true,
            // },
            {
                label: "Nombres",
                name: "nombres",
                type: "text",
                required: true,
                placeholder: 'Nombre...',
                autoFocus: true
            },
            {
                label: "Apellido paterno",
                name: "apellido_paterno",
                type: "text",
                placeholder: 'Apellido paterno...',
                required: false
            },
            {
                label: "Apellido materno",
                name: "apellido_materno",
                type: "text",
                placeholder: 'Apellido materno...',
                required: false
            },
            {
                label: "Correo electrónico",
                name: "email",
                type: "email",
                placeholder: 'name@mail.com...',
                required: false
            },
            {
                label: "Carnet",
                name: "ci",
                type: "text",
                placeholder: '123456lp...',
                required: false
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
                label: "Dirección",
                name: "direccion",
                type: "text",
                required: false
            },
            {
                label: "Asignar departamento",
                name: "departamento_id",
                type: "selectApi",
                required: true,
                urlApi: "/departamentos",
            },
            {
                label: "Contraseña",
                name: "password",
                type: "password",
                required: true
            },
            {
                label: "Asignar roles",
                name: "rols",
                type: "checkboxes",
                required: false,
                urlApi: "/roles",
            },
        ]
    }
}