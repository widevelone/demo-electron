import React from 'react'
import { ListAlmacenTable } from './ListAlmacenTable';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AlmacenProductos } from './almacen_productos';
import { ErrorPage } from '../../../error/errorPage';

export const Almacenes = () => {
    return (
        <div className='grid xl:grid-cols-2 gap-2'>
            <ListAlmacenTable />
            <Routes>
                    <Route index element={
                        <div className='text-white'>Rol seleccionado</div>
                    } />
                    <Route
                        path={`/productos/:almacen_producto_id`}
                        element={<AlmacenProductos />}
                    />
                    <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}