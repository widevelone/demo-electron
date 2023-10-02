import React from 'react'
import { ListCuentaBancariaTable } from './ListCuentaBancariaTable'

export const CuentaBancaria = () => {
    return (
        <div className='grid xl:grid-cols-2 gap-2'>
            <ListCuentaBancariaTable />
        </div>
    )
}