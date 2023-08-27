import React from 'react'
import { ListSessionHistorialTable } from './ListSessionHistorialTable'

export const HistorialDeSesiones = () => {
    return (
        <div className='grid xl:grid-cols-2 gap-2'>
            <ListSessionHistorialTable />
        </div>
    )
}
