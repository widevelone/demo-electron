import React from 'react'
import { ListDepartamentoTable } from './ListDepartamentoTable'

export const Departamentos = () => {
    return (
        <div className='grid xl:grid-cols-2 gap-2'>
            <ListDepartamentoTable />
        </div>
    )
}