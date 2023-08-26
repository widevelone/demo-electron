import React from 'react'
import useMenuHandling from '../../../../hooks/useMenuHandling';
import { ListAlmacenTable } from './ListAlmacenTable';

export const Almacenes = () => {
    const menuNameCurrent = 'almacenes';
    useMenuHandling(menuNameCurrent);
    return (
        <div className='grid xl:grid-cols-2 gap-2'>
            <ListAlmacenTable />
        </div>
    )
}