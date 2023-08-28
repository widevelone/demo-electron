import React from 'react'
import { ListAlmacenTable } from './ListAlmacenTable';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AlmacenProductos } from './almacen_productos';
import { ErrorPage } from '../../../error/errorPage';

export const Almacenes = () => {
    return (
        // <div className='grid xl:grid-cols-1 gap-4 divide-y-2 divide-gray-600'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-y-4'>
            <div className='col-span-2'>
            <ListAlmacenTable />
            </div>
            <Routes>
                    <Route index element={
                        null
                    } />
                    <Route
                        path={`/productos/:almacen_id`}
                        element={<AlmacenProductos />}
                    />
                    <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}