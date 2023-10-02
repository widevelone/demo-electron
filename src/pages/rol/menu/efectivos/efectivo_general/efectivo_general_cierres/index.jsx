import React, { useState } from 'react'
// import MainTargetInfo from './MainTargetInfo'
import CardInfo from './CardInfo'
import { ListEfectivoGeneralCierreTable } from './ListEfectivoGeneralCierreTable';

export const EfectivoGeneralCierresHistorial = ({ mainReloadTable, setMainReloadTable }) => {
    const [reload, setReload] = useState(false);
    const [data, setData] = useState(null);
    return (
        <div className='dark:bg-[#5e5a3a] bg-yellow-100 p-1 rounded-md'>
            <CardInfo
                reload={reload}
                data={data}
                setData={setData}
            />
            <ListEfectivoGeneralCierreTable
                reload={reload}
                setReload={setReload}
                dataCard={data}
                mainReloadTable={mainReloadTable}
                setMainReloadTable={setMainReloadTable}
            />
        </div>
    )
}