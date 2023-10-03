import React, { useState } from 'react'
import { ListCuadernoTable } from './ListCuadernoTable'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ErrorPage } from '../../../error/errorPage'
import { CuadernoHistorial } from './cuaderno_historial'

export const Cuaderno = () => {
    const [mainReloadTable, setMainReloadTable] = useState(false)
    return (
        <div className='grid grid-cols-1 gap-2'>
            <div className='col-span-1 xl:col-span-1'>
                <ListCuadernoTable
                    mainReloadTable={mainReloadTable}
                />
            </div>
            <Routes>
                <Route index element={
                    null
                } />
                <Route
                    path={`/historial/:cuaderno_id/*`}
                    element={<CuadernoHistorial
                        mainReloadTable={mainReloadTable}
                        setMainReloadTable={setMainReloadTable}
                    />}
                />
                {/* <Route
                    path={`/cierres/:efectivo_id/*`}
                    element={<EfectivoBancoCierresHistorial
                        mainReloadTable={mainReloadTable}
                        setMainReloadTable={setMainReloadTable}
                    />}
                /> */}
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}