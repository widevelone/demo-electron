import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestDefaulAuth } from '../../../../../../http/httpRequest';
import { MainTargetInfo } from '../../../../../../components/card/MainTargetInfo';

const CardInfo = ({ reload }) => {
    const params = useParams()
    const dipatch = useDispatch()
    const [data, setData] = useState(null);
    const getData = async () => {
        await requestDefaulAuth(
            'get',
            `/almacen_producto_estado/${params.almacen_producto_estado_id}`,
            null,
            setData,
            dipatch
        )
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.almacen_producto_estado_id, reload]);
    return (
        <MainTargetInfo
            title={data?.estado_nombre}
            subtitle={data?.producto_nombre}
            description={data?.estado_descripcion}
            logo='fa-database'
        >
            <h5 className="font-bold text-gray-800 dark:text-gray-100">Total: <span className='text-red-400'>{data?.total || 0}</span>
            </h5>
        </MainTargetInfo>
    )
}

export default CardInfo