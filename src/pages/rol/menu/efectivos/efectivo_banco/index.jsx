import React, { useState } from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { ErrorPage } from '../../../../error/errorPage';
import { ListEfectivoBancoTable } from './ListEfectivoBancoTable';
import { EfectivoBancoHistorial } from './efectivo_banco_historial';

export const EfectivoBanco = () => {
    const [mainReloadTable, setMainReloadTable] = useState(false);
    // const [data, setData] = useState(null);
    return (
        // <div className='grid xl:grid-cols-1 gap-2'>
        //     <ListEfectivoGeneralTable />
        // </div>
        <div className='grid grid-cols-1 gap-2'>
            <div className='col-span-1 xl:col-span-1'>
                <ListEfectivoBancoTable
                    mainReloadTable={mainReloadTable}
                />
            </div>
            <Routes>
                <Route index element={
                    null
                } />
                <Route
                    path={`/ingresos/:efectivo_id/*`}
                    element={<EfectivoBancoHistorial
                        mainReloadTable={mainReloadTable}
                        setMainReloadTable={setMainReloadTable}
                    />}
                />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}