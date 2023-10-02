import * as Yup from 'yup';
import { DecimalValidation, DecimalValidationMoreThanZero, ToOneDecimal } from '../utils/dataValidations';

export const CreateValues = (efectivo_id, ingreso) => {
    return {
        initialValues: {
            efectivo_id: efectivo_id,
            monto: 0,
            billetes: 0,
            monedas: 0,
            dolares_en_bs: 0,
            ingreso: ingreso,

        },
        fieldsValidation: Yup.object().shape({
            monto: DecimalValidationMoreThanZero,
            billetes: DecimalValidation,
            monedas: DecimalValidation,
            dolares_en_bs: DecimalValidation
        }),
        fields: [
            {
                label: "Monto",
                name: "monto",
                type: "groupnumberCalculator",
                subData: 'Bs.',
                required: false,
                ChangeCalculator: (values, setValues, e) => {
                    const monto = e.target.valueAsNumber || 0;
                    setValues('billetes', monto)
                    setValues('monedas', 0)
                    setValues('dolares_en_bs', 0)
                }
            },
            {
                label: "Billetes",
                name: "billetes",
                type: "groupnumberCalculator",
                subData: 'Bs.',
                required: false,
                ChangeCalculator: (values, setValues, e) => {
                    const billetes = e.target.valueAsNumber || 0;
                    const monedas = values.monedas || 0;
                    const dolares_en_bs = values.dolares_en_bs || 0;
                    const resultado = ToOneDecimal(billetes + monedas + dolares_en_bs);
                    setValues('monto', resultado)
                }
            },
            {
                label: "Monedas",
                name: "monedas",
                type: "groupnumberCalculator",
                subData: 'Bs.',
                required: false,
                ChangeCalculator: (values, setValues, e) => {
                    const monedas = e.target.valueAsNumber || 0;
                    const billetes = values.billetes || 0;
                    const dolares_en_bs = values.dolares_en_bs || 0;
                    const resultado = ToOneDecimal(billetes + monedas + dolares_en_bs);
                    setValues('monto', resultado)
                }
            },
            {
                label: "Dolares en Bs.",
                name: "dolares_en_bs",
                type: "groupnumberCalculator",
                subData: 'Bs.',
                required: false,
                ChangeCalculator: (values, setValues, e) => {
                    const dolares_en_bs = e.target.valueAsNumber || 0;
                    const billetes = values.billetes || 0;
                    const monedas = values.monedas || 0;
                    const resultado = ToOneDecimal(billetes + monedas + dolares_en_bs);
                    setValues('monto', resultado)
                }
            }
        ],
    }
}