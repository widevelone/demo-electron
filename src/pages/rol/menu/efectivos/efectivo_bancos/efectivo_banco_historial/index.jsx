import React, { useState } from 'react'
import CardInfo from './CardInfo'
import { ListEfectivoBancoHistorialTable } from './ListEfectivoBancoHistorialTable';

export const EfectivoBancoHistorial = ({ mainReloadTable, setMainReloadTable }) => {
    const [reload, setReload] = useState(false);
    const [data, setData] = useState(null);
    return (
        <>
            <div className='col-span-1 dark:bg-[#4a5c68] bg-red-100 p-1 rounded-md'>
                <CardInfo
                    reload={reload}
                    data={data}
                    setData={setData}
                />
                <ListEfectivoBancoHistorialTable
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
