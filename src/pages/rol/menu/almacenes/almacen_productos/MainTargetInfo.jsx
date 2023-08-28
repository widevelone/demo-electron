import React, { useEffect, useState } from 'react'
import { requestDefaulAuth } from '../../../../../http/httpRequest';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const MainTargetInfo = () => {
    const params = useParams()
    const dipatch = useDispatch()
    const [data, setData] = useState(null);
    const getData = async () => {
        await requestDefaulAuth(
            'get',
            `/almacen/${params.almacen_id}`,
            null,
            setData,
            dipatch
        )
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.almacen_id]);
    return (
        <div href="#" className="flex flex-row bg-white border border-gray-200 rounded-md shadow dark:border-gray-700 dark:bg-gray-800">
            {/* <img className="object-cover w-full rounded-t-lg h-11 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" /> */}
            <div className="flex p-4 items-center dark:text-gray-200 text-4xl">
                <i className='fa-solid fa-warehouse'></i>
            </div>
            <div className="flex flex-col md:justify-between p-4">
                <h5 className="text-xl font-bold text-gray-800 dark:text-gray-100">{data?.nombre}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">Encargado: {`${data?.encargado_nombres || ''} ${data?.encargado_apellido_paterno || ''}`}</p>
            </div>
        </div>
    )
}

export default MainTargetInfo