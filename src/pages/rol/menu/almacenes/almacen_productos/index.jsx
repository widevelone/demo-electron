import React from 'react'
import { ListAlmacenProductoTable } from './ListAlmacenProductoTable'
import MainTargetInfo from './MainTargetInfo'
// import { useParams } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ErrorPage } from '../../../../error/errorPage'
import { AlmacenHistorials } from './almacen_historials'
import { AlmacenCierresHistorial } from './almacen_cierres'

export const AlmacenProductos = () => {
    return (
        <>
            <div className='col-span-2 xl:col-span-1 dark:bg-[#4a5c68] bg-[#4a5c6830] p-1 rounded-md'>
                <MainTargetInfo />
                <ListAlmacenProductoTable />
            </div>
            <div className='col-span-2 '>
                <Routes>
                    <Route index element={
                        null
                    } />
                    <Route
                        path={`/historial/:almacen_producto_estado_id`}
                        element={<AlmacenHistorials />}
                    />
                    <Route
                        path={`/cierres/:almacen_producto_estado_id`}
                        element={<AlmacenCierresHistorial />}
                    />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </div>
        </>
    )
}
