import React from 'react'
import { ListProductoTable } from './ListProductoTable';

export const Productos = () => {
    return (
        <div className='grid xl:grid-cols-2 gap-2'>
            <ListProductoTable />
        </div>
    )
}