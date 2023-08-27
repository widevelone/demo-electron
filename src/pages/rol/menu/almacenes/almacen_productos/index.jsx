import React from 'react'
import { useParams } from 'react-router-dom'

export const AlmacenProductos = () => {
    const params = useParams()
    return (
        <div className='text-white'>{params.almacen_producto_id}</div>
    )
}
