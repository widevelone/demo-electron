import * as Yup from 'yup';

export const CreateValues = () => {
    return {
        initialValues: {
            nombre: '',
            encargado_id: '',
        },
        fieldsValidation: Yup.object().shape({
            // nombre: Yup.string()
            //     .min(4, 'Mínimo 4 caracteres!')
            //     .max(50, 'Máximo 40 caracteres!')
            //     .required('Campo requerido'),
            // efectivo_inicial: DecimalValidationMoreThanZero,
            // billetes_inicial: DecimalValidation,
            // monedas_inicial: DecimalValidation,
            // dolares_en_bs_inicial: DecimalValidation,
        }),
        fields: [
            {
                label: "Nombre del almacen",
                name: "nombre",
                type: "text",
                // required: true,
                placeholder: 'Nombre...',
                autoFocus: true
            },
            {
                label: "Buscar usuario por departamento",
                name: "departamento_id",
                type: "doubleSelectApi",
                required: false,
                optionDescription: 'nombre',
                urlApi: "/departamentos",
                sub_name: 'encargado_id',
                sub_label: 'Seleccionar usuario',
                sub_urlApi: "/departamento/{param}/users",
                sub_optionDescription: 'etiqueta',
            },
            // {
            //     label: 'Efectivo inicial',
            //     name: 'efectivo_inicial',
            //     type: 'groupnumberCalculator',
            //     subData: 'Bs.',
            //     required: false,
            //     ChangeCalculator: (values, setValues, e) => {
            //         const efectivo_inicial = e.target.valueAsNumber || 0;
            //         setValues('billetes_inicial', efectivo_inicial)
            //         setValues('monedas_inicial', 0)
            //         setValues('dolares_en_bs_inicial', 0)
            //     }
            // },
            // {
            //     label: 'Billetes',
            //     name: 'billetes_inicial',
            //     type: 'groupnumberCalculator',
            //     subData: 'Bs.',
            //     required: false,
            //     ChangeCalculator: (values, setValues, e) => {
            //         const billetes_inicial = e.target.valueAsNumber || 0;
            //         const monedas_inicial = values.monedas_inicial || 0;
            //         const dolares_en_bs_inicial = values.dolares_en_bs_inicial || 0;
            //         const resultado = ToOneDecimal(billetes_inicial + monedas_inicial + dolares_en_bs_inicial)
            //         setValues('efectivo_inicial', resultado)
            //     }
            // },
            // {
            //     label: 'Monedas',
            //     name: 'monedas_inicial',
            //     type: 'groupnumberCalculator',
            //     subData: 'Bs.',
            //     required: false,
            //     ChangeCalculator: (values, setValues, e) => {
            //         const monedas_inicial = e.target.valueAsNumber || 0;
            //         const billetes_inicial = values.billetes_inicial || 0;
            //         const dolares_en_bs_inicial = values.dolares_en_bs_inicial || 0;
            //         const resultado = ToOneDecimal(billetes_inicial + monedas_inicial + dolares_en_bs_inicial)
            //         setValues('efectivo_inicial', resultado)
            //     }
            // },
            // {
            //     label: 'Dolares en Bs.',
            //     name: 'dolares_en_bs_inicial',
            //     type: 'groupnumberCalculator',
            //     subData: 'Bs.',
            //     required: false,
            //     ChangeCalculator: (values, setValues, e) => {
            //         const dolares_en_bs_inicial = e.target.valueAsNumber || 0;
            //         const billetes_inicial = values.billetes_inicial || 0;
            //         const monedas_inicial = values.monedas_inicial || 0;
            //         const resultado = ToOneDecimal(billetes_inicial + monedas_inicial + dolares_en_bs_inicial)
            //         setValues('efectivo_inicial', resultado)
            //     }
            // }
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