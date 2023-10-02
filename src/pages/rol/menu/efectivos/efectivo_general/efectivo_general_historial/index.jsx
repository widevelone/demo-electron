import React, { useState } from 'react'
import { ListEfectivoGeneralHistorialTable } from './ListEfectivoGeneralHistorialTable'
import CardInfo from './CardInfo'

export const EfectivoGeneralHistorial = ({ mainReloadTable, setMainReloadTable }) => {
    const [reload, setReload] = useState(false);
    const [data, setData] = useState(null);
    return (
        <>
            <div className='col-span-1 dark:bg-[#4a5c68] bg-[#4a5c6840] p-1 rounded-md'>
                <CardInfo
                    reload={reload}
                    data={data}
                    setData={setData}
                />
                <ListEfectivoGeneralHistorialTable
                    reload={reload}
                    setReload={setReload}
                    dataCard={data}
                    mainReloadTable={mainReloadTable}
                    setMainReloadTable={setMainReloadTable}
                />
            </div>
            {/* <div className='col-span-2 '>
            <AlmacenHistorials /> */}
            {/* <Routes>
                    <Route index element={
                        null
                    } />
                    <Route
                        path={`/historial/:almacen_producto_estado_id`}
                        element={<AlmacenHistorials />}
                    />
                    <Route path='*' element={<ErrorPage />} />
                </Routes> */}
            {/* </div> */}
        </>
    )
}
