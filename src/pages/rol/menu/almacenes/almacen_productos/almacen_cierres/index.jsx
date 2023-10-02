import React, { useState } from 'react'
// import MainTargetInfo from './MainTargetInfo'
import { ListAlmacenCierreTable } from './ListAlmacenCierreTable'
import CardInfo from './CardInfo'

export const AlmacenCierresHistorial = () => {
    const [reload, setReload] = useState(false);
    return (
        <div className='dark:bg-[#5e5a3a] bg-yellow-100 p-1 rounded-md'>
            <CardInfo
                reload={reload}
                // setReload={setReload}
            />
            <ListAlmacenCierreTable
                reload={reload}
                setReload={setReload}
            />
        </div>
    )
}
