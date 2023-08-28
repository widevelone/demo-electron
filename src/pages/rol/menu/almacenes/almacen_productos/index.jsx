import React from 'react'
import { ListAlmacenProductoTable } from './ListAlmacenProductoTable'
import MainTargetInfo from './MainTargetInfo'

export const AlmacenProductos = () => {
    // const params = useParams()
    return (
        <div className='grid xl:grid-cols-1 gap-2 dark:bg-[#4a5c68] bg-red-200 p-1 rounded-md'>
            {/* <div className='text-white'>{params.almacen_id}</div> */}
            <MainTargetInfo />
            <ListAlmacenProductoTable />

            {/* <Routes>
                <Route index element={
                    <ListAlmacenProductoTable />
                } /> */}
            {/* <Route
                    path={`/`}
                    element={<ListAlmacenProductoTable />}
                /> */}
            {/* <Route path='*' element={<ErrorPage />} />
            </Routes> */}
        </div>
    )
}
