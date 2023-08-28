import React from 'react'
import { ListEstadoTable } from './ListEstadoTable'

export const Estados = () => {
    return (
        <div className='grid xl:grid-cols-2 gap-2'>
            <ListEstadoTable />
        </div>
    )
}