import React from 'react'
import { ListSessionHistorialTable } from './ListSessionHistorialTable'

import useMenuHandling from '../../../../hooks/useMenuHandling';

export const HistorialDeSesiones = () => {
    const menuNameCurrent = 'historial-de-sesiones';

    useMenuHandling(menuNameCurrent);
    return (
        <div className='grid xl:grid-cols-2 gap-2'>
            <ListSessionHistorialTable />
        </div>
    )
}
