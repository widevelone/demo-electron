import * as Yup from 'yup'

export const decimalVerification = (value) => {
    return /^\d+(\.\d{1})?$/.test(value)
}

export const DecimalValidation = Yup.number()
    .required('Campo requerido')
    .positive('La cantidad debe ser mayor que 0')
    .moreThan(-0.1, 'La cantidad debe ser mayor o igual a 0')
    .test('solo-un-decimal', 'Debe tener solo un dígito decimal', (value) => decimalVerification(value))

export const DecimalValidationMoreThanZero = Yup.number()
    .required('Campo requerido')
    .positive('La cantidad debe ser mayor que 0')
    .moreThan(0, 'La cantidad debe ser mayor que 0')
    .test('solo-un-decimal', 'Debe tener solo un dígito decimal', (value) => decimalVerification(value))

export const ToOneDecimal = (val) => {
    const newVal = parseFloat(val.toFixed(1))
    return newVal
}

export function JoinStrings(lista, caracter) {
    const filterString = lista.filter(cadena => cadena !== null && cadena !== undefined && cadena !== '')
    return filterString.join(caracter)
}