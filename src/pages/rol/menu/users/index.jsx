import React from 'react'
import { ListUserTable } from './ListUserTable'
import useMenuHandling from '../../../../hooks/useMenuHandling';

export const Users = () => {
    const menuNameCurrent = 'usuarios';

    useMenuHandling(menuNameCurrent);
    return (
        <div className='grid xl:grid-cols-1 gap-2'>
            <ListUserTable />
        </div>
    )
}