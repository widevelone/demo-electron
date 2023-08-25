import React from 'react'
import { ListChangeHistorialTable } from './ListChangeHistorialTable'
import useMenuHandling from '../../../../hooks/useMenuHandling';

export const HistorialDeCambios = () => {
    const menuNameCurrent = 'historial-de-cambios';

    useMenuHandling(menuNameCurrent);
    return (
        <div className='grid xl:grid-cols-1 gap-2'>
            <ListChangeHistorialTable />
        </div>
    )
}