import React from 'react'
import { HistorialDeSesiones } from './historial_de_sesiones'
import { Users } from './users'
import { HistorialDeCambios } from './historial_de_cambios'
import { Roles } from './roles'
import { Productos } from './productos'
import { Almacenes } from './almacenes'
import { useParams } from 'react-router-dom'
import { Estados } from './estados'
import { CuentaBancaria } from './cuenta_bancarias'

import { Departamentos } from './departamentos'
import { EfectivoGeneral } from './efectivos/efectivo_general'
import { EfectivoBanco } from './efectivos/efectivo_banco'

export const Menu = () => {
    const params = useParams()
    return (
        <>
            {
                params.menuname === 'usuarios' &&
                <Users />
            }
            {
                params.menuname === 'roles' &&
                <Roles />
            }
            {
                params.menuname === 'departamentos' &&
                <Departamentos />
            }
            {
                params.menuname === 'estados' &&
                <Estados />
            }
            {
                params.menuname === 'cuentas-bancarias' &&
                <CuentaBancaria />
            }
            {
                params.menuname === 'productos' &&
                <Productos />
            }
            {
                params.menuname === 'almacenes' &&
                <Almacenes />
            }
            {
                params.menuname === 'efectivo-general' &&
                <EfectivoGeneral />
            }
            {
                params.menuname === 'efectivo-banco' &&
                <EfectivoBanco />
            }
            {
                params.menuname === 'historial-de-sesiones' &&
                <HistorialDeSesiones />
            }
            {
                params.menuname === 'historial-de-cambios' &&
                <HistorialDeCambios />
            }
        </>
    )
}
