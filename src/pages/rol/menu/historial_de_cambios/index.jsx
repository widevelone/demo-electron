import React from 'react'
import { ListChangeHistorialTable } from './ListChangeHistorialTable'

export const HistorialDeCambios = () => {
    return (
        <div className='grid xl:grid-cols-1 gap-2'>
            <ListChangeHistorialTable />
        </div>
    )
}