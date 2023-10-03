import React, { useState } from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { ErrorPage } from '../../../../error/errorPage';
import { ListEfectivoProductoTable } from './ListEfectivoProductoTable';
import { EfectivoProductoHistorial } from './efectivo_producto_historial';
import { EfectivoProductoCierresHistorial } from './efectivo_producto_cierres';

export const EfectivoProducto = () => {
    const [mainReloadTable, setMainReloadTable] = useState(false);
    // const [data, setData] = useState(null);
    return (
        // <div className='grid xl:grid-cols-1 gap-2'>
        //     <ListEfectivoGeneralTable />
        // </div>
        <div className='grid grid-cols-1 gap-2'>
            <div className='col-span-1 xl:col-span-1'>
                <ListEfectivoProductoTable
                    mainReloadTable={mainReloadTable}
                />
            </div>
            <Routes>
                <Route index element={
                    null
                } />
                <Route
                    path={`/movimientos/:efectivo_id/*`}
                    element={<EfectivoProductoHistorial
                        mainReloadTable={mainReloadTable}
                        setMainReloadTable={setMainReloadTable}
                    />}
                />
                <Route
                    path={`/cierres/:efectivo_id/*`}
                    element={<EfectivoProductoCierresHistorial
                        mainReloadTable={mainReloadTable}
                        setMainReloadTable={setMainReloadTable}
                    />}
                />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}