import React, { useState } from 'react'
import { ListEfectivoGeneralTable } from './ListEfectivoGeneralTable';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { EfectivoGeneralHistorial } from './efectivo_general_historial';
import { ErrorPage } from '../../../../error/errorPage';
import { EfectivoGeneralCierresHistorial } from './efectivo_general_cierres';

export const EfectivoGeneral = () => {
    const [mainReloadTable, setMainReloadTable] = useState(false);
    // const [data, setData] = useState(null);
    return (
        // <div className='grid xl:grid-cols-1 gap-2'>
        //     <ListEfectivoGeneralTable />
        // </div>
        <div className='grid grid-cols-1 gap-2'>
            <div className='col-span-1 xl:col-span-1'>
                <ListEfectivoGeneralTable
                    mainReloadTable={mainReloadTable}
                />
            </div>
            <Routes>
                <Route index element={
                    null
                } />
                <Route
                    path={`/movimientos/:efectivo_id/*`}
                    element={<EfectivoGeneralHistorial
                        mainReloadTable={mainReloadTable}
                        setMainReloadTable={setMainReloadTable}
                    />}
                />
                <Route
                    path={`/cierres/:efectivo_id/*`}
                    element={<EfectivoGeneralCierresHistorial
                        mainReloadTable={mainReloadTable}
                        setMainReloadTable={setMainReloadTable}
                    />}
                />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}