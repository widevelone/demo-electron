import React, { useState } from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { ErrorPage } from '../../../../error/errorPage';
import { ListEfectivoBancoTable } from './ListEfectivoBancoTable';
import { EfectivoBancoHistorial } from './efectivo_banco_historial';
import { EfectivoBancoCierresHistorial } from './efectivo_banco_cierres';

export const EfectivoBanco = () => {
    const [mainReloadTable, setMainReloadTable] = useState(false);
    return (
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
                    path={`/movimientos/:efectivo_id/*`}
                    element={<EfectivoBancoHistorial
                        mainReloadTable={mainReloadTable}
                        setMainReloadTable={setMainReloadTable}
                    />}
                />
                <Route
                    path={`/cierres/:efectivo_id/*`}
                    element={<EfectivoBancoCierresHistorial
                        mainReloadTable={mainReloadTable}
                        setMainReloadTable={setMainReloadTable}
                    />}
                />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}