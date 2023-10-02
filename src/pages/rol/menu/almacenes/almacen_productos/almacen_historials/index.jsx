import React, { useState } from 'react'
// import MainTargetInfo from './MainTargetInfo'
import { ListAlmacenHistorialTable } from './ListAlmacenHistorialTable'
import CardInfo from './CardInfo'

export const AlmacenHistorials = () => {
    const [reload, setReload] = useState(false);
    return (
        <div className='dark:bg-[#5e5a3a] bg-[#4a5c6830] p-1 rounded-md'>
            <CardInfo
                reload={reload}
                // setReload={setReload}
            />
            <ListAlmacenHistorialTable
                reload={reload}
                setReload={setReload}
            />
        </div>
    )
}
