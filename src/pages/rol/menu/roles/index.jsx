import React from 'react'
import { ListRolTable } from './ListRolTable'
import useMenuHandling from '../../../../hooks/useMenuHandling';

export const Roles = () => {
    const menuNameCurrent = 'roles';

    useMenuHandling(menuNameCurrent);
    return (
        <div className='grid xl:grid-cols-2 gap-2'>
            <ListRolTable />
        </div>
    )
}