import React from 'react'
import useMenuHandling from '../../../../hooks/useMenuHandling';
import { ListProductoTable } from './ListProductoTable';

export const Productos = () => {
    const menuNameCurrent = 'roles';

    useMenuHandling(menuNameCurrent);
    return (
        <div className='grid xl:grid-cols-2 gap-2'>
            <ListProductoTable />
        </div>
    )
}